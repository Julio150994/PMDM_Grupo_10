(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["src_app_editar-usuario_editar-usuario_module_ts"],{

/***/ 79168:
/*!*****************************************************************!*\
  !*** ./src/app/editar-usuario/editar-usuario-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUsuarioPageRoutingModule": () => (/* binding */ EditarUsuarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _editar_usuario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-usuario.page */ 96934);





const routes = [
    {
        path: '',
        component: _editar_usuario_page__WEBPACK_IMPORTED_MODULE_0__.EditarUsuarioPage
    }
];
let EditarUsuarioPageRoutingModule = class EditarUsuarioPageRoutingModule {
};
EditarUsuarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule],
    })
], EditarUsuarioPageRoutingModule);



/***/ }),

/***/ 68796:
/*!*********************************************************!*\
  !*** ./src/app/editar-usuario/editar-usuario.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUsuarioPageModule": () => (/* binding */ EditarUsuarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _editar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-usuario-routing.module */ 79168);
/* harmony import */ var _editar_usuario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-usuario.page */ 96934);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/pipes.module */ 35503);








let EditarUsuarioPageModule = class EditarUsuarioPageModule {
};
EditarUsuarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _editar_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarUsuarioPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__.PipesModule
        ],
        declarations: [_editar_usuario_page__WEBPACK_IMPORTED_MODULE_1__.EditarUsuarioPage]
    })
], EditarUsuarioPageModule);



/***/ }),

/***/ 96934:
/*!*******************************************************!*\
  !*** ./src/app/editar-usuario/editar-usuario.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarUsuarioPage": () => (/* binding */ EditarUsuarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_editar_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editar-usuario.page.html */ 31191);
/* harmony import */ var _editar_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-usuario.page.scss */ 73664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ 89019);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ 94961);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);










let EditarUsuarioPage = class EditarUsuarioPage {
    constructor(alertContrasenia, loadingUserCtrl, httpUser, navCtrl, usersService) {
        this.alertContrasenia = alertContrasenia;
        this.loadingUserCtrl = loadingUserCtrl;
        this.httpUser = httpUser;
        this.navCtrl = navCtrl;
        this.usersService = usersService;
        this.url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__.environment.almagestUrl;
        this.formularioEditar = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(1)]),
            secondname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(1)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5)]),
            compania: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.presentLoading();
            this.mostrarCompanias();
            this.usuario = yield this.usersService.usuario;
            this.cambiarNombres();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingUserCtrl.create({
                message: 'Cargando usuario...',
                duration: 100
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    cancelarSeleccion(evento) {
        console.log('No ha seleccionado una compañía a editar ' + evento);
    }
    cambiarNombres() {
        this.formularioEditar.controls.id.setValue(this.usuario.id);
        this.formularioEditar.controls.firstname.setValue(this.usuario.firstname);
        this.formularioEditar.controls.secondname.setValue(this.usuario.secondname);
        this.formularioEditar.controls.email.setValue(this.usuario.email);
        this.formularioEditar.controls.compania.setValue(this.usuario.compania);
    }
    mostrarCompanias() {
        this.usersService.obtenerCompanias()
            .then(data => {
            console.log(data);
            this.companies = data;
            this.companies = this.companies.data;
        });
    }
    editarUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.form = this.formularioEditar.value;
            this.token = localStorage.getItem('token');
            this.usersService.editar(this.token, this.form.id, this.form.firstname, this.form.secondname, this.form.email, this.form.password, this.form.compania);
            this.navCtrl.back();
            this.usersService.obtenerUsuarios(localStorage.getItem('token'));
            yield this.presentLoading();
            window.location.reload();
        });
    }
};
EditarUsuarioPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService }
];
EditarUsuarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-editar-usuario',
        template: _raw_loader_editar_usuario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editar_usuario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditarUsuarioPage);



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

/***/ 73664:
/*!*********************************************************!*\
  !*** ./src/app/editar-usuario/editar-usuario.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".titulo {\n  text-align: center;\n  margin-right: 13%;\n}\n\n#dato_usuario {\n  margin-top: 2.5%;\n  margin-bottom: 2.1%;\n}\n\n#botonEditar {\n  margin-top: 6.5%;\n  margin-right: 2%;\n  margin-left: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdGFyLXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEzJTtcclxufVxyXG5cclxuI2RhdG9fdXN1YXJpbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMi4xJTtcclxufVxyXG5cclxuI2JvdG9uRWRpdGFyIHtcclxuICAgIG1hcmdpbi10b3A6IDYuNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG59Il19 */");

/***/ }),

/***/ 31191:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editar-usuario/editar-usuario.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tabs/tab1\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"titulo\">Editar usuario</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"formularioEditar\" (ngSubmit)=\"editarUsuario()\" method=\"post\">\r\n    <ion-input formControlName=\"id\" type=\"hidden\" disabled></ion-input>\r\n\r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Nombre:</ion-label>\r\n      <ion-input formControlName=\"firstname\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioEditar.controls.firstname.errors?.required && (formularioEditar.touched || formularioEditar.dirty)\">\r\n      * Debe introducir un nombre.\r\n    </ion-label>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioEditar.controls.firstname.errors?.minLength && (formularioEditar.touched || formularioEditar.dirty)\">\r\n      * Su nombre debe tener al menos 3 caracteres.\r\n    </ion-label>\r\n    \r\n    \r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Apellido:</ion-label>\r\n      <ion-input formControlName=\"secondname\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioEditar.controls.secondname.errors?.required && (formularioEditar.touched || formularioEditar.dirty)\">\r\n      * Debe introducir un apellido.\r\n    </ion-label>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioEditar.controls.secondname.errors?.minLength && (formularioEditar.touched || formularioEditar.dirty)\">\r\n      * Su apellido debe tener al menos 3 caracteres.\r\n    </ion-label>\r\n\r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Email:</ion-label>\r\n      <ion-input formControlName=\"email\" type=\"email\"></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioEditar.controls.email.errors?.required && (formularioEditar.touched || formularioEditar.dirty)\">\r\n      * Debe introducir un email.\r\n    </ion-label>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioEditar.controls.email.errors?.email && (formularioEditar.touched || formularioEditar.dirty)\">\r\n      * El email no es válido.\r\n    </ion-label>\r\n\r\n    <ion-item class=\"dato_usuario\">\r\n      <ion-label position=\"floating\">Contraseña:</ion-label>\r\n      <ion-input formControlName=\"password\" type=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioEditar.controls.password.errors?.required && (formularioEditar.touched || formularioEditar.dirty)\">\r\n      * Debe introducir una contraseña.\r\n    </ion-label>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioEditar.controls.password.errors?.minLength && (formularioEditar.touched || formularioEditar.dirty)\">\r\n      * La contraseña debe tener al menos 5 caracteres.\r\n    </ion-label>\r\n\r\n   <ion-item class=\"dato_usuario\">\r\n      <ion-label>Nombre de Compañía:</ion-label>\r\n      <ion-select formControlName=\"compania\" value=\"brown\" okText=\"Seleccionar\" cancelText=\"Cancelar\" (ionCancel)=\"cancelarSeleccion($event)\">\r\n        <ion-select-option *ngFor=\"let company of companies | ordenar:'id'\" value=\"{{ company.id }}\">\r\n          {{company.name }}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-label color=\"danger\" *ngIf=\"formularioEditar.controls.compania.errors?.required && (formularioEditar.touched || formularioEditar.dirty)\">\r\n      * Seleccione un nombre de compañía.\r\n    </ion-label>\r\n\r\n    <ion-button expand=\"full\" type=\"submit\" [disabled]=\"!formularioEditar.valid\" id=\"botonRegister\" color=\"tertiary\" id=\"botonEditar\">\r\n      <ion-icon name=\"person\"></ion-icon>\r\n      Editar\r\n    </ion-button>\r\n  </form>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_editar-usuario_editar-usuario_module_ts.js.map