import { Component } from '@angular/core';
import { ModalController, ViewController, NavController, NavParams, Platform, AlertController } from 'ionic-angular';

@Component({
  selector: 'customer',
  templateUrl: 'index.html'
})
export class Customer {
  selectedItem: any;
  items: Array<CustomerModel>;
  modelDetail : CustomerModel;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    if(this.selectedItem){
      this.initDetailData();
    } else {
      this.initListData();
    }
  }

  initListData(){
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        fullName: 'Item ' + i,
        idCardNumber : i + '',
        civility: 'This is item #' + i,
        gender: i + ':' + i + ' AM'
      });
    }
  }

  initDetailData(){
    this.modelDetail = this.selectedItem;
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Customer, {
      item: item
    });
  }

  searchItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.fullName.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else{
      this.initListData();
    }
  }

  openCreateModal() {
    let model = {
      titleModal : 'បន្ថែមអតិថិជនថ្មី'
    };
    let createModal = this.modalCtrl.create(ModalAdd, { model: model });
    createModal.present().then(data => {
      this.items.push(data);
    });
  }

  openEditModal(model){
    model.titleModal = 'កែប្រែអតិថិជន';
    let editModal = this.modalCtrl.create(ModalAdd, { model : model });
    editModal.present().then(data => {
      model = data;
    });
  }

  deleteItem(item){
    this.showConfirm('អតិថិជន', 'តើអ្នកប្រាកដជាចង់លុបអតិថិជនមែនទេ?', 'យល់ព្រម', 'ទេ',
      () => {
        this.items.splice(this.items.indexOf(item), 1)
      }, () => {}
    );
  }

  showConfirm(title, message, lblYes, lblNo, fnYes, fnNo){
    let confirm = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: lblNo,
          handler: fnNo
        }, {
          text: lblYes,
          handler: fnYes
        }
      ]
    });
    return confirm.present();
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

}

@Component({
  templateUrl: 'form.html'
})
export class ModalAdd {

  model : CustomerModel;

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

class CustomerModel {
  fullName: string;
  idCardNumber: string;
  civility: string;
  birthDate?: Date;
  gender?: string;
  maritalStatus?: string;
  nationality?: string;
  mobile?: string;
  mobile1?: string;
  email?: string;
  customerDocuments?: string;
  status?: string;
  currentAddress?: string;
}