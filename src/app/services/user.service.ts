import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuarios: User[] = [
    {
      id: 1,
      usuario: 'user1',
      nombre: 'Usuario prueba1',
      rol: 'R1',
      email: 'user1@pretroleo.com',
      activacion: '2022-09-18',
    },
    {
      id: 2,
      usuario: 'user2',
      nombre: 'Usuario prueba3',
      rol: 'R2',
      email: 'user2@pretroleo.com',
      activacion: '2023-06-12',
    },
    {
      id: 3,
      usuario: 'user3',
      nombre: 'Usuario prueba3',
      rol: 'R3',
      email: 'user3@pretroleo.com',
      activacion: '2021-09-22',
    }
  ];

  private subjectUser: BehaviorSubject<User[]> = new BehaviorSubject(this.usuarios);
  obserbableSesion: Observable<User[]> = this.subjectUser.asObservable();

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.obserbableSesion;
  }

  getUserById(id: number): Observable<User> {
    return this.obserbableSesion.pipe(
      map((users: User[]) =>{
        return users.find((user: User) => user.id === id) as User;
      })
    );
  }

  editUser(user: User): Observable<User> {
    return this.obserbableSesion.pipe(
      map((users: User[]) =>{
        let userEdit = users.find((user: User) => user.id === user.id);
        if(userEdit) {
          userEdit = user;
        }
        this.udateUsers(users);
        return user;
      })
    );
  }

  udateUsers(usuarios: User[]): void {
    console.log(usuarios);
    this.subjectUser.next(usuarios);
  }

}
