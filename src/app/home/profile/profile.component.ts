import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { User } from '../../user'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  infoUser!: User;
  sub:any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(param => {
      this.infoUser = JSON.parse(param['user'])
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
