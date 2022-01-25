(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["src_app_modal_modal_module_ts"],{

/***/ 9130:
/*!***********************************************!*\
  !*** ./src/app/modal/modal-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageRoutingModule": () => (/* binding */ ModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.page */ 9660);




const routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_0__.ModalPage
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalPageRoutingModule);



/***/ }),

/***/ 2641:
/*!***************************************!*\
  !*** ./src/app/modal/modal.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageModule": () => (/* binding */ ModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-routing.module */ 9130);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page */ 9660);
/* harmony import */ var _crear_pedido_crear_pedido_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../crear-pedido/crear-pedido.page */ 6583);
/* harmony import */ var _crear_pedido_crear_pedido_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../crear-pedido/crear-pedido.module */ 8067);









let ModalPageModule = class ModalPageModule {
};
ModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        entryComponents: [_crear_pedido_crear_pedido_page__WEBPACK_IMPORTED_MODULE_2__.CrearPedidoPage],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPageRoutingModule,
            _crear_pedido_crear_pedido_module__WEBPACK_IMPORTED_MODULE_3__.CrearPedidoPageModule,
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_1__.ModalPage]
    })
], ModalPageModule);



/***/ }),

/***/ 9660:
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPage": () => (/* binding */ ModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal.page.html */ 1084);
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page.scss */ 9096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ 9019);
/* harmony import */ var _services_pedidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pedidos.service */ 4362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);








let ModalPage = class ModalPage {
    constructor(alertCtrl, navCtrl, loadingCtrl, pedidosService, modalPedido) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.pedidosService = pedidosService;
        this.modalPedido = modalPedido;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.almagestUrl;
        this.formularioPedido = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            article: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
        this.contArticulo = 0;
        this.catalogoPedido = [];
        this.cantidades = [];
        this.seleccionado = false;
    }
    ngOnInit() {
        var _a, _b, _c;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Modal para los pedidos.');
            this.catalogo1();
            this.catalogo2();
            console.log('Catalogo empresa emmisora');
            yield this.presentLoading();
            console.log(this.catalogoEmpresaEmisora);
            console.log('Catalogo empresa emmisora');
            console.log('Catalogo empresa receptora');
            yield this.presentLoading();
            console.log(this.catalogoEmpresaReceptora);
            console.log('Catalogo empresa receptora');
            for (let i = 0; i < ((_a = this.catalogoEmpresaEmisora) === null || _a === void 0 ? void 0 : _a.length); i++) {
                for (let j = 0; j < ((_b = this.catalogoEmpresaReceptora) === null || _b === void 0 ? void 0 : _b.length); j++) {
                    if (this.catalogoEmpresaEmisora[i].article_id == this.catalogoEmpresaReceptora[j].article_id) {
                        this.catalogoPedido.push(this.catalogoEmpresaEmisora[i]);
                    }
                }
            }
            console.log(this.catalogoPedido);
            for (let i = 0; i < ((_c = this.catalogoPedido) === null || _c === void 0 ? void 0 : _c.length); i++) {
                this.cantidades.push([this.catalogoPedido[i], 0, false]);
            }
            console.log(this.cantidades);
        });
    }
    catalogo1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                duration: 10
            });
            this.pedidosService.obtenerCatalogo()
                .then(data => {
                this.catalogoEmpresaEmisora = data;
                this.catalogoEmpresaEmisora = this.catalogoEmpresaEmisora.data;
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    catalogo2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                duration: 10
            });
            this.pedidosService.obtenerCatalogo2()
                .then(data => {
                this.catalogoEmpresaReceptora = data;
                this.catalogoEmpresaReceptora = this.catalogoEmpresaReceptora.data;
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
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
    backToFormPedidos() {
        this.navCtrl.navigateForward('/usuarios/pedidos');
    }
    selectProductos(articulo, idArticulo, productoSeleccion, indice) {
        var _a, _b;
        if (articulo.target.checked === true) {
            console.log(productoSeleccion);
            this.seleccionado = articulo.detail.checked;
            console.log(this.seleccionado);
            console.log(indice);
            this.idArticulo = idArticulo;
            console.log(this.idArticulo);
            this.cantidades[indice][2] = this.seleccionado; // aquí está la clave de todo el asunto
            console.log('Artículo seleccionado: ' + articulo.detail.value);
            console.log('Id del artículo deseleccionado: ' + idArticulo);
            console.log('Select: ' + this.cantidades[indice][2]); // para imprimir el select de la condición
            for (let i = 0; i < ((_a = this.cantidades) === null || _a === void 0 ? void 0 : _a.length); i++) {
                if (this.cantidades[i][2] == true) {
                    this.seleccionado = true;
                }
            }
        }
        else {
            console.log(productoSeleccion);
            this.seleccionado = articulo.detail.checked;
            console.log(this.seleccionado);
            console.log(indice);
            this.cantidades[indice][2] = this.seleccionado;
            this.idArticulo = idArticulo;
            this.seleccionado = articulo.detail.checked;
            console.log('Artículo deseleccionado: ' + articulo.detail.value);
            console.log('Id del artículo seleccionado: ' + idArticulo);
            console.log('Select: ' + this.cantidades[indice][2]);
            for (let i = 0; i < ((_b = this.cantidades) === null || _b === void 0 ? void 0 : _b.length); i++) {
                if (this.cantidades[i][2] == true) {
                    this.seleccionado = true;
                }
            }
        }
    }
    sumarProductos(cantidad, id) {
        //console.log(cantidad);
        //console.log(id);
        if (this.cantidades[id][1] >= 0 && this.cantidades[id][1] <= 39) {
            this.cantidades[id][1]++;
        }
        //console.log('SUMA Id de artículo: '+this.cantidades[id][1]);
    }
    restarProductos(cantidad, id) {
        //console.log(cantidad);
        //console.log(id);
        if (this.cantidades[id][1] > 0 && this.cantidades[id][1] <= 40) {
            this.cantidades[id][1]--;
        }
        //console.log('RESTA Id de artículo: '+this.cantidades[id][1]);
    }
    aniadirPedido() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('Pulsado el botón añadir pedido');
            console.log(this.cantidades);
            console.log(this.cantidades.toString());
            console.log('Factura de pedido generada: ' + Math.floor((Math.random() * (100 - 1 + 1)) + 1).toFixed(2));
            const facturaPedido = Math.floor((Math.random() * (100 - 1 + 1)) + 1).toFixed(2);
            localStorage.setItem('numFac', facturaPedido);
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            if (month < 10) {
                console.log(`${year}-0${month}-${day}`);
                localStorage.setItem('fecha', `${year}-0${month}-${day}`);
            }
            else {
                console.log(`${year}-${month}-${day}`);
                localStorage.setItem('fecha', `${year}-${month}-${day}`);
            }
            const fechaActual = new Date();
            const anio = Math.floor((Math.random() * (2021 - 2000 + 1)) + 2000);
            const fechaFactura = new Date(anio, 0, 1);
            const fecha = new Date(fechaFactura.getTime() + Math.random() * (fechaActual.getTime() - fechaFactura.getTime()));
            const formatoFecha = fecha.getFullYear() + '-' + this.getDateFormat(fecha.getMonth() + 1) + '-' + this.getDateFormat(fecha.getDate());
            console.log('Fecha de pedido generada: ' + formatoFecha);
            this.pedidoReal = "";
            for (let i = 0; i < ((_a = this.cantidades) === null || _a === void 0 ? void 0 : _a.length); i++) {
                if (this.cantidades[i][2] == true && this.cantidades[i][1] > 0) {
                    this.pedidoReal += this.cantidades[i][0].article_id + ",";
                    this.pedidoReal += this.cantidades[i][1] + ",";
                }
            }
            this.pedidoReal = this.pedidoReal.substring(0, this.pedidoReal.length - 1);
            console.log(this.pedidoReal);
            localStorage.setItem('pedidoReal', this.pedidoReal);
            //console.log('Pedido añadido correctamente');
            //await this.pedidoAniadido();
            //this.navCtrl.navigateForward('/usuarios/pedidos');
            this.pedidosService.addOrder()
                .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.orders = data;
                this.orders = this.orders.data;
            }));
            console.log('Pedido añadido correctamente');
            yield this.pedidoAniadido();
            this.navCtrl.navigateForward('/usuarios/pedidos');
        });
    }
    getDateFormat(aux) {
        return aux < 10 ? '0' + aux : aux;
    }
    pedidoAniadido() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const pedido = yield this.alertCtrl.create({
                header: 'Mensaje',
                cssClass: 'orderCss',
                message: '<strong>Pedido añadido correctamente</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                            yield this.presentLoading();
                            window.location.reload();
                        })
                    }
                ]
            });
            yield pedido.present();
        });
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _services_pedidos_service__WEBPACK_IMPORTED_MODULE_3__.PedidosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
ModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalPage);



/***/ }),

/***/ 9096:
/*!***************************************!*\
  !*** ./src/app/modal/modal.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#btnForm {\n  margin-top: 6.5%;\n}\n\n#listaArticulos {\n  margin-top: 2.45%;\n}\n\n#titulo {\n  text-align: center;\n  margin-left: 13%;\n}\n\n#btnCrearPedido {\n  margin-top: 4em;\n}\n\n#compamy {\n  margin-left: 6.5%;\n}\n\nion-button[disabled] {\n  --ion-color-base: #b34d5a !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9DQUFBO0FBQ0oiLCJmaWxlIjoibW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2J0bkZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogNi41JTtcclxufVxyXG5cclxuI2xpc3RhQXJ0aWN1bG9zIHtcclxuICAgIG1hcmdpbi10b3A6IDIuNDUlO1xyXG59XHJcblxyXG4jdGl0dWxvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XHJcbn1cclxuXHJcbiNidG5DcmVhclBlZGlkbyB7XHJcbiAgICBtYXJnaW4tdG9wOiA0ZW07XHJcbn1cclxuXHJcbiNjb21wYW15IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2LjUlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICAtLWlvbi1jb2xvci1iYXNlOiAjYjM0ZDVhICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 1084:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Crear pedido</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <ion-button expand=\"full\" color=\"warning\" (click)=\"backToFormPedidos()\">\r\n      <ion-icon name=\"arrow-back-circle\"></ion-icon>\r\n      <span>Volver a Pedidos</span>\r\n    </ion-button>\r\n\r\n    <ion-list id=\"listaArticulos\">\r\n      <ion-label color=\"primary\" id=\"titulo\"><h1>Lista de Artículos</h1></ion-label>\r\n      <ion-item *ngFor=\"let producto of cantidades; let i = index\">\r\n        <ion-checkbox color=\"tertiary\" value=\"{{ producto[0].compamy_name }}\"\r\n          (ionChange)=\"selectProductos($event, producto[0].article_id,producto[2],i)\" name=\"{{ producto[0].compamy_name }}\"></ion-checkbox>\r\n          <ion-label>\r\n          <h3 id=\"compamy\">{{producto[0].compamy_name}}</h3>\r\n          </ion-label>\r\n          <ion-item>\r\n            <ion-button shape=\"round\" color=\"primary\" [disabled]=\"(producto[2]==false)\" (click)=\"restarProductos(producto[1],i)\">-</ion-button>\r\n            <ion-label>{{producto[1]}}</ion-label>\r\n            <ion-button shape=\"round\" color=\"primary\" [disabled]=\"(producto[2]==false)\" (click)=\"sumarProductos(producto[1],i)\">+</ion-button>\r\n          </ion-item>\r\n      </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-button expand=\"full\" [disabled]=\"(!seleccionado)\" color=\"success\" id=\"btnCrearPedido\" (click)=\"aniadirPedido()\">\r\n    <ion-icon name=\"add-circle\"></ion-icon>\r\n    <span>Añadir pedido</span>\r\n  </ion-button>\r\n\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_modal_modal_module_ts.js.map