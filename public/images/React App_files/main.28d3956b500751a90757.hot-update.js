webpackHotUpdate("main",{

/***/ "./src/Components/ProductsResults/ProductsResults.js":
/*!***********************************************************!*\
  !*** ./src/Components/ProductsResults/ProductsResults.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Redux_Products_products_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Redux/Products/products.actions */ "./src/Redux/Products/products.actions.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-masonry-css */ "./node_modules/react-masonry-css/dist/react-masonry-css.module.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Elements_FormSelect_FormSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Elements/FormSelect/FormSelect */ "./src/Components/Elements/FormSelect/FormSelect.js");
/* harmony import */ var _Loadmore_Loadmore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Loadmore/Loadmore */ "./src/Components/Loadmore/Loadmore.js");
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Product/Product */ "./src/Components/ProductsResults/Product/Product.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProductsResults_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProductsResults.css */ "./src/Components/ProductsResults/ProductsResults.css");
/* harmony import */ var _ProductsResults_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ProductsResults_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/gabriel/Documents/Developing/React/store clone/cloningstore/src/Components/ProductsResults/ProductsResults.js",
    _s = __webpack_require__.$Refresh$.signature();















const mapState = ({
  productsData
}) => ({
  products: productsData.products
});

const ProductResults = ({}) => {
  _s();

  const [buttonStatus, setButtonStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none');
  const [backGround, setBackground] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const {
    filterType
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const {
    products
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(mapState);
  const {
    data,
    queryDoc,
    isLastPage
  } = products;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_Redux_Products_products_actions__WEBPACK_IMPORTED_MODULE_3__["fetchProductsStart"])({
      filterType
    }));
  }, [filterType]);

  const handleFilter = e => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;

  if (data.length < 1) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("div", {
      className: "products",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])("p", {
        children: "No search results."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined);
  }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show all',
      value: ''
    }, {
      name: 'Vasen',
      value: 'vasen'
    }, {
      name: 'Andere',
      value: 'andere'
    }],
    handleChange: handleFilter
  };

  const handleLoadMore = () => {
    dispatch(Object(_Redux_Products_products_actions__WEBPACK_IMPORTED_MODULE_3__["fetchProductsStart"])({
      filterType,
      startAfterDoc: queryDoc,
      persistProducts: data
    }));
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore
  };
  const breakpointColumnsObj = {
    default: 6,
    2300: 4,
    1200: 3,
    992: 2,
    768: 2,
    576: 1
  };
  console.log(data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div1, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDivBig, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[2]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[3]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[4]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDivQuatro, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          pt: '3em',
          height: '110%',
          product: data[6]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          pt: '3em',
          product: data[7]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[8]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDivBig, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDiv, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[4]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDivBig, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[2]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(Div2InnerDivQuatro, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_Product_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
          product: data[1]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined);
};

_s(ProductResults, "N2jCLA/Hey3Y58zdH2AUcfAY9iE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"], react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = ProductResults;
/* harmony default export */ __webpack_exports__["default"] = (ProductResults);
const Div1 = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div`
  display: flex;
  flex-direction: column;
`;
_c2 = Div1;
const Div2 = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div`
  display: flex;
  @media (max-width: 775px) {
    display: block;
    margin: 0 auto;
  }
`;
_c3 = Div2;
const Div2InnerDiv = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div`
  display: flex;
  flex-direction: column;
  width: 25%;
  @media (max-width: 775px) {
    display: block;
    margin: 0 auto;
    width: 70%;
    max-width: 70%;
  }
`;
_c4 = Div2InnerDiv;
const Div2InnerDivQuatro = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 775px) {
    display: block;
    margin: 0 auto;
    width: 70%;
    max-width: 70%;
  }
`;
_c5 = Div2InnerDivQuatro;
const Div2InnerDivBig = styled_components__WEBPACK_IMPORTED_MODULE_10__["default"].div`
  display: flex;
  width: 50%;
  @media (max-width: 775px) {
    display: none;
  }
`; // <MainDiv>
//   <h1>Browse</h1>
//   <FormSelect {...configFilters} />
//   <Test>
//     <Cont5>
//       <Cont5RowDiv>
//         <Cont5MidImg src={data[0].productThumbnail} alt="" />
//         <Cont5MidImg src={data[1].productThumbnail} alt="" />
//       </Cont5RowDiv>
//       <Cont5Mid>
//         <Cont5MidImgBig src={data[2].productThumbnail} alt="" />
//       </Cont5Mid>
//       <Cont5RowDiv>
//         <Cont5MidImg src={data[3].productThumbnail} alt="" />
//         <Cont5MidImg src={data[4].productThumbnail} alt="" />
//       </Cont5RowDiv>
//     </Cont5>
//     {data[6] && data[8] && (
//       <Cont5RowDivInner>
//         <Cont4MidImg src={data[5].productThumbnail} alt="" />
//         <Cont4MidImg src={data[6].productThumbnail} alt="" />
//         <Cont4MidImg src={data[7].productThumbnail} alt="" />
//         <Cont4MidImg src={data[8].productThumbnail} alt="" />
//       </Cont5RowDivInner>
//     )}
//     {data[11] && data[13] && (
//       <Cont5>
//         <Cont5Mid>
//           <Cont5MidImgBig src={data[11].productThumbnail} alt="" />
//         </Cont5Mid>
//         <Cont5RowDiv>
//           <Cont5MidImg src={data[9].productThumbnail} alt="" />
//           <Cont5MidImg src={data[10].productThumbnail} alt="" />
//         </Cont5RowDiv>
//         <Cont5RowDiv>
//           <Cont5MidImg src={data[12].productThumbnail} alt="" />
//           <Cont5MidImg src={data[13].productThumbnail} alt="" />
//         </Cont5RowDiv>
//       </Cont5>
//     )}
//   </Test>
// </MainDiv>

/* {data.map((product, pos) => {
        const { productThumbnail, productName, productPrice } = product;
        if (
          !productThumbnail ||
          !productName ||
          typeof productPrice === 'undefined'
        )
          return <div>Null</div>;

        const configProduct = {
          ...product,
        };
        return <Product key={pos} {...configProduct} />;
      })} */

_c6 = Div2InnerDivBig;

var _c, _c2, _c3, _c4, _c5, _c6;

__webpack_require__.$Refresh$.register(_c, "ProductResults");
__webpack_require__.$Refresh$.register(_c2, "Div1");
__webpack_require__.$Refresh$.register(_c3, "Div2");
__webpack_require__.$Refresh$.register(_c4, "Div2InnerDiv");
__webpack_require__.$Refresh$.register(_c5, "Div2InnerDivQuatro");
__webpack_require__.$Refresh$.register(_c6, "Div2InnerDivBig");

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
//# sourceMappingURL=main.28d3956b500751a90757.hot-update.js.map