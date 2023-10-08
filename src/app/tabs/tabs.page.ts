import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  shouldHideTabBar: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentPath = event.url;
        // Verifique se o pathname termina com um número (assumindo que o número seja a única parte que termina com dígitos)
        this.shouldHideTabBar = /\d$/.test(currentPath);
      }
    });
  }
}