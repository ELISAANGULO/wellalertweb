import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private subjectSesion: BehaviorSubject<boolean> = new BehaviorSubject(false);
  obserbableSesion: Observable<boolean> = this.subjectSesion.asObservable();

  constructor() { }

  setSesion(isSesion: boolean) {
    this.subjectSesion.next(isSesion);
  }

  getSession() {
    return this.obserbableSesion;
  }
}
