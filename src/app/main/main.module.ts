import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarSearchComponent } from './components/toolbar/components/toolbar-search/toolbar-search.component';
import { ToolbarTitleComponent } from './components/toolbar/components/toolbar-title/toolbar-title.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HomeComponent } from '../components/home/home.component';
import { RouteUrlService } from '../core/route-url.service';
import { SpinnerService } from '../core/spinner.service';
import { CardAppComponent } from '../components/card-app/card-app.component';
import { AppService } from '../core/app.service';

@NgModule({
  declarations: [
    // BASE COMPONENTS
    MainComponent,
    NavbarComponent,
    ToolbarComponent,    
    ToolbarSearchComponent,
    ToolbarTitleComponent,
    SpinnerComponent, 
    
     // EXTRA COMPONENTS
     HomeComponent,
      CardAppComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    SharedModule,
  ],
  exports:[
    MainComponent,
  ],
  providers:[    
    RouteUrlService,
    SpinnerService, 
    AppService
  ]
})

export class MainModule { }
