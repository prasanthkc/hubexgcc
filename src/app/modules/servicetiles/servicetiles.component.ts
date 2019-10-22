import { Component, OnInit, Input } from '@angular/core';
import { SitedataService } from 'src/app/services/sitedata.service';

@Component({
  selector: 'app-servicetiles',
  templateUrl: './servicetiles.component.html',
  styleUrls: ['./servicetiles.component.scss']
})
export class ServicetilesComponent implements OnInit {
  services: Object;
  @Input() name: String;
  @Input() tilecount: Number;

  constructor(private siteData:SitedataService) {
    this.siteData.getServices()
      .subscribe(res => this.services = res);
   }

  ngOnInit() {
    console.log(this.tilecount)
  }

}
