webpackHotUpdate("static/development/pages/[mapId].js",{

/***/ "./src/common/constants.ts":
/*!*********************************!*\
  !*** ./src/common/constants.ts ***!
  \*********************************/
/*! exports provided: defaultMaps, defaultTransportation, defaultCanvasState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMaps", function() { return defaultMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTransportation", function() { return defaultTransportation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCanvasState", function() { return defaultCanvasState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

const sourcePrefix =  false ? undefined : '';
const defaultMaps = {
  creationFull: {
    source: sourcePrefix + '/static/Creation-Full-Map.jpg',
    height: 3740,
    width: 5780,
    scale: 2.85
  },
  futileBloodFlows: {
    source: sourcePrefix + '/static/North-Focused-Map-v2.jpeg',
    height: 3752,
    width: 6176,
    scale: 1.43
  }
};
const defaultTransportation = {
  horse: {
    desc: 'Horse (10hr/d)',
    rate: 4,
    maxLength: 10
  },
  ship: {
    desc: 'Merchant Ship (tireless)',
    rate: 6,
    maxLength: 24
  },
  cloud: {
    desc: 'Cirrus Skiff (tireless, Ess 1)',
    rate: 6,
    maxLength: 24
  },
  agata: {
    desc: 'Agata (10hr/d)',
    rate: 30,
    maxLength: 10
  },
  tornado: {
    desc: 'Stormwind Rider (10hr/d)',
    rate: 100,
    maxLength: 10
  }
};
const defaultLocationProps = {
  x: 0,
  y: 0,
  visible: false
};

const defaultTextProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultLocationProps, {
  text: ''
});

const defaultCanvasState = {
  clicks: 0,
  start: defaultLocationProps,
  end: defaultLocationProps,
  text: defaultTextProps
};

/***/ })

})
//# sourceMappingURL=[mapId].js.aa2b6985d358b32c1deb.hot-update.js.map