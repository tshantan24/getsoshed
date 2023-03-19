import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from 'src/app/data';

import { default as Routes } from 'src/assets/jsons/navbar.json'

@Component({
  selector: 'sosh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  //Logos
  logoUrl!: string;
  logoTitle!: string;

  routes: Route[] = [];

  constructor(private router: Router) {
    this.logoTitle = 'Soshed';
    this.logoUrl = './assets/images/brand/soshed-main-dark.png';
    this.routes = Routes.routes;
  }

  ngOnInit(): void {

  }

  onLogoClick() {
    this.router.navigate([''])
  }
}
