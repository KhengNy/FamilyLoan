import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams, Platform } from 'ionic-angular';

@Component({
  selector: 'customer',
  templateUrl: 'index.html'
})
export class Customer {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Customer, {
      item: item
    });
  }

  openAddModal() {
    let profileModal = this.modalCtrl.create(ModalAdd, { userId: 8675309 });
    profileModal.present();
  }

}

@Component({
  templateUrl: 'form.html'
})
export class ModalAdd {

  modal = {
    title : "",
    description : ""
  }

  constructor(public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
    console.log('UserId', params.get('userId'));
  }

  submit(){
    this.viewCtrl.dismiss(this.modal);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}