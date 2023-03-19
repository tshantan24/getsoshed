import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sosh-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  //Logos
  logoUrl!: string;
  logoTitle!: string;

  constructor(){
    this.logoTitle = 'Soshed';
    this.logoUrl = './assets/images/brand/soshed-main-dark.png'
  }

  ngOnInit(): void {
    
  }
}
