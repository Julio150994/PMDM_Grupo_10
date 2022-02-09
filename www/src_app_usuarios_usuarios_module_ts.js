(self["webpackChunktrabajo_almagest_grupo10"] = self["webpackChunktrabajo_almagest_grupo10"] || []).push([["src_app_usuarios_usuarios_module_ts"],{

/***/ 79603:
/*!*****************************************************!*\
  !*** ./src/app/usuarios/usuarios-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosPageRoutingModule": () => (/* binding */ UsuariosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios.page */ 33097);




const routes = [
    {
        path: 'usuarios',
        component: _usuarios_page__WEBPACK_IMPORTED_MODULE_0__.UsuariosPage,
        children: [
            {
                path: 'catalogos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_catalogos_catalogos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../catalogos/catalogos.module */ 18847)).then(m => m.CatalogosPageModule)
            },
            {
                path: 'pedidos',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pedidos_pedidos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pedidos/pedidos.module */ 25253)).then(m => m.PedidosPageModule)
            }
        ]
    }
];
let UsuariosPageRoutingModule = class UsuariosPageRoutingModule {
};
UsuariosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UsuariosPageRoutingModule);



/***/ }),

/***/ 20760:
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuariosPageModule": () => (/* binding */ UsuariosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios-routing.module */ 79603);
/* harmony import */ var _usuarios_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios.page */ 33097);







let UsuariosPageModule = class UsuariosPageModule {
};
UsuariosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsuariosPageRoutingModule
        ],
        declarations: [_usuarios_page__WEBPACK_IMPORTED_MODULE_1__.UsuariosPage]
    })
], UsuariosPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_usuarios_usuarios_module_ts.js.map