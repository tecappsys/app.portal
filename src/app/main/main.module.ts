import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { CardAppComponent } from '../components/card-app/card-app.component';
@NgModule({
  declarations: [
    // BASE COMPONENTS
    MainComponent,
     // EXTRA COMPONENTS
    HomeComponent,
    CardAppComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,    
    SharedModule,
  ],
  exports:[
    MainComponent,
  ],
  providers:[]
})

export class MainModule { }
