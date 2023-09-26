import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  mostrar_navbar:string="false";
  constructor(private authService: AuthServiceService, private router: Router) {}
  ngOnInit(): void {
    this.mostrar_navbar=sessionStorage.getItem("loggedIn") || "false";
    if(this.mostrar_navbar == 'false') {
      this.router.navigate(['/ingreso'])
    }
    this.authService.setSesion(this.mostrar_navbar == 'true');
  }
}
