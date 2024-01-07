import { Component, EventEmitter, Input, Output } from '@angular/core';
import { App } from '@src/app/shared/interface/app.interface';

@Component({
  selector: 'app-card-app',
  templateUrl: './card-app.component.html',
  styleUrls: ['./card-app.component.scss']
})
export class CardAppComponent {
  @Output() public appSelected: EventEmitter<string> = new EventEmitter();
  @Input() app:App;
  
  public onAppSelected(){
    this.appSelected.emit( this.app.href );
  }

}
