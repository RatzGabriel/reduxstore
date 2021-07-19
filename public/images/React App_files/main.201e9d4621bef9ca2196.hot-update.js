webpackHotUpdate("main",{

/***/ "./src/Components/ProductsResults/Product/Product.js":
/*!***********************************************************!*\
  !*** ./src/Components/ProductsResults/Product/Product.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Elements_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Elements/Button/Button */ "./src/Components/Elements/Button/Button.js");
/* harmony import */ var _Redux_Cart_cart_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Redux/Cart/cart.action */ "./src/Redux/Cart/cart.action.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/gabriel/Documents/Developing/React/store clone/cloningstore/src/Components/ProductsResults/Product/Product.js",
    _s = __webpack_require__.$Refresh$.signature();









function Product({
  product,
  pt,
  margin,
  pb,
  wd,
  height
}) {
  _s();

  const {
    productThumbnail,
    productName,
    productPrice,
    documentID
  } = product;
  const [buttonStatus, setButtonStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none');
  const [backGround, setBackground] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();

  if (!productThumbnail || !productName || typeof productPrice === 'undefined') {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: "nothing"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }, this);
  }

  const configAddToCartBtn = {
    type: 'button'
  };

  const handleAddToCard = product => {
    if (!product) return;
    dispatch(Object(_Redux_Cart_cart_action__WEBPACK_IMPORTED_MODULE_4__["addProduct"])(product));
    history.push('/cart');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(StyledLink, {
    height: height,
    paddin: pt,
    margin: pt,
    pb: pb,
    wd: wd,
    to: `/product/${documentID}`,
    onMouseEnter: () => {
      setBackground(0.6);
      setButtonStatus('block');
    },
    onMouseLeave: () => {
      setBackground(1);
      setButtonStatus('none');
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Img, {
      src: productThumbnail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ButtonElement, {
      vis: buttonStatus,
      onClick: () => handleAddToCard(product),
      ...configAddToCartBtn,
      children: [productPrice, " \u20AC", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), "Shop Item"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

_s(Product, "x2IdU3a/7+SiopdNsOYGnA6rR5Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"]];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);
const StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  position: relative;
  display: flex;
  color: black;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => props.height || '110%'};
  align-items: flex-start;
  padding: 1em;

  padding-top: ${props => props.padding || '1em'};
  padding-bottom: ${props => props.pb || '0em'};
  margin-top: ${props => props.margin || '1em'};
  @media (max-width: 1100px) {
    display: block;
    width: ${props => props.wd || '100%'};
  }
`;
_c2 = StyledLink;
const ButtonElement = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button`
  color: ${props => props.color || 'white'};
  background-color: ${props => props.bg || 'brown'};
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 3%;
  padding-bottom: 3%;
  border-radius: 35px;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  position: absolute;
  top: 50%;
  display: ${props => props.vis === 'none' ? 'none' : 'block'};
  cursor: pointer;
  @media only screen and (max-width: 1100px) {
    display: inline-block;
    position: static;
    border-radius: 0;
    width: 100%;
  }
`;
_c3 = ButtonElement;
const Img = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 1100px) {
    display: block;
  }
`;
_c4 = Img;

var _c, _c2, _c3, _c4;

__webpack_require__.$Refresh$.register(_c, "Product");
__webpack_require__.$Refresh$.register(_c2, "StyledLink");
__webpack_require__.$Refresh$.register(_c3, "ButtonElement");
__webpack_require__.$Refresh$.register(_c4, "Img");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.201e9d4621bef9ca2196.hot-update.js.map