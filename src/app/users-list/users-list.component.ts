import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  usuarios:User[] = [];

  constructor(private router: Router, private userService: UserService) {
    
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.usuarios = users;
    })
  }

  crearUsuario() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Añade ceros a la izquierda si es necesario
    const day = date.getDate().toString().padStart(2, '0'); // Añade ceros a la izquierda si es necesario
    const formattedDate = `${year}-${month}-${day}`; // Formato "yyyy-mm-dd"

    const newUsuario: User = 
    {
      id: this.usuarios.length+1,
      usuario: 'Nuevo',
      nombre: 'Nuevo',
      rol: `R1`,
      email: 'nuevo@pretroleo.com',
      activacion: formattedDate,
    }
    this.usuarios.push(newUsuario);
    this.userService.udateUsers(this.usuarios);
  }

  eliminarUsuario(index:number) {
    this.usuarios.splice(index, 1);
    this.userService.udateUsers(this.usuarios);
  }

  goEdit(id:  any) {
    this.router.navigateByUrl(`/home/usuarios/${id}`);
  }
}
