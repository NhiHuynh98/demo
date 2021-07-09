import { Injectable } from '@angular/core';

@Injectable(
  // { providedIn: 'root' }
)
export class CountService {
  count: number = 0
 
  constructor() { }

  countUp() {
    return this.count += 1
  }

  countDown() {
    return this.count -= 1
  }

  getCount() {
    return this.count
  }
}