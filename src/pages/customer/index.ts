import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams, Platform, AlertController } from 'ionic-angular';

@Component({
  selector: 'customer',
  templateUrl: 'index.html'
})
export class Customer {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, image: string, note: string, time: string}>;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.initData();
  }

  initData(){
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        image : 'assets/img/arya.jpg',
        note: 'This is item #' + i,
        time: i + ':' + i + ' AM'
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Customer, {
      item: item
    });
  }


  openCreateModal() {
    let model = {
      titleModal : 'បន្ថែមអតិថិជនថ្មី'
    };
    let createModal = this.modalCtrl.create(ModalAdd, { model: model });
    createModal.present();
  }

  searchItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else{
      this.initData();
    }
  }

  openEditModal(item){
    item.titleModal = 'កែប្រែអតិថិជន';
    let editModal = this.modalCtrl.create(ModalAdd, { model : item });
    editModal.present();
  }

  deleteItem(item){
    this.showConfirm();
  }

  showRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('តើអ្នកប្រាកដជាចង់លុបអតិថិជនមែនទេ?');

    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });

    alert.addButton('ទេ');
    alert.addButton({
      text: 'យល់ព្រម',
      handler: data => {
        // this.testRadioOpen = false;
        // this.testRadioResult = data;
      }
    });
    alert.present();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'អតិថិជន',
      message: 'តើអ្នកប្រាកដជាចង់លុបអតិថិជនមែនទេ?',
      buttons: [
        {
          text: 'ទេ',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'បាទ',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}

@Component({
  templateUrl: 'form.html'
})
export class ModalAdd {

  model = {
    title : "",
    description : ""
  }

  constructor(public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
    this.model = params.get('model');
  }

  submit(){
    this.viewCtrl.dismiss(this.model);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}