(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/tabs.page */ 7942);
/* harmony import */ var _usuarios_usuarios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios/usuarios.page */ 3097);





const routes = [
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule)
    },
    {
        path: 'tabs',
        component: _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tab1_tab1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            }
        ]
    },
    {
        path: 'editar-usuario',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_editar-usuario_editar-usuario_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./editar-usuario/editar-usuario.module */ 8796)).then(m => m.EditarUsuarioPageModule)
    },
    {
        path: 'login-almagest',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login-almagest_login-almagest_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login-almagest/login-almagest.module */ 5038)).then(m => m.LoginAlmagestPageModule)
    },
    {
        path: 'register-almagest',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_register-almagest_register-almagest_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./register-almagest/register-almagest.module */ 7543)).then(m => m.RegisterAlmagestPageModule)
    },
    {
        path: 'usuarios',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_usuarios_usuarios_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./usuarios/usuarios.module */ 760)).then(m => m.UsuariosPageModule)
    },
    {
        path: 'usuarios',
        component: _usuarios_usuarios_page__WEBPACK_IMPORTED_MODULE_1__.UsuariosPage,
        children: [
            {
                path: 'catalogos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_catalogos_catalogos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./catalogos/catalogos.module */ 8847)).then(m => m.CatalogosPageModule)
            },
            {
                path: 'pedidos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pedidos_pedidos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pedidos/pedidos.module */ 5253)).then(m => m.PedidosPageModule)
            }
        ]
    },
    {
        path: 'aniadir-producto',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_aniadir-producto_aniadir-producto_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./aniadir-producto/aniadir-producto.module */ 76)).then(m => m.AniadirProductoPageModule)
    },
    {
        path: 'modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_crear-pedido_crear-pedido_module_ts"), __webpack_require__.e("src_app_modal_modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modal/modal.module */ 2641)).then(m => m.ModalPageModule)
    },
    {
        path: 'crear-pedido',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_crear-pedido_crear-pedido_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./crear-pedido/crear-pedido.module */ 8067)).then(m => m.CrearPedidoPageModule)
    },
    {
        path: '**',
        redirectTo: '/login-almagest',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/pipes.module */ 5503);
/* harmony import */ var _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-interceptor.service */ 1035);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 1484);
/* harmony import */ var _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/file-opener/ngx */ 1939);
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ 7265);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy,
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HTTP_INTERCEPTORS,
                useClass: _auth_interceptor_service__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptorService,
                multi: true
            },
            _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File,
            _awesome_cordova_plugins_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__.FileOpener,
            _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__.EmailComposer,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 1035:
/*!*********************************************!*\
  !*** ./src/app/auth-interceptor.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let AuthInterceptorService = class AuthInterceptorService {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        const token = localStorage.getItem('token');
        let request = req;
        if (token) {
            request = req.clone({
                setHeaders: {
                    authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)((err) => {
            if (err.status === 401) {
                this.router.navigateByUrl('/login');
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(err);
        }));
    }
};
AuthInterceptorService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthInterceptorService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthInterceptorService);



/***/ }),

/***/ 4619:
/*!****************************************!*\
  !*** ./src/app/pipes/buscador.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscadorPipe": () => (/* binding */ BuscadorPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);




let BuscadorPipe = class BuscadorPipe {
    constructor(loadingCtrl, alertCtrl, usersService) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.usersService = usersService;
    }
    transform(articulos, texto) {
        if (!articulos || !texto) {
            return articulos;
        }
        texto = texto.toLowerCase();
        return articulos.filter(resultado => resultado.description.toLowerCase().includes(texto));
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Cargando...',
                duration: 2000
            });
            yield loading.present();
        });
    }
};
BuscadorPipe.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService }
];
BuscadorPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Pipe)({
        name: 'buscador'
    })
], BuscadorPipe);



/***/ }),

/***/ 1413:
/*!*****************************************!*\
  !*** ./src/app/pipes/companias.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompaniasPipe": () => (/* binding */ CompaniasPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let CompaniasPipe = class CompaniasPipe {
    /* Lo utilizamos para ordenar nuestras compañías */
    transform(valores, companias) {
        if (!Array.isArray(valores)) {
            return;
        }
        valores.sort((i, j) => {
            if (i[companias] < j[companias]) {
                return -1;
            }
            else if (i[companias] > j[companias]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return valores;
    }
};
CompaniasPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'ordenar'
    })
], CompaniasPipe);



/***/ }),

/***/ 5503:
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _companias_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companias.pipe */ 1413);
/* harmony import */ var _users_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.pipe */ 5735);
/* harmony import */ var _buscador_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buscador.pipe */ 4619);






let PipesModule = class PipesModule {
};
PipesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_companias_pipe__WEBPACK_IMPORTED_MODULE_0__.CompaniasPipe, _users_pipe__WEBPACK_IMPORTED_MODULE_1__.UsersPipe, _buscador_pipe__WEBPACK_IMPORTED_MODULE_2__.BuscadorPipe],
        exports: [_companias_pipe__WEBPACK_IMPORTED_MODULE_0__.CompaniasPipe, _users_pipe__WEBPACK_IMPORTED_MODULE_1__.UsersPipe, _buscador_pipe__WEBPACK_IMPORTED_MODULE_2__.BuscadorPipe],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ]
    })
], PipesModule);



/***/ }),

/***/ 5735:
/*!*************************************!*\
  !*** ./src/app/pipes/users.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersPipe": () => (/* binding */ UsersPipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let UsersPipe = class UsersPipe {
    transform(values, users) {
        if (!Array.isArray(values)) {
            return;
        }
        values.sort((i, j) => {
            if (i[users] < j[users]) {
                return -1;
            }
            else if (i[users] > j[users]) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return values;
    }
};
UsersPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'orderBy'
    })
], UsersPipe);



/***/ }),

/***/ 4961:
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let UsersService = class UsersService {
    constructor(alertUserCtrl, httpUser, loadingUserCtrl) {
        this.alertUserCtrl = alertUserCtrl;
        this.httpUser = httpUser;
        this.loadingUserCtrl = loadingUserCtrl;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.almagestUrl;
    }
    login(mail, contrasenia) {
        return new Promise(res => {
            this.httpUser.post(this.url + '/login', {
                email: mail,
                password: contrasenia
            }).subscribe(data => {
                console.log(data);
                this.user = data;
                this.user = this.user.data;
                localStorage.setItem('token', this.user);
                res(data);
            }, error => {
                this.userNoRegistrado();
                console.log('Error este usuario no está registrado' + error);
            });
        });
    }
    userNoRegistrado() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const notValid = yield this.alertUserCtrl.create({
                header: 'LOGIN',
                cssClass: 'loginCss',
                message: '<strong>El correo electrónico no existe o la contraseña es errónea.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (valid) => {
                        }
                    }
                ]
            });
            yield notValid.present();
        });
    }
    obtenerUsuarios(tok) {
        return new Promise(res => {
            this.httpUser.get(this.url + '/users', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + tok)
            }).subscribe(data => {
                this.token = data;
                this.token = this.token.data;
                res(data);
            }, error => {
                console.log('Error al mostrar los usuarios ' + error);
            });
        });
    }
    obtenerIdUsuario(id) {
        return new Promise(res => {
            this.httpUser.get(this.url + '/user/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }).subscribe(data => {
                console.log(data);
                this.usuario = data;
                this.usuario = this.usuario.data;
                this.compania = this.usuario.company_id;
                this.name_comp = this.usuario.company;
                localStorage.setItem('name_comp', this.name_comp);
                localStorage.setItem('id_comp', this.compania);
                res(data);
            }, error => {
                console.log('No se ha podido obtener el id del usuario ' + error);
            });
        });
    }
    activar(id) {
        return new Promise((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.loadUsers('Activando usuario...');
            setTimeout(() => {
                this.actived.dismiss();
                this.httpUser.post(this.url + '/activate?user_id=' + id, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')),
                }).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(data);
                    window.location.reload();
                    this.token = data;
                    res(data);
                }), error => {
                    console.log('No se ha podido activar este usuario ' + error);
                });
            }, 1750);
        }));
    }
    desactivar(id) {
        return new Promise((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.loadUsers('Desactivando usuario...');
            setTimeout(() => {
                this.actived.dismiss();
                this.httpUser.post(this.url + '/deactivate?user_id=' + id, {
                    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')),
                }).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                    console.log(data);
                    window.location.reload();
                    this.token = data;
                    res(data);
                }), error => {
                    console.log('No se ha podido desactivar este usuario ' + error);
                });
            }, 1750);
        }));
    }
    loadUsers(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.actived = yield this.loadingUserCtrl.create({
                message,
            });
            yield this.actived.present();
        });
    }
    usuarioEditado(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const editado = yield this.alertUserCtrl.create({
                header: 'Mensaje',
                cssClass: 'editCss',
                message: '<strong>Usuario ' + email + ' editado correctamente.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (update) => {
                        }
                    }
                ]
            });
            yield editado.present();
        });
    }
    editar(tok, id, firstname, secondname, email, password, compania) {
        return new Promise((res) => {
            this.httpUser.post(this.url + '/user/updated/' + id + '?firstname=' + firstname +
                '&secondname=' + secondname + '&email=' + email + '&password=' + password +
                '&company_id=' + compania, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + tok)
            }).subscribe(data => {
                console.log(data);
                this.token = data;
                this.users = data;
                this.users = this.users.data;
                res(this.users);
                this.usuarioEditado(email);
            }, err => {
                console.log('Error al editar este usuario: ' + err);
            });
        });
    }
    getElim(id) {
        return new Promise((resolve, reject) => {
            console.log(localStorage.getItem('token'));
            this.httpUser.post(this.url + '/user/deleted/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + (localStorage.getItem('token')))
            }).subscribe(res => {
                console.log(res);
                window.location.reload();
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    obtenerCatalogo(id) {
        return new Promise(res => {
            this.httpUser.post(this.url + '/products/company?id=' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }).subscribe(data => {
                console.log(data);
                this.catalogo = data;
                this.catalogo = this.catalogo.data;
                res(data);
            }, error => {
                console.log('Error al mostrar el catálogo de la compañia ' + error);
            });
        });
    }
    getEncabezadoProductos() {
        return new Promise(res => {
            this.httpUser.post(this.url + '/products/company?id=' + localStorage.getItem('id_comp'), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }).subscribe(data => {
                this.catalogo = data;
                this.catalogo = this.catalogo.data;
                res(data);
            }, error => {
                console.log('Error al mostrar el contador de artículos ' + error);
            });
        });
    }
    obtenerCompanias() {
        return new Promise(res => {
            this.httpUser.get(this.url + '/companies').subscribe(data => {
                this.token = data;
                this.token = this.token.data;
                res(data);
            }, error => {
                console.log('Error al mostrar los usuarios ' + error);
            });
        });
    }
    obtenerProductos() {
        return new Promise(res => {
            this.httpUser.post(this.url + '/products/company?id=' + localStorage.getItem('id_comp'), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }).subscribe(data => {
                console.log(data);
                this.producto = data;
                this.producto = this.producto.data;
                res(data);
            }, error => {
                console.log('Error al mostrar los productos ' + error);
            });
        });
    }
    obtenerArticulos(tok) {
        return new Promise(res => {
            this.httpUser.get(this.url + '/articles', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + tok)
            }).subscribe(data => {
                console.log(data);
                this.token = data;
                this.token = this.token.data;
                res(data);
            }, error => {
                console.log('Error al mostrar los artículos ' + error);
            });
        });
    }
    obtenerFamilias() {
        return new Promise(res => {
            this.httpUser.get(this.url + '/families').subscribe(data => {
                this.familias = data;
                this.familias = this.familias.data;
                res(data);
            }, error => {
                console.log('Error al mostrar los familias ' + error);
            });
        });
    }
    addProduct(tok, article_id, company_id, price, familia) {
        return new Promise(res => {
            this.httpUser.post(this.url + '/products?article_id=' + article_id + '&company_id=' +
                company_id + '&price=' + price + '&family_id=' + familia, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + tok)
            }).subscribe(datoProducto => {
                console.log(datoProducto);
                this.producto = datoProducto;
                res(this.producto);
                console.log('Producto añadido correctamente');
            }, error => {
                console.log('Error al añadir este producto. ' + error);
            });
        });
    }
    removeProduct(id) {
        return new Promise((resolve, reject) => {
            this.httpUser.delete(this.url + '/products/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + (localStorage.getItem('token')))
            }).subscribe(res => {
                console.log(res);
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
    obtenerPedidosCompaniaUsuario() {
        return new Promise(res => {
            this.httpUser.get(this.url + '/orders', {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            }).subscribe(data => {
                console.log(data);
                this.pedido = data;
                this.pedido = this.pedido.data;
                res(data);
            }, error => {
                console.log('Error al mostrar los pedidos ' + error);
            });
        });
    }
};
UsersService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController }
];
UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 7665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 4427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 3097:
/*!*******************************************!*\
  !*** ./src/app/usuarios/usuarios.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosPage": () => (/* binding */ UsuariosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_usuarios_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./usuarios.page.html */ 8579);
/* harmony import */ var _usuarios_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios.page.scss */ 6235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let UsuariosPage = class UsuariosPage {
    constructor() { }
};
UsuariosPage.ctorParameters = () => [];
UsuariosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-usuarios',
        template: _raw_loader_usuarios_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_usuarios_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UsuariosPage);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    almagestUrl: 'http://semillero.allsites.es/public/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 4427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 6235:
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c3Vhcmlvcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 7665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\" color=\"dark\">\r\n    <!-- Pestaña para el administrador -->\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon name=\"people\"></ion-icon>\r\n      <ion-label>Gestión de usuarios</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ 8579:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/usuarios.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\r\n\r\n  <!-- Pestañas para los usuarios -->\r\n  <ion-tab-bar slot=\"bottom\" color=\"dark\">\r\n    <ion-tab-button tab=\"catalogos\">\r\n      <ion-icon name=\"list-outline\"></ion-icon>\r\n      <ion-label>Catálogo</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"pedidos\">\r\n      <ion-icon name=\"bag-handle\"></ion-icon>\r\n      <ion-label>Pedidos</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map