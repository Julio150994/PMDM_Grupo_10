(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["src_app_catalogos_catalogos_module_ts"],{

/***/ 46927:
/*!*******************************************************!*\
  !*** ./src/app/catalogos/catalogos-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogosPageRoutingModule": () => (/* binding */ CatalogosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _catalogos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogos.page */ 68099);




const routes = [
    {
        path: '',
        component: _catalogos_page__WEBPACK_IMPORTED_MODULE_0__.CatalogosPage
    }
];
let CatalogosPageRoutingModule = class CatalogosPageRoutingModule {
};
CatalogosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CatalogosPageRoutingModule);



/***/ }),

/***/ 18847:
/*!***********************************************!*\
  !*** ./src/app/catalogos/catalogos.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogosPageModule": () => (/* binding */ CatalogosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _catalogos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalogos-routing.module */ 46927);
/* harmony import */ var _catalogos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogos.page */ 68099);







let CatalogosPageModule = class CatalogosPageModule {
};
CatalogosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _catalogos_routing_module__WEBPACK_IMPORTED_MODULE_0__.CatalogosPageRoutingModule
        ],
        declarations: [_catalogos_page__WEBPACK_IMPORTED_MODULE_1__.CatalogosPage]
    })
], CatalogosPageModule);



/***/ }),

/***/ 68099:
/*!*********************************************!*\
  !*** ./src/app/catalogos/catalogos.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogosPage": () => (/* binding */ CatalogosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_catalogos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./catalogos.page.html */ 91537);
/* harmony import */ var _catalogos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalogos.page.scss */ 65942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ 89019);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ 94961);







let CatalogosPage = class CatalogosPage {
    constructor(loadingCtrl, alertCtrl, usersService, navCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.usersService = usersService;
        this.navCtrl = navCtrl;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.almagestUrl;
        this.maximoArticulos = 5;
    }
    ngOnInit() {
        this.usersService.getEncabezadoProductos()
            .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.encabezadoProductos = data;
            this.encabezadoProductos = this.encabezadoProductos.data;
        }));
        this.usersService.obtenerProductos().then(productos => {
            this.productos = productos;
            this.productos = this.productos.data;
        });
    }
    onLogout() {
        localStorage.removeItem('token');
        this.loadLogoutUser('Cerrando sesión...');
    }
    formAniadirArticulo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.navCtrl.navigateForward('/aniadir-producto');
        });
    }
    eliminarProducto(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.catalogo.closeSlidingItems();
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'ELIMINAR',
                message: '<strong>¿Estás seguro que deseas eliminar el producto?</strong>',
                buttons: [
                    {
                        text: 'NO',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            this.productoNoEliminado();
                        }
                    },
                    {
                        text: 'SI',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            this.usersService.removeProduct(id);
                            this.productoEliminado();
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    productoNoEliminado() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const eliminado = yield this.alertCtrl.create({
                header: 'Mensaje',
                cssClass: 'productCss',
                message: '<strong>No has eliminado este producto.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                        })
                    }
                ]
            });
            yield eliminado.present();
        });
    }
    productoEliminado() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const eliminado = yield this.alertCtrl.create({
                header: 'Mensaje',
                cssClass: 'productCss',
                message: '<strong>Producto eliminado correctamente.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                            this.navCtrl.navigateForward('/usuarios/catalogos');
                            this.ngOnInit();
                        })
                    }
                ]
            });
            yield eliminado.present();
        });
    }
    loadLogoutUser(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message,
                duration: 1,
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            this.navCtrl.navigateForward('/login-almagest');
            this.alertLogoutUser();
        });
    }
    alertLogoutUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const logout = yield this.alertCtrl.create({
                header: 'Logout',
                cssClass: 'logoutCss',
                message: '<strong>El usuario ha cerrado sesión correctamente.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (deactived) => {
                        }
                    }
                ]
            });
            yield logout.present();
        });
    }
};
CatalogosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
CatalogosPage.propDecorators = {
    catalogo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['catalogo', { static: true },] }]
};
CatalogosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-catalogos',
        template: _raw_loader_catalogos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_catalogos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CatalogosPage);



/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    almagestUrl: 'http://semillero.allsites.es/public/api'
};


/***/ }),

/***/ 65942:
/*!***********************************************!*\
  !*** ./src/app/catalogos/catalogos.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".titulo {\n  text-align: center;\n  margin-right: 9.68%;\n}\n\n.encabezado {\n  text-align: center;\n  margin-top: -5.28%;\n  margin-bottom: -5.6%;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2dvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiY2F0YWxvZ29zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA5LjY4JTtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTUuMjglO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTUuNiU7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 91537:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catalogos/catalogos.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"onLogout()\">\r\n          <ion-icon name=\"log-out-outline\"></ion-icon>\r\n          Logout\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titulo\">Catálogo de productos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list #catalogo>\r\n    <ion-card class=\"card\">\r\n      <ion-item color=\"warning\" *ngIf=\"encabezadoProductos?.length === 0\">\r\n        <ion-label class=\"encabezado\">No se han encontrado productos.</ion-label>\r\n      </ion-item>\r\n      <ion-item color=\"tertiary\" *ngIf=\"encabezadoProductos?.length > 0\">\r\n        <ion-label class=\"encabezado\">{{ encabezadoProductos?.length }} artículos de {{ maximoArticulos }}</ion-label>\r\n      </ion-item>\r\n    </ion-card>\r\n        <ion-item-sliding *ngFor=\"let producto of productos\" class=\"sliding\">\r\n           <ion-item>\r\n           <ion-label>\r\n              <ion-label slot=\"start\">\r\n                  <h3><strong>Descripción: </strong>{{ producto.compamy_description }}</h3>\r\n                  <h3><strong>Precio: </strong>{{ producto.price }} €</h3>\r\n                  <h3><strong>Stock:</strong> {{ producto.stock }}</h3>\r\n              </ion-label>\r\n           </ion-label>\r\n          </ion-item>\r\n\r\n         <ion-item-options side=\"start\">\r\n            <ion-item-option (click)=\"eliminarProducto(producto.id)\" color=\"danger\">\r\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n              <ion-label>Eliminar</ion-label>\r\n            </ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n    </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\"\r\n      (click)=\"formAniadirArticulo()\">\r\n      <ion-fab-button color=\"success\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_catalogos_catalogos_module_ts.js.map