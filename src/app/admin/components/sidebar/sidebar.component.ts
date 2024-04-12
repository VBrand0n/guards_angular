import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(private route:Router){}

  closeSession(){
    localStorage.clear()
    this.route.navigate(['auth', 'login'])
  }
}
