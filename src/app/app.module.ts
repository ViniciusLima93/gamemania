import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPositionExample } from './tabmenu/tabmenu.component';

import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { CardOverviewExample } from './card/card.component';
import { CardMediaSizeExample } from './cardcoment/cardcoment.component';
import { LoginComponent } from './home/login/login.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';


const routes : Routes = [
  {
    
      path: 'main', component: MainComponent
    
  }
]


@NgModule({
  declarations: [
    AppComponent,
    MenuPositionExample,
    CardOverviewExample,
    CardMediaSizeExample,
    LoginComponent,
    HeaderComponent,
    CarouselComponent,
    RodapeComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
