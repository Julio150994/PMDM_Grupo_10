(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["default-src_app_crear-pedido_crear-pedido_module_ts"],{

/***/ 4674:
/*!*************************************************************!*\
  !*** ./src/app/crear-pedido/crear-pedido-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearPedidoPageRoutingModule": () => (/* binding */ CrearPedidoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _crear_pedido_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-pedido.page */ 6583);




const routes = [
    {
        path: '',
        component: _crear_pedido_page__WEBPACK_IMPORTED_MODULE_0__.CrearPedidoPage
    }
];
let CrearPedidoPageRoutingModule = class CrearPedidoPageRoutingModule {
};
CrearPedidoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CrearPedidoPageRoutingModule);



/***/ }),

/***/ 8067:
/*!*****************************************************!*\
  !*** ./src/app/crear-pedido/crear-pedido.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearPedidoPageModule": () => (/* binding */ CrearPedidoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _crear_pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crear-pedido-routing.module */ 4674);
/* harmony import */ var _crear_pedido_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-pedido.page */ 6583);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/pipes.module */ 5503);








let CrearPedidoPageModule = class CrearPedidoPageModule {
};
CrearPedidoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _crear_pedido_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrearPedidoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_crear_pedido_page__WEBPACK_IMPORTED_MODULE_1__.CrearPedidoPage]
    })
], CrearPedidoPageModule);



/***/ }),

/***/ 6583:
/*!***************************************************!*\
  !*** ./src/app/crear-pedido/crear-pedido.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrearPedidoPage": () => (/* binding */ CrearPedidoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_crear_pedido_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./crear-pedido.page.html */ 9210);
/* harmony import */ var _crear_pedido_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crear-pedido.page.scss */ 4367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ 9019);
/* harmony import */ var _services_pedidos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/pedidos.service */ 4362);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/users.service */ 4961);









let CrearPedidoPage = class CrearPedidoPage {
    constructor(navCtrl, pedidosService, loadingCtrl, modalPedido, usersService) {
        this.navCtrl = navCtrl;
        this.pedidosService = pedidosService;
        this.loadingCtrl = loadingCtrl;
        this.modalPedido = modalPedido;
        this.usersService = usersService;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.almagestUrl;
        this.empresasReales = [];
        this.opcionSeleccionado = '0'; // Iniciamos
        this.verSeleccion = '';
    }
    ngOnInit() {
        var _a;
        this.pedidosService.obtenerCompanias()
            .then(data => {
            var _a;
            this.empresas = data;
            this.empresas = this.empresas.data;
            for (let i = 0; i < ((_a = this.empresas) === null || _a === void 0 ? void 0 : _a.length); i++) {
                if (this.empresas[i].id != this.empresaLog) {
                    this.empresasReales.push(this.empresas[i]);
                }
            }
        });
        this.empresaLogueada = localStorage.getItem('id_comp');
        this.empresaLog = this.empresaLogueada;
        console.log('Empresa logueada: ' + this.empresaLog);
        for (let i = 0; i < ((_a = this.empresas) === null || _a === void 0 ? void 0 : _a.length); i++) {
            console.log(this.empresas[i].id);
            if (this.empresas[i].id != this.empresaLog) {
                this.empresasReales.push(this.empresas[i]);
            }
        }
        this.presentLoading();
        console.log('Formulario de crear pedido.');
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                duration: 0.5
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
        });
    }
    capturar() {
        this.verSeleccion = this.opcionSeleccionado;
    }
    abrirModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.setItem('empresaPedido', this.opcionSeleccionado);
            console.log('Empresa pedido: ' + localStorage.getItem('empresaPedido'));
            this.navCtrl.navigateForward('/modal');
        });
    }
    cancelarPedido() {
        this.navCtrl.navigateForward('/usuarios/pedidos');
    }
    aniadirPedido() { }
};
CrearPedidoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_pedidos_service__WEBPACK_IMPORTED_MODULE_3__.PedidosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService }
];
CrearPedidoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-crear-pedido',
        template: _raw_loader_crear_pedido_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_crear_pedido_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CrearPedidoPage);



/***/ }),

/***/ 4362:
/*!*********************************************!*\
  !*** ./src/app/services/pedidos.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosService": () => (/* binding */ PedidosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let PedidosService = class PedidosService {
    constructor(httpUser, loadingUserCtrl) {
        this.httpUser = httpUser;
        this.loadingUserCtrl = loadingUserCtrl;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.almagestUrl;
    }
    obtenerCompanias() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(res => {
                this.httpUser.get(this.url + '/companies').subscribe(data => {
                    this.empresas = data;
                    this.empresas = this.empresas.data;
                    res(data);
                }, error => {
                    console.log('Error al mostrar los usuarios ' + error);
                });
            });
        });
    }
    obtenerCatalogo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(res => {
                this.httpUser.post(this.url + '/products/company?id=' + localStorage.getItem('id_comp'), {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
                }).subscribe(data => {
                    this.productos = data;
                    this.productos = this.productos.data;
                    res(data);
                }, error => {
                    console.log('Error al mostrar los productos ' + error);
                });
            });
        });
    }
    obtenerDatosPedidos() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(res => {
                this.httpUser.post(this.url + '/orders/company?id=' + localStorage.getItem('id_comp'), {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
                }).subscribe(data => {
                    this.datosPedidos = data;
                    this.datosPedidos = this.datosPedidos.data;
                    res(data);
                }, error => {
                    console.log('Error al mostrar los productos ' + error);
                });
            });
        });
    }
    obtenerCatalogo2() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(res => {
                this.httpUser.post(this.url + '/products/company?id=' + localStorage.getItem('empresaPedido'), {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
                }).subscribe(data => {
                    this.productos2 = data;
                    this.productos2 = this.productos2.data;
                    res(data);
                }, error => {
                    console.log('Error al mostrar los productos ' + error);
                });
            });
        });
    }
    // get<any>
    obtenerArticulosUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(res => {
                // localStorage.getItem('id_comp')
                this.httpUser.get(this.url + '/articles', {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
                }).subscribe(data => {
                    this.articulos = data;
                    this.articulos = this.articulos.data;
                    res(data);
                }, error => {
                    console.log('Error al mostrar los artículos de la compañía ' + error);
                });
            });
        });
    }
    //num, issue_date, origin_company_id, target_company_id. products <------ variables a utilizar para el servicio
    addOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise(res => {
                this.httpUser.post(this.url + '/orders?num=' + localStorage.getItem('numFac') + '&issue_date=' + localStorage.getItem('fecha') + '&origin_company_id=' + localStorage.getItem('id_comp') + '&target_company_id=' + localStorage.getItem('empresaPedido') + '&products=' + localStorage.getItem('pedidoReal'), {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
                }).subscribe(datoPedido => {
                    console.log(datoPedido);
                    this.pedido = datoPedido;
                    res(this.pedido);
                    console.log('Pedido añadido correctamente');
                }, error => {
                    console.log('Error al añadir este pedido. ' + error);
                });
            });
        });
    }
    obtenerUsuarios() {
        return new Promise(res => {
            this.httpUser.get(this.url + '/users', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }).subscribe(data => {
                this.usuarios = data;
                this.usuarios = this.usuarios.data;
                res(data);
            }, error => {
                console.log('Error al mostrar los usuarios ' + error);
            });
        });
    }
};
PedidosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
PedidosService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PedidosService);



/***/ }),

/***/ 9019:
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

/***/ 4367:
/*!*****************************************************!*\
  !*** ./src/app/crear-pedido/crear-pedido.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#cancelarPedido {\n  margin-top: 3.56%;\n}\n\n#btnAniadir {\n  margin-top: 4.33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFyLXBlZGlkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJjcmVhci1wZWRpZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhbmNlbGFyUGVkaWRvIHtcclxuICBtYXJnaW4tdG9wOiAzLjU2JTtcclxufVxyXG5cclxuI2J0bkFuaWFkaXIge1xyXG4gIG1hcmdpbi10b3A6IDQuMzMlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 9210:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/crear-pedido/crear-pedido.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"text-center\">Formulario crear pedido</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        Selecciona una empresa\r\n      </ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Empresa</ion-label>\r\n      <ion-select (ionChange)=\"abrirModal()\" [(ngModel)]=\"opcionSeleccionado\" (change)=\"capturar()\">\r\n        <ion-select-option *ngFor=\"let empresa of empresasReales | ordenar:'id'\" value=\"{{ empresa.id }}\">\r\n          {{empresa.name}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-button color=\"danger\" expand=\"full\" (click)=\"cancelarPedido()\" id=\"cancelarPedido\">\r\n    <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    Cancelar\r\n  </ion-button>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_crear-pedido_crear-pedido_module_ts.js.map