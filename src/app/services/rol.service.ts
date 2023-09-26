import { Injectable } from '@angular/core';
import { Rol } from '../models/rol.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  roles: Rol[] = [
    {
      id: 1,
      nombre: 'Rol1',
      abreviado: 'R1'
    },
    {
      id: 2,
      nombre: 'Rol2',
      abreviado: 'R2'
    },
    {
      id: 3,
      nombre: 'Rol3',
      abreviado: 'R3'
    },
  ];

  private subjectRol: BehaviorSubject<Rol[]> = new BehaviorSubject(this.roles);
  obserbableSesion: Observable<Rol[]> = this.subjectRol.asObservable();
  constructor() { }

  getRols(): Observable<Rol[]> {
    return this.obserbableSesion;
  }

  getRolById(id: number): Observable<Rol> {
    return this.obserbableSesion.pipe(
      map((rols: Rol[]) =>{
        return rols.find((rol: Rol) => rol.id === id) as Rol;
      })
    );
  }

  editRol(rol: Rol): Observable<Rol> {
    return this.obserbableSesion.pipe(
      map((rols: Rol[]) =>{
        let rolEdit = rols.find((rol: Rol) => rol.id === rol.id);
        if(rolEdit) {
          rolEdit = rol;
        }
        this.udateRols(rols);
        return rol;
      })
    );
  }

  udateRols(usuarios: Rol[]): void {
    console.log(usuarios);
    this.subjectRol.next(usuarios);
  }
}
