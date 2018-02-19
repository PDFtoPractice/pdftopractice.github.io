webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/advice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdviceService = (function () {
    function AdviceService(http) {
        this.http = http;
    }
    AdviceService.prototype.getAdvice = function (drug, operation) {
        // Current url for testing with mock backend running locally
        return this.http.get('http://localhost:5000/api?drug=' + drug + '&operation=' + operation)
            .map(function (res) { return res.json(); });
    };
    AdviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], AdviceService);
    return AdviceService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1, p, h2 {\r\n  font-family: CoreCircus, sans-serif;\r\n  font-size: 20px;\r\n  -webkit-transform: translate(-230px, -30px);\r\n          transform: translate(-230px, -30px);\r\n  letter-spacing: -4px;\r\n\r\n}\r\n\r\n/*\r\n * Webfont: CoreCircus by S-Core\r\n * URL: http://www.myfonts.com/fonts/s-core/core-circus/regular/\r\n * Copyright: Copyright (c) 2013 by S-Core Co., Ltd.. All rights reserved.\r\n * Licensed pageviews: 10,000\r\n*\r\n * Webfont: CoreCircus2DDot1 by S-Core\r\n * URL: http://www.myfonts.com/fonts/s-core/core-circus/dot1/\r\n * Copyright: Copyright (c) 2013 by S-Core Co., Ltd.. All rights reserved.\r\n * Licensed pageviews: 10,000\r\n*/\r\n\r\n@font-face {\r\n\tfont-family: 'CoreCircus2DDot1';\r\n\tsrc: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.eot');\r\n\tsrc: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.eot?#iefix') format('embedded-opentype'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.woff2') format('woff2'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.woff') format('woff'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_1_0.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n\tfont-family: 'CoreCircus';\r\n\tsrc: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.eot');\r\n\tsrc: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.eot?#iefix') format('embedded-opentype'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.woff2') format('woff2'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.woff') format('woff'), url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_8_0.ttf') format('truetype');}\r\n\r\n@font-face {font-family: 'CoreCircusPierrot4';src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.eot');src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.eot?#iefix') format('embedded-opentype'),url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.woff2') format('woff2'),url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.woff') format('woff'),url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/209981/333BF4_13_0.ttf') format('truetype');}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-name-card></app-name-card>\r\n</div>\r\n\r\n<div style=\"text-align: center\">\r\n  <!-- <app-data-card></app-data-card> -->\r\n  <app-description-card></app-description-card>\r\n  <!-- <app-filter-card> </app-filter-card> -->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_imports_material_imports_module__ = __webpack_require__("../../../../../src/app/material-imports/material-imports.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__name_card_name_card_component__ = __webpack_require__("../../../../../src/app/name-card/name-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_card_filter_card_component__ = __webpack_require__("../../../../../src/app/filter-card/filter-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__description_card_description_card_component__ = __webpack_require__("../../../../../src/app/description-card/description-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_card_data_card_component__ = __webpack_require__("../../../../../src/app/data-card/data-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__advice_service__ = __webpack_require__("../../../../../src/app/advice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__name_card_name_card_component__["a" /* NameCardComponent */],
                __WEBPACK_IMPORTED_MODULE_7__filter_card_filter_card_component__["a" /* FilterCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__description_card_description_card_component__["a" /* DescriptionCardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__data_card_data_card_component__["a" /* DataCardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__material_imports_material_imports_module__["a" /* MaterialImportsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__advice_service__["a" /* AdviceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data-card/data-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\nmat-form-field {\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/data-card/data-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <form>\r\n    <mat-form-field>\r\n      <input matInput name=\"drug\" placeholder=\"Drug\" [(ngModel)]=\"advice.drug\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput name=\"operation\" placeholder=\"Operation\" [(ngModel)]=\"advice.operation\">\r\n    </mat-form-field>\r\n\r\n    <button (click)=\"getAdvice()\" mat-button color=\"primary\">Get Results</button>\r\n  </form>\r\n\r\n  <p>{{advice.advice}}</p>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/data-card/data-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__advice_service__ = __webpack_require__("../../../../../src/app/advice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Advice__ = __webpack_require__("../../../../../src/app/model/Advice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataCardComponent = (function () {
    function DataCardComponent(adviceService) {
        this.adviceService = adviceService;
        this.advice = new __WEBPACK_IMPORTED_MODULE_2__model_Advice__["a" /* Advice */]('', '', '');
    }
    DataCardComponent.prototype.ngOnInit = function () {
    };
    DataCardComponent.prototype.getAdvice = function () {
        var _this = this;
        // TODO: Sanitise inputs (maybe dropdown in html)
        this.adviceService.getAdvice(this.advice.drug, this.advice.operation)
            .subscribe(function (advice) {
            _this.advice = advice;
        });
    };
    DataCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-data-card',
            template: __webpack_require__("../../../../../src/app/data-card/data-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/data-card/data-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__advice_service__["a" /* AdviceService */]])
    ], DataCardComponent);
    return DataCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/description-card/description-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\r\n  font-size: 25px;\r\n  color: #555;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  letter-spacing: -2.5px;\r\n  max-width: 70%;\r\n  margin: 0 auto;\r\n  color: #8f9399;\r\n}\r\n\r\n/* Style the tab */\r\n\r\n.tab {\r\n    float: left;\r\n    border: 1px solid #ccc;\r\n    background-color: #f1f1f1;\r\n    width: 300px;\r\n    height: 210px;\r\n    margin-top: 20px;\r\n    margin-left: 20%;\r\n}\r\n\r\n/* Style the buttons inside the tab */\r\n\r\n.tab button {\r\n    font-family: CoreCircus, sans-serif;\r\n    letter-spacing: -3px;\r\n    display: block;\r\n    padding: 22px 16px;\r\n    width: 300px;\r\n    height: 70px;\r\n    border: none;\r\n    outline: none;\r\n    text-align: left;\r\n    cursor: pointer;\r\n    -webkit-transition: 0.3s;\r\n    transition: 0.3s;\r\n    font-size: 17px;\r\n}\r\n\r\n/* Change background color of buttons on hover and when active */\r\n\r\n* button:hover, button:focus {\r\n    background-color: #EC407A;\r\n    color: white;\r\n}\r\n\r\n/* Style the tab content */\r\n\r\n.tabcontent {\r\n    float: left;\r\n    padding: 0px 12px;\r\n    border: 1px solid #ccc;\r\n    width: 500px;\r\n    margin-top: 20px;\r\n    margin-right: 15%;\r\n    border-left: none;\r\n    height: 210px;\r\n    display:none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/description-card/description-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab\">\r\n    <button class=\"tablinks\" class=\"inactive\" (click)=\"openDescription(evt, 'What is SHOULD I TAKE?')\">What is SHOULD I TAKE?</button>\r\n    <button class=\"tablinks\" class=\"inactive\" (click)=\"openDescription(evt, 'Who are we?')\">Who are we?</button>\r\n    <button class=\"tablinks\" class=\"inactive\" (click)=\"openDescription(evt, 'Disclaimer')\">Disclaimer</button>\r\n</div>\r\n\r\n<div id=\"What is SHOULD I TAKE?\" class=\"tabcontent\">\r\n  <h2>What is SHOULD I TAKE?</h2>\r\n  <p>Should I take is an app.</p>\r\n</div>\r\n\r\n<div id=\"Who are we?\" class=\"tabcontent\">\r\n  <h2>Who are we?</h2>\r\n  <p>We are some very cool people.</p>\r\n</div>\r\n\r\n<div id=\"Disclaimer\" class=\"tabcontent\">\r\n  <h2>Disclaimer</h2>\r\n  <p>Don't trust us, we have no idea what we are doing.</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/description-card/description-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DescriptionCardComponent = (function () {
    function DescriptionCardComponent() {
    }
    DescriptionCardComponent.prototype.ngOnInit = function () { };
    DescriptionCardComponent.prototype.openDescription = function (evt, tabTitle) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        document.getElementById(tabTitle).style.display = "block";
    };
    DescriptionCardComponent.prototype.goNextPage = function () {
    };
    DescriptionCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-description-card',
            template: __webpack_require__("../../../../../src/app/description-card/description-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/description-card/description-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DescriptionCardComponent);
    return DescriptionCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter-card/filter-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filter-card/filter-card.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n  Please provide the following information:\r\n</h1>\r\n\r\n<!-- TODO: Finish the card, with the necessary input for the backend. Use AngularJS\r\nmaterial for the input boxes. -->\r\n \r\n"

/***/ }),

/***/ "../../../../../src/app/filter-card/filter-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterCardComponent = (function () {
    function FilterCardComponent() {
    }
    FilterCardComponent.prototype.ngOnInit = function () {
    };
    FilterCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-filter-card',
            template: __webpack_require__("../../../../../src/app/filter-card/filter-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/filter-card/filter-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterCardComponent);
    return FilterCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material-imports/material-imports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialImportsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialImportsModule = (function () {
    function MaterialImportsModule() {
    }
    MaterialImportsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: []
        })
    ], MaterialImportsModule);
    return MaterialImportsModule;
}());



/***/ }),

/***/ "../../../../../src/app/model/Advice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Advice; });
var Advice = (function () {
    function Advice(drug, operation, advice) {
        this.drug = drug;
        this.operation = operation;
        this.advice = advice;
    }
    return Advice;
}());



/***/ }),

/***/ "../../../../../src/app/name-card/name-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  position: absolute;\r\n  top: 30%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  text-transform: uppercase;\r\n  font-size: 60px;\r\n  letter-spacing: -6px;\r\n  color: white;\r\n  max-width: 80%;\r\n  background-color: #555;\r\n}\r\n\r\n/* h1:after {\r\n  content: ' ';\r\n  display: block;\r\n  border: 2px solid grey;\r\n} */\r\n\r\n.container {\r\n  margin-top: -50px;\r\n  margin-left: -8px;\r\n  margin-right: -8px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: 500px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  opacity: 0.5;\r\n\r\n}\r\n\r\n.toolbar {\r\n  background-color: white;\r\n  position: absolute;\r\n  top: 2%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  height: 50px;\r\n  -webkit-box-shadow: 2px 2px grey;\r\n          box-shadow: 2px 2px grey;\r\n}\r\n\r\n.toolbar a {\r\n  position: relative;\r\n  margin-top: 5px;\r\n  margin-left: 10px;\r\n  float: left;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/name-card/name-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <img src=\"https://images.pexels.com/photos/143654/pexels-photo-143654.jpeg?w=940&h=650&auto=compress&cs=tinysrgb\" alt=\"Medical\">\r\n  <mat-toolbar class=\"toolbar\">\r\n    <a class=\"active\" href=\"#home\">Home</a>\r\n    <a href=\"#app\">Go To App</a>\r\n  </mat-toolbar>\r\n  <h1>{{appname}}\r\n  <!-- <button (click)=\"goNextPage()\" mat-button color=\"primary\">Go to App</button> -->\r\n  </h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/name-card/name-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NameCardComponent = (function () {
    function NameCardComponent() {
        this.appname = 'Should I Take?';
    }
    NameCardComponent.prototype.ngOnInit = function () {
    };
    NameCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-name-card',
            template: __webpack_require__("../../../../../src/app/name-card/name-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/name-card/name-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NameCardComponent);
    return NameCardComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map