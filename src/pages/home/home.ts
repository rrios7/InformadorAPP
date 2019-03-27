import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  casas = [];
  infoPage = InfoPage;

  constructor(public navCtrl: NavController, 
    public http: HttpClient) {

      this.http.get('/v1/klfst?&category=1040&region=16&lang=es&lim=15')
      .subscribe( data => {
        
        this.casas = data['list_ads'];
        //console.log(JSON.stringify(this.casas));
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

  info(casa) {
    this.navCtrl.push(this.infoPage, {casa: casa});
  }
}