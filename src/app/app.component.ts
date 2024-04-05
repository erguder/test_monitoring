import { Component } from '@angular/core';

interface SideBarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PathoVis';

  isSideBarCollapsed = false;
  screenWidth = 0;

  onToggleSideBar(data: SideBarToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideBarCollapsed = data.collapsed;
  }
}
