import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoveMatchApiService } from './services/love-match-api.service';
import { LoveMatchComponent } from './components/love-match/love-match.component';
import { LoveMatchCardComponent } from './components/love-match/love-match-card/love-match-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalLikeComponent } from './modals/modal-like/modal-like.component';
import { NavLoveComponent } from './templates/nav-love/nav-love.component';
import { FooterLoveComponent } from './templates/footer-love/footer-love.component';
import { LoadingLoveComponent } from './components/love-match/loading-love/loading-love.component';
import { ModalProfileComponent } from './modals/modal-profile/modal-profile.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    InMemoryWebApiModule.forRoot(LoveMatchApiService, { delay: 5000 })
  ],
  
  declarations: [
    AppComponent,
    LoveMatchComponent,
    LoveMatchCardComponent,
    ModalLikeComponent,
    NavLoveComponent,
    FooterLoveComponent,
    LoadingLoveComponent,
    ModalProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
