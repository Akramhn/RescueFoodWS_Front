import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/beneficiaire-list', title: 'List Beneficiaire', icon: 'people', class: '' },
  { path: '/redist-list', title: 'List Redistribution', icon: 'attach_money', class: '' },
  { path: '/nourriture-list', title: 'List Nourriture', icon: 'fastfood', class: '' },
  { path: '/don-list', title: 'List Don', icon: 'favorite', class: '' },
  { path: '/livreure-list', title: 'List Livreur', icon: 'local_shipping', class: '' },
  { path: '/livraison-list', title: 'List Livraison', icon: 'delivery_dining', class: '' },
  { path: '/collect-list', title: 'List Collect', icon: 'assignment', class: '' },
  { path: '/Recom-list', title: 'List Recommandation', icon: 'star', class: '' },
  { path: '/user-list', title: 'List User', icon: 'people', class: '' },

  



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
