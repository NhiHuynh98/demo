import { Injectable } from '@angular/core';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  list: User[] = [];

  constructor() { }

  add(user: User) {
    this.list.push(user)
    console.log(this.list)
  }

  get() {
    return this.list
  }
}
