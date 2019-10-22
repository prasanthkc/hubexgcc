import { Component, OnInit } from '@angular/core';
import { SitedataService } from 'src/app/services/sitedata.service';

@Component({
  selector: 'app-tileslider',
  templateUrl: './tileslider.component.html',
  styleUrls: ['./tileslider.component.scss']
})
export class TilesliderComponent implements OnInit {
  services: Object;

  constructor(private siteData:SitedataService) {
    this.siteData.getServices()
      .subscribe(res => this.services = res);
   }

  ngOnInit() {
  }

}
