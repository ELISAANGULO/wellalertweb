import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Rol } from '../models/rol.model';
import { RolService } from '../services/rol.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.css']
})
export class RolesEditComponent implements OnInit {
  rolForm?: FormGroup;
  rol: Rol = {} as Rol;

  constructor(
    private fb: FormBuilder,
    private rolService: RolService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.rolForm = this.fb.group({
      rolName: ['', Validators.required],
      abreviado: ['', Validators.required],
    });
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if (id) {
      this.rolService.getRolById(parseInt(id)).subscribe(rol => {
        if (rol) {
          this.rol = rol;
          this.rolForm?.patchValue({
            rolName: rol.nombre,
            abreviado: rol.abreviado,
          });
        }
      });
    }
  }

  onSubmit() {
    if (this.rolForm?.valid) {
      const formData = this.rolForm.value;
      this.rol.nombre = this.rolForm.value.rolName;
      this.rol.abreviado = this.rolForm.value.abreviado;
      console.log(formData);
      this.rolService.editRol(this.rol);
      this.goRols();
    }
  }

  goRols() {
    this.router.navigateByUrl('/home/roles');
  }
}
