import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UTN Proyecto';

  constructor(private router: Router) {}

  ngOnInit() {
    
  }

  isActive(route: string) {
    return this.router.url === route;
  }
}
