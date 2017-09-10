import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../../app/utils.lib';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Dashboard } from '../dashboard/index';

@Component({
  selector: 'dashboard',
  templateUrl: 'index.html',
  providers: [ApiService]
})
export class Login {

  constructor(public navCtrl: NavController, private httpService: ApiService) {
    let uri = 'https://jsonplaceholder.typicode.com/posts';
    // this.httpService = new HttpService(http, 'https://jsonplaceholder.typicode.com/posts');
    // this.httpService.baseUri = uri;
    // this.httpService.get(uri, {a:123}).then(js => console.log(js));
  }

  username:string;
  password:string;

  login() {
    this.navCtrl.setRoot(Dashboard);
  }
}
