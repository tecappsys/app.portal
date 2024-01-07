import { Component, OnInit } from '@angular/core';
import { AppService } from '@src/app/core/app.service';
import { SpinnerService } from '@src/app/core/spinner.service';
import { App } from '@src/app/shared/interface/app.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public apps:App[];

  public constructor(private spinnerService:SpinnerService, private appService:AppService){
    this.spinnerService.showSpinner();
  }

  public ngOnInit() {
    this.apps = this.appService.getApps();
    this.spinnerService.hideSpinner()
  }  

  public onAppSelected(urlPath:string){
    setTimeout(() => {      
      window.location.href = urlPath
    }, 100);
  }


}
