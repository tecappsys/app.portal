import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { LOCAL_STORAGE_KEY } from '@shared/enums/local-storage-key.enum';
import { THEME_UI } from '@shared/enums/theme-ui.enum';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public isOpenMenu:boolean = false;
  public isNightMode:boolean = false;

  public constructor(@Inject(DOCUMENT) private document: Document){
    const localStorageTheme = window.localStorage.getItem(LOCAL_STORAGE_KEY.THEME_UI);
    if(localStorageTheme){
      this.isNightMode = (localStorageTheme == THEME_UI.DARK)
      this.changeTheme();
    }
  }

  public onChangeThemeLight(){
    this.isNightMode = false;
    this.changeTheme();
  }
  public onChangeThemeNight(){
    this.isNightMode = true;
    this.changeTheme();
  }

  public changeTheme(){
    let theme = this.isNightMode ? THEME_UI.DARK : THEME_UI.LIGHT;
    window.localStorage.setItem(LOCAL_STORAGE_KEY.THEME_UI,theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = THEME_UI.CSS.replace(THEME_UI.THEME_UI,theme);
  }

  public navigateToReactApps(){
    setTimeout(() => {
      window.location.href = 'http://app.react.tecappsys.com'
    }, 100);
  }

  public navigateToAngularApps(){
    setTimeout(() => {
      window.location.href = 'http://app.angular.tecappsys.com'
    }, 100);
  }

}
