import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SitedataService {

  constructor(private httpService: HttpClient) { }

  getServices(){
    return this.httpService.get('../../assets/data/services.json');
  }
}
