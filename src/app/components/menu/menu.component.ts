import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  openMenu(){
      this.menuValue =! this.menuValue ;
      this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }
  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }
}
