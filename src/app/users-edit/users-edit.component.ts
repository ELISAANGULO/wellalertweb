import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  userForm?: FormGroup;
  user:User = {};

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      name: ['', Validators.required],
      selectRol: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fecha: [''],
    });
    const id = this.activeRoute.snapshot.paramMap.get('id');
    if(id) {
      this.userService.getUserById(parseInt(id)).subscribe(user => {
        if(user) {
          this.user = user;
          this.userForm?.patchValue({
            userName: user.usuario,
            name: user.nombre,
            selectRol: user.rol,
            email: user.email,
            fecha: user.activacion,
          });
        }
      });
    }
  }

  onSubmit() {
    if (this.userForm?.valid) {
      const formData = this.userForm.value;
      this.user.usuario = this.userForm.value.userName;
      this.user.nombre = this.userForm.value.name;
      this.user.rol = this.userForm.value.selectRol;
      this.user.email = this.userForm.value.email;
      this.user.activacion = this.userForm.value.fecha;
      console.log(formData);
      this.userService.editUser(this.user);
      this.goUsers();
    }
  }

  goUsers() {
    this.router.navigateByUrl('/home/usuarios');
  }
}