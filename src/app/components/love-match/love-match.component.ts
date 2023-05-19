import { Component, OnInit } from '@angular/core';
import { LoveProfileModel } from 'src/app/model/love-profile.model';
import { LoadingLoveService } from 'src/app/services/loading/loading-love.service';
import { LoveMatchService } from 'src/app/services/love-match.service';

@Component({
  selector: 'app-match-love',
  templateUrl: './love-match.component.html',
  styleUrls: ['./love-match.component.scss']
})
export class LoveMatchComponent implements OnInit{

  matchCards: Array<LoveProfileModel>;

  constructor(
    private loveMatchService: LoveMatchService,
    public loadingLoveService: LoadingLoveService
  ){}
  ngOnInit(): void {
    this.getLoveMatches();
  }

  getLoveMatches(){
    this.loadingLoveService.isLoading = true;
    this.loveMatchService.getLoveMatch().subscribe({
      next: (res) => {
        this.matchCards = res;
        console.log('Perfil listado com sucesso!', res);
      },
      error: (err) => {
        console.error('Erro ao listar os dados do perfil: ', err);
      },
      complete: () => {
        console.log('Listagem de dados do perfil concluída!');
        this.loadingLoveService.isLoading = false;
        
      }
    });
  }

}
