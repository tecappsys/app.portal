import { Component} from '@angular/core';
import { THEME_UI } from '../shared/enums/theme-ui.enum';
import { ThemeService } from '../core/theme.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public constructor(public themeService: ThemeService){}

  public onToggleControlSwitch(darkMode:boolean){
    this.themeService.toggleTheme(darkMode ? THEME_UI.DARK : THEME_UI.LIGHT);
  }

}
