import { Component, Input, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 mostrar_navbar = false;

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.authService.getSession().subscribe((isSesion: boolean) => {
      this.mostrar_navbar = isSesion;
    });
  }

}
