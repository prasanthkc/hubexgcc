import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videobar',
  templateUrl: './videobar.component.html',
  styleUrls: ['./videobar.component.scss']
})
export class VideobarComponent implements OnInit {
  @Input() bgpath: String;
  @Input() videopath: String;

  constructor() { }

  ngOnInit() {
  }

}
