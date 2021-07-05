import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private router: Router) {
    this.user = JSON.parse(localStorage.getItem('User') || '{}')
    if (Object.keys(this.user).length === 0) this.router.navigateByUrl('/login')
  }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    localStorage.removeItem('User')
    this.router.navigateByUrl('/login')
  }

}
