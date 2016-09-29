import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AccountPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account-page',
  templateUrl: 'account-page.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AccountPage Page');
  }

}