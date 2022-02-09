(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["src_app_aniadir-producto_aniadir-producto_module_ts"],{

/***/ 75446:
/*!*********************************************************************!*\
  !*** ./src/app/aniadir-producto/aniadir-producto-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AniadirProductoPageRoutingModule": () => (/* binding */ AniadirProductoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _aniadir_producto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aniadir-producto.page */ 17063);




const routes = [
    {
        path: '',
        component: _aniadir_producto_page__WEBPACK_IMPORTED_MODULE_0__.AniadirProductoPage
    }
];
let AniadirProductoPageRoutingModule = class AniadirProductoPageRoutingModule {
};
AniadirProductoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AniadirProductoPageRoutingModule);



/***/ }),

/***/ 70076:
/*!*************************************************************!*\
  !*** ./src/app/aniadir-producto/aniadir-producto.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AniadirProductoPageModule": () => (/* binding */ AniadirProductoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _aniadir_producto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aniadir-producto-routing.module */ 75446);
/* harmony import */ var _aniadir_producto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aniadir-producto.page */ 17063);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/pipes.module */ 35503);








let AniadirProductoPageModule = class AniadirProductoPageModule {
};
AniadirProductoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _aniadir_producto_routing_module__WEBPACK_IMPORTED_MODULE_0__.AniadirProductoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_aniadir_producto_page__WEBPACK_IMPORTED_MODULE_1__.AniadirProductoPage]
    })
], AniadirProductoPageModule);



/***/ }),

/***/ 17063:
/*!***********************************************************!*\
  !*** ./src/app/aniadir-producto/aniadir-producto.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AniadirProductoPage": () => (/* binding */ AniadirProductoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_aniadir_producto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./aniadir-producto.page.html */ 33835);
/* harmony import */ var _aniadir_producto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aniadir-producto.page.scss */ 18939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ 89019);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ 94961);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);








let AniadirProductoPage = class AniadirProductoPage {
    constructor(usersService, navCtrl, loadingCtrl, alertCtrl) {
        this.usersService = usersService;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.almagestUrl;
        this.formularioProducto = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            article: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
        this.arts = [];
        this.prods = [];
        this.articulosReales = [];
        this.maximoArticulos = 5;
    }
    ngOnInit() {
        this.usersService.obtenerProductos().then(productos => {
            this.productos = productos;
            this.productos = this.productos.data;
            this.prods = this.productos;
            this.usersService.obtenerArticulos(localStorage.getItem('token')).
                then(articulos => {
                var _a, _b;
                this.articulos = articulos;
                this.articulos = this.articulos.data;
                this.arts = this.articulos;
                for (let i = 0; i < ((_a = this.arts) === null || _a === void 0 ? void 0 : _a.length); i++) {
                    this.aparece = false;
                    for (let j = 0; j < ((_b = this.prods) === null || _b === void 0 ? void 0 : _b.length); j++) {
                        if (this.prods[j].article_id === this.arts[i].id) {
                            this.aparece = true;
                            break;
                        }
                    }
                    if (!this.aparece) {
                        this.articulosReales.push(this.arts[i]);
                    }
                }
            });
        });
        this.mostrarFamilias();
    }
    buscarArticulos(evento) {
        this.nombreArticulo = evento.detail.value;
    }
    seleccionarArticulo(articulo) {
        this.descripcionArticulo = articulo;
    }
    aniadirProducto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let familyId;
            let idArticulo = (this.formularioProducto.controls.article.value) - (1);
            this.usersService.obtenerArticulos(localStorage.getItem('token')).
                then((articulos) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.articulos = articulos;
                this.articulos = this.articulos.data;
            }));
            this.usersService.obtenerCatalogo(localStorage.getItem('id_comp'))
                .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                var _a;
                this.productos = data;
                this.productos = this.productos.data;
                familyId = this.articulos[idArticulo].family_id;
                this.familias = this.usersService.familias;
                for (let index = 0; index < this.familias.length; index++) {
                    if (this.familias[index].id == familyId) {
                        this.margen = (this.familias[index].profit_margin / 100).toFixed(2);
                    }
                }
                console.log(this.formularioProducto.controls.price.value + (this.formularioProducto.controls.price.value * this.margen));
                if (((_a = this.productos) === null || _a === void 0 ? void 0 : _a.length) < 5 && (this.formularioProducto.controls.price.value + (this.formularioProducto.controls.price.value * this.margen) >= this.articulos[idArticulo].price_min &&
                    this.formularioProducto.controls.price.value + (this.formularioProducto.controls.price.value * this.margen) <= this.articulos[idArticulo].price_max)) {
                    this.productoAniadido(this.formularioProducto.controls.price.value + (this.formularioProducto.controls.price.value * this.margen));
                }
                else {
                    if (this.formularioProducto.controls.price.value < this.articulos[idArticulo].price_min) {
                        this.alertPrecioMinimo(this.articulos[idArticulo].price_min);
                    }
                    else if (this.formularioProducto.controls.price.value > this.articulos[idArticulo].price_max) {
                        this.alertPrecioMaximo(this.articulos[idArticulo].price_max);
                    }
                    else if (this.formularioProducto.controls.price.value + (this.formularioProducto.controls.price.value * this.margen) > this.articulos[idArticulo].price_max) {
                        this.alertPrecioMaximo(this.articulos[idArticulo].price_max);
                    }
                    else {
                        this.alertContadorArticulos();
                    }
                }
            }));
        });
    }
    mostrarFamilias() {
        this.usersService.obtenerFamilias()
            .then(data => {
            this.families = data;
            this.families = this.families.data;
        });
    }
    alertPrecioMinimo(precioMinimo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const precio = yield this.alertCtrl.create({
                header: 'Mensaje de error',
                cssClass: 'productCss',
                message: '<strong>El precio mínimo es ' + precioMinimo + '.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        })
                    }
                ]
            });
            yield precio.present();
        });
    }
    alertPrecioMaximo(precioMaximo) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const maximo = yield this.alertCtrl.create({
                header: 'Mensaje de error',
                cssClass: 'productCss',
                message: '<strong>El precio máximo es ' + precioMaximo + '. El elegido con los beneficios es: ' + (this.formularioProducto.controls.price.value + (this.formularioProducto.controls.price.value * this.margen)) + '.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        })
                    }
                ]
            });
            yield maximo.present();
        });
    }
    alertContadorArticulos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const maximo = yield this.alertCtrl.create({
                header: 'Mensaje de error',
                cssClass: 'productCss',
                message: '<strong>No puedes añadir más de ' + this.maximoArticulos + ' artículos.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                        })
                    }
                ]
            });
            yield maximo.present();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                duration: 1
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    productoAniadido(margen) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const aniadido = yield this.alertCtrl.create({
                header: 'Mensaje',
                cssClass: 'productCss',
                message: '<strong>Producto añadido correctamente.Se sumará el margen de beneficio y el produto añadido asciende a ' + margen + '€</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            let idArticulo = (this.formularioProducto.controls.article.value) - (1);
                            let familyId;
                            familyId = this.articulos[idArticulo].family_id;
                            let idFamilia;
                            idFamilia = familyId.toString();
                            this.usersService.addProduct(localStorage.getItem('token'), this.formularioProducto.controls.article.value, localStorage.getItem('id_comp'), margen, idFamilia)
                                .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                                this.products = data;
                                this.products = this.products.data;
                            }));
                            this.navCtrl.navigateRoot('/usuarios/catalogos');
                            yield this.presentLoading();
                            window.location.reload();
                        })
                    }
                ]
            });
            yield aniadido.present();
        });
    }
};
AniadirProductoPage.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
AniadirProductoPage.propDecorators = {
    descripcionArticulo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
AniadirProductoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-aniadir-producto',
        template: _raw_loader_aniadir_producto_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_aniadir_producto_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AniadirProductoPage);



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

/***/ 18939:
/*!*************************************************************!*\
  !*** ./src/app/aniadir-producto/aniadir-producto.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".dato_usuario {\n  margin-top: 4.67%;\n}\n\n.botonArticulo {\n  margin-top: 9.45%;\n  margin-left: 4.32%;\n  margin-right: 4.32%;\n}\n\n/* Establecer otra forma de nuestro searchBar */\n\n.form-search {\n  background-color: grey;\n}\n\n.select {\n  margin-top: 3.11%;\n  margin-left: 1.25%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaWFkaXItcHJvZHVjdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBLCtDQUFBOztBQUVBO0VBQ0ksc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQUoiLCJmaWxlIjoiYW5pYWRpci1wcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0b191c3VhcmlvIHtcclxuICAgIG1hcmdpbi10b3A6IDQuNjclO1xyXG59XHJcblxyXG4uYm90b25BcnRpY3VsbyB7XHJcbiAgICBtYXJnaW4tdG9wOiA5LjQ1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0LjMyJTtcclxuICAgIG1hcmdpbi1yaWdodDogNC4zMiU7XHJcbn1cclxuXHJcbi8qIEVzdGFibGVjZXIgb3RyYSBmb3JtYSBkZSBudWVzdHJvIHNlYXJjaEJhciAqL1xyXG5cclxuLmZvcm0tc2VhcmNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMy4xMSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMS4yNSU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 33835:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aniadir-producto/aniadir-producto.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/usuarios/catalogos\">\r\n        Cancelar\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Formulario producto</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-searchbar animated placeholder=\"Nombre de artículo\"\r\n      (ionChange)=\"buscarArticulos($event)\">\r\n    </ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"formularioProducto\" (ngSubmit)=\"aniadirProducto()\" method=\"post\">\r\n    <ion-radio-group formControlName=\"article\">\r\n      <ion-list-header>\r\n        <ion-label class=\"select\">Seleccione un artículo:</ion-label>\r\n      </ion-list-header>\r\n      <ion-label color=\"danger\" *ngIf=\"formularioProducto.controls.article.errors?.required && (formularioProducto.touched || formularioProducto.dirty)\">\r\n        * Debe seleccionar un artículo.\r\n      </ion-label>\r\n\r\n      <ion-item class=\"dato_usuario\" *ngFor=\"let articulo of articulosReales | buscador: nombreArticulo\">\r\n        <ion-label>{{ articulo.description }}</ion-label>\r\n        <ion-radio slot=\"start\" value=\"{{ articulo.id }}\" (click)=\"seleccionarArticulo(articulo.description)\"></ion-radio>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n\r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Precio:</ion-label>\r\n      <ion-input formControlName=\"price\" type=\"number\"></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioProducto.controls.price.errors?.required && (formularioProducto.touched || formularioProducto.dirty)\">\r\n      * Debe introducir un precio.\r\n    </ion-label>\r\n\r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label>Descripción artículo:&nbsp;&nbsp;</ion-label>\r\n      <ion-input [attr.disabled]=true formControlName=\"article\" text-capitalize> {{ descripcionArticulo }} </ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button expand=\"full\" [disabled]=\"formularioProducto.invalid\" type=\"submit\" class=\"botonArticulo\" color=\"success\">\r\n      <ion-icon name=\"add-circle\"></ion-icon>\r\n      Añadir\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_aniadir-producto_aniadir-producto_module_ts.js.map