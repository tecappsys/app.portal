import { Component} from '@angular/core';
import { LOCAL_STORAGE_KEY,THEME_UI,ThemeService } from '@tecappsys/library-angular';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public isDarkTheme:boolean;

  public constructor(public themeService: ThemeService){}
  
  public ngOnInit(){
    const currentTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_UI);
    this.isDarkTheme = (currentTheme === THEME_UI.DARK)
  }

  public onChangeIsDarkTheme(isDarkTheme:boolean){
    this.isDarkTheme = isDarkTheme;
    this.themeService.toggleTheme(isDarkTheme ? THEME_UI.DARK : THEME_UI.LIGHT);
  }

}
