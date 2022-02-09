(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["src_app_register-almagest_register-almagest_module_ts"],{

/***/ 13032:
/*!***********************************************************************!*\
  !*** ./src/app/register-almagest/register-almagest-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterAlmagestPageRoutingModule": () => (/* binding */ RegisterAlmagestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _register_almagest_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-almagest.page */ 40385);




const routes = [
    {
        path: '',
        component: _register_almagest_page__WEBPACK_IMPORTED_MODULE_0__.RegisterAlmagestPage
    }
];
let RegisterAlmagestPageRoutingModule = class RegisterAlmagestPageRoutingModule {
};
RegisterAlmagestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterAlmagestPageRoutingModule);



/***/ }),

/***/ 77543:
/*!***************************************************************!*\
  !*** ./src/app/register-almagest/register-almagest.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterAlmagestPageModule": () => (/* binding */ RegisterAlmagestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _register_almagest_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-almagest-routing.module */ 13032);
/* harmony import */ var _register_almagest_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-almagest.page */ 40385);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/pipes.module */ 35503);








let RegisterAlmagestPageModule = class RegisterAlmagestPageModule {
};
RegisterAlmagestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _register_almagest_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterAlmagestPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_register_almagest_page__WEBPACK_IMPORTED_MODULE_1__.RegisterAlmagestPage]
    })
], RegisterAlmagestPageModule);



/***/ }),

/***/ 40385:
/*!*************************************************************!*\
  !*** ./src/app/register-almagest/register-almagest.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterAlmagestPage": () => (/* binding */ RegisterAlmagestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_almagest_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register-almagest.page.html */ 54205);
/* harmony import */ var _register_almagest_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-almagest.page.scss */ 76510);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ 94961);








let RegisterAlmagestPage = class RegisterAlmagestPage {
    constructor(alertUserCtrl, http, navCtrl, usersService) {
        this.alertUserCtrl = alertUserCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.url = 'http://semillero.allsites.es/public/api'; // //url = environment.almagestUrl;
        /** Para el registro de usuarios que no sean el administrador */
        this.formularioRegistro = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]),
            secondname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]),
            c_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]),
            compania: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    ngOnInit() {
        console.log('Estas en la página de registrar usuarios.');
        this.mostrarCompanias();
    }
    cancelarSeleccion(evento) {
        console.log('No ha seleccionado una compañía ' + evento);
    }
    mostrarCompanias() {
        this.usersService.obtenerCompanias()
            .then(data => {
            console.log(data);
            this.companies = data;
            this.companies = this.companies.data;
        });
    }
    registrarUsuario() {
        this.f = this.formularioRegistro.value;
        console.log(this.f.compania);
        if (this.f.password === this.f.c_password) {
            return new Promise((res) => {
                this.http.post(this.usersService.url + '/register?' + 'firstname=' + this.f.firstname +
                    '&secondname=' + this.f.secondname + '&email=' + this.f.email + '&password=' + this.f.password +
                    '&c_password=' + this.f.c_password + '&company_id=' + this.f.compania, {}).subscribe(datoUsuario => {
                    console.log(datoUsuario);
                    this.user = datoUsuario;
                    res(this.user);
                    this.usuarioRegistrado(this.f.email);
                    this.navCtrl.navigateForward('/login-almagest');
                }, error => {
                    console.log('Error al registrar este usuario ' + error);
                });
            });
        }
        else {
            console.log('Ambas contraseñas deben coincidir.');
            this.alertContrasenias();
        }
    }
    alertContrasenias() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const notEqualPassword = yield this.alertUserCtrl.create({
                header: 'REGISTER',
                cssClass: 'registerCss',
                message: '<strong>Ambas contraseñas deben coincidir.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (register) => {
                        }
                    }
                ]
            });
            yield notEqualPassword.present();
        });
    }
    usuarioRegistrado(email) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const registrado = yield this.alertUserCtrl.create({
                header: 'Mensaje',
                cssClass: 'registerCss',
                message: '<strong>Usuario ' + email + 'registrado correctamente.</strong>',
                buttons: [
                    {
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (register) => {
                        }
                    }
                ]
            });
            yield registrado.present();
        });
    }
};
RegisterAlmagestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService }
];
RegisterAlmagestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register-almagest',
        template: _raw_loader_register_almagest_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_almagest_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterAlmagestPage);



/***/ }),

/***/ 76510:
/*!***************************************************************!*\
  !*** ./src/app/register-almagest/register-almagest.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".titulo {\n  text-align: center;\n  margin-right: 12%;\n}\n\n/*Componentes del formulario de regsitrar usuario*/\n\n.dato_usuario {\n  margin-top: 2.5%;\n  margin-bottom: 2.1%;\n}\n\n#botonRegister {\n  margin-top: 6.5%;\n  margin-right: 2%;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWFsbWFnZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQSxrREFBQTs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREoiLCJmaWxlIjoicmVnaXN0ZXItYWxtYWdlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEyJTtcclxufVxyXG5cclxuXHJcbi8qQ29tcG9uZW50ZXMgZGVsIGZvcm11bGFyaW8gZGUgcmVnc2l0cmFyIHVzdWFyaW8qL1xyXG5cclxuLmRhdG9fdXN1YXJpbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi4xJTtcclxufVxyXG5cclxuI2JvdG9uUmVnaXN0ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNi41JTtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbn0iXX0= */");

/***/ }),

/***/ 54205:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register-almagest/register-almagest.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/login-almagest\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titulo\">Registrar usuario</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"formularioRegistro\" (ngSubmit)=\"registrarUsuario()\" method=\"post\">    \r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Nombre:</ion-label>\r\n      <ion-input formControlName=\"firstname\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.firstname.errors?.required && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * Debe introducir un nombre.\r\n    </ion-label>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.firstname.errors?.minLength && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * Su nombre debe tener al menos 3 caracteres.\r\n    </ion-label>\r\n    \r\n    \r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Apellido:</ion-label>\r\n      <ion-input formControlName=\"secondname\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.secondname.errors?.required && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * Debe introducir un apellido.\r\n    </ion-label>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.secondname.errors?.minLength && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * Su apellido debe tener al menos 3 caracteres.\r\n    </ion-label>\r\n\r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Email:</ion-label>\r\n      <ion-input formControlName=\"email\" type=\"email\">\r\n      </ion-input>\r\n    </ion-item>\r\n     <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.email.errors?.required && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * Debe introducir un email.\r\n    </ion-label>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.email.errors?.email && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * El email no es válido.\r\n    </ion-label>\r\n\r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Contraseña:</ion-label>\r\n      <ion-input formControlName=\"password\" type=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.password.errors?.required && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * Debe introducir una contraseña.\r\n    </ion-label>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.password.errors?.minLength && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * La contraseña debe tener al menos 5 caracteres.\r\n    </ion-label>\r\n\r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Confirma su contraseña:</ion-label>\r\n      <ion-input formControlName=\"c_password\" type=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.c_password.errors?.required && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * Debe introducir la contraseña.\r\n    </ion-label>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.c_password.errors?.minLength && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * La contraseña debe tener al menos 5 caracteres.\r\n    </ion-label>\r\n\r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label>Nombre de Compañía:</ion-label>\r\n      <ion-select formControlName=\"compania\" value=\"brown\" okText=\"Seleccionar\" cancelText=\"Cancelar\" (ionCancel)=\"cancelarSeleccion($event)\">\r\n        <ion-select-option *ngFor=\"let company of companies | ordenar:'id'\" value=\"{{ company.id }}\">\r\n          {{company.name }}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioRegistro.controls.compania.errors?.required && (formularioRegistro.touched || formularioRegistro.dirty)\">\r\n      * Seleccione un nombre de compañía.\r\n    </ion-label>\r\n\r\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!formularioRegistro.valid\" id=\"botonRegister\" color=\"tertiary\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      Registrar\r\n    </ion-button>\r\n  </form>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_register-almagest_register-almagest_module_ts.js.map