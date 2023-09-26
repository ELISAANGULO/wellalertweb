import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';


@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(private router: Router, private authService: AuthServiceService) {}

  ngOnInit(): void {
    sessionStorage.setItem("loggedIn", "false");
    this.authService.setSesion(false);
  }

  ingresar() {
    // Redirigir al usuario a la página HomePage cuando hace clic en el botón "Ingresar"
    this.router.navigate(['/home']);
    sessionStorage.setItem("loggedIn", "true");
    this.authService.setSesion(true);
  }
}



