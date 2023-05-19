import { Component, Input, OnInit } from '@angular/core';
import { LoveProfileModel } from 'src/app/model/love-profile.model';
import { ModalLikeComponent } from '../../../modals/modal-like/modal-like.component';
import { MatDialog } from '@angular/material/dialog';
import { LoveMatchService } from 'src/app/services/love-match.service';
import { ModalProfileComponent } from 'src/app/modals/modal-profile/modal-profile.component';

@Component({
  selector: 'app-card-match-love',
  templateUrl: './love-match-card.component.html',
  styleUrls: ['./love-match-card.component.scss']
})
export class LoveMatchCardComponent implements OnInit{

  @Input() loveMatch: LoveProfileModel;
  buttonColor: string;
  emojisTop: number[] = [];
  emojisBottom: number[] = [];
  constructor(
    private dialog: MatDialog,
    private loveMatchService: LoveMatchService 
  ){}

  ngOnInit(): void {}

  onLike(){
    this.loveMatch.likes++; // Incrementa o número de likes
    //Altera a cor quando é maior ou igual a 5
    if(this.loveMatch.likes >= 5){
      this.buttonColor = '#0000ff';
    }
    //Quando for igual a 5 curtidas irá abrir o modal avisando sobre as curtidas
    if(this.loveMatch.likes === 5){
      this.openModalLike();
    }
    /* altera a cor quando for maior que 10 curtidas e logo em seguida 
      irá aparecer vários emojis e falando que deu match.
    */
    if(this.loveMatch.likes > 10) {
      this.buttonColor = '#008000';
      this.generateEmojis();
    }
    // Chame o serviço REST para salvar os likes
    this.updateLike();
  }

  updateLike(){
    this.loveMatchService.updateLikes(this.loveMatch).subscribe({
      next: (res) => {
        console.log('Like editado com sucesso!', res);
      },
      error: (err) => {
        console.error('Erro ao editar like: ', err);
      },
      complete: () => {
        console.log('Edição de like concluída!');
        console.log('listagem do card', this.loveMatch);
        
      }
    });
  }

  //Modais
  openModalLike() {

    const dialogRef = this.dialog.open(ModalLikeComponent,{
      height: '350px',
      width: '50%',
      panelClass: 'modal-likes',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado', result);
    });
  }

  openModalProfile() {

    const dialogRef = this.dialog.open(ModalProfileComponent,{
      width: '400px',
      height: '500px',
      disableClose: true,
      data: this.loveMatch
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('O modal foi fechado', result);
    });
  }
  
  //Fiz esse método para multiplicar os emojis
  generateEmojis() {
    this.emojisTop = Array.from({ length: 70 }).map((_, i) => i);
    this.emojisBottom = Array.from({ length: 70 }).map((_, i) => i);
    
    setTimeout(() => {
      this.clearEmojis();
    }, 8000);
  }

  //desaparece os emojis depois de 5 segundos
  clearEmojis(){
    this.emojisTop = [];
    this.emojisBottom = [];
  }
  onShare() {
    //abri o link do meu linkedin
    const url = 'https://www.linkedin.com/in/victorhugofnr/';
    window.open(url, '_blank');
  }
}
