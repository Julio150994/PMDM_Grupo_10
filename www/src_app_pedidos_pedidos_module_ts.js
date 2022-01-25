(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["src_app_pedidos_pedidos_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _lista_pedidos_lista_pedidos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lista-pedidos/lista-pedidos.component */ 993);
/* harmony import */ var _contenido_pedido_contenido_pedido_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contenido-pedido/contenido-pedido.component */ 5516);





let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _lista_pedidos_lista_pedidos_component__WEBPACK_IMPORTED_MODULE_0__.ListaPedidosComponent,
            _contenido_pedido_contenido_pedido_component__WEBPACK_IMPORTED_MODULE_1__.ContenidoPedidoComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ],
        exports: [
            _lista_pedidos_lista_pedidos_component__WEBPACK_IMPORTED_MODULE_0__.ListaPedidosComponent,
            _contenido_pedido_contenido_pedido_component__WEBPACK_IMPORTED_MODULE_1__.ContenidoPedidoComponent
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 5516:
/*!***************************************************************************!*\
  !*** ./src/app/components/contenido-pedido/contenido-pedido.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContenidoPedidoComponent": () => (/* binding */ ContenidoPedidoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contenido_pedido_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contenido-pedido.component.html */ 6101);
/* harmony import */ var _contenido_pedido_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contenido-pedido.component.scss */ 7745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let ContenidoPedidoComponent = class ContenidoPedidoComponent {
    constructor() {
        this.pedidosReales = [];
    }
    ngOnInit() {
        console.log('Componente de contenido-pedido');
    }
};
ContenidoPedidoComponent.ctorParameters = () => [];
ContenidoPedidoComponent.propDecorators = {
    pedidos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pedido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    productos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    orders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    pedidosReales: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    numPedido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ContenidoPedidoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-contenido-pedido',
        template: _raw_loader_contenido_pedido_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contenido_pedido_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContenidoPedidoComponent);



/***/ }),

/***/ 993:
/*!*********************************************************************!*\
  !*** ./src/app/components/lista-pedidos/lista-pedidos.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaPedidosComponent": () => (/* binding */ ListaPedidosComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_lista_pedidos_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lista-pedidos.component.html */ 1112);
/* harmony import */ var _lista_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista-pedidos.component.scss */ 9176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ 4961);






let ListaPedidosComponent = class ListaPedidosComponent {
    constructor(navCtrl, usersService) {
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.pedidosReales = [];
        this.slice = 15;
    }
    ngOnInit() {
        console.log('Componente de lista-pedidos');
    }
    obtenerPedidos() {
        this.usersService.obtenerProductos()
            .then(productos => {
            this.productos = productos;
            this.productos = this.productos.data;
            this.usersService.obtenerPedidosCompaniaUsuario()
                .then(data => {
                this.pedidos = data;
                this.pedidos = this.pedidos.data;
                this.orders = this.pedidos;
            });
        });
    }
    cargarPedidos(event) {
        setTimeout(() => {
            this.slice += 20;
            event.target.complete();
            if (this.pedidosReales.length == this.pedidosReales.length) {
                event.target.disabled = true;
            }
        }, 400);
    }
};
ListaPedidosComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
ListaPedidosComponent.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInfiniteScroll, { static: true },] }],
    pedidos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    pedido: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    productos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    orders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    pedidosReales: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
ListaPedidosComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-lista-pedidos',
        template: _raw_loader_lista_pedidos_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lista_pedidos_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListaPedidosComponent);



/***/ }),

/***/ 4274:
/*!***************************************************!*\
  !*** ./src/app/pedidos/pedidos-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosPageRoutingModule": () => (/* binding */ PedidosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedidos.page */ 5868);




const routes = [
    {
        path: '',
        component: _pedidos_page__WEBPACK_IMPORTED_MODULE_0__.PedidosPage
    }
];
let PedidosPageRoutingModule = class PedidosPageRoutingModule {
};
PedidosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PedidosPageRoutingModule);



/***/ }),

/***/ 5253:
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosPageModule": () => (/* binding */ PedidosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedidos-routing.module */ 4274);
/* harmony import */ var _pedidos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedidos.page */ 5868);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 5642);








let PedidosPageModule = class PedidosPageModule {
};
PedidosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pedidos_routing_module__WEBPACK_IMPORTED_MODULE_0__.PedidosPageRoutingModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_pedidos_page__WEBPACK_IMPORTED_MODULE_1__.PedidosPage]
    })
], PedidosPageModule);



/***/ }),

/***/ 5868:
/*!*****************************************!*\
  !*** ./src/app/pedidos/pedidos.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosPage": () => (/* binding */ PedidosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pedidos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pedidos.page.html */ 3595);
/* harmony import */ var _pedidos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedidos.page.scss */ 1228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 4961);






let PedidosPage = class PedidosPage {
    constructor(loadingCtrl, alertCtrl, navCtrl, usersService) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.pedidosReales = [];
    }
    ngOnInit() {
        console.log(this.pedidosReales);
        this.usersService.obtenerPedidosCompaniaUsuario()
            .then(data => {
            var _a;
            this.pedidos = data;
            this.pedidos = this.pedidos.data;
            this.orders = this.pedidos;
            for (let j = 0; j < ((_a = this.orders) === null || _a === void 0 ? void 0 : _a.length); j++) {
                if (this.orders[j].target_company_name === localStorage.getItem('name_comp')) {
                    this.pedidosReales.push(this.orders[j]);
                }
            }
            console.log(this.pedidosReales);
            if (this.pedidosReales.length === 0) {
                document.getElementById('enca').innerHTML = 'No se han encontrado pedidos';
            }
            else {
                document.getElementById('enca').style.display = 'none';
            }
        });
        console.log('Pestaña de mostrar pedidos.');
    }
    onLogout() {
        localStorage.removeItem('token');
        this.loadLogoutUser('Cerrando sesión...');
    }
    loadLogoutUser(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
    toFormPedidos() {
        this.navCtrl.navigateForward('/crear-pedido');
    }
};
PedidosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
PedidosPage.propDecorators = {
    cargaPedidos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInfiniteScroll, { static: true },] }]
};
PedidosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pedidos',
        template: _raw_loader_pedidos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pedidos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PedidosPage);



/***/ }),

/***/ 7745:
/*!*****************************************************************************!*\
  !*** ./src/app/components/contenido-pedido/contenido-pedido.component.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-bottom: 3.57%;\n}\n\n.card {\n  margin-bottom: 6.36%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbmlkby1wZWRpZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSiIsImZpbGUiOiJjb250ZW5pZG8tcGVkaWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMy41NyU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYuMzYlO1xyXG59Il19 */");

/***/ }),

/***/ 9176:
/*!***********************************************************************!*\
  !*** ./src/app/components/lista-pedidos/lista-pedidos.component.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".encabezado {\n  text-align: center;\n  margin-top: -5.28%;\n  margin-bottom: -5.6%;\n  font-size: 15px;\n}\n\n.icono {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLXBlZGlkb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0oiLCJmaWxlIjoibGlzdGEtcGVkaWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmNhYmV6YWRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC01LjI4JTtcclxuICAgIG1hcmdpbi1ib3R0b206IC01LjYlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uaWNvbm8ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59Il19 */");

/***/ }),

/***/ 1228:
/*!*******************************************!*\
  !*** ./src/app/pedidos/pedidos.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".titulo {\n  text-align: center;\n  margin-right: 30.45%;\n}\n\n#enca {\n  margin: 0;\n  height: 40px;\n  text-align: center;\n  line-height: 2.56;\n}\n\nion-header.header-md:after {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlZGlkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBR0k7RUFDSSxnQkFBQTtBQUFSIiwiZmlsZSI6InBlZGlkb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwLjQ1JTtcclxufVxyXG5cclxuI2VuY2Ege1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNTY7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIge1xyXG4gICAgJi5oZWFkZXItbWQ6YWZ0ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 6101:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contenido-pedido/contenido-pedido.component.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-card class=\"card\">\r\n  <ion-card-header color=\"secondary\" id=\"content\">\r\n      <ion-card-title>Pedido {{ numPedido + 1 }}</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content class=\"text-white\">\r\n    <p>Número de pedido: <ion-label>{{ pedido.num }}</ion-label></p>\r\n    <p>Nombre de la compañía: <ion-label>{{ pedido.target_company_name }}</ion-label></p>\r\n    <p>Fecha de entrega: <ion-label>{{ pedido.issue_date }}</ion-label></p>\r\n    <p>Fecha de creación: <ion-label>{{ pedido.created_at }}</ion-label></p>\r\n    <div *ngIf=\"pedido.delivery_notes === 0\" class=\"icono\">\r\n      <ion-icon name=\"radio-button-on\" color=\"danger\"></ion-icon>\r\n      <ion-label color=\"danger\">Albarán</ion-label>\r\n    </div>\r\n    <div *ngIf=\"pedido.delivery_notes === 1\" class=\"icono\">\r\n      <ion-icon name=\"radio-button-on\" color=\"success\"></ion-icon>\r\n      <ion-label color=\"success\">Albarán</ion-label>\r\n    </div>\r\n    <div *ngIf=\"pedido.invoices === 0\" class=\"icono\">\r\n      <ion-icon name=\"radio-button-on\" color=\"danger\"></ion-icon>\r\n      <ion-label color=\"danger\">Factura de pedido</ion-label>\r\n    </div>\r\n    <div *ngIf=\"pedido.invoices === 1\" class=\"icono\">\r\n      <ion-icon name=\"radio-button-on\" color=\"success\"></ion-icon>\r\n      <ion-label color=\"success\">Factura de pedido</ion-label>\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n");

/***/ }),

/***/ 1112:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/lista-pedidos/lista-pedidos.component.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-contenido-pedido *ngFor=\"let pedido of pedidosReales | slice:0:slice; let numPedido = index\"\r\n    [pedidos]=\"pedidos\" [pedido] = \"pedido\" [productos]=\"productos\"\r\n    [orders]=\"orders\" [pedidosReales]=\"pedidosReales\" [numPedido]=\"numPedido\"\r\n    titulo=\"Contenido de pedido\">\r\n</app-contenido-pedido>\r\n\r\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"cargarPedidos($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\"\r\n      loadingText=\"Cargando pedidos...\">\r\n    </ion-infinite-scroll-content>\r\n</ion-infinite-scroll>\r\n");

/***/ }),

/***/ 3595:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pedidos/pedidos.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\" no-border>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"onLogout()\">\r\n        <ion-icon name=\"log-out-outline\"></ion-icon>\r\n        Logout\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titulo\">Pedidos</ion-title>\r\n  </ion-toolbar>\r\n\r\n  <h3 id=\"enca\" no-border></h3>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <app-lista-pedidos [pedidos]=\"pedidos\" [pedido] = \"pedido\" [productos]=\"productos\"\r\n    [orders]=\"orders\" [pedidosReales]=\"pedidosReales\" titulo=\"Listar pedidos\">\r\n  </app-lista-pedidos>\r\n</ion-content>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"toFormPedidos()\">\r\n    <ion-fab-button color=\"success\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n</ion-fab>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pedidos_pedidos_module_ts.js.map