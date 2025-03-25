import { Component, OnInit } from '@angular/core';
import { App } from '@src/app/shared/interface/app.interface';
import { environment } from '@src/environments/environment';
import { SpinnerService } from '@tecappsys/library-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public apps:App[] =[
    {
      title:'REACT FRAMEWORK',
      subtitle:'Building web applications with React',
      imgPath:'assets/img/react_app.jpg',        
      imgLogoPath:'assets/img/react_logo_app.jpg',
      description:'Applications developed with Reactjs framework',
      href:environment.appReact
    },
    {
      title:'ANGULAR FRAMEWORK',
      subtitle:'Building web applications with Angular',
      imgPath:'assets/img/angular_app.jpg',        
      imgLogoPath:'assets/img/angular_logo_app.jpg',
      description:'Applications developed with AngularJs framework',
      href:environment.appAngular
    }
  ];

  public constructor( private spinnerService:SpinnerService ){
    this.spinnerService.showSpinner();
  }

  public ngOnInit() {
    this.spinnerService.hideSpinner()
  }  

  public onAppSelected(urlPath:string){
    setTimeout(() => {      
      window.location.href = urlPath
    }, 100);
  }


}
