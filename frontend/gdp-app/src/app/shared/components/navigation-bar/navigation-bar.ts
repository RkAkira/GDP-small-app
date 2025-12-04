import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';


@Component({
  selector: 'app-navigation-bar',
  imports: [Menubar, CommonModule],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.scss'
})
export class NavigationBar {
  items: MenuItem[] | undefined;

  constructor(private router: Router){}

  ngOnInit(){
    this.items = [
      {
        label: 'GDP',
        icon: 'pi pi-dollar',
        routerLink: '/gdp/list'
      }
    ]
  }

}
