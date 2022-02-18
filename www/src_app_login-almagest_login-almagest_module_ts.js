(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["src_app_login-almagest_login-almagest_module_ts"],{

/***/ 7423:
/*!*****************************************************************!*\
  !*** ./src/app/login-almagest/login-almagest-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAlmagestPageRoutingModule": () => (/* binding */ LoginAlmagestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_almagest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-almagest.page */ 9792);




const routes = [
    {
        path: '',
        component: _login_almagest_page__WEBPACK_IMPORTED_MODULE_0__.LoginAlmagestPage
    }
];
let LoginAlmagestPageRoutingModule = class LoginAlmagestPageRoutingModule {
};
LoginAlmagestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginAlmagestPageRoutingModule);



/***/ }),

/***/ 5038:
/*!*********************************************************!*\
  !*** ./src/app/login-almagest/login-almagest.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAlmagestPageModule": () => (/* binding */ LoginAlmagestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_almagest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-almagest-routing.module */ 7423);
/* harmony import */ var _login_almagest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-almagest.page */ 9792);







let LoginAlmagestPageModule = class LoginAlmagestPageModule {
};
LoginAlmagestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_almagest_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginAlmagestPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_almagest_page__WEBPACK_IMPORTED_MODULE_1__.LoginAlmagestPage]
    })
], LoginAlmagestPageModule);



/***/ }),

/***/ 9792:
/*!*******************************************************!*\
  !*** ./src/app/login-almagest/login-almagest.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAlmagestPage": () => (/* binding */ LoginAlmagestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_almagest_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-almagest.page.html */ 2986);
/* harmony import */ var _login_almagest_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-almagest.page.scss */ 3706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 4961);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);








let LoginAlmagestPage = class LoginAlmagestPage {
    constructor(alertUserCtrl, navCtrl, usersService, loadingCtrl) {
        this.alertUserCtrl = alertUserCtrl;
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.loadingCtrl = loadingCtrl;
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]),
        });
    }
    ngOnInit() {
        console.log('Login');
    }
    toRegister() {
        console.log('Página de registrar usuario');
        this.navCtrl.navigateForward('/register-almagest');
    }
    userBaneado() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const notValid = yield this.alertUserCtrl.create({
                header: 'LOGIN',
                cssClass: 'loginCss',
                message: '<strong>Usuario baneado por el administrador.Póngase en contacto en raul@raul.com.</strong>',
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
    problemaCuenta() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const notValid = yield this.alertUserCtrl.create({
                header: 'LOGIN',
                cssClass: 'loginCss',
                message: '<strong>Hay un problema con su cuenta. Escriba a raul@raul.com</strong>',
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
    userSinActivar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const notValid = yield this.alertUserCtrl.create({
                header: 'LOGIN',
                cssClass: 'loginCss',
                message: '<strong>Tienes que esperar que el administrador active tu cuenta.</strong>',
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
    usuarioLogueado() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.alertUserCtrl.create({
                header: 'USER',
                cssClass: 'loginCss',
                message: '<strong>Usuario logueado correctamente.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (valid) => {
                            this.navCtrl.navigateForward('/usuarios/catalogos');
                        }
                    }
                ]
            });
            yield user.present();
        });
    }
    adminLogueado() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.alertUserCtrl.create({
                header: 'ADMIN',
                cssClass: 'loginCss',
                message: '<strong>Administrador logueado correctamente.</strong>',
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
            yield user.present();
        });
    }
    userSinConfirmar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const notValid = yield this.alertUserCtrl.create({
                header: 'LOGIN',
                cssClass: 'loginCss',
                message: '<strong>Tienes que confirmar tu cuenta entrando en el enlace que te hemos proporcionado en tu correo electrónico.</strong>',
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
    cargarUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loadingUser = yield this.loadingCtrl.create({
                message: 'Cargando usuario...',
                duration: 1200
            });
            yield loadingUser.present();
            const { role, data } = yield loadingUser.onDidDismiss();
            this.usuarioLogueado(); // después de cargar el usuario
        });
    }
    loginUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.user.valid) {
                this.datos = this.user.value;
                this.email = this.datos.email;
                this.password = this.datos.password;
                yield this.usersService.login(this.email, this.password)
                    .then((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    this.tok = data;
                    this.usuario = this.tok.data;
                    this.token = this.usuario.token;
                    localStorage.setItem('token', this.token);
                    if (this.usuario.type === 'a') {
                        this.adminLogueado();
                        this.navCtrl.navigateForward('/tabs/tab1'); // ruta hacia el administrador
                    }
                    else {
                        let usuario;
                        usuario = yield this.usersService.obtenerUsuarios(this.usuario.token);
                        usuario = usuario.data;
                        for (let i = 0; i < usuario.length; i++) {
                            if (usuario[i].email === this.email) {
                                this.id = usuario[i].id;
                                break;
                            }
                        }
                        usuario = yield this.usersService.obtenerIdUsuario(this.usuario.id);
                        usuario = usuario.data;
                        this.deleted = usuario.deleted;
                        this.actived = usuario.actived;
                        this.email_confirmed = usuario.email_confirmed;
                        if (this.email_confirmed === 0) {
                            this.userSinConfirmar();
                        }
                        else if (this.email_confirmed === 1 && this.actived === 0) {
                            this.userSinActivar();
                        }
                        else if (this.email_confirmed === 1 && this.actived === 1 && this.deleted === 0) {
                            this.navCtrl.navigateForward('/usuarios/catalogos');
                            this.usuarioLogueado();
                        }
                        else if (this.email_confirmed === 1 && this.actived === 1 && this.deleted === 1) {
                            this.userBaneado();
                        }
                        else {
                            this.problemaCuenta();
                        }
                    }
                }));
            }
            else {
                console.log('Error al mostrar los usuarios.');
            }
        });
    }
};
LoginAlmagestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
LoginAlmagestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login-almagest',
        template: _raw_loader_login_almagest_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_almagest_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginAlmagestPage);



/***/ }),

/***/ 3706:
/*!*********************************************************!*\
  !*** ./src/app/login-almagest/login-almagest.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n#titulo {\n  text-align: center;\n}\n/* Imágen de logo del login */\n.imagen {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 1.8em;\n  margin-left: 38%;\n}\n/*Componentes del formulario de login*/\n#dato_usuario {\n  margin-top: 2.5%;\n  margin-bottom: 2.1%;\n}\n#botonLogin {\n  margin-top: 6.5%;\n  margin-right: 2%;\n  margin-left: 2%;\n}\n#botonRegister {\n  margin-top: 6.5%;\n  margin-right: 2%;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWFsbWFnZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxrQkFBQTtBQUVKO0FBRUEsNkJBQUE7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBSUEsc0NBQUE7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGSjtBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGSiIsImZpbGUiOiJsb2dpbi1hbG1hZ2VzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jdGl0dWxvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBJbcOhZ2VuIGRlIGxvZ28gZGVsIGxvZ2luICovXG4uaW1hZ2VuIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxLjhlbTtcbiAgbWFyZ2luLWxlZnQ6IDM4JTtcbn1cblxuLypDb21wb25lbnRlcyBkZWwgZm9ybXVsYXJpbyBkZSBsb2dpbiovXG4jZGF0b191c3VhcmlvIHtcbiAgbWFyZ2luLXRvcDogMi41JTtcbiAgbWFyZ2luLWJvdHRvbTogMi4xJTtcbn1cblxuI2JvdG9uTG9naW4ge1xuICBtYXJnaW4tdG9wOiA2LjUlO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbiNib3RvblJlZ2lzdGVyIHtcbiAgbWFyZ2luLXRvcDogNi41JTtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufSJdfQ== */");

/***/ }),

/***/ 2986:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-almagest/login-almagest.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title id=\"titulo\">Login usuario</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n    <ion-item>\r\n       <ion-img src=\"/assets/images/login.png\" class=\"imagen\"></ion-img>\r\n    </ion-item>\r\n\r\n    <form [formGroup]=\"user\" (ngSubmit)=\"loginUsuario()\">\r\n      <ion-item id=\"dato_usuario\">\r\n        <ion-label position=\"floating\">Email:</ion-label>\r\n        <ion-input formControlName=\"email\" type=\"email\" name=\"email\" pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\r\n            [(ngModel)]=\"user.email\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-label color=\"danger\" *ngIf=\"user.controls.email.errors?.required && (user.touched || user.dirty)\">\r\n        * Debe introducir su email.\r\n      </ion-label>\r\n      <ion-label color=\"danger\" *ngIf=\"user.controls.email.errors?.email && (user.touched || user.dirty)\">\r\n        * Su email no es válido.\r\n      </ion-label>\r\n\r\n      <ion-item id=\"dato_usuario\">\r\n        <ion-label position=\"floating\">Contraseña:</ion-label>\r\n        <ion-input formControlName=\"password\" type=\"password\" name=\"password\" [(ngModel)]=\"user.password\">\r\n        </ion-input>\r\n      </ion-item>\r\n      <ion-label color=\"danger\" *ngIf=\"user.controls.password.errors?.required && (user.touched || user.dirty)\">\r\n        * Debe introducir su contraseña.\r\n      </ion-label>\r\n      <ion-label color=\"danger\" *ngIf=\"user.controls.password.errors?.minLength && (user.touched || user.dirty)\">\r\n        * Su contraseña debe tener al menos 5 caracteres.\r\n      </ion-label>\r\n      \r\n      <ion-button color=\"success\" expand=\"full\" (click)=\"toRegister()\" id=\"botonRegister\">\r\n        <ion-icon name=\"person-add\"></ion-icon>\r\n        Registrar usuario\r\n      </ion-button>\r\n\r\n      <ion-button color=\"tertiary\" expand=\"full\" type=\"submit\" [disabled]=\"!user.valid\" id=\"botonLogin\">\r\n        <ion-icon name=\"log-in\"></ion-icon>\r\n        Sign In\r\n      </ion-button>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login-almagest_login-almagest_module_ts.js.map