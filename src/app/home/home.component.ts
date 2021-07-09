import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountService } from '../service/count.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  name: string = '';
  count: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countService: CountService
  ) {
    this.user = JSON.parse(localStorage.getItem('User') || '{}')
    if (Object.keys(this.user).length === 0) this.router.navigateByUrl('/login')
  }

  ngOnInit(): void {
    this.count = this.countService.getCount()
   }

  handleSubmit(): void {
    localStorage.removeItem('User')
    this.router.navigateByUrl('/login')
  }

  hdClick(): void {
    this.router.navigate(["profile"], { queryParams: { user: JSON.stringify(this.user) } })
  }

  hdCountUp(): void {
    this.count = this.countService.countUp()
  }

  hdCountDown(): void {
    this.count = this.countService.countDown()
  }
}
