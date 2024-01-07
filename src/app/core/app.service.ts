import { Injectable } from "@angular/core";
import { environment } from "@src/environments/environment";
import { App } from "../shared/interface/app.interface";

@Injectable()
export class AppService{

    private apps:App[] =[
      {
        title:'React',
        subtitle:'Building web applications with React',
        imgPath:'assets/img/react_app.jpg',        
        imgLogoPath:'assets/img/react_logo_app.jpg',
        description:'Applications developed with Reactjs framework',
        href:'http://app.react.tecappsys.com'
      },
      {
        title:'Angular',
        subtitle:'Building web applications with Angular',
        imgPath:'assets/img/angular_app.jpg',        
        imgLogoPath:'assets/img/angular_logo_app.jpg',
        description:'Applications developed with AngularJs framework',
        href:'http://app.angular.tecappsys.com'
      }
    ]
   
      public getApps() {
        return this.apps;
      }
}