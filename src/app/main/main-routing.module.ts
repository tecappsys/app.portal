import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [{
  path: '',
  component:MainComponent,
  children:[
    {
      path:'',
      pathMatch:'full',      
      component:HomeComponent,
      data:{
        entity:'Portfolio',
        title:'Frameworks'
      }
    },
    
    { path: '**', pathMatch: 'full', redirectTo: '' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
