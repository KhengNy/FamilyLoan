webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Dashboard = (function () {
    function Dashboard(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return Dashboard;
}());
Dashboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'dashboard',template:/*ion-inline-start:"D:\KhengNyWorkspace\Project\PHP\PHPWrokspace\ionic_3\FamilyLoan\src\pages\dashboard\index.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title kh>ផ្ទាំងគ្រប់គ្រង</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <ion-fab bottom right #fab>\n\n    <button ion-fab><ion-icon [name]="\'add\'"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="share(\'facebook\', fab)">Facebook</button>\n\n      <button ion-fab (click)="share(\'twitter\', fab)">Twitter</button>\n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n</ion-content>\n\n'/*ion-inline-end:"D:\KhengNyWorkspace\Project\PHP\PHPWrokspace\ionic_3\FamilyLoan\src\pages\dashboard\index.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], Dashboard);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CustomerFromModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Customer = Customer_1 = (function () {
    function Customer(modalCtrl, navCtrl, navParams, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        if (this.selectedItem) {
            this.initDetailData();
        }
        else {
            this.initListData();
        }
    }
    Customer.prototype.initListData = function () {
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                fullName: 'Item ' + i,
                idCardNumber: i + '',
                civility: 'This is item #' + i,
                gender: i + ':' + i + ' AM',
                email: 'yep@gmail.com'
            });
        }
    };
    Customer.prototype.initDetailData = function () {
        this.modelDetail = this.selectedItem;
    };
    Customer.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Customer_1, {
            item: item
        });
    };
    Customer.prototype.searchItems = function (ev) {
        // Reset items back to all of the items
        // this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.fullName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.initListData();
        }
    };
    Customer.prototype.openCreateModal = function () {
        var _this = this;
        var createModal = this.modalCtrl.create(CustomerFromModal, { titleModal: 'បន្ថែមអតិថិជនថ្មី', model: CustomerModel });
        createModal.onDidDismiss(function (data) {
            if (data) {
                _this.items.push(data);
            }
        });
        createModal.present();
    };
    Customer.prototype.openEditModal = function (model) {
        var editModal = this.modalCtrl.create(CustomerFromModal, { titleModal: 'កែប្រែអតិថិជន', model: model });
        editModal.onDidDismiss(function (data) {
            model = data;
        });
        editModal.present();
    };
    Customer.prototype.deleteItem = function (item) {
        var _this = this;
        this.showConfirm('អតិថិជន', 'តើអ្នកប្រាកដជាចង់លុបអតិថិជនមែនទេ?', 'យល់ព្រម', 'ទេ', function () {
            _this.items.splice(_this.items.indexOf(item), 1);
        }, function () { });
    };
    Customer.prototype.showConfirm = function (title, message, lblYes, lblNo, fnYes, fnNo) {
        var confirm = this.alertCtrl.create({
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
    };
    Customer.prototype.showRadio = function () {
        var alert = this.alertCtrl.create();
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
            handler: function (data) {
                // this.testRadioOpen = false;
                // this.testRadioResult = data;
            }
        });
        alert.present();
    };
    return Customer;
}());
Customer = Customer_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'customer',template:/*ion-inline-start:"D:\KhengNyWorkspace\Project\PHP\PHPWrokspace\ionic_3\FamilyLoan\src\pages\customer\index.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title kh>អតិថិជន</ion-title>\n\n    <ion-buttons end [hidden]="selectedItem">\n\n      <button ion-button (click)="openCreateModal()">\n\n          <span kh ion-text color="primary" showWhen="ios">បន្ថែម</span>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons end [hidden]="!selectedItem">\n\n        <button ion-button (click)="openEditModal(modelDetail)">\n\n            <span kh ion-text color="primary">កែ</span>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div *ngIf="!selectedItem;then list_content else detail_content"></div>\n\n  <ng-template #list_content>\n\n    <ion-searchbar (ionInput)="searchItems($event)"></ion-searchbar>\n\n    <ion-list>\n\n      <!-- <ion-list-header>Today</ion-list-header> -->\n\n      <ion-item-sliding *ngFor="let item of items">\n\n        <ion-item (click)="itemTapped($event, item)">\n\n          <ion-avatar item-start>\n\n            <img src="assets/img/arya.jpg">\n\n          </ion-avatar>\n\n          <h2>{{item.fullName}}</h2>\n\n          <p>{{item.email}}</p>\n\n          <ion-note item-end>{{item.gender}}</ion-note>\n\n        </ion-item>\n\n        <ion-item-options>\n\n            <button ion-button color="light" (click)="openEditModal(item)" icon-start>\n\n              &nbsp;&nbsp;&nbsp;&nbsp;កែ&nbsp;&nbsp;&nbsp;&nbsp;\n\n            </button>\n\n            <button ion-button color="danger" (click)="deleteItem(item)" icon-start>\n\n              &nbsp;&nbsp;លុប&nbsp;&nbsp;\n\n            </button>\n\n          </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n    <ion-fab bottom right [hidden]="selectedItem" (click)="openCreateModal()" hideWhen="ios">\n\n      <button ion-fab><ion-icon [name]="\'add\'"></ion-icon></button>\n\n    </ion-fab>\n\n  </ng-template>\n\n\n\n  <ng-template #detail_content>\n\n    <ion-card>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/img/arya.jpg">\n\n        </ion-avatar>\n\n        <h2>{{modelDetail.fullName}}</h2>\n\n        <p>{{modelDetail.idCardNumber}}</p>\n\n      </ion-item>\n\n    \n\n      <!-- <img src="img/advance-card-bttf.png"> -->\n\n    \n\n      <ion-card-content>\n\n        <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n      </ion-card-content>\n\n    \n\n      <ion-row>\n\n        <ion-col left text-left>\n\n          <button ion-button clear small>\n\n            <div>12 កម្ចីឥណទាន</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col center text-center>\n\n          <button ion-button clear small>\n\n            <div>5 Active</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col right text-right>\n\n          <button ion-button clear small>\n\n            <div>5 Active</div>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n  </ng-template>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\KhengNyWorkspace\Project\PHP\PHPWrokspace\ionic_3\FamilyLoan\src\pages\customer\index.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], Customer);

var CustomerFromModal = (function () {
    function CustomerFromModal(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.model = params.get('model');
        this.titleModal = params.get('titleModal');
    }
    CustomerFromModal.prototype.submit = function () {
        this.viewCtrl.dismiss(this.model);
    };
    CustomerFromModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return CustomerFromModal;
}());
CustomerFromModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\KhengNyWorkspace\Project\PHP\PHPWrokspace\ionic_3\FamilyLoan\src\pages\customer\form.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title kh>\n\n            {{titleModal}}\n\n        </ion-title>\n\n\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span kh ion-text color="primary" showWhen="ios">បិទ</span>\n\n            </button>\n\n        </ion-buttons>\n\n        \n\n        <ion-buttons end>\n\n            <button ion-button (click)="submit()">\n\n                <span kh ion-text color="primary">រក្សាទុក</span>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<!--\n\n<ion-content kh>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-input placeholder="ឈ្មោះអតិថិជន" [(ngModel)]="model.fullName" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-input placeholder="លេខអត្តសញ្ញាណប័ណ្ណ" [(ngModel)]="model.idCardNumber" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-select placeholder="ភេទ" [(ngModel)]="model.gender" interface="action-sheet">\n\n                <ion-option value="ប្រុស">ប្រុស</ion-option>\n\n                <ion-option value="ស្រី">ស្រី</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ថ្ងៃខែឆ្នាំកំណើត</ion-label>\n\n            <ion-datetime [(ngModel)]="model.birthDate" displayFormat="DD MM YYYY"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ស្ថានភាពគ្រួសារ</ion-label>\n\n            <ion-select [(ngModel)]="model.maritalStatus" interface="action-sheet">\n\n                <ion-option value="នៅលីវ">នៅលីវ</ion-option>\n\n                <ion-option value="រៀបការហើយ">រៀបការហើយ</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Civility</ion-label>\n\n            <ion-input [(ngModel)]="model.civility" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>សញ្ជាតិ</ion-label>\n\n            <ion-input [(ngModel)]="model.nationality" type="text"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>អ៊ីម៉ែល</ion-label>\n\n            <ion-input [(ngModel)]="model.email" type="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>លេខទូរស័ព្ទ</ion-label>\n\n            <ion-input [(ngModel)]="model.mobile1" type="tel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>លេខទូរស័ព្ទអត្តិថិជន</ion-label>\n\n            <ion-input [(ngModel)]="model.mobile" type="tel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ទីលំនៅបច្បន្នអតិថិជន</ion-label>\n\n            <ion-input [(ngModel)]="model.currentAddress" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ឯកសារបញ្ចាំ</ion-label>\n\n            <ion-input [(ngModel)]="model.customerDocuments" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ស្ថានភាពអត្តិថិជន</ion-label>\n\n            <ion-select [(ngModel)]="model.status" interface="action-sheet">\n\n                <ion-option value="សកម្ម">សកម្ម</ion-option>\n\n                <ion-option value="អសកម្ម">អសកម្ម</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n-->\n\n\n\n\n\n<ion-content kh>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label fixed>ឈ្មោះអតិថិជន</ion-label>\n\n            <ion-input [(ngModel)]="model.fullName" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label fixed>លេខអត្តសញ្ញាណប័ណ្ណ</ion-label>\n\n            <ion-input [(ngModel)]="model.idCardNumber" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ភេទ</ion-label>\n\n            <ion-select [(ngModel)]="model.gender" interface="action-sheet">\n\n                <ion-option value="ប្រុស">ប្រុស</ion-option>\n\n                <ion-option value="ស្រី">ស្រី</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ថ្ងៃខែឆ្នាំកំណើត</ion-label>\n\n            <ion-datetime [(ngModel)]="model.birthDate" displayFormat="DD MM YYYY"></ion-datetime>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ស្ថានភាពគ្រួសារ</ion-label>\n\n            <ion-select [(ngModel)]="model.maritalStatus" interface="action-sheet">\n\n                <ion-option value="នៅលីវ">នៅលីវ</ion-option>\n\n                <ion-option value="រៀបការហើយ">រៀបការហើយ</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>Civility</ion-label>\n\n            <ion-input [(ngModel)]="model.civility" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>សញ្ជាតិ</ion-label>\n\n            <ion-input [(ngModel)]="model.nationality" type="text"></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-label>អ៊ីម៉ែល</ion-label>\n\n            <ion-input [(ngModel)]="model.email" type="email"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>លេខទូរស័ព្ទ</ion-label>\n\n            <ion-input [(ngModel)]="model.mobile1" type="tel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>លេខទូរស័ព្ទអត្តិថិជន</ion-label>\n\n            <ion-input [(ngModel)]="model.mobile" type="tel"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ទីលំនៅបច្បន្នអតិថិជន</ion-label>\n\n            <ion-input [(ngModel)]="model.currentAddress" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ឯកសារបញ្ចាំ</ion-label>\n\n            <ion-input [(ngModel)]="model.customerDocuments" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>ស្ថានភាពអត្តិថិជន</ion-label>\n\n            <ion-select [(ngModel)]="model.status" interface="action-sheet">\n\n                <ion-option value="សកម្ម">សកម្ម</ion-option>\n\n                <ion-option value="អសកម្ម">អសកម្ម</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\KhengNyWorkspace\Project\PHP\PHPWrokspace\ionic_3\FamilyLoan\src\pages\customer\form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], CustomerFromModal);

var CustomerModel = (function () {
    function CustomerModel() {
    }
    return CustomerModel;
}());
var Customer_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_index__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_index__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["a" /* Customer */], __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["b" /* CustomerFromModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_index__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["a" /* Customer */], __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["b" /* CustomerFromModal */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_index__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globals__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_index__["a" /* Dashboard */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'ផ្ទាំងគ្រប់គ្រង', component: __WEBPACK_IMPORTED_MODULE_4__pages_dashboard_index__["a" /* Dashboard */], icon: __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* icons */].dashboard },
            { title: 'ការបង់ប្រាក់', component: __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["a" /* Customer */], icon: __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* icons */].payment },
            { title: 'អតិថិជន', component: __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["a" /* Customer */], icon: __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* icons */].customer },
            { title: 'ឥណទាន', component: __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["a" /* Customer */], icon: __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* icons */].loan },
            { title: 'ភ្នាក់ងារ', component: __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["a" /* Customer */], icon: __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* icons */].agent },
            { title: 'អ្នកប្រើប្រាស់', component: __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["a" /* Customer */], icon: __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* icons */].user },
            { title: 'ការកំណត់', component: __WEBPACK_IMPORTED_MODULE_5__pages_customer_index__["a" /* Customer */], icon: __WEBPACK_IMPORTED_MODULE_6__globals__["a" /* icons */].setting }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\KhengNyWorkspace\Project\PHP\PHPWrokspace\ionic_3\FamilyLoan\src\app\app.html"*/'<ion-menu [content]="content">\n\n    <ion-header class="profile-info">\n\n        <img src="assets/img/logo-256.png" class="avatar motion spin fade">\n\n        <div class="profile-name">\n\n            Kheng Ny\n\n        </div>\n\n        <div class="profile-role">\n\n            Admin\n\n        </div>\n\n    </ion-header>\n\n\n\n    <ion-content>\n\n        <ion-list class="disable-user-behavior">\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n                <ion-icon [name]="p.icon" item-left kh></ion-icon>\n\n                <ion-label kh>{{p.title}}</ion-label>\n\n            </button>\n\n        </ion-list>\n\n    </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"D:\KhengNyWorkspace\Project\PHP\PHPWrokspace\ionic_3\FamilyLoan\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sep */
/* unused harmony export version */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return icons; });
var sep = '/';
var version = "22.2.2";
var icons = {
    'dashboard': 'speedometer',
    'payment': 'cash',
    'customer': 'people',
    'loan': 'logo-usd',
    'agent': 'contacts',
    'user': 'contact',
    'setting': 'settings'
};
//# sourceMappingURL=globals.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map