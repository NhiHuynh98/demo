import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { CountService } from './service/count.service'

@Injectable()
export class ShareService {
  constructor(private countService: CountService) {
  }

  getCount() {
    return this.countService.getCount()
  }

  countDown() {
    return this.countService.countDown()
  }

  countUp() {
    return this.countService.countUp()
  }
}
