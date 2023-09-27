import { Component } from '@angular/core';
import { Rol } from '../models/rol.model';
import { Router } from '@angular/router';
import { RolService } from '../services/rol.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent {
  roles: Rol[] = [];

  constructor(private router: Router, private rolService: RolService) {

  }
  ngOnInit(): void {
    this.rolService.getRols().subscribe(rols => {
      this.roles = rols;
    })
  }

  crearRol() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Añade ceros a la izquierda si es necesario
    const day = date.getDate().toString().padStart(2, '0'); // Añade ceros a la izquierda si es necesario
    const formattedDate = `${year}-${month}-${day}`; // Formato "yyyy-mm-dd"

    const newRol: Rol =
    {
      nombre: `Rol${this.roles.length}`,
      abreviado: `R${this.roles.length}`
    }
    this.roles.push(newRol);
    this.rolService.udateRols(this.roles);
  }

  eliminarRol(index:any) {
    this.roles.splice(index, 1);
    this.rolService.udateRols(this.roles);
  }

  goEdit(id: any) {
    this.router.navigateByUrl(`/home/roles/${id}`);
  }
}
