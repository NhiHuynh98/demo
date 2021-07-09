import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../share.service'

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  data: number = 0
  constructor(private shareService: ShareService) { }

  ngOnInit(): void {
    this.data = this.shareService.getCount()
  }

}
