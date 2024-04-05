import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideBarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Output() onToggleSideBar: EventEmitter<SideBarToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideBar.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});
  }
  
  closeSidebar(): void {
    this.collapsed = false;
    this.onToggleSideBar.emit({collapsed:this.collapsed, screenWidth: this.screenWidth});
  }
}
