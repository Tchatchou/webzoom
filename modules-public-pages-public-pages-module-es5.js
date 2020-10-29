function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-public-pages-public-pages-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js ***!
    \*****************************************************************/

  /*! exports provided: BidiModule, DIR_DOCUMENT, Dir, Directionality, ɵangular_material_src_cdk_bidi_bidi_a */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015BidiJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BidiModule", function () {
      return BidiModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function () {
      return DIR_DOCUMENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Dir", function () {
      return Dir;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Directionality", function () {
      return Directionality;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_bidi_bidi_a", function () {
      return DIR_DOCUMENT_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Injection token used to inject the document into Directionality.
     * This is used so that the value can be faked in tests.
     *
     * We can't use the real document in tests because changing the real `dir` causes geometry-based
     * tests in Safari to fail.
     *
     * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
     * themselves use things like `querySelector` in test code.
     *
     * This token is defined in a separate file from Directionality as a workaround for
     * https://github.com/angular/angular/issues/22559
     *
     * @docs-private
     */


    var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('cdk-dir-doc', {
      providedIn: 'root',
      factory: DIR_DOCUMENT_FACTORY
    });
    /** @docs-private */

    function DIR_DOCUMENT_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * The directionality (LTR / RTL) context for the application (or a subtree of it).
     * Exposes the current direction and a stream of direction changes.
     */


    var Directionality =
    /*#__PURE__*/
    function () {
      function Directionality(_document) {
        _classCallCheck(this, Directionality);

        /** The current 'ltr' or 'rtl' value. */
        this.value = 'ltr';
        /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        if (_document) {
          // TODO: handle 'auto' value -
          // We still need to account for dir="auto".
          // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
          // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
          var bodyDir = _document.body ? _document.body.dir : null;
          var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          var value = bodyDir || htmlDir;
          this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
        }
      }

      _createClass(Directionality, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }]);

      return Directionality;
    }();

    Directionality.ɵfac = function Directionality_Factory(t) {
      return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
    };

    Directionality.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function Directionality_Factory() {
        return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(DIR_DOCUMENT, 8));
      },
      token: Directionality,
      providedIn: "root"
    });

    Directionality.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [DIR_DOCUMENT]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [DIR_DOCUMENT]
          }]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Directive to listen for changes of direction of part of the DOM.
     *
     * Provides itself as Directionality such that descendant directives only need to ever inject
     * Directionality to get the closest direction.
     */


    var Dir =
    /*#__PURE__*/
    function () {
      function Dir() {
        _classCallCheck(this, Dir);

        /** Normalized direction that accounts for invalid/unsupported values. */
        this._dir = 'ltr';
        /** Whether the `value` has been set to its initial value. */

        this._isInitialized = false;
        /** Event emitted when the direction changes. */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /** @docs-private */


      _createClass(Dir, [{
        key: "ngAfterContentInit",

        /** Initialize once default value has been set. */
        value: function ngAfterContentInit() {
          this._isInitialized = true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.change.complete();
        }
      }, {
        key: "dir",
        get: function get() {
          return this._dir;
        },
        set: function set(value) {
          var old = this._dir;
          var normalizedValue = value ? value.toLowerCase() : value;
          this._rawDir = value;
          this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

          if (old !== this._dir && this._isInitialized) {
            this.change.emit(this._dir);
          }
        }
        /** Current layout direction of the element. */

      }, {
        key: "value",
        get: function get() {
          return this.dir;
        }
      }]);

      return Dir;
    }();

    Dir.ɵfac = function Dir_Factory(t) {
      return new (t || Dir)();
    };

    Dir.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: Dir,
      selectors: [["", "dir", ""]],
      hostVars: 1,
      hostBindings: function Dir_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
        }
      },
      inputs: {
        dir: "dir"
      },
      outputs: {
        change: "dirChange"
      },
      exportAs: ["dir"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: Directionality,
        useExisting: Dir
      }])]
    });
    Dir.propDecorators = {
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['dirChange']
      }],
      dir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[dir]',
          providers: [{
            provide: Directionality,
            useExisting: Dir
          }],
          host: {
            '[attr.dir]': '_rawDir'
          },
          exportAs: 'dir'
        }]
      }], function () {
        return [];
      }, {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var BidiModule = function BidiModule() {
      _classCallCheck(this, BidiModule);
    };

    BidiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BidiModule
    });
    BidiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BidiModule_Factory(t) {
        return new (t || BidiModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BidiModule, {
        declarations: [Dir],
        exports: [Dir]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [Dir],
          declarations: [Dir]
        }]
      }], null, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=bidi.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js ***!
    \************************************************************************/

  /*! exports provided: ArrayDataSource, DataSource, SelectionModel, UniqueSelectionDispatcher, _DisposeViewRepeaterStrategy, _RecycleViewRepeaterStrategy, _VIEW_REPEATER_STRATEGY, getMultipleValuesInSingleSelectionError, isDataSource */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015CollectionsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function () {
      return ArrayDataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataSource", function () {
      return DataSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionModel", function () {
      return SelectionModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function () {
      return UniqueSelectionDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_DisposeViewRepeaterStrategy", function () {
      return _DisposeViewRepeaterStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_RecycleViewRepeaterStrategy", function () {
      return _RecycleViewRepeaterStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_VIEW_REPEATER_STRATEGY", function () {
      return _VIEW_REPEATER_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function () {
      return getMultipleValuesInSingleSelectionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isDataSource", function () {
      return isDataSource;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var DataSource = function DataSource() {
      _classCallCheck(this, DataSource);
    };
    /** Checks whether an object is a data source. */


    function isDataSource(value) {
      // Check if the value is a DataSource by observing if it has a connect function. Cannot
      // be checked as an `instanceof DataSource` since people could create their own sources
      // that match the interface, but don't extend DataSource.
      return value && typeof value.connect === 'function';
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** DataSource wrapper for a native array. */


    var ArrayDataSource =
    /*#__PURE__*/
    function (_DataSource) {
      _inherits(ArrayDataSource, _DataSource);

      var _super = _createSuper(ArrayDataSource);

      function ArrayDataSource(_data) {
        var _this;

        _classCallCheck(this, ArrayDataSource);

        _this = _super.call(this);
        _this._data = _data;
        return _this;
      }

      _createClass(ArrayDataSource, [{
        key: "connect",
        value: function connect() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["isObservable"])(this._data) ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(this._data);
        }
      }, {
        key: "disconnect",
        value: function disconnect() {}
      }]);

      return ArrayDataSource;
    }(DataSource);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A repeater that destroys views when they are removed from a
     * {@link ViewContainerRef}. When new items are inserted into the container,
     * the repeater will always construct a new embedded view for each item.
     *
     * @template T The type for the embedded view's $implicit property.
     * @template R The type for the item in each IterableDiffer change record.
     * @template C The type for the context passed to each embedded view.
     */


    var _DisposeViewRepeaterStrategy =
    /*#__PURE__*/
    function () {
      function _DisposeViewRepeaterStrategy() {
        _classCallCheck(this, _DisposeViewRepeaterStrategy);
      }

      _createClass(_DisposeViewRepeaterStrategy, [{
        key: "applyChanges",
        value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
          changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
            var view;
            var operation;

            if (record.previousIndex == null) {
              var insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
              view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
              operation = 1
              /* INSERTED */
              ;
            } else if (currentIndex == null) {
              viewContainerRef.remove(adjustedPreviousIndex);
              operation = 3
              /* REMOVED */
              ;
            } else {
              view = viewContainerRef.get(adjustedPreviousIndex);
              viewContainerRef.move(view, currentIndex);
              operation = 2
              /* MOVED */
              ;
            }

            if (itemViewChanged) {
              itemViewChanged({
                context: view === null || view === void 0 ? void 0 : view.context,
                operation: operation,
                record: record
              });
            }
          });
        }
      }, {
        key: "detach",
        value: function detach() {}
      }]);

      return _DisposeViewRepeaterStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A repeater that caches views when they are removed from a
     * {@link ViewContainerRef}. When new items are inserted into the container,
     * the repeater will reuse one of the cached views instead of creating a new
     * embedded view. Recycling cached views reduces the quantity of expensive DOM
     * inserts.
     *
     * @template T The type for the embedded view's $implicit property.
     * @template R The type for the item in each IterableDiffer change record.
     * @template C The type for the context passed to each embedded view.
     */


    var _RecycleViewRepeaterStrategy =
    /*#__PURE__*/
    function () {
      function _RecycleViewRepeaterStrategy() {
        _classCallCheck(this, _RecycleViewRepeaterStrategy);

        /**
         * The size of the cache used to store unused views.
         * Setting the cache size to `0` will disable caching. Defaults to 20 views.
         */
        this.viewCacheSize = 20;
        /**
         * View cache that stores embedded view instances that have been previously stamped out,
         * but don't are not currently rendered. The view repeater will reuse these views rather than
         * creating brand new ones.
         *
         * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
         */

        this._viewCache = [];
      }
      /** Apply changes to the DOM. */


      _createClass(_RecycleViewRepeaterStrategy, [{
        key: "applyChanges",
        value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
          var _this2 = this;

          // Rearrange the views to put them in the right location.
          changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
            var view;
            var operation;

            if (record.previousIndex == null) {
              // Item added.
              var viewArgsFactory = function viewArgsFactory() {
                return itemContextFactory(record, adjustedPreviousIndex, currentIndex);
              };

              view = _this2._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
              operation = view ? 1
              /* INSERTED */
              : 0
              /* REPLACED */
              ;
            } else if (currentIndex == null) {
              // Item removed.
              _this2._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);

              operation = 3
              /* REMOVED */
              ;
            } else {
              // Item moved.
              view = _this2._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
              operation = 2
              /* MOVED */
              ;
            }

            if (itemViewChanged) {
              itemViewChanged({
                context: view === null || view === void 0 ? void 0 : view.context,
                operation: operation,
                record: record
              });
            }
          });
        }
      }, {
        key: "detach",
        value: function detach() {
          var _iterator = _createForOfIteratorHelper(this._viewCache),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var view = _step.value;
              view.destroy();
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        /**
         * Inserts a view for a new item, either from the cache or by creating a new
         * one. Returns `undefined` if the item was inserted into a cached view.
         */

      }, {
        key: "_insertView",
        value: function _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
          var cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);

          if (cachedView) {
            cachedView.context.$implicit = value;
            return undefined;
          }

          var viewArgs = viewArgsFactory();
          return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
        }
        /** Detaches the view at the given index and inserts into the view cache. */

      }, {
        key: "_detachAndCacheView",
        value: function _detachAndCacheView(index, viewContainerRef) {
          var detachedView = this._detachView(index, viewContainerRef);

          this._maybeCacheView(detachedView, viewContainerRef);
        }
        /** Moves view at the previous index to the current index. */

      }, {
        key: "_moveView",
        value: function _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
          var view = viewContainerRef.get(adjustedPreviousIndex);
          viewContainerRef.move(view, currentIndex);
          view.context.$implicit = value;
          return view;
        }
        /**
         * Cache the given detached view. If the cache is full, the view will be
         * destroyed.
         */

      }, {
        key: "_maybeCacheView",
        value: function _maybeCacheView(view, viewContainerRef) {
          if (this._viewCache.length < this.viewCacheSize) {
            this._viewCache.push(view);
          } else {
            var index = viewContainerRef.indexOf(view); // The host component could remove views from the container outside of
            // the view repeater. It's unlikely this will occur, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.

            if (index === -1) {
              view.destroy();
            } else {
              viewContainerRef.remove(index);
            }
          }
        }
        /** Inserts a recycled view from the cache at the given index. */

      }, {
        key: "_insertViewFromCache",
        value: function _insertViewFromCache(index, viewContainerRef) {
          var cachedView = this._viewCache.pop();

          if (cachedView) {
            viewContainerRef.insert(cachedView, index);
          }

          return cachedView || null;
        }
        /** Detaches the embedded view at the given index. */

      }, {
        key: "_detachView",
        value: function _detachView(index, viewContainerRef) {
          return viewContainerRef.detach(index);
        }
      }]);

      return _RecycleViewRepeaterStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Class to be used to power selecting one or more options from a list.
     */


    var SelectionModel =
    /*#__PURE__*/
    function () {
      function SelectionModel() {
        var _this3 = this;

        var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

        var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        _classCallCheck(this, SelectionModel);

        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /** Currently-selected values. */

        this._selection = new Set();
        /** Keeps track of the deselected options that haven't been emitted by the change event. */

        this._deselectedToEmit = [];
        /** Keeps track of the selected options that haven't been emitted by the change event. */

        this._selectedToEmit = [];
        /** Event emitted when the value has changed. */

        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach(function (value) {
              return _this3._markSelected(value);
            });
          } else {
            this._markSelected(initiallySelectedValues[0]);
          } // Clear the array in order to avoid firing the change event for preselected values.


          this._selectedToEmit.length = 0;
        }
      }
      /** Selected values. */


      _createClass(SelectionModel, [{
        key: "select",

        /**
         * Selects a value or an array of values.
         */
        value: function select() {
          var _this4 = this;

          for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
            values[_key] = arguments[_key];
          }

          this._verifyValueAssignment(values);

          values.forEach(function (value) {
            return _this4._markSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Deselects a value or an array of values.
         */

      }, {
        key: "deselect",
        value: function deselect() {
          var _this5 = this;

          for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            values[_key2] = arguments[_key2];
          }

          this._verifyValueAssignment(values);

          values.forEach(function (value) {
            return _this5._unmarkSelected(value);
          });

          this._emitChangeEvent();
        }
        /**
         * Toggles a value between selected and deselected.
         */

      }, {
        key: "toggle",
        value: function toggle(value) {
          this.isSelected(value) ? this.deselect(value) : this.select(value);
        }
        /**
         * Clears all of the selected values.
         */

      }, {
        key: "clear",
        value: function clear() {
          this._unmarkAll();

          this._emitChangeEvent();
        }
        /**
         * Determines whether a value is selected.
         */

      }, {
        key: "isSelected",
        value: function isSelected(value) {
          return this._selection.has(value);
        }
        /**
         * Determines whether the model does not have a value.
         */

      }, {
        key: "isEmpty",
        value: function isEmpty() {
          return this._selection.size === 0;
        }
        /**
         * Determines whether the model has a value.
         */

      }, {
        key: "hasValue",
        value: function hasValue() {
          return !this.isEmpty();
        }
        /**
         * Sorts the selected values based on a predicate function.
         */

      }, {
        key: "sort",
        value: function sort(predicate) {
          if (this._multiple && this.selected) {
            this._selected.sort(predicate);
          }
        }
        /**
         * Gets whether multiple values can be selected.
         */

      }, {
        key: "isMultipleSelection",
        value: function isMultipleSelection() {
          return this._multiple;
        }
        /** Emits a change event and clears the records of selected and deselected values. */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          // Clear the selected values so they can be re-cached.
          this._selected = null;

          if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
              source: this,
              added: this._selectedToEmit,
              removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
          }
        }
        /** Selects a value. */

      }, {
        key: "_markSelected",
        value: function _markSelected(value) {
          if (!this.isSelected(value)) {
            if (!this._multiple) {
              this._unmarkAll();
            }

            this._selection.add(value);

            if (this._emitChanges) {
              this._selectedToEmit.push(value);
            }
          }
        }
        /** Deselects a value. */

      }, {
        key: "_unmarkSelected",
        value: function _unmarkSelected(value) {
          if (this.isSelected(value)) {
            this._selection["delete"](value);

            if (this._emitChanges) {
              this._deselectedToEmit.push(value);
            }
          }
        }
        /** Clears out the selected values. */

      }, {
        key: "_unmarkAll",
        value: function _unmarkAll() {
          var _this6 = this;

          if (!this.isEmpty()) {
            this._selection.forEach(function (value) {
              return _this6._unmarkSelected(value);
            });
          }
        }
        /**
         * Verifies the value assignment and throws an error if the specified value array is
         * including multiple values while the selection model is not supporting multiple values.
         */

      }, {
        key: "_verifyValueAssignment",
        value: function _verifyValueAssignment(values) {
          if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMultipleValuesInSingleSelectionError();
          }
        }
      }, {
        key: "selected",
        get: function get() {
          if (!this._selected) {
            this._selected = Array.from(this._selection.values());
          }

          return this._selected;
        }
      }]);

      return SelectionModel;
    }();
    /**
     * Returns an error that reports that multiple values are passed into a selection model
     * with a single value.
     * @docs-private
     */


    function getMultipleValuesInSingleSelectionError() {
      return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Class to coordinate unique selection based on name.
     * Intended to be consumed as an Angular service.
     * This service is needed because native radio change events are only fired on the item currently
     * being selected, and we still need to uncheck the previous selection.
     *
     * This service does not *store* any IDs and names because they may change at any time, so it is
     * less error-prone if they are simply passed through when the events occur.
     */


    var UniqueSelectionDispatcher =
    /*#__PURE__*/
    function () {
      function UniqueSelectionDispatcher() {
        _classCallCheck(this, UniqueSelectionDispatcher);

        this._listeners = [];
      }
      /**
       * Notify other items that selection for the given name has been set.
       * @param id ID of the item.
       * @param name Name of the item.
       */


      _createClass(UniqueSelectionDispatcher, [{
        key: "notify",
        value: function notify(id, name) {
          var _iterator2 = _createForOfIteratorHelper(this._listeners),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var listener = _step2.value;
              listener(id, name);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        /**
         * Listen for future changes to item selection.
         * @return Function used to deregister listener
         */

      }, {
        key: "listen",
        value: function listen(listener) {
          var _this7 = this;

          this._listeners.push(listener);

          return function () {
            _this7._listeners = _this7._listeners.filter(function (registered) {
              return listener !== registered;
            });
          };
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._listeners = [];
        }
      }]);

      return UniqueSelectionDispatcher;
    }();

    UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
      return new (t || UniqueSelectionDispatcher)();
    };

    UniqueSelectionDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function UniqueSelectionDispatcher_Factory() {
        return new UniqueSelectionDispatcher();
      },
      token: UniqueSelectionDispatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
     * @docs-private
     */


    var _VIEW_REPEATER_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('_ViewRepeater');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=collections.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js ***!
    \*********************************************************************/

  /*! exports provided: A, ALT, APOSTROPHE, AT_SIGN, B, BACKSLASH, BACKSPACE, C, CAPS_LOCK, CLOSE_SQUARE_BRACKET, COMMA, CONTEXT_MENU, CONTROL, D, DASH, DELETE, DOWN_ARROW, E, EIGHT, END, ENTER, EQUALS, ESCAPE, F, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FF_EQUALS, FF_MINUS, FF_MUTE, FF_SEMICOLON, FF_VOLUME_DOWN, FF_VOLUME_UP, FIRST_MEDIA, FIVE, FOUR, G, H, HOME, I, INSERT, J, K, L, LAST_MEDIA, LEFT_ARROW, M, MAC_ENTER, MAC_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, META, MUTE, N, NINE, NUMPAD_DIVIDE, NUMPAD_EIGHT, NUMPAD_FIVE, NUMPAD_FOUR, NUMPAD_MINUS, NUMPAD_MULTIPLY, NUMPAD_NINE, NUMPAD_ONE, NUMPAD_PERIOD, NUMPAD_PLUS, NUMPAD_SEVEN, NUMPAD_SIX, NUMPAD_THREE, NUMPAD_TWO, NUMPAD_ZERO, NUM_CENTER, NUM_LOCK, O, ONE, OPEN_SQUARE_BRACKET, P, PAGE_DOWN, PAGE_UP, PAUSE, PLUS_SIGN, PRINT_SCREEN, Q, QUESTION_MARK, R, RIGHT_ARROW, S, SCROLL_LOCK, SEMICOLON, SEVEN, SHIFT, SINGLE_QUOTE, SIX, SLASH, SPACE, T, TAB, THREE, TILDE, TWO, U, UP_ARROW, V, VOLUME_DOWN, VOLUME_UP, W, X, Y, Z, ZERO, hasModifierKey */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015KeycodesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "A", function () {
      return A;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALT", function () {
      return ALT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function () {
      return APOSTROPHE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AT_SIGN", function () {
      return AT_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "B", function () {
      return B;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSLASH", function () {
      return BACKSLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BACKSPACE", function () {
      return BACKSPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C", function () {
      return C;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function () {
      return CAPS_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function () {
      return CLOSE_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMMA", function () {
      return COMMA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function () {
      return CONTEXT_MENU;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CONTROL", function () {
      return CONTROL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "D", function () {
      return D;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DASH", function () {
      return DASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DELETE", function () {
      return DELETE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function () {
      return DOWN_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "E", function () {
      return E;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EIGHT", function () {
      return EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "END", function () {
      return END;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENTER", function () {
      return ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EQUALS", function () {
      return EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ESCAPE", function () {
      return ESCAPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F", function () {
      return F;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F1", function () {
      return F1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F10", function () {
      return F10;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F11", function () {
      return F11;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F12", function () {
      return F12;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F2", function () {
      return F2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F3", function () {
      return F3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F4", function () {
      return F4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F5", function () {
      return F5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F6", function () {
      return F6;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F7", function () {
      return F7;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F8", function () {
      return F8;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "F9", function () {
      return F9;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function () {
      return FF_EQUALS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MINUS", function () {
      return FF_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_MUTE", function () {
      return FF_MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function () {
      return FF_SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function () {
      return FF_VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function () {
      return FF_VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function () {
      return FIRST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FIVE", function () {
      return FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FOUR", function () {
      return FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "G", function () {
      return G;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "H", function () {
      return H;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HOME", function () {
      return HOME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "I", function () {
      return I;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "INSERT", function () {
      return INSERT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "J", function () {
      return J;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "K", function () {
      return K;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "L", function () {
      return L;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function () {
      return LAST_MEDIA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function () {
      return LEFT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "M", function () {
      return M;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function () {
      return MAC_ENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_META", function () {
      return MAC_META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function () {
      return MAC_WK_CMD_LEFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function () {
      return MAC_WK_CMD_RIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "META", function () {
      return META;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MUTE", function () {
      return MUTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "N", function () {
      return N;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NINE", function () {
      return NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function () {
      return NUMPAD_DIVIDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function () {
      return NUMPAD_EIGHT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function () {
      return NUMPAD_FIVE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function () {
      return NUMPAD_FOUR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function () {
      return NUMPAD_MINUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function () {
      return NUMPAD_MULTIPLY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function () {
      return NUMPAD_NINE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function () {
      return NUMPAD_ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function () {
      return NUMPAD_PERIOD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function () {
      return NUMPAD_PLUS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function () {
      return NUMPAD_SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function () {
      return NUMPAD_SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function () {
      return NUMPAD_THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function () {
      return NUMPAD_TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function () {
      return NUMPAD_ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function () {
      return NUM_CENTER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function () {
      return NUM_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "O", function () {
      return O;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ONE", function () {
      return ONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function () {
      return OPEN_SQUARE_BRACKET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return P;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function () {
      return PAGE_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAGE_UP", function () {
      return PAGE_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
      return PAUSE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function () {
      return PLUS_SIGN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function () {
      return PRINT_SCREEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Q", function () {
      return Q;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function () {
      return QUESTION_MARK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "R", function () {
      return R;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function () {
      return RIGHT_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return S;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function () {
      return SCROLL_LOCK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEMICOLON", function () {
      return SEMICOLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEVEN", function () {
      return SEVEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHIFT", function () {
      return SHIFT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function () {
      return SINGLE_QUOTE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIX", function () {
      return SIX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SLASH", function () {
      return SLASH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SPACE", function () {
      return SPACE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "T", function () {
      return T;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TAB", function () {
      return TAB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "THREE", function () {
      return THREE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TILDE", function () {
      return TILDE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TWO", function () {
      return TWO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "U", function () {
      return U;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UP_ARROW", function () {
      return UP_ARROW;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "V", function () {
      return V;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function () {
      return VOLUME_DOWN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function () {
      return VOLUME_UP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "W", function () {
      return W;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "X", function () {
      return X;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Y", function () {
      return Y;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Z", function () {
      return Z;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZERO", function () {
      return ZERO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hasModifierKey", function () {
      return hasModifierKey;
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var MAC_ENTER = 3;
    var BACKSPACE = 8;
    var TAB = 9;
    var NUM_CENTER = 12;
    var ENTER = 13;
    var SHIFT = 16;
    var CONTROL = 17;
    var ALT = 18;
    var PAUSE = 19;
    var CAPS_LOCK = 20;
    var ESCAPE = 27;
    var SPACE = 32;
    var PAGE_UP = 33;
    var PAGE_DOWN = 34;
    var END = 35;
    var HOME = 36;
    var LEFT_ARROW = 37;
    var UP_ARROW = 38;
    var RIGHT_ARROW = 39;
    var DOWN_ARROW = 40;
    var PLUS_SIGN = 43;
    var PRINT_SCREEN = 44;
    var INSERT = 45;
    var DELETE = 46;
    var ZERO = 48;
    var ONE = 49;
    var TWO = 50;
    var THREE = 51;
    var FOUR = 52;
    var FIVE = 53;
    var SIX = 54;
    var SEVEN = 55;
    var EIGHT = 56;
    var NINE = 57;
    var FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

    var FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

    var QUESTION_MARK = 63;
    var AT_SIGN = 64;
    var A = 65;
    var B = 66;
    var C = 67;
    var D = 68;
    var E = 69;
    var F = 70;
    var G = 71;
    var H = 72;
    var I = 73;
    var J = 74;
    var K = 75;
    var L = 76;
    var M = 77;
    var N = 78;
    var O = 79;
    var P = 80;
    var Q = 81;
    var R = 82;
    var S = 83;
    var T = 84;
    var U = 85;
    var V = 86;
    var W = 87;
    var X = 88;
    var Y = 89;
    var Z = 90;
    var META = 91; // WIN_KEY_LEFT

    var MAC_WK_CMD_LEFT = 91;
    var MAC_WK_CMD_RIGHT = 93;
    var CONTEXT_MENU = 93;
    var NUMPAD_ZERO = 96;
    var NUMPAD_ONE = 97;
    var NUMPAD_TWO = 98;
    var NUMPAD_THREE = 99;
    var NUMPAD_FOUR = 100;
    var NUMPAD_FIVE = 101;
    var NUMPAD_SIX = 102;
    var NUMPAD_SEVEN = 103;
    var NUMPAD_EIGHT = 104;
    var NUMPAD_NINE = 105;
    var NUMPAD_MULTIPLY = 106;
    var NUMPAD_PLUS = 107;
    var NUMPAD_MINUS = 109;
    var NUMPAD_PERIOD = 110;
    var NUMPAD_DIVIDE = 111;
    var F1 = 112;
    var F2 = 113;
    var F3 = 114;
    var F4 = 115;
    var F5 = 116;
    var F6 = 117;
    var F7 = 118;
    var F8 = 119;
    var F9 = 120;
    var F10 = 121;
    var F11 = 122;
    var F12 = 123;
    var NUM_LOCK = 144;
    var SCROLL_LOCK = 145;
    var FIRST_MEDIA = 166;
    var FF_MINUS = 173;
    var MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

    var VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

    var VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

    var FF_MUTE = 181;
    var FF_VOLUME_DOWN = 182;
    var LAST_MEDIA = 183;
    var FF_VOLUME_UP = 183;
    var SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

    var EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

    var COMMA = 188;
    var DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

    var SLASH = 191;
    var APOSTROPHE = 192;
    var TILDE = 192;
    var OPEN_SQUARE_BRACKET = 219;
    var BACKSLASH = 220;
    var CLOSE_SQUARE_BRACKET = 221;
    var SINGLE_QUOTE = 222;
    var MAC_META = 224;
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Checks whether a modifier key is pressed.
     * @param event Event to be checked.
     */

    function hasModifierKey(event) {
      for (var _len3 = arguments.length, modifiers = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        modifiers[_key3 - 1] = arguments[_key3];
      }

      if (modifiers.length) {
        return modifiers.some(function (modifier) {
          return event[modifier];
        });
      }

      return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=keycodes.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js ***!
    \********************************************************************/

  /*! exports provided: CdkScrollable, ScrollDispatcher, ViewportRuler, BlockScrollStrategy, CdkConnectedOverlay, CdkOverlayOrigin, CloseScrollStrategy, ConnectedOverlayPositionChange, ConnectedPositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy, FullscreenOverlayContainer, GlobalPositionStrategy, NoopScrollStrategy, OVERLAY_PROVIDERS, Overlay, OverlayConfig, OverlayContainer, OverlayKeyboardDispatcher, OverlayModule, OverlayOutsideClickDispatcher, OverlayPositionBuilder, OverlayRef, RepositionScrollStrategy, ScrollStrategyOptions, ScrollingVisibility, validateHorizontalPosition, validateVerticalPosition, ɵangular_material_src_cdk_overlay_overlay_a, ɵangular_material_src_cdk_overlay_overlay_b, ɵangular_material_src_cdk_overlay_overlay_c, ɵangular_material_src_cdk_overlay_overlay_d, ɵangular_material_src_cdk_overlay_overlay_e, ɵangular_material_src_cdk_overlay_overlay_f, ɵangular_material_src_cdk_overlay_overlay_g, ɵangular_material_src_cdk_overlay_overlay_h */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015OverlayJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlockScrollStrategy", function () {
      return BlockScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkConnectedOverlay", function () {
      return CdkConnectedOverlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkOverlayOrigin", function () {
      return CdkOverlayOrigin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CloseScrollStrategy", function () {
      return CloseScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedOverlayPositionChange", function () {
      return ConnectedOverlayPositionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectedPositionStrategy", function () {
      return ConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionPositionPair", function () {
      return ConnectionPositionPair;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlexibleConnectedPositionStrategy", function () {
      return FlexibleConnectedPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullscreenOverlayContainer", function () {
      return FullscreenOverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalPositionStrategy", function () {
      return GlobalPositionStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoopScrollStrategy", function () {
      return NoopScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OVERLAY_PROVIDERS", function () {
      return OVERLAY_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Overlay", function () {
      return Overlay;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayConfig", function () {
      return OverlayConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayContainer", function () {
      return OverlayContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher", function () {
      return OverlayKeyboardDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayModule", function () {
      return OverlayModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayOutsideClickDispatcher", function () {
      return OverlayOutsideClickDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder", function () {
      return OverlayPositionBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayRef", function () {
      return OverlayRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepositionScrollStrategy", function () {
      return RepositionScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions", function () {
      return ScrollStrategyOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingVisibility", function () {
      return ScrollingVisibility;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateHorizontalPosition", function () {
      return validateHorizontalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateVerticalPosition", function () {
      return validateVerticalPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_a", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_b", function () {
      return OVERLAY_KEYBOARD_DISPATCHER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_c", function () {
      return OVERLAY_CONTAINER_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_d", function () {
      return OVERLAY_CONTAINER_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_e", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_f", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_g", function () {
      return CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_cdk_overlay_overlay_h", function () {
      return BaseOverlayDispatcher;
    });
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkScrollable"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"];
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Strategy that will prevent the user from scrolling while the overlay is visible.
     */


    var BlockScrollStrategy =
    /*#__PURE__*/
    function () {
      function BlockScrollStrategy(_viewportRuler, document) {
        _classCallCheck(this, BlockScrollStrategy);

        this._viewportRuler = _viewportRuler;
        this._previousHTMLStyles = {
          top: '',
          left: ''
        };
        this._isEnabled = false;
        this._document = document;
      }
      /** Attaches this scroll strategy to an overlay. */


      _createClass(BlockScrollStrategy, [{
        key: "attach",
        value: function attach() {}
        /** Blocks page-level scroll while the attached overlay is open. */

      }, {
        key: "enable",
        value: function enable() {
          if (this._canBeEnabled()) {
            var root = this._document.documentElement;
            this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

            this._previousHTMLStyles.left = root.style.left || '';
            this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
            // have the user agent margin, whereas the `html` is guaranteed not to have one.

            root.style.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.left);
            root.style.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(-this._previousScrollPosition.top);
            root.classList.add('cdk-global-scrollblock');
            this._isEnabled = true;
          }
        }
        /** Unblocks page-level scroll while the attached overlay is open. */

      }, {
        key: "disable",
        value: function disable() {
          if (this._isEnabled) {
            var html = this._document.documentElement;
            var body = this._document.body;
            var htmlStyle = html.style;
            var bodyStyle = body.style;
            var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
            var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
            this._isEnabled = false;
            htmlStyle.left = this._previousHTMLStyles.left;
            htmlStyle.top = this._previousHTMLStyles.top;
            html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
            // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior

            htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
            window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);
            htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
            bodyStyle.scrollBehavior = previousBodyScrollBehavior;
          }
        }
      }, {
        key: "_canBeEnabled",
        value: function _canBeEnabled() {
          // Since the scroll strategies can't be singletons, we have to use a global CSS class
          // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
          // scrolling multiple times.
          var html = this._document.documentElement;

          if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
            return false;
          }

          var body = this._document.body;

          var viewport = this._viewportRuler.getViewportSize();

          return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
        }
      }]);

      return BlockScrollStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
     */


    function getMatScrollStrategyAlreadyAttachedError() {
      return Error("Scroll strategy has already been attached.");
    }
    /**
     * Strategy that will close the overlay as soon as the user starts scrolling.
     */


    var CloseScrollStrategy =
    /*#__PURE__*/
    function () {
      function CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
        var _this8 = this;

        _classCallCheck(this, CloseScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._config = _config;
        this._scrollSubscription = null;
        /** Detaches the overlay ref and disables the scroll strategy. */

        this._detach = function () {
          _this8.disable();

          if (_this8._overlayRef.hasAttached()) {
            _this8._ngZone.run(function () {
              return _this8._overlayRef.detach();
            });
          }
        };
      }
      /** Attaches this scroll strategy to an overlay. */


      _createClass(CloseScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /** Enables the closing of the attached overlay on scroll. */

      }, {
        key: "enable",
        value: function enable() {
          var _this9 = this;

          if (this._scrollSubscription) {
            return;
          }

          var stream = this._scrollDispatcher.scrolled(0);

          if (this._config && this._config.threshold && this._config.threshold > 1) {
            this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
            this._scrollSubscription = stream.subscribe(function () {
              var scrollPosition = _this9._viewportRuler.getViewportScrollPosition().top;

              if (Math.abs(scrollPosition - _this9._initialScrollPosition) > _this9._config.threshold) {
                _this9._detach();
              } else {
                _this9._overlayRef.updatePosition();
              }
            });
          } else {
            this._scrollSubscription = stream.subscribe(this._detach);
          }
        }
        /** Disables the closing the attached overlay on scroll. */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef = null;
        }
      }]);

      return CloseScrollStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Scroll strategy that doesn't do anything. */


    var NoopScrollStrategy =
    /*#__PURE__*/
    function () {
      function NoopScrollStrategy() {
        _classCallCheck(this, NoopScrollStrategy);
      }

      _createClass(NoopScrollStrategy, [{
        key: "enable",

        /** Does nothing, as this scroll strategy is a no-op. */
        value: function enable() {}
        /** Does nothing, as this scroll strategy is a no-op. */

      }, {
        key: "disable",
        value: function disable() {}
        /** Does nothing, as this scroll strategy is a no-op. */

      }, {
        key: "attach",
        value: function attach() {}
      }]);

      return NoopScrollStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO(jelbourn): move this to live with the rest of the scrolling code
    // TODO(jelbourn): someday replace this with IntersectionObservers

    /**
     * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
     * @param element Dimensions of the element (from getBoundingClientRect)
     * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @returns Whether the element is scrolled out of view
     * @docs-private
     */


    function isElementScrolledOutsideView(element, scrollContainers) {
      return scrollContainers.some(function (containerBounds) {
        var outsideAbove = element.bottom < containerBounds.top;
        var outsideBelow = element.top > containerBounds.bottom;
        var outsideLeft = element.right < containerBounds.left;
        var outsideRight = element.left > containerBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
      });
    }
    /**
     * Gets whether an element is clipped by any of its scrolling containers.
     * @param element Dimensions of the element (from getBoundingClientRect)
     * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
     * @returns Whether the element is clipped
     * @docs-private
     */


    function isElementClippedByScrolling(element, scrollContainers) {
      return scrollContainers.some(function (scrollContainerRect) {
        var clippedAbove = element.top < scrollContainerRect.top;
        var clippedBelow = element.bottom > scrollContainerRect.bottom;
        var clippedLeft = element.left < scrollContainerRect.left;
        var clippedRight = element.right > scrollContainerRect.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
      });
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Strategy that will update the element position as the user is scrolling.
     */


    var RepositionScrollStrategy =
    /*#__PURE__*/
    function () {
      function RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
        _classCallCheck(this, RepositionScrollStrategy);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        this._config = _config;
        this._scrollSubscription = null;
      }
      /** Attaches this scroll strategy to an overlay. */


      _createClass(RepositionScrollStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatScrollStrategyAlreadyAttachedError();
          }

          this._overlayRef = overlayRef;
        }
        /** Enables repositioning of the attached overlay on scroll. */

      }, {
        key: "enable",
        value: function enable() {
          var _this10 = this;

          if (!this._scrollSubscription) {
            var throttle = this._config ? this._config.scrollThrottle : 0;
            this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
              _this10._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


              if (_this10._config && _this10._config.autoClose) {
                var overlayRect = _this10._overlayRef.overlayElement.getBoundingClientRect();

                var _this10$_viewportRule = _this10._viewportRuler.getViewportSize(),
                    width = _this10$_viewportRule.width,
                    height = _this10$_viewportRule.height; // TODO(crisbeto): include all ancestor scroll containers here once
                // we have a way of exposing the trigger element to the scroll strategy.


                var parentRects = [{
                  width: width,
                  height: height,
                  bottom: height,
                  right: width,
                  top: 0,
                  left: 0
                }];

                if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                  _this10.disable();

                  _this10._ngZone.run(function () {
                    return _this10._overlayRef.detach();
                  });
                }
              }
            });
          }
        }
        /** Disables repositioning of the attached overlay on scroll. */

      }, {
        key: "disable",
        value: function disable() {
          if (this._scrollSubscription) {
            this._scrollSubscription.unsubscribe();

            this._scrollSubscription = null;
          }
        }
      }, {
        key: "detach",
        value: function detach() {
          this.disable();
          this._overlayRef = null;
        }
      }]);

      return RepositionScrollStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Options for how an overlay will handle scrolling.
     *
     * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
     * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
     */


    var ScrollStrategyOptions = function ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
      var _this11 = this;

      _classCallCheck(this, ScrollStrategyOptions);

      this._scrollDispatcher = _scrollDispatcher;
      this._viewportRuler = _viewportRuler;
      this._ngZone = _ngZone;
      /** Do nothing on scroll. */

      this.noop = function () {
        return new NoopScrollStrategy();
      };
      /**
       * Close the overlay as soon as the user scrolls.
       * @param config Configuration to be used inside the scroll strategy.
       */


      this.close = function (config) {
        return new CloseScrollStrategy(_this11._scrollDispatcher, _this11._ngZone, _this11._viewportRuler, config);
      };
      /** Block scrolling. */


      this.block = function () {
        return new BlockScrollStrategy(_this11._viewportRuler, _this11._document);
      };
      /**
       * Update the overlay's position on scroll.
       * @param config Configuration to be used inside the scroll strategy.
       * Allows debouncing the reposition calls.
       */


      this.reposition = function (config) {
        return new RepositionScrollStrategy(_this11._scrollDispatcher, _this11._viewportRuler, _this11._ngZone, config);
      };

      this._document = document;
    };

    ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
      return new (t || ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };

    ScrollStrategyOptions.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollStrategyOptions_Factory() {
        return new ScrollStrategyOptions(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      },
      token: ScrollStrategyOptions,
      providedIn: "root"
    });

    ScrollStrategyOptions.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollStrategyOptions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Initial configuration used when creating an overlay. */


    var OverlayConfig = function OverlayConfig(config) {
      _classCallCheck(this, OverlayConfig);

      /** Strategy to be used when handling scroll events while the overlay is open. */
      this.scrollStrategy = new NoopScrollStrategy();
      /** Custom class to add to the overlay pane. */

      this.panelClass = '';
      /** Whether the overlay has a backdrop. */

      this.hasBackdrop = false;
      /** Custom class to add to the backdrop */

      this.backdropClass = 'cdk-overlay-dark-backdrop';
      /**
       * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
       * Note that this usually doesn't include clicking on links (unless the user is using
       * the `HashLocationStrategy`).
       */

      this.disposeOnNavigation = false;

      if (config) {
        // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
        // loses the array generic type in the `for of`. But we *also* have to use `Array` because
        // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
        var configKeys = Object.keys(config);

        for (var _i = 0, _configKeys = configKeys; _i < _configKeys.length; _i++) {
          var key = _configKeys[_i];

          if (config[key] !== undefined) {
            // TypeScript, as of version 3.5, sees the left-hand-side of this expression
            // as "I don't know *which* key this is, so the only valid value is the intersection
            // of all the posible values." In this case, that happens to be `undefined`. TypeScript
            // is not smart enough to see that the right-hand-side is actually an access of the same
            // exact type with the same exact key, meaning that the value type must be identical.
            // So we use `any` to work around this.
            this[key] = config[key];
          }
        }
      }
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** The points of the origin element and the overlay element to connect. */


    var ConnectionPositionPair = function ConnectionPositionPair(origin, overlay,
    /** Offset along the X axis. */
    offsetX,
    /** Offset along the Y axis. */
    offsetY,
    /** Class(es) to be applied to the panel while this position is active. */
    panelClass) {
      _classCallCheck(this, ConnectionPositionPair);

      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.panelClass = panelClass;
      this.originX = origin.originX;
      this.originY = origin.originY;
      this.overlayX = overlay.overlayX;
      this.overlayY = overlay.overlayY;
    };
    /**
     * Set of properties regarding the position of the origin and overlay relative to the viewport
     * with respect to the containing Scrollable elements.
     *
     * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
     * bounds of any one of the strategy's Scrollable's bounding client rectangle.
     *
     * The overlay and origin are outside view if there is no overlap between their bounding client
     * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
     *
     *       -----------                    -----------
     *       | outside |                    | clipped |
     *       |  view   |              --------------------------
     *       |         |              |     |         |        |
     *       ----------               |     -----------        |
     *  --------------------------    |                        |
     *  |                        |    |      Scrollable        |
     *  |                        |    |                        |
     *  |                        |     --------------------------
     *  |      Scrollable        |
     *  |                        |
     *  --------------------------
     *
     *  @docs-private
     */


    var ScrollingVisibility = function ScrollingVisibility() {
      _classCallCheck(this, ScrollingVisibility);
    };
    /** The change event emitted by the strategy when a fallback position is used. */


    var ConnectedOverlayPositionChange = function ConnectedOverlayPositionChange(
    /** The position used as a result of this change. */
    connectionPair,
    /** @docs-private */
    scrollableViewProperties) {
      _classCallCheck(this, ConnectedOverlayPositionChange);

      this.connectionPair = connectionPair;
      this.scrollableViewProperties = scrollableViewProperties;
    };

    ConnectedOverlayPositionChange.ctorParameters = function () {
      return [{
        type: ConnectionPositionPair
      }, {
        type: ScrollingVisibility,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /**
     * Validates whether a vertical position property matches the expected values.
     * @param property Name of the property being validated.
     * @param value Value of the property being validated.
     * @docs-private
     */


    function validateVerticalPosition(property, value) {
      if (value !== 'top' && value !== 'bottom' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
      }
    }
    /**
     * Validates whether a horizontal position property matches the expected values.
     * @param property Name of the property being validated.
     * @param value Value of the property being validated.
     * @docs-private
     */


    function validateHorizontalPosition(property, value) {
      if (value !== 'start' && value !== 'end' && value !== 'center') {
        throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
      }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Service for dispatching events that land on the body to appropriate overlay ref,
     * if any. It maintains a list of attached overlays to determine best suited overlay based
     * on event target and order of overlay opens.
     */


    var BaseOverlayDispatcher =
    /*#__PURE__*/
    function () {
      function BaseOverlayDispatcher(document) {
        _classCallCheck(this, BaseOverlayDispatcher);

        /** Currently attached overlays in the order they were attached. */
        this._attachedOverlays = [];
        this._document = document;
      }

      _createClass(BaseOverlayDispatcher, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.detach();
        }
        /** Add a new overlay to the list of attached overlay refs. */

      }, {
        key: "add",
        value: function add(overlayRef) {
          // Ensure that we don't get the same overlay multiple times.
          this.remove(overlayRef);

          this._attachedOverlays.push(overlayRef);
        }
        /** Remove an overlay from the list of attached overlay refs. */

      }, {
        key: "remove",
        value: function remove(overlayRef) {
          var index = this._attachedOverlays.indexOf(overlayRef);

          if (index > -1) {
            this._attachedOverlays.splice(index, 1);
          } // Remove the global listener once there are no more overlays.


          if (this._attachedOverlays.length === 0) {
            this.detach();
          }
        }
      }]);

      return BaseOverlayDispatcher;
    }();

    BaseOverlayDispatcher.ɵfac = function BaseOverlayDispatcher_Factory(t) {
      return new (t || BaseOverlayDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };

    BaseOverlayDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function BaseOverlayDispatcher_Factory() {
        return new BaseOverlayDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      },
      token: BaseOverlayDispatcher,
      providedIn: "root"
    });

    BaseOverlayDispatcher.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseOverlayDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
     * if any. It maintains a list of attached overlays to determine best suited overlay based
     * on event target and order of overlay opens.
     */


    var OverlayKeyboardDispatcher =
    /*#__PURE__*/
    function (_BaseOverlayDispatche) {
      _inherits(OverlayKeyboardDispatcher, _BaseOverlayDispatche);

      var _super2 = _createSuper(OverlayKeyboardDispatcher);

      function OverlayKeyboardDispatcher(document) {
        var _this12;

        _classCallCheck(this, OverlayKeyboardDispatcher);

        _this12 = _super2.call(this, document);
        /** Keyboard event listener that will be attached to the body. */

        _this12._keydownListener = function (event) {
          var overlays = _this12._attachedOverlays;

          for (var i = overlays.length - 1; i > -1; i--) {
            // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
            // We want to target the most recent overlay, rather than trying to match where the event came
            // from, because some components might open an overlay, but keep focus on a trigger element
            // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
            // because we don't want overlays that don't handle keyboard events to block the ones below
            // them that do.
            if (overlays[i]._keydownEvents.observers.length > 0) {
              overlays[i]._keydownEvents.next(event);

              break;
            }
          }
        };

        return _this12;
      }
      /** Add a new overlay to the list of attached overlay refs. */


      _createClass(OverlayKeyboardDispatcher, [{
        key: "add",
        value: function add(overlayRef) {
          _get(_getPrototypeOf(OverlayKeyboardDispatcher.prototype), "add", this).call(this, overlayRef); // Lazily start dispatcher once first overlay is added


          if (!this._isAttached) {
            this._document.body.addEventListener('keydown', this._keydownListener);

            this._isAttached = true;
          }
        }
        /** Detaches the global keyboard event listener. */

      }, {
        key: "detach",
        value: function detach() {
          if (this._isAttached) {
            this._document.body.removeEventListener('keydown', this._keydownListener);

            this._isAttached = false;
          }
        }
      }]);

      return OverlayKeyboardDispatcher;
    }(BaseOverlayDispatcher);

    OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
      return new (t || OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
    };

    OverlayKeyboardDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayKeyboardDispatcher_Factory() {
        return new OverlayKeyboardDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]));
      },
      token: OverlayKeyboardDispatcher,
      providedIn: "root"
    });

    OverlayKeyboardDispatcher.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayKeyboardDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /** @docs-private @deprecated @breaking-change 8.0.0 */


    function OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY(dispatcher, _document) {
      return dispatcher || new OverlayKeyboardDispatcher(_document);
    }
    /** @docs-private @deprecated @breaking-change 8.0.0 */


    var OVERLAY_KEYBOARD_DISPATCHER_PROVIDER = {
      // If there is already an OverlayKeyboardDispatcher available, use that.
      // Otherwise, provide a new one.
      provide: OverlayKeyboardDispatcher,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayKeyboardDispatcher], // Coerce to `InjectionToken` so that the `deps` match the "shape"
      // of the type expected by Angular
      _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]],
      useFactory: OVERLAY_KEYBOARD_DISPATCHER_PROVIDER_FACTORY
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Service for dispatching mouse click events that land on the body to appropriate overlay ref,
     * if any. It maintains a list of attached overlays to determine best suited overlay based
     * on event target and order of overlay opens.
     */

    var OverlayOutsideClickDispatcher =
    /*#__PURE__*/
    function (_BaseOverlayDispatche2) {
      _inherits(OverlayOutsideClickDispatcher, _BaseOverlayDispatche2);

      var _super3 = _createSuper(OverlayOutsideClickDispatcher);

      function OverlayOutsideClickDispatcher(document, _platform) {
        var _this13;

        _classCallCheck(this, OverlayOutsideClickDispatcher);

        _this13 = _super3.call(this, document);
        _this13._platform = _platform;
        _this13._cursorStyleIsSet = false;
        /** Click event listener that will be attached to the body propagate phase. */

        _this13._clickListener = function (event) {
          // Get the target through the `composedPath` if possible to account for shadow DOM.
          var target = event.composedPath ? event.composedPath()[0] : event.target; // We copy the array because the original may be modified asynchronously if the
          // outsidePointerEvents listener decides to detach overlays resulting in index errors inside
          // the for loop.

          var overlays = _this13._attachedOverlays.slice(); // Dispatch the mouse event to the top overlay which has subscribers to its mouse events.
          // We want to target all overlays for which the click could be considered as outside click.
          // As soon as we reach an overlay for which the click is not outside click we break off
          // the loop.


          for (var i = overlays.length - 1; i > -1; i--) {
            var overlayRef = overlays[i];

            if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
              continue;
            } // If it's a click inside the overlay, just break - we should do nothing
            // If it's an outside click dispatch the mouse event, and proceed with the next overlay


            if (overlayRef.overlayElement.contains(target)) {
              break;
            }

            overlayRef._outsidePointerEvents.next(event);
          }
        };

        return _this13;
      }
      /** Add a new overlay to the list of attached overlay refs. */


      _createClass(OverlayOutsideClickDispatcher, [{
        key: "add",
        value: function add(overlayRef) {
          _get(_getPrototypeOf(OverlayOutsideClickDispatcher.prototype), "add", this).call(this, overlayRef); // tslint:disable: max-line-length
          // Safari on iOS does not generate click events for non-interactive
          // elements. However, we want to receive a click for any element outside
          // the overlay. We can force a "clickable" state by setting
          // `cursor: pointer` on the document body.
          // See https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
          // and https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html
          // tslint:enable: max-line-length


          if (!this._isAttached) {
            this._document.body.addEventListener('click', this._clickListener, true);

            this._document.body.addEventListener('contextmenu', this._clickListener, true); // click event is not fired on iOS. To make element "clickable" we are
            // setting the cursor to pointer


            if (this._platform.IOS && !this._cursorStyleIsSet) {
              this._cursorOriginalValue = this._document.body.style.cursor;
              this._document.body.style.cursor = 'pointer';
              this._cursorStyleIsSet = true;
            }

            this._isAttached = true;
          }
        }
        /** Detaches the global keyboard event listener. */

      }, {
        key: "detach",
        value: function detach() {
          if (this._isAttached) {
            this._document.body.removeEventListener('click', this._clickListener, true);

            this._document.body.removeEventListener('contextmenu', this._clickListener, true);

            if (this._platform.IOS && this._cursorStyleIsSet) {
              this._document.body.style.cursor = this._cursorOriginalValue;
              this._cursorStyleIsSet = false;
            }

            this._isAttached = false;
          }
        }
      }]);

      return OverlayOutsideClickDispatcher;
    }(BaseOverlayDispatcher);

    OverlayOutsideClickDispatcher.ɵfac = function OverlayOutsideClickDispatcher_Factory(t) {
      return new (t || OverlayOutsideClickDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };

    OverlayOutsideClickDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayOutsideClickDispatcher_Factory() {
        return new OverlayOutsideClickDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      },
      token: OverlayOutsideClickDispatcher,
      providedIn: "root"
    });

    OverlayOutsideClickDispatcher.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayOutsideClickDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Whether we're in a testing environment.
     * TODO(crisbeto): remove this once we have an overlay testing module.
     */


    var isTestEnvironment = typeof window !== 'undefined' && !!window && !!(window.__karma__ || window.jasmine);
    /** Container inside which all overlays will render. */

    var OverlayContainer =
    /*#__PURE__*/
    function () {
      function OverlayContainer(document,
      /**
       * @deprecated `platform` parameter to become required.
       * @breaking-change 10.0.0
       */
      _platform) {
        _classCallCheck(this, OverlayContainer);

        this._platform = _platform;
        this._document = document;
      }

      _createClass(OverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var container = this._containerElement;

          if (container && container.parentNode) {
            container.parentNode.removeChild(container);
          }
        }
        /**
         * This method returns the overlay container element. It will lazily
         * create the element the first time  it is called to facilitate using
         * the container in non-browser environments.
         * @returns the container element
         */

      }, {
        key: "getContainerElement",
        value: function getContainerElement() {
          if (!this._containerElement) {
            this._createContainer();
          }

          return this._containerElement;
        }
        /**
         * Create the overlay container element, which is simply a div
         * with the 'cdk-overlay-container' class on the document body.
         */

      }, {
        key: "_createContainer",
        value: function _createContainer() {
          // @breaking-change 10.0.0 Remove null check for `_platform`.
          var isBrowser = this._platform ? this._platform.isBrowser : typeof window !== 'undefined';
          var containerClass = 'cdk-overlay-container';

          if (isBrowser || isTestEnvironment) {
            var oppositePlatformContainers = this._document.querySelectorAll(".".concat(containerClass, "[platform=\"server\"], ") + ".".concat(containerClass, "[platform=\"test\"]")); // Remove any old containers from the opposite platform.
            // This can happen when transitioning from the server to the client.


            for (var i = 0; i < oppositePlatformContainers.length; i++) {
              oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
            }
          }

          var container = this._document.createElement('div');

          container.classList.add(containerClass); // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
          // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
          // The new logic was a little too aggressive since it was breaking some legitimate use cases.
          // To mitigate the problem we made it so that only containers from a different platform are
          // cleared, but the side-effect was that people started depending on the overly-aggressive
          // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
          // module which does the cleanup, we try to detect that we're in a test environment and we
          // always clear the container. See #17006.
          // TODO(crisbeto): remove the test environment check once we have an overlay testing module.

          if (isTestEnvironment) {
            container.setAttribute('platform', 'test');
          } else if (!isBrowser) {
            container.setAttribute('platform', 'server');
          }

          this._document.body.appendChild(container);

          this._containerElement = container;
        }
      }]);

      return OverlayContainer;
    }();

    OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
      return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };

    OverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayContainer_Factory() {
        return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      },
      token: OverlayContainer,
      providedIn: "root"
    });

    OverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();
    /** @docs-private @deprecated @breaking-change 8.0.0 */


    function OVERLAY_CONTAINER_PROVIDER_FACTORY(parentContainer, _document) {
      return parentContainer || new OverlayContainer(_document);
    }
    /** @docs-private @deprecated @breaking-change 8.0.0 */


    var OVERLAY_CONTAINER_PROVIDER = {
      // If there is already an OverlayContainer available, use that. Otherwise, provide a new one.
      provide: OverlayContainer,
      deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), OverlayContainer], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"] // We need to use the InjectionToken somewhere to keep TS happy
      ],
      useFactory: OVERLAY_CONTAINER_PROVIDER_FACTORY
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Reference to an overlay that has been created with the Overlay service.
     * Used to manipulate or dispose of said overlay.
     */

    var OverlayRef =
    /*#__PURE__*/
    function () {
      function OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, // @breaking-change 8.0.0 `_location` parameter to be made required.
      _location, // @breaking-change 9.0.0 `_mouseClickDispatcher` parameter to be made required.
      _outsideClickDispatcher) {
        var _this14 = this;

        _classCallCheck(this, OverlayRef);

        this._portalOutlet = _portalOutlet;
        this._host = _host;
        this._pane = _pane;
        this._config = _config;
        this._ngZone = _ngZone;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._document = _document;
        this._location = _location;
        this._outsideClickDispatcher = _outsideClickDispatcher;
        this._backdropElement = null;
        this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;

        this._backdropClickHandler = function (event) {
          return _this14._backdropClick.next(event);
        };
        /** Stream of keydown events dispatched to this overlay. */


        this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Stream of mouse outside events dispatched to this overlay. */

        this._outsidePointerEvents = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();

        if (_config.scrollStrategy) {
          this._scrollStrategy = _config.scrollStrategy;

          this._scrollStrategy.attach(this);
        }

        this._positionStrategy = _config.positionStrategy;
      }
      /** The overlay's HTML element */


      _createClass(OverlayRef, [{
        key: "attach",

        /**
         * Attaches content, given via a Portal, to the overlay.
         * If the overlay is configured to have a backdrop, it will be created.
         *
         * @param portal Portal instance to which to attach the overlay.
         * @returns The portal attachment result.
         */
        value: function attach(portal) {
          var _this15 = this;

          var attachResult = this._portalOutlet.attach(portal); // Update the pane element with the given configuration.


          if (!this._host.parentElement && this._previousHostParent) {
            this._previousHostParent.appendChild(this._host);
          }

          if (this._positionStrategy) {
            this._positionStrategy.attach(this);
          }

          this._updateStackingOrder();

          this._updateElementSize();

          this._updateElementDirection();

          if (this._scrollStrategy) {
            this._scrollStrategy.enable();
          } // Update the position once the zone is stable so that the overlay will be fully rendered
          // before attempting to position it, as the position may depend on the size of the rendered
          // content.


          this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe(function () {
            // The overlay could've been detached before the zone has stabilized.
            if (_this15.hasAttached()) {
              _this15.updatePosition();
            }
          }); // Enable pointer events for the overlay pane element.


          this._togglePointerEvents(true);

          if (this._config.hasBackdrop) {
            this._attachBackdrop();
          }

          if (this._config.panelClass) {
            this._toggleClasses(this._pane, this._config.panelClass, true);
          } // Only emit the `attachments` event once all other setup is done.


          this._attachments.next(); // Track this overlay by the keyboard dispatcher


          this._keyboardDispatcher.add(this); // @breaking-change 8.0.0 remove the null check for `_location`
          // once the constructor parameter is made required.


          if (this._config.disposeOnNavigation && this._location) {
            this._locationChanges = this._location.subscribe(function () {
              return _this15.dispose();
            });
          } // @breaking-change 9.0.0 remove the null check for `_mouseClickDispatcher`


          if (this._outsideClickDispatcher) {
            this._outsideClickDispatcher.add(this);
          }

          return attachResult;
        }
        /**
         * Detaches an overlay from a portal.
         * @returns The portal detachment result.
         */

      }, {
        key: "detach",
        value: function detach() {
          if (!this.hasAttached()) {
            return;
          }

          this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
          // This is necessary because otherwise the pane element will cover the page and disable
          // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

          this._togglePointerEvents(false);

          if (this._positionStrategy && this._positionStrategy.detach) {
            this._positionStrategy.detach();
          }

          if (this._scrollStrategy) {
            this._scrollStrategy.disable();
          }

          var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


          this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


          this._keyboardDispatcher.remove(this); // Keeping the host element in the DOM can cause scroll jank, because it still gets
          // rendered, even though it's transparent and unclickable which is why we remove it.


          this._detachContentWhenStable(); // Stop listening for location changes.


          this._locationChanges.unsubscribe(); // @breaking-change 9.0.0 remove the null check for `_outsideClickDispatcher`


          if (this._outsideClickDispatcher) {
            this._outsideClickDispatcher.remove(this);
          }

          return detachmentResult;
        }
        /** Cleans up the overlay from the DOM. */

      }, {
        key: "dispose",
        value: function dispose() {
          var isAttached = this.hasAttached();

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._disposeScrollStrategy();

          this.detachBackdrop();

          this._locationChanges.unsubscribe();

          this._keyboardDispatcher.remove(this);

          this._portalOutlet.dispose();

          this._attachments.complete();

          this._backdropClick.complete();

          this._keydownEvents.complete();

          this._outsidePointerEvents.complete(); // @breaking-change 9.0.0 remove the null check for `_outsideClickDispatcher`


          if (this._outsideClickDispatcher) {
            this._outsideClickDispatcher.remove(this);
          }

          if (this._host && this._host.parentNode) {
            this._host.parentNode.removeChild(this._host);

            this._host = null;
          }

          this._previousHostParent = this._pane = null;

          if (isAttached) {
            this._detachments.next();
          }

          this._detachments.complete();
        }
        /** Whether the overlay has attached content. */

      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        /** Gets an observable that emits when the backdrop has been clicked. */

      }, {
        key: "backdropClick",
        value: function backdropClick() {
          return this._backdropClick;
        }
        /** Gets an observable that emits when the overlay has been attached. */

      }, {
        key: "attachments",
        value: function attachments() {
          return this._attachments;
        }
        /** Gets an observable that emits when the overlay has been detached. */

      }, {
        key: "detachments",
        value: function detachments() {
          return this._detachments;
        }
        /** Gets an observable of keydown events targeted to this overlay. */

      }, {
        key: "keydownEvents",
        value: function keydownEvents() {
          return this._keydownEvents;
        }
        /** Gets an observable of pointer events targeted outside this overlay. */

      }, {
        key: "outsidePointerEvents",
        value: function outsidePointerEvents() {
          return this._outsidePointerEvents;
        }
        /** Gets the current overlay configuration, which is immutable. */

      }, {
        key: "getConfig",
        value: function getConfig() {
          return this._config;
        }
        /** Updates the position of the overlay based on the position strategy. */

      }, {
        key: "updatePosition",
        value: function updatePosition() {
          if (this._positionStrategy) {
            this._positionStrategy.apply();
          }
        }
        /** Switches to a new position strategy and updates the overlay position. */

      }, {
        key: "updatePositionStrategy",
        value: function updatePositionStrategy(strategy) {
          if (strategy === this._positionStrategy) {
            return;
          }

          if (this._positionStrategy) {
            this._positionStrategy.dispose();
          }

          this._positionStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            this.updatePosition();
          }
        }
        /** Update the size properties of the overlay. */

      }, {
        key: "updateSize",
        value: function updateSize(sizeConfig) {
          this._config = Object.assign(Object.assign({}, this._config), sizeConfig);

          this._updateElementSize();
        }
        /** Sets the LTR/RTL direction for the overlay. */

      }, {
        key: "setDirection",
        value: function setDirection(dir) {
          this._config = Object.assign(Object.assign({}, this._config), {
            direction: dir
          });

          this._updateElementDirection();
        }
        /** Add a CSS class or an array of classes to the overlay pane. */

      }, {
        key: "addPanelClass",
        value: function addPanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, true);
          }
        }
        /** Remove a CSS class or an array of classes from the overlay pane. */

      }, {
        key: "removePanelClass",
        value: function removePanelClass(classes) {
          if (this._pane) {
            this._toggleClasses(this._pane, classes, false);
          }
        }
        /**
         * Returns the layout direction of the overlay panel.
         */

      }, {
        key: "getDirection",
        value: function getDirection() {
          var direction = this._config.direction;

          if (!direction) {
            return 'ltr';
          }

          return typeof direction === 'string' ? direction : direction.value;
        }
        /** Switches to a new scroll strategy. */

      }, {
        key: "updateScrollStrategy",
        value: function updateScrollStrategy(strategy) {
          if (strategy === this._scrollStrategy) {
            return;
          }

          this._disposeScrollStrategy();

          this._scrollStrategy = strategy;

          if (this.hasAttached()) {
            strategy.attach(this);
            strategy.enable();
          }
        }
        /** Updates the text direction of the overlay panel. */

      }, {
        key: "_updateElementDirection",
        value: function _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        /** Updates the size of the overlay element based on the overlay config. */

      }, {
        key: "_updateElementSize",
        value: function _updateElementSize() {
          if (!this._pane) {
            return;
          }

          var style = this._pane.style;
          style.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.width);
          style.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.height);
          style.minWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minWidth);
          style.minHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.minHeight);
          style.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxWidth);
          style.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(this._config.maxHeight);
        }
        /** Toggles the pointer events for the overlay pane element. */

      }, {
        key: "_togglePointerEvents",
        value: function _togglePointerEvents(enablePointer) {
          this._pane.style.pointerEvents = enablePointer ? 'auto' : 'none';
        }
        /** Attaches a backdrop for this overlay. */

      }, {
        key: "_attachBackdrop",
        value: function _attachBackdrop() {
          var _this16 = this;

          var showingClass = 'cdk-overlay-backdrop-showing';
          this._backdropElement = this._document.createElement('div');

          this._backdropElement.classList.add('cdk-overlay-backdrop');

          if (this._config.backdropClass) {
            this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
          } // Insert the backdrop before the pane in the DOM order,
          // in order to handle stacked overlays properly.


          this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
          // action desired when such a click occurs (usually closing the overlay).


          this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


          if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () {
              requestAnimationFrame(function () {
                if (_this16._backdropElement) {
                  _this16._backdropElement.classList.add(showingClass);
                }
              });
            });
          } else {
            this._backdropElement.classList.add(showingClass);
          }
        }
        /**
         * Updates the stacking order of the element, moving it to the top if necessary.
         * This is required in cases where one overlay was detached, while another one,
         * that should be behind it, was destroyed. The next time both of them are opened,
         * the stacking will be wrong, because the detached element's pane will still be
         * in its original DOM position.
         */

      }, {
        key: "_updateStackingOrder",
        value: function _updateStackingOrder() {
          if (this._host.nextSibling) {
            this._host.parentNode.appendChild(this._host);
          }
        }
        /** Detaches the backdrop (if any) associated with the overlay. */

      }, {
        key: "detachBackdrop",
        value: function detachBackdrop() {
          var _this17 = this;

          var backdropToDetach = this._backdropElement;

          if (!backdropToDetach) {
            return;
          }

          var timeoutId;

          var finishDetach = function finishDetach() {
            // It may not be attached to anything in certain cases (e.g. unit tests).
            if (backdropToDetach) {
              backdropToDetach.removeEventListener('click', _this17._backdropClickHandler);
              backdropToDetach.removeEventListener('transitionend', finishDetach);

              if (backdropToDetach.parentNode) {
                backdropToDetach.parentNode.removeChild(backdropToDetach);
              }
            } // It is possible that a new portal has been attached to this overlay since we started
            // removing the backdrop. If that is the case, only clear the backdrop reference if it
            // is still the same instance that we started to remove.


            if (_this17._backdropElement == backdropToDetach) {
              _this17._backdropElement = null;
            }

            if (_this17._config.backdropClass) {
              _this17._toggleClasses(backdropToDetach, _this17._config.backdropClass, false);
            }

            clearTimeout(timeoutId);
          };

          backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

          this._ngZone.runOutsideAngular(function () {
            backdropToDetach.addEventListener('transitionend', finishDetach);
          }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
          // In this case we make it unclickable and we try to remove it after a delay.


          backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
          // If it were to run inside the Angular zone, every test that used Overlay would have to be
          // either async or fakeAsync.

          timeoutId = this._ngZone.runOutsideAngular(function () {
            return setTimeout(finishDetach, 500);
          });
        }
        /** Toggles a single CSS class or an array of classes on an element. */

      }, {
        key: "_toggleClasses",
        value: function _toggleClasses(element, cssClasses, isAdd) {
          var classList = element.classList;
          Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
            // We can't do a spread here, because IE doesn't support setting multiple classes.
            // Also trying to add an empty string to a DOMTokenList will throw.
            if (cssClass) {
              isAdd ? classList.add(cssClass) : classList.remove(cssClass);
            }
          });
        }
        /** Detaches the overlay content next time the zone stabilizes. */

      }, {
        key: "_detachContentWhenStable",
        value: function _detachContentWhenStable() {
          var _this18 = this;

          // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
          // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
          // be patched to run inside the zone, which will throw us into an infinite loop.
          this._ngZone.runOutsideAngular(function () {
            // We can't remove the host here immediately, because the overlay pane's content
            // might still be animating. This stream helps us avoid interrupting the animation
            // by waiting for the pane to become empty.
            var subscription = _this18._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(_this18._attachments, _this18._detachments))).subscribe(function () {
              // Needs a couple of checks for the pane and host, because
              // they may have been removed by the time the zone stabilizes.
              if (!_this18._pane || !_this18._host || _this18._pane.children.length === 0) {
                if (_this18._pane && _this18._config.panelClass) {
                  _this18._toggleClasses(_this18._pane, _this18._config.panelClass, false);
                }

                if (_this18._host && _this18._host.parentElement) {
                  _this18._previousHostParent = _this18._host.parentElement;

                  _this18._previousHostParent.removeChild(_this18._host);
                }

                subscription.unsubscribe();
              }
            });
          });
        }
        /** Disposes of a scroll strategy. */

      }, {
        key: "_disposeScrollStrategy",
        value: function _disposeScrollStrategy() {
          var scrollStrategy = this._scrollStrategy;

          if (scrollStrategy) {
            scrollStrategy.disable();

            if (scrollStrategy.detach) {
              scrollStrategy.detach();
            }
          }
        }
      }, {
        key: "overlayElement",
        get: function get() {
          return this._pane;
        }
        /** The overlay's backdrop HTML element. */

      }, {
        key: "backdropElement",
        get: function get() {
          return this._backdropElement;
        }
        /**
         * Wrapper around the panel element. Can be used for advanced
         * positioning where a wrapper with specific styling is
         * required around the overlay pane.
         */

      }, {
        key: "hostElement",
        get: function get() {
          return this._host;
        }
      }]);

      return OverlayRef;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // TODO: refactor clipping detection into a separate thing (part of scrolling module)
    // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

    /** Class to be added to the overlay bounding box. */


    var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
    /** Regex used to split a string on its CSS units. */

    var cssUnitPattern = /([A-Za-z%]+)$/;
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     */

    var FlexibleConnectedPositionStrategy =
    /*#__PURE__*/
    function () {
      function FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, FlexibleConnectedPositionStrategy);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
        /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */

        this._lastBoundingBoxSize = {
          width: 0,
          height: 0
        };
        /** Whether the overlay was pushed in a previous positioning. */

        this._isPushed = false;
        /** Whether the overlay can be pushed on-screen on the initial open. */

        this._canPush = true;
        /** Whether the overlay can grow via flexible width/height after the initial open. */

        this._growAfterOpen = false;
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */

        this._hasFlexibleDimensions = true;
        /** Whether the overlay position is locked. */

        this._positionLocked = false;
        /** Amount of space that must be maintained between the overlay and the edge of the viewport. */

        this._viewportMargin = 0;
        /** The Scrollable containers used to check scrollable view properties on position change. */

        this._scrollables = [];
        /** Ordered list of preferred positions, from most to least desirable. */

        this._preferredPositions = [];
        /** Subject that emits whenever the position changes. */

        this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /** Subscription to viewport size changes. */

        this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Default offset for the overlay along the x axis. */

        this._offsetX = 0;
        /** Default offset for the overlay along the y axis. */

        this._offsetY = 0;
        /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */

        this._appliedPanelClasses = [];
        /** Observable sequence of position changes. */

        this.positionChanges = this._positionChanges;
        this.setOrigin(connectedTo);
      }
      /** Ordered list of preferred positions, from most to least desirable. */


      _createClass(FlexibleConnectedPositionStrategy, [{
        key: "attach",

        /** Attaches this position strategy to an overlay. */
        value: function attach(overlayRef) {
          var _this19 = this;

          if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('This position strategy is already attached to an overlay');
          }

          this._validatePositions();

          overlayRef.hostElement.classList.add(boundingBoxClass);
          this._overlayRef = overlayRef;
          this._boundingBox = overlayRef.hostElement;
          this._pane = overlayRef.overlayElement;
          this._isDisposed = false;
          this._isInitialRender = true;
          this._lastPosition = null;

          this._resizeSubscription.unsubscribe();

          this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
            // When the window is resized, we want to trigger the next reposition as if it
            // was an initial render, in order for the strategy to pick a new optimal position,
            // otherwise position locking will cause it to stay at the old one.
            _this19._isInitialRender = true;

            _this19.apply();
          });
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin best fits on-screen.
         *
         * The selection of a position goes as follows:
         *  - If any positions fit completely within the viewport as-is,
         *      choose the first position that does so.
         *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
         *      choose the position with the greatest available size modified by the positions' weight.
         *  - If pushing is enabled, take the position that went off-screen the least and push it
         *      on-screen.
         *  - If none of the previous criteria were met, use the position that goes off-screen the least.
         * @docs-private
         */

      }, {
        key: "apply",
        value: function apply() {
          // We shouldn't do anything if the strategy was disposed or we're on the server.
          if (this._isDisposed || !this._platform.isBrowser) {
            return;
          } // If the position has been applied already (e.g. when the overlay was opened) and the
          // consumer opted into locking in the position, re-use the old position, in order to
          // prevent the overlay from jumping around.


          if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
            this.reapplyLastPosition();
            return;
          }

          this._clearPanelClasses();

          this._resetOverlayElementStyles();

          this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
          // the overlay relative to the origin.
          // We use the viewport rect to determine whether a position would go off-screen.


          this._viewportRect = this._getNarrowedViewportRect();
          this._originRect = this._getOriginRect();
          this._overlayRect = this._pane.getBoundingClientRect();
          var originRect = this._originRect;
          var overlayRect = this._overlayRect;
          var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

          var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

          var fallback; // Go through each of the preferred positions looking for a good fit.
          // If a good fit is found, it will be applied immediately.

          var _iterator3 = _createForOfIteratorHelper(this._preferredPositions),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var pos = _step3.value;

              // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
              var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
              // overlay in this position. We use the top-left corner for calculations and later translate
              // this into an appropriate (top, left, bottom, right) style.


              var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.


              var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


              if (overlayFit.isCompletelyWithinViewport) {
                this._isPushed = false;

                this._applyPosition(pos, originPoint);

                return;
              } // If the overlay has flexible dimensions, we can use this position
              // so long as there's enough space for the minimum dimensions.


              if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                // Save positions where the overlay will fit with flexible dimensions. We will use these
                // if none of the positions fit *without* flexible dimensions.
                flexibleFits.push({
                  position: pos,
                  origin: originPoint,
                  overlayRect: overlayRect,
                  boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                });
                continue;
              } // If the current preferred position does not fit on the screen, remember the position
              // if it has more visible area on-screen than we've seen and move onto the next preferred
              // position.


              if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                fallback = {
                  overlayFit: overlayFit,
                  overlayPoint: overlayPoint,
                  originPoint: originPoint,
                  position: pos,
                  overlayRect: overlayRect
                };
              }
            } // If there are any positions where the overlay would fit with flexible dimensions, choose the
            // one that has the greatest area available modified by the position's weight

          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          if (flexibleFits.length) {
            var bestFit = null;
            var bestScore = -1;

            var _iterator4 = _createForOfIteratorHelper(flexibleFits),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var fit = _step4.value;
                var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                if (score > bestScore) {
                  bestScore = score;
                  bestFit = fit;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this._isPushed = false;

            this._applyPosition(bestFit.position, bestFit.origin);

            return;
          } // When none of the preferred positions fit within the viewport, take the position
          // that went off-screen the least and attempt to push it on-screen.


          if (this._canPush) {
            // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
            this._isPushed = true;

            this._applyPosition(fallback.position, fallback.originPoint);

            return;
          } // All options for getting the overlay within the viewport have been exhausted, so go with the
          // position that went off-screen the least.


          this._applyPosition(fallback.position, fallback.originPoint);
        }
      }, {
        key: "detach",
        value: function detach() {
          this._clearPanelClasses();

          this._lastPosition = null;
          this._previousPushAmount = null;

          this._resizeSubscription.unsubscribe();
        }
        /** Cleanup after the element gets destroyed. */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed) {
            return;
          } // We can't use `_resetBoundingBoxStyles` here, because it resets
          // some properties to zero, rather than removing them.


          if (this._boundingBox) {
            extendStyles(this._boundingBox.style, {
              top: '',
              left: '',
              right: '',
              bottom: '',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }

          if (this._pane) {
            this._resetOverlayElementStyles();
          }

          if (this._overlayRef) {
            this._overlayRef.hostElement.classList.remove(boundingBoxClass);
          }

          this.detach();

          this._positionChanges.complete();

          this._overlayRef = this._boundingBox = null;
          this._isDisposed = true;
        }
        /**
         * This re-aligns the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         */

      }, {
        key: "reapplyLastPosition",
        value: function reapplyLastPosition() {
          if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            this._viewportRect = this._getNarrowedViewportRect();
            var lastPosition = this._lastPosition || this._preferredPositions[0];

            var originPoint = this._getOriginPoint(this._originRect, lastPosition);

            this._applyPosition(lastPosition, originPoint);
          }
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          this._scrollables = scrollables;
          return this;
        }
        /**
         * Adds new preferred positions.
         * @param positions List of positions options for this overlay.
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
          // it in order to avoid it being picked up if the consumer tries to re-apply.

          if (positions.indexOf(this._lastPosition) === -1) {
            this._lastPosition = null;
          }

          this._validatePositions();

          return this;
        }
        /**
         * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
         * @param margin Required margin between the overlay and the viewport edge in pixels.
         */

      }, {
        key: "withViewportMargin",
        value: function withViewportMargin(margin) {
          this._viewportMargin = margin;
          return this;
        }
        /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */

      }, {
        key: "withFlexibleDimensions",
        value: function withFlexibleDimensions() {
          var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._hasFlexibleDimensions = flexibleDimensions;
          return this;
        }
        /** Sets whether the overlay can grow after the initial open via flexible width/height. */

      }, {
        key: "withGrowAfterOpen",
        value: function withGrowAfterOpen() {
          var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._growAfterOpen = growAfterOpen;
          return this;
        }
        /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */

      }, {
        key: "withPush",
        value: function withPush() {
          var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._canPush = canPush;
          return this;
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @param isLocked Whether the overlay should locked in.
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition() {
          var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          this._positionLocked = isLocked;
          return this;
        }
        /**
         * Sets the origin, relative to which to position the overlay.
         * Using an element origin is useful for building components that need to be positioned
         * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
         * used for cases like contextual menus which open relative to the user's pointer.
         * @param origin Reference to the new origin.
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          this._origin = origin;
          return this;
        }
        /**
         * Sets the default offset for the overlay's connection point on the x-axis.
         * @param offset New offset in the X axis.
         */

      }, {
        key: "withDefaultOffsetX",
        value: function withDefaultOffsetX(offset) {
          this._offsetX = offset;
          return this;
        }
        /**
         * Sets the default offset for the overlay's connection point on the y-axis.
         * @param offset New offset in the Y axis.
         */

      }, {
        key: "withDefaultOffsetY",
        value: function withDefaultOffsetY(offset) {
          this._offsetY = offset;
          return this;
        }
        /**
         * Configures that the position strategy should set a `transform-origin` on some elements
         * inside the overlay, depending on the current position that is being applied. This is
         * useful for the cases where the origin of an animation can change depending on the
         * alignment of the overlay.
         * @param selector CSS selector that will be used to find the target
         *    elements onto which to set the transform origin.
         */

      }, {
        key: "withTransformOriginOn",
        value: function withTransformOriginOn(selector) {
          this._transformOriginSelector = selector;
          return this;
        }
        /**
         * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
         */

      }, {
        key: "_getOriginPoint",
        value: function _getOriginPoint(originRect, pos) {
          var x;

          if (pos.originX == 'center') {
            // Note: when centering we should always use the `left`
            // offset, otherwise the position will be wrong in RTL.
            x = originRect.left + originRect.width / 2;
          } else {
            var startX = this._isRtl() ? originRect.right : originRect.left;
            var endX = this._isRtl() ? originRect.left : originRect.right;
            x = pos.originX == 'start' ? startX : endX;
          }

          var y;

          if (pos.originY == 'center') {
            y = originRect.top + originRect.height / 2;
          } else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
          }

          return {
            x: x,
            y: y
          };
        }
        /**
         * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
         * origin point to which the overlay should be connected.
         */

      }, {
        key: "_getOverlayPoint",
        value: function _getOverlayPoint(originPoint, overlayRect, pos) {
          // Calculate the (overlayStartX, overlayStartY), the start of the
          // potential overlay position relative to the origin point.
          var overlayStartX;

          if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
          } else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl() ? -overlayRect.width : 0;
          } else {
            overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
          }

          var overlayStartY;

          if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
          } else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
          } // The (x, y) coordinates of the overlay.


          return {
            x: originPoint.x + overlayStartX,
            y: originPoint.y + overlayStartY
          };
        }
        /** Gets how well an overlay at the given point will fit within the viewport. */

      }, {
        key: "_getOverlayFit",
        value: function _getOverlayFit(point, overlay, viewport, position) {
          var x = point.x,
              y = point.y;

          var offsetX = this._getOffset(position, 'x');

          var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


          if (offsetX) {
            x += offsetX;
          }

          if (offsetY) {
            y += offsetY;
          } // How much the overlay would overflow at this position, on each side.


          var leftOverflow = 0 - x;
          var rightOverflow = x + overlay.width - viewport.width;
          var topOverflow = 0 - y;
          var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

          var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);

          var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);

          var visibleArea = visibleWidth * visibleHeight;
          return {
            visibleArea: visibleArea,
            isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
            fitsInViewportVertically: visibleHeight === overlay.height,
            fitsInViewportHorizontally: visibleWidth == overlay.width
          };
        }
        /**
         * Whether the overlay can fit within the viewport when it may resize either its width or height.
         * @param fit How well the overlay fits in the viewport at some position.
         * @param point The (x, y) coordinates of the overlat at some position.
         * @param viewport The geometry of the viewport.
         */

      }, {
        key: "_canFitWithFlexibleDimensions",
        value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
          if (this._hasFlexibleDimensions) {
            var availableHeight = viewport.bottom - point.y;
            var availableWidth = viewport.right - point.x;
            var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
            var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
            var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
            var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
            return verticalFit && horizontalFit;
          }

          return false;
        }
        /**
         * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
         * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
         * right and bottom).
         *
         * @param start Starting point from which the overlay is pushed.
         * @param overlay Dimensions of the overlay.
         * @param scrollPosition Current viewport scroll position.
         * @returns The point at which to position the overlay after pushing. This is effectively a new
         *     originPoint.
         */

      }, {
        key: "_pushOverlayOnScreen",
        value: function _pushOverlayOnScreen(start, overlay, scrollPosition) {
          // If the position is locked and we've pushed the overlay already, reuse the previous push
          // amount, rather than pushing it again. If we were to continue pushing, the element would
          // remain in the viewport, which goes against the expectations when position locking is enabled.
          if (this._previousPushAmount && this._positionLocked) {
            return {
              x: start.x + this._previousPushAmount.x,
              y: start.y + this._previousPushAmount.y
            };
          }

          var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
          // side, which we'll use to decide which direction to push it.

          var overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
          var overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
          var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
          var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

          var pushX = 0;
          var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
          // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
          // viewport and allow for the trailing end of the overlay to go out of bounds.

          if (overlay.width <= viewport.width) {
            pushX = overflowLeft || -overflowRight;
          } else {
            pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
          }

          if (overlay.height <= viewport.height) {
            pushY = overflowTop || -overflowBottom;
          } else {
            pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
          }

          this._previousPushAmount = {
            x: pushX,
            y: pushY
          };
          return {
            x: start.x + pushX,
            y: start.y + pushY
          };
        }
        /**
         * Applies a computed position to the overlay and emits a position change.
         * @param position The position preference
         * @param originPoint The point on the origin element where the overlay is connected.
         */

      }, {
        key: "_applyPosition",
        value: function _applyPosition(position, originPoint) {
          this._setTransformOrigin(position);

          this._setOverlayElementStyles(originPoint, position);

          this._setBoundingBoxStyles(originPoint, position);

          if (position.panelClass) {
            this._addPanelClasses(position.panelClass);
          } // Save the last connected position in case the position needs to be re-calculated.


          this._lastPosition = position; // Notify that the position has been changed along with its change properties.
          // We only emit if we've got any subscriptions, because the scroll visibility
          // calculcations can be somewhat expensive.

          if (this._positionChanges.observers.length) {
            var scrollableViewProperties = this._getScrollVisibility();

            var changeEvent = new ConnectedOverlayPositionChange(position, scrollableViewProperties);

            this._positionChanges.next(changeEvent);
          }

          this._isInitialRender = false;
        }
        /** Sets the transform origin based on the configured selector and the passed-in position.  */

      }, {
        key: "_setTransformOrigin",
        value: function _setTransformOrigin(position) {
          if (!this._transformOriginSelector) {
            return;
          }

          var elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);

          var xOrigin;
          var yOrigin = position.overlayY;

          if (position.overlayX === 'center') {
            xOrigin = 'center';
          } else if (this._isRtl()) {
            xOrigin = position.overlayX === 'start' ? 'right' : 'left';
          } else {
            xOrigin = position.overlayX === 'start' ? 'left' : 'right';
          }

          for (var i = 0; i < elements.length; i++) {
            elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
          }
        }
        /**
         * Gets the position and size of the overlay's sizing container.
         *
         * This method does no measuring and applies no styles so that we can cheaply compute the
         * bounds for all positions and choose the best fit based on these results.
         */

      }, {
        key: "_calculateBoundingBoxRect",
        value: function _calculateBoundingBoxRect(origin, position) {
          var viewport = this._viewportRect;

          var isRtl = this._isRtl();

          var height, top, bottom;

          if (position.overlayY === 'top') {
            // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
            top = origin.y;
            height = viewport.height - top + this._viewportMargin;
          } else if (position.overlayY === 'bottom') {
            // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
            // the viewport margin back in, because the viewport rect is narrowed down to remove the
            // margin, whereas the `origin` position is calculated based on its `ClientRect`.
            bottom = viewport.height - origin.y + this._viewportMargin * 2;
            height = viewport.height - bottom + this._viewportMargin;
          } else {
            // If neither top nor bottom, it means that the overlay is vertically centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.bottom - origin.y` and
            // `origin.y - viewport.top`.
            var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
            var previousHeight = this._lastBoundingBoxSize.height;
            height = smallestDistanceToViewportEdge * 2;
            top = origin.y - smallestDistanceToViewportEdge;

            if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
              top = origin.y - previousHeight / 2;
            }
          } // The overlay is opening 'right-ward' (the content flows to the right).


          var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

          var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
          var width, left, right;

          if (isBoundedByLeftViewportEdge) {
            right = viewport.width - origin.x + this._viewportMargin;
            width = origin.x - this._viewportMargin;
          } else if (isBoundedByRightViewportEdge) {
            left = origin.x;
            width = viewport.right - origin.x;
          } else {
            // If neither start nor end, it means that the overlay is horizontally centered on the
            // origin point. Note that we want the position relative to the viewport, rather than
            // the page, which is why we don't use something like `viewport.right - origin.x` and
            // `origin.x - viewport.left`.
            var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);

            var previousWidth = this._lastBoundingBoxSize.width;
            width = _smallestDistanceToViewportEdge * 2;
            left = origin.x - _smallestDistanceToViewportEdge;

            if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
              left = origin.x - previousWidth / 2;
            }
          }

          return {
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            width: width,
            height: height
          };
        }
        /**
         * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
         * origin's connection point and stetches to the bounds of the viewport.
         *
         * @param origin The point on the origin element where the overlay is connected.
         * @param position The position preference
         */

      }, {
        key: "_setBoundingBoxStyles",
        value: function _setBoundingBoxStyles(origin, position) {
          var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
          // when applying a new size.


          if (!this._isInitialRender && !this._growAfterOpen) {
            boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
            boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
          }

          var styles = {};

          if (this._hasExactPosition()) {
            styles.top = styles.left = '0';
            styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
            styles.width = styles.height = '100%';
          } else {
            var maxHeight = this._overlayRef.getConfig().maxHeight;

            var maxWidth = this._overlayRef.getConfig().maxWidth;

            styles.height = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.height);
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.top);
            styles.bottom = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.bottom);
            styles.width = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.width);
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.left);
            styles.right = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(boundingBoxRect.right); // Push the pane content towards the proper direction.

            if (position.overlayX === 'center') {
              styles.alignItems = 'center';
            } else {
              styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
            }

            if (position.overlayY === 'center') {
              styles.justifyContent = 'center';
            } else {
              styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
            }

            if (maxHeight) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxHeight);
            }

            if (maxWidth) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(maxWidth);
            }
          }

          this._lastBoundingBoxSize = boundingBoxRect;
          extendStyles(this._boundingBox.style, styles);
        }
        /** Resets the styles for the bounding box so that a new positioning can be computed. */

      }, {
        key: "_resetBoundingBoxStyles",
        value: function _resetBoundingBoxStyles() {
          extendStyles(this._boundingBox.style, {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: ''
          });
        }
        /** Resets the styles for the overlay pane so that a new positioning can be computed. */

      }, {
        key: "_resetOverlayElementStyles",
        value: function _resetOverlayElementStyles() {
          extendStyles(this._pane.style, {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: ''
          });
        }
        /** Sets positioning styles to the overlay element. */

      }, {
        key: "_setOverlayElementStyles",
        value: function _setOverlayElementStyles(originPoint, position) {
          var styles = {};

          var hasExactPosition = this._hasExactPosition();

          var hasFlexibleDimensions = this._hasFlexibleDimensions;

          var config = this._overlayRef.getConfig();

          if (hasExactPosition) {
            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
            extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
          } else {
            styles.position = 'static';
          } // Use a transform to apply the offsets. We do this because the `center` positions rely on
          // being in the normal flex flow and setting a `top` / `left` at all will completely throw
          // off the position. We also can't use margins, because they won't have an effect in some
          // cases where the element doesn't have anything to "push off of". Finally, this works
          // better both with flexible and non-flexible positioning.


          var transformString = '';

          var offsetX = this._getOffset(position, 'x');

          var offsetY = this._getOffset(position, 'y');

          if (offsetX) {
            transformString += "translateX(".concat(offsetX, "px) ");
          }

          if (offsetY) {
            transformString += "translateY(".concat(offsetY, "px)");
          }

          styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
          // we need these values to both be set to "100%" for the automatic flexible sizing to work.
          // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
          // Note that this doesn't apply when we have an exact position, in which case we do want to
          // apply them because they'll be cleared from the bounding box.

          if (config.maxHeight) {
            if (hasExactPosition) {
              styles.maxHeight = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxHeight);
            } else if (hasFlexibleDimensions) {
              styles.maxHeight = '';
            }
          }

          if (config.maxWidth) {
            if (hasExactPosition) {
              styles.maxWidth = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(config.maxWidth);
            } else if (hasFlexibleDimensions) {
              styles.maxWidth = '';
            }
          }

          extendStyles(this._pane.style, styles);
        }
        /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */

      }, {
        key: "_getExactOverlayY",
        value: function _getExactOverlayY(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the
          // preferred position has changed since the last `apply`.
          var styles = {
            top: '',
            bottom: ''
          };

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          }

          var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
          // autocomplete), mobile browsers will shift everything in order to put the input in the middle
          // of the screen and to make space for the virtual keyboard. We need to account for this offset,
          // otherwise our positioning will be thrown off.


          overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
          // above or below the origin and the direction in which the element will expand.

          if (position.overlayY === 'bottom') {
            // When using `bottom`, we adjust the y position such that it is the distance
            // from the bottom of the viewport rather than the top.
            var documentHeight = this._document.documentElement.clientHeight;
            styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
          } else {
            styles.top = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.y);
          }

          return styles;
        }
        /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */

      }, {
        key: "_getExactOverlayX",
        value: function _getExactOverlayX(position, originPoint, scrollPosition) {
          // Reset any existing styles. This is necessary in case the preferred position has
          // changed since the last `apply`.
          var styles = {
            left: '',
            right: ''
          };

          var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

          if (this._isPushed) {
            overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
          } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
          // or "after" the origin, which determines the direction in which the element will expand.
          // For the horizontal axis, the meaning of "before" and "after" change based on whether the
          // page is in RTL or LTR.


          var horizontalStyleProperty;

          if (this._isRtl()) {
            horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
          } else {
            horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
          } // When we're setting `right`, we adjust the x position such that it is the distance
          // from the right edge of the viewport rather than the left edge.


          if (horizontalStyleProperty === 'right') {
            var documentWidth = this._document.documentElement.clientWidth;
            styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
          } else {
            styles.left = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceCssPixelValue"])(overlayPoint.x);
          }

          return styles;
        }
        /**
         * Gets the view properties of the trigger and overlay, including whether they are clipped
         * or completely outside the view of any of the strategy's scrollables.
         */

      }, {
        key: "_getScrollVisibility",
        value: function _getScrollVisibility() {
          // Note: needs fresh rects since the position could've changed.
          var originBounds = this._getOriginRect();

          var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
          // every time, we should be able to use the scrollTop of the containers if the size of those
          // containers hasn't changed.


          var scrollContainerBounds = this._scrollables.map(function (scrollable) {
            return scrollable.getElementRef().nativeElement.getBoundingClientRect();
          });

          return {
            isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
            isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
            isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
            isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
          };
        }
        /** Subtracts the amount that an element is overflowing on an axis from its length. */

      }, {
        key: "_subtractOverflows",
        value: function _subtractOverflows(length) {
          for (var _len4 = arguments.length, overflows = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            overflows[_key4 - 1] = arguments[_key4];
          }

          return overflows.reduce(function (currentValue, currentOverflow) {
            return currentValue - Math.max(currentOverflow, 0);
          }, length);
        }
        /** Narrows the given viewport rect by the current _viewportMargin. */

      }, {
        key: "_getNarrowedViewportRect",
        value: function _getNarrowedViewportRect() {
          // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
          // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
          // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
          // and `innerHeight` that do. This is necessary, because the overlay container uses
          // 100% `width` and `height` which don't include the scrollbar either.
          var width = this._document.documentElement.clientWidth;
          var height = this._document.documentElement.clientHeight;

          var scrollPosition = this._viewportRuler.getViewportScrollPosition();

          return {
            top: scrollPosition.top + this._viewportMargin,
            left: scrollPosition.left + this._viewportMargin,
            right: scrollPosition.left + width - this._viewportMargin,
            bottom: scrollPosition.top + height - this._viewportMargin,
            width: width - 2 * this._viewportMargin,
            height: height - 2 * this._viewportMargin
          };
        }
        /** Whether the we're dealing with an RTL context */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._overlayRef.getDirection() === 'rtl';
        }
        /** Determines whether the overlay uses exact or flexible positioning. */

      }, {
        key: "_hasExactPosition",
        value: function _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        /** Retrieves the offset of a position along the x or y axis. */

      }, {
        key: "_getOffset",
        value: function _getOffset(position, axis) {
          if (axis === 'x') {
            // We don't do something like `position['offset' + axis]` in
            // order to avoid breking minifiers that rename properties.
            return position.offsetX == null ? this._offsetX : position.offsetX;
          }

          return position.offsetY == null ? this._offsetY : position.offsetY;
        }
        /** Validates that the current position match the expected values. */

      }, {
        key: "_validatePositions",
        value: function _validatePositions() {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._preferredPositions.length) {
              throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
            } // TODO(crisbeto): remove these once Angular's template type
            // checking is advanced enough to catch these cases.


            this._preferredPositions.forEach(function (pair) {
              validateHorizontalPosition('originX', pair.originX);
              validateVerticalPosition('originY', pair.originY);
              validateHorizontalPosition('overlayX', pair.overlayX);
              validateVerticalPosition('overlayY', pair.overlayY);
            });
          }
        }
        /** Adds a single CSS class or an array of classes on the overlay panel. */

      }, {
        key: "_addPanelClasses",
        value: function _addPanelClasses(cssClasses) {
          var _this20 = this;

          if (this._pane) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceArray"])(cssClasses).forEach(function (cssClass) {
              if (cssClass !== '' && _this20._appliedPanelClasses.indexOf(cssClass) === -1) {
                _this20._appliedPanelClasses.push(cssClass);

                _this20._pane.classList.add(cssClass);
              }
            });
          }
        }
        /** Clears the classes that the position strategy has applied from the overlay panel. */

      }, {
        key: "_clearPanelClasses",
        value: function _clearPanelClasses() {
          var _this21 = this;

          if (this._pane) {
            this._appliedPanelClasses.forEach(function (cssClass) {
              _this21._pane.classList.remove(cssClass);
            });

            this._appliedPanelClasses = [];
          }
        }
        /** Returns the ClientRect of the current origin. */

      }, {
        key: "_getOriginRect",
        value: function _getOriginRect() {
          var origin = this._origin;

          if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
            return origin.nativeElement.getBoundingClientRect();
          } // Check for Element so SVG elements are also supported.


          if (origin instanceof Element) {
            return origin.getBoundingClientRect();
          }

          var width = origin.width || 0;
          var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

          return {
            top: origin.y,
            bottom: origin.y + height,
            left: origin.x,
            right: origin.x + width,
            height: height,
            width: width
          };
        }
      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return FlexibleConnectedPositionStrategy;
    }();
    /** Shallow-extends a stylesheet object with another stylesheet object. */


    function extendStyles(destination, source) {
      for (var key in source) {
        if (source.hasOwnProperty(key)) {
          destination[key] = source[key];
        }
      }

      return destination;
    }
    /**
     * Extracts the pixel value as a number from a value, if it's a number
     * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
     */


    function getPixelValue(input) {
      if (typeof input !== 'number' && input != null) {
        var _input$split = input.split(cssUnitPattern),
            _input$split2 = _slicedToArray(_input$split, 2),
            value = _input$split2[0],
            units = _input$split2[1];

        return !units || units === 'px' ? parseFloat(value) : null;
      }

      return input || null;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * implicit position relative to some origin element. The relative position is defined in terms of
     * a point on the origin element that is connected to a point on the overlay element. For example,
     * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
     * of the overlay.
     * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
     * @breaking-change 8.0.0
     */


    var ConnectedPositionStrategy =
    /*#__PURE__*/
    function () {
      function ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
        _classCallCheck(this, ConnectedPositionStrategy);

        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
        // the extra logic, we create an instance of the positioning strategy that has some
        // defaults that make it behave as the old position strategy and to which we'll
        // proxy all of the API calls.

        this._positionStrategy = new FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
        this.withFallbackPosition(originPos, overlayPos);
        this.onPositionChange = this._positionStrategy.positionChanges;
      }
      /** Ordered list of preferred positions, from most to least desirable. */


      _createClass(ConnectedPositionStrategy, [{
        key: "attach",

        /** Attach this position strategy to an overlay. */
        value: function attach(overlayRef) {
          this._overlayRef = overlayRef;

          this._positionStrategy.attach(overlayRef);

          if (this._direction) {
            overlayRef.setDirection(this._direction);
            this._direction = null;
          }
        }
        /** Disposes all resources used by the position strategy. */

      }, {
        key: "dispose",
        value: function dispose() {
          this._positionStrategy.dispose();
        }
        /** @docs-private */

      }, {
        key: "detach",
        value: function detach() {
          this._positionStrategy.detach();
        }
        /**
         * Updates the position of the overlay element, using whichever preferred position relative
         * to the origin fits on-screen.
         * @docs-private
         */

      }, {
        key: "apply",
        value: function apply() {
          this._positionStrategy.apply();
        }
        /**
         * Re-positions the overlay element with the trigger in its last calculated position,
         * even if a position higher in the "preferred positions" list would now fit. This
         * allows one to re-align the panel without changing the orientation of the panel.
         */

      }, {
        key: "recalculateLastPosition",
        value: function recalculateLastPosition() {
          this._positionStrategy.reapplyLastPosition();
        }
        /**
         * Sets the list of Scrollable containers that host the origin element so that
         * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
         * Scrollable must be an ancestor element of the strategy's origin element.
         */

      }, {
        key: "withScrollableContainers",
        value: function withScrollableContainers(scrollables) {
          this._positionStrategy.withScrollableContainers(scrollables);
        }
        /**
         * Adds a new preferred fallback position.
         * @param originPos
         * @param overlayPos
         */

      }, {
        key: "withFallbackPosition",
        value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
          var position = new ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

          this._preferredPositions.push(position);

          this._positionStrategy.withPositions(this._preferredPositions);

          return this;
        }
        /**
         * Sets the layout direction so the overlay's position can be adjusted to match.
         * @param dir New layout direction.
         */

      }, {
        key: "withDirection",
        value: function withDirection(dir) {
          // Since the direction might be declared before the strategy is attached,
          // we save the value in a temporary property and we'll transfer it to the
          // overlay ref on attachment.
          if (this._overlayRef) {
            this._overlayRef.setDirection(dir);
          } else {
            this._direction = dir;
          }

          return this;
        }
        /**
         * Sets an offset for the overlay's connection point on the x-axis
         * @param offset New offset in the X axis.
         */

      }, {
        key: "withOffsetX",
        value: function withOffsetX(offset) {
          this._positionStrategy.withDefaultOffsetX(offset);

          return this;
        }
        /**
         * Sets an offset for the overlay's connection point on the y-axis
         * @param  offset New offset in the Y axis.
         */

      }, {
        key: "withOffsetY",
        value: function withOffsetY(offset) {
          this._positionStrategy.withDefaultOffsetY(offset);

          return this;
        }
        /**
         * Sets whether the overlay's position should be locked in after it is positioned
         * initially. When an overlay is locked in, it won't attempt to reposition itself
         * when the position is re-applied (e.g. when the user scrolls away).
         * @param isLocked Whether the overlay should locked in.
         */

      }, {
        key: "withLockedPosition",
        value: function withLockedPosition(isLocked) {
          this._positionStrategy.withLockedPosition(isLocked);

          return this;
        }
        /**
         * Overwrites the current set of positions with an array of new ones.
         * @param positions Position pairs to be set on the strategy.
         */

      }, {
        key: "withPositions",
        value: function withPositions(positions) {
          this._preferredPositions = positions.slice();

          this._positionStrategy.withPositions(this._preferredPositions);

          return this;
        }
        /**
         * Sets the origin element, relative to which to position the overlay.
         * @param origin Reference to the new origin element.
         */

      }, {
        key: "setOrigin",
        value: function setOrigin(origin) {
          this._positionStrategy.setOrigin(origin);

          return this;
        }
      }, {
        key: "positions",
        get: function get() {
          return this._preferredPositions;
        }
      }]);

      return ConnectedPositionStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Class to be added to the overlay pane wrapper. */


    var wrapperClass = 'cdk-global-overlay-wrapper';
    /**
     * A strategy for positioning overlays. Using this strategy, an overlay is given an
     * explicit position relative to the browser's viewport. We use flexbox, instead of
     * transforms, in order to avoid issues with subpixel rendering which can cause the
     * element to become blurry.
     */

    var GlobalPositionStrategy =
    /*#__PURE__*/
    function () {
      function GlobalPositionStrategy() {
        _classCallCheck(this, GlobalPositionStrategy);

        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
      }

      _createClass(GlobalPositionStrategy, [{
        key: "attach",
        value: function attach(overlayRef) {
          var config = overlayRef.getConfig();
          this._overlayRef = overlayRef;

          if (this._width && !config.width) {
            overlayRef.updateSize({
              width: this._width
            });
          }

          if (this._height && !config.height) {
            overlayRef.updateSize({
              height: this._height
            });
          }

          overlayRef.hostElement.classList.add(wrapperClass);
          this._isDisposed = false;
        }
        /**
         * Sets the top position of the overlay. Clears any previously set vertical position.
         * @param value New top offset.
         */

      }, {
        key: "top",
        value: function top() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this._bottomOffset = '';
          this._topOffset = value;
          this._alignItems = 'flex-start';
          return this;
        }
        /**
         * Sets the left position of the overlay. Clears any previously set horizontal position.
         * @param value New left offset.
         */

      }, {
        key: "left",
        value: function left() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this._rightOffset = '';
          this._leftOffset = value;
          this._justifyContent = 'flex-start';
          return this;
        }
        /**
         * Sets the bottom position of the overlay. Clears any previously set vertical position.
         * @param value New bottom offset.
         */

      }, {
        key: "bottom",
        value: function bottom() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this._topOffset = '';
          this._bottomOffset = value;
          this._alignItems = 'flex-end';
          return this;
        }
        /**
         * Sets the right position of the overlay. Clears any previously set horizontal position.
         * @param value New right offset.
         */

      }, {
        key: "right",
        value: function right() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this._leftOffset = '';
          this._rightOffset = value;
          this._justifyContent = 'flex-end';
          return this;
        }
        /**
         * Sets the overlay width and clears any previously set width.
         * @param value New width for the overlay
         * @deprecated Pass the `width` through the `OverlayConfig`.
         * @breaking-change 8.0.0
         */

      }, {
        key: "width",
        value: function width() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (this._overlayRef) {
            this._overlayRef.updateSize({
              width: value
            });
          } else {
            this._width = value;
          }

          return this;
        }
        /**
         * Sets the overlay height and clears any previously set height.
         * @param value New height for the overlay
         * @deprecated Pass the `height` through the `OverlayConfig`.
         * @breaking-change 8.0.0
         */

      }, {
        key: "height",
        value: function height() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

          if (this._overlayRef) {
            this._overlayRef.updateSize({
              height: value
            });
          } else {
            this._height = value;
          }

          return this;
        }
        /**
         * Centers the overlay horizontally with an optional offset.
         * Clears any previously set horizontal position.
         *
         * @param offset Overlay offset from the horizontal center.
         */

      }, {
        key: "centerHorizontally",
        value: function centerHorizontally() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this.left(offset);
          this._justifyContent = 'center';
          return this;
        }
        /**
         * Centers the overlay vertically with an optional offset.
         * Clears any previously set vertical position.
         *
         * @param offset Overlay offset from the vertical center.
         */

      }, {
        key: "centerVertically",
        value: function centerVertically() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this.top(offset);
          this._alignItems = 'center';
          return this;
        }
        /**
         * Apply the position to the element.
         * @docs-private
         */

      }, {
        key: "apply",
        value: function apply() {
          // Since the overlay ref applies the strategy asynchronously, it could
          // have been disposed before it ends up being applied. If that is the
          // case, we shouldn't do anything.
          if (!this._overlayRef || !this._overlayRef.hasAttached()) {
            return;
          }

          var styles = this._overlayRef.overlayElement.style;
          var parentStyles = this._overlayRef.hostElement.style;

          var config = this._overlayRef.getConfig();

          var width = config.width,
              height = config.height,
              maxWidth = config.maxWidth,
              maxHeight = config.maxHeight;
          var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
          var shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
          styles.position = this._cssPosition;
          styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
          styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
          styles.marginBottom = this._bottomOffset;
          styles.marginRight = this._rightOffset;

          if (shouldBeFlushHorizontally) {
            parentStyles.justifyContent = 'flex-start';
          } else if (this._justifyContent === 'center') {
            parentStyles.justifyContent = 'center';
          } else if (this._overlayRef.getConfig().direction === 'rtl') {
            // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
            // don't want that because our positioning is explicitly `left` and `right`, hence
            // why we do another inversion to ensure that the overlay stays in the same position.
            // TODO: reconsider this if we add `start` and `end` methods.
            if (this._justifyContent === 'flex-start') {
              parentStyles.justifyContent = 'flex-end';
            } else if (this._justifyContent === 'flex-end') {
              parentStyles.justifyContent = 'flex-start';
            }
          } else {
            parentStyles.justifyContent = this._justifyContent;
          }

          parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
        }
        /**
         * Cleans up the DOM changes from the position strategy.
         * @docs-private
         */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this._isDisposed || !this._overlayRef) {
            return;
          }

          var styles = this._overlayRef.overlayElement.style;
          var parent = this._overlayRef.hostElement;
          var parentStyles = parent.style;
          parent.classList.remove(wrapperClass);
          parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
          this._overlayRef = null;
          this._isDisposed = true;
        }
      }]);

      return GlobalPositionStrategy;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Builder for overlay position strategy. */


    var OverlayPositionBuilder =
    /*#__PURE__*/
    function () {
      function OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
        _classCallCheck(this, OverlayPositionBuilder);

        this._viewportRuler = _viewportRuler;
        this._document = _document;
        this._platform = _platform;
        this._overlayContainer = _overlayContainer;
      }
      /**
       * Creates a global position strategy.
       */


      _createClass(OverlayPositionBuilder, [{
        key: "global",
        value: function global() {
          return new GlobalPositionStrategy();
        }
        /**
         * Creates a relative position strategy.
         * @param elementRef
         * @param originPos
         * @param overlayPos
         * @deprecated Use `flexibleConnectedTo` instead.
         * @breaking-change 8.0.0
         */

      }, {
        key: "connectedTo",
        value: function connectedTo(elementRef, originPos, overlayPos) {
          return new ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
        /**
         * Creates a flexible position strategy.
         * @param origin Origin relative to which to position the overlay.
         */

      }, {
        key: "flexibleConnectedTo",
        value: function flexibleConnectedTo(origin) {
          return new FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
        }
      }]);

      return OverlayPositionBuilder;
    }();

    OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
      return new (t || OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer));
    };

    OverlayPositionBuilder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function OverlayPositionBuilder_Factory() {
        return new OverlayPositionBuilder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(OverlayContainer));
      },
      token: OverlayPositionBuilder,
      providedIn: "root"
    });

    OverlayPositionBuilder.ctorParameters = function () {
      return [{
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: OverlayContainer
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayPositionBuilder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: OverlayContainer
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Next overlay unique ID. */


    var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
    // which needs to be different depending on where OverlayModule is imported.

    /**
     * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
     * used as a low-level building block for other components. Dialogs, tooltips, menus,
     * selects, etc. can all be built using overlays. The service should primarily be used by authors
     * of re-usable components rather than developers building end-user applications.
     *
     * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
     */

    var Overlay =
    /*#__PURE__*/
    function () {
      function Overlay(
      /** Scrolling strategies that can be used when creating an overlay. */
      scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, // @breaking-change 8.0.0 `_location` parameter to be made required.
      _location, // @breaking-change 9.0.0 `_outsideClickDispatcher` parameter to be made required.
      _outsideClickDispatcher) {
        _classCallCheck(this, Overlay);

        this.scrollStrategies = scrollStrategies;
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._keyboardDispatcher = _keyboardDispatcher;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._document = _document;
        this._directionality = _directionality;
        this._location = _location;
        this._outsideClickDispatcher = _outsideClickDispatcher;
      }
      /**
       * Creates an overlay.
       * @param config Configuration applied to the overlay.
       * @returns Reference to the created overlay.
       */


      _createClass(Overlay, [{
        key: "create",
        value: function create(config) {
          var host = this._createHostElement();

          var pane = this._createPaneElement(host);

          var portalOutlet = this._createPortalOutlet(pane);

          var overlayConfig = new OverlayConfig(config);
          overlayConfig.direction = overlayConfig.direction || this._directionality.value;
          return new OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher);
        }
        /**
         * Gets a position builder that can be used, via fluent API,
         * to construct and configure a position strategy.
         * @returns An overlay position builder.
         */

      }, {
        key: "position",
        value: function position() {
          return this._positionBuilder;
        }
        /**
         * Creates the DOM element for an overlay and appends it to the overlay container.
         * @returns Newly-created pane element
         */

      }, {
        key: "_createPaneElement",
        value: function _createPaneElement(host) {
          var pane = this._document.createElement('div');

          pane.id = "cdk-overlay-".concat(nextUniqueId++);
          pane.classList.add('cdk-overlay-pane');
          host.appendChild(pane);
          return pane;
        }
        /**
         * Creates the host element that wraps around an overlay
         * and can be used for advanced positioning.
         * @returns Newly-create host element.
         */

      }, {
        key: "_createHostElement",
        value: function _createHostElement() {
          var host = this._document.createElement('div');

          this._overlayContainer.getContainerElement().appendChild(host);

          return host;
        }
        /**
         * Create a DomPortalOutlet into which the overlay content can be loaded.
         * @param pane The DOM element to turn into a portal outlet.
         * @returns A portal outlet for the given DOM element.
         */

      }, {
        key: "_createPortalOutlet",
        value: function _createPortalOutlet(pane) {
          // We have to resolve the ApplicationRef later in order to allow people
          // to use overlay-based providers during app initialization.
          if (!this._appRef) {
            this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]);
          }

          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["DomPortalOutlet"](pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
        }
      }]);

      return Overlay;
    }();

    Overlay.ɵfac = function Overlay_Factory(t) {
      return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](OverlayOutsideClickDispatcher));
    };

    Overlay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: Overlay,
      factory: Overlay.ɵfac
    });

    Overlay.ctorParameters = function () {
      return [{
        type: ScrollStrategyOptions
      }, {
        type: OverlayContainer
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: OverlayPositionBuilder
      }, {
        type: OverlayKeyboardDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: OverlayOutsideClickDispatcher
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Overlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: ScrollStrategyOptions
        }, {
          type: OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: OverlayPositionBuilder
        }, {
          type: OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: OverlayOutsideClickDispatcher
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Default set of positions for the overlay. Follows the behavior of a dropdown. */


    var defaultPositionList = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }];
    /** Injection token that determines the scroll handling while the connected overlay is open. */

    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-connected-overlay-scroll-strategy');
    /** @docs-private @deprecated @breaking-change 8.0.0 */

    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_FACTORY(overlay) {
      return function (config) {
        return overlay.scrollStrategies.reposition(config);
      };
    }
    /**
     * Directive applied to an element to make it usable as an origin for an Overlay using a
     * ConnectedPositionStrategy.
     */


    var CdkOverlayOrigin = function CdkOverlayOrigin(
    /** Reference to the element on which the directive is applied. */
    elementRef) {
      _classCallCheck(this, CdkOverlayOrigin);

      this.elementRef = elementRef;
    };

    CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
      return new (t || CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    CdkOverlayOrigin.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkOverlayOrigin,
      selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
      exportAs: ["cdkOverlayOrigin"]
    });

    CdkOverlayOrigin.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkOverlayOrigin, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
          exportAs: 'cdkOverlayOrigin'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();
    /**
     * Directive to facilitate declarative creation of an
     * Overlay using a FlexibleConnectedPositionStrategy.
     */


    var CdkConnectedOverlay =
    /*#__PURE__*/
    function () {
      // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
      function CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
        _classCallCheck(this, CdkConnectedOverlay);

        this._overlay = _overlay;
        this._dir = _dir;
        this._hasBackdrop = false;
        this._lockPosition = false;
        this._growAfterOpen = false;
        this._flexibleDimensions = false;
        this._push = false;
        this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._attachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._detachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        this._positionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_7__["Subscription"].EMPTY;
        /** Margin between the overlay and the viewport edges. */

        this.viewportMargin = 0;
        /** Whether the overlay is open. */

        this.open = false;
        /** Event emitted when the backdrop is clicked. */

        this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Event emitted when the position has changed. */

        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Event emitted when the overlay has been attached. */

        this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Event emitted when the overlay has been detached. */

        this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when there are keyboard events that are targeted at the overlay. */

        this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Emits when there are mouse outside click events that are targeted at the overlay. */

        this.overlayOutsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["TemplatePortal"](templateRef, viewContainerRef);
        this._scrollStrategyFactory = scrollStrategyFactory;
        this.scrollStrategy = this._scrollStrategyFactory();
      }
      /** The offset in pixels for the overlay connection point on the x-axis */


      _createClass(CdkConnectedOverlay, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._attachSubscription.unsubscribe();

          this._detachSubscription.unsubscribe();

          this._backdropSubscription.unsubscribe();

          this._positionSubscription.unsubscribe();

          if (this._overlayRef) {
            this._overlayRef.dispose();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this._position) {
            this._updatePositionStrategy(this._position);

            this._overlayRef.updateSize({
              width: this.width,
              minWidth: this.minWidth,
              height: this.height,
              minHeight: this.minHeight
            });

            if (changes['origin'] && this.open) {
              this._position.apply();
            }
          }

          if (changes['open']) {
            this.open ? this._attachOverlay() : this._detachOverlay();
          }
        }
        /** Creates an overlay */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          var _this22 = this;

          if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
          }

          var overlayRef = this._overlayRef = this._overlay.create(this._buildConfig());

          this._attachSubscription = overlayRef.attachments().subscribe(function () {
            return _this22.attach.emit();
          });
          this._detachSubscription = overlayRef.detachments().subscribe(function () {
            return _this22.detach.emit();
          });
          overlayRef.keydownEvents().subscribe(function (event) {
            _this22.overlayKeydown.next(event);

            if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["hasModifierKey"])(event)) {
              event.preventDefault();

              _this22._detachOverlay();
            }
          });

          this._overlayRef.outsidePointerEvents().subscribe(function (event) {
            _this22.overlayOutsideClick.next(event);
          });
        }
        /** Builds the overlay config based on the directive's inputs */

      }, {
        key: "_buildConfig",
        value: function _buildConfig() {
          var positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();

          var overlayConfig = new OverlayConfig({
            direction: this._dir,
            positionStrategy: positionStrategy,
            scrollStrategy: this.scrollStrategy,
            hasBackdrop: this.hasBackdrop
          });

          if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
          }

          if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
          }

          if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
          }

          if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
          }

          if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
          }

          if (this.panelClass) {
            overlayConfig.panelClass = this.panelClass;
          }

          return overlayConfig;
        }
        /** Updates the state of a position strategy, based on the values of the directive inputs. */

      }, {
        key: "_updatePositionStrategy",
        value: function _updatePositionStrategy(positionStrategy) {
          var _this23 = this;

          var positions = this.positions.map(function (currentPosition) {
            return {
              originX: currentPosition.originX,
              originY: currentPosition.originY,
              overlayX: currentPosition.overlayX,
              overlayY: currentPosition.overlayY,
              offsetX: currentPosition.offsetX || _this23.offsetX,
              offsetY: currentPosition.offsetY || _this23.offsetY,
              panelClass: currentPosition.panelClass || undefined
            };
          });
          return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
        }
        /** Returns the position strategy of the overlay to be set on the overlay config */

      }, {
        key: "_createPositionStrategy",
        value: function _createPositionStrategy() {
          var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

          this._updatePositionStrategy(strategy);

          return strategy;
        }
        /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */

      }, {
        key: "_attachOverlay",
        value: function _attachOverlay() {
          var _this24 = this;

          if (!this._overlayRef) {
            this._createOverlay();
          } else {
            // Update the overlay size, in case the directive's inputs have changed
            this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
          }

          if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
          }

          if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
              _this24.backdropClick.emit(event);
            });
          } else {
            this._backdropSubscription.unsubscribe();
          }

          this._positionSubscription.unsubscribe(); // Only subscribe to `positionChanges` if requested, because putting
          // together all the information for it can be expensive.


          if (this.positionChange.observers.length > 0) {
            this._positionSubscription = this._position.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeWhile"])(function () {
              return _this24.positionChange.observers.length > 0;
            })).subscribe(function (position) {
              _this24.positionChange.emit(position);

              if (_this24.positionChange.observers.length === 0) {
                _this24._positionSubscription.unsubscribe();
              }
            });
          }
        }
        /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */

      }, {
        key: "_detachOverlay",
        value: function _detachOverlay() {
          if (this._overlayRef) {
            this._overlayRef.detach();
          }

          this._backdropSubscription.unsubscribe();

          this._positionSubscription.unsubscribe();
        }
      }, {
        key: "offsetX",
        get: function get() {
          return this._offsetX;
        },
        set: function set(offsetX) {
          this._offsetX = offsetX;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /** The offset in pixels for the overlay connection point on the y-axis */

      }, {
        key: "offsetY",
        get: function get() {
          return this._offsetY;
        },
        set: function set(offsetY) {
          this._offsetY = offsetY;

          if (this._position) {
            this._updatePositionStrategy(this._position);
          }
        }
        /** Whether or not the overlay should attach a backdrop. */

      }, {
        key: "hasBackdrop",
        get: function get() {
          return this._hasBackdrop;
        },
        set: function set(value) {
          this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /** Whether or not the overlay should be locked when scrolling. */

      }, {
        key: "lockPosition",
        get: function get() {
          return this._lockPosition;
        },
        set: function set(value) {
          this._lockPosition = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /** Whether the overlay's width and height can be constrained to fit within the viewport. */

      }, {
        key: "flexibleDimensions",
        get: function get() {
          return this._flexibleDimensions;
        },
        set: function set(value) {
          this._flexibleDimensions = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */

      }, {
        key: "growAfterOpen",
        get: function get() {
          return this._growAfterOpen;
        },
        set: function set(value) {
          this._growAfterOpen = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */

      }, {
        key: "push",
        get: function get() {
          return this._push;
        },
        set: function set(value) {
          this._push = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /** The associated overlay reference. */

      }, {
        key: "overlayRef",
        get: function get() {
          return this._overlayRef;
        }
        /** The element's layout direction. */

      }, {
        key: "dir",
        get: function get() {
          return this._dir ? this._dir.value : 'ltr';
        }
      }]);

      return CdkConnectedOverlay;
    }();

    CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
      return new (t || CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
    };

    CdkConnectedOverlay.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkConnectedOverlay,
      selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
      inputs: {
        viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
        open: ["cdkConnectedOverlayOpen", "open"],
        scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
        offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
        offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
        hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
        lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
        flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
        growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
        push: ["cdkConnectedOverlayPush", "push"],
        positions: ["cdkConnectedOverlayPositions", "positions"],
        origin: ["cdkConnectedOverlayOrigin", "origin"],
        positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
        width: ["cdkConnectedOverlayWidth", "width"],
        height: ["cdkConnectedOverlayHeight", "height"],
        minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
        minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
        backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
        panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
        transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"]
      },
      outputs: {
        backdropClick: "backdropClick",
        positionChange: "positionChange",
        attach: "attach",
        detach: "detach",
        overlayKeydown: "overlayKeydown",
        overlayOutsideClick: "overlayOutsideClick"
      },
      exportAs: ["cdkConnectedOverlay"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });

    CdkConnectedOverlay.ctorParameters = function () {
      return [{
        type: Overlay
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    CdkConnectedOverlay.propDecorators = {
      origin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOrigin']
      }],
      positions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPositions']
      }],
      positionStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPositionStrategy']
      }],
      offsetX: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOffsetX']
      }],
      offsetY: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOffsetY']
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayWidth']
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayHeight']
      }],
      minWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayMinWidth']
      }],
      minHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayMinHeight']
      }],
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayBackdropClass']
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPanelClass']
      }],
      viewportMargin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayViewportMargin']
      }],
      scrollStrategy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayScrollStrategy']
      }],
      open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayOpen']
      }],
      transformOriginSelector: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayTransformOriginOn']
      }],
      hasBackdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayHasBackdrop']
      }],
      lockPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayLockPosition']
      }],
      flexibleDimensions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayFlexibleDimensions']
      }],
      growAfterOpen: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayGrowAfterOpen']
      }],
      push: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkConnectedOverlayPush']
      }],
      backdropClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      positionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      attach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      detach: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      overlayKeydown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      overlayOutsideClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkConnectedOverlay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
          exportAs: 'cdkConnectedOverlay'
        }]
      }], function () {
        return [{
          type: Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOpen']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        overlayOutsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOffsetY']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPush']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositions']
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayOrigin']
        }],
        positionStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPositionStrategy']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayPanelClass']
        }],
        transformOriginSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkConnectedOverlayTransformOriginOn']
        }]
      });
    })();
    /** @docs-private */


    function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
      return function () {
        return overlay.scrollStrategies.reposition();
      };
    }
    /** @docs-private */


    var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
      provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
      deps: [Overlay],
      useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var OverlayModule = function OverlayModule() {
      _classCallCheck(this, OverlayModule);
    };

    OverlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: OverlayModule
    });
    OverlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function OverlayModule_Factory(t) {
        return new (t || OverlayModule)();
      },
      providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OverlayModule, {
        declarations: function declarations() {
          return [CdkConnectedOverlay, CdkOverlayOrigin];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        },
        exports: function exports() {
          return [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          exports: [CdkConnectedOverlay, CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          declarations: [CdkConnectedOverlay, CdkOverlayOrigin],
          providers: [Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @deprecated Use `OverlayModule` instead.
     * @breaking-change 8.0.0
     * @docs-private
     */


    var OVERLAY_PROVIDERS = [Overlay, OverlayPositionBuilder, OVERLAY_KEYBOARD_DISPATCHER_PROVIDER, OVERLAY_CONTAINER_PROVIDER, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER];
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Alternative to OverlayContainer that supports correct displaying of overlay elements in
     * Fullscreen mode
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
     *
     * Should be provided in the root component.
     */

    var FullscreenOverlayContainer =
    /*#__PURE__*/
    function (_OverlayContainer) {
      _inherits(FullscreenOverlayContainer, _OverlayContainer);

      var _super4 = _createSuper(FullscreenOverlayContainer);

      function FullscreenOverlayContainer(_document,
      /**
       * @deprecated `platform` parameter to become required.
       * @breaking-change 10.0.0
       */
      platform) {
        _classCallCheck(this, FullscreenOverlayContainer);

        return _super4.call(this, _document, platform);
      }

      _createClass(FullscreenOverlayContainer, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

          if (this._fullScreenEventName && this._fullScreenListener) {
            this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
          }
        }
      }, {
        key: "_createContainer",
        value: function _createContainer() {
          var _this25 = this;

          _get(_getPrototypeOf(FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

          this._adjustParentForFullscreenChange();

          this._addFullscreenChangeListener(function () {
            return _this25._adjustParentForFullscreenChange();
          });
        }
      }, {
        key: "_adjustParentForFullscreenChange",
        value: function _adjustParentForFullscreenChange() {
          if (!this._containerElement) {
            return;
          }

          var fullscreenElement = this.getFullscreenElement();
          var parent = fullscreenElement || this._document.body;
          parent.appendChild(this._containerElement);
        }
      }, {
        key: "_addFullscreenChangeListener",
        value: function _addFullscreenChangeListener(fn) {
          var eventName = this._getEventName();

          if (eventName) {
            if (this._fullScreenListener) {
              this._document.removeEventListener(eventName, this._fullScreenListener);
            }

            this._document.addEventListener(eventName, fn);

            this._fullScreenListener = fn;
          }
        }
      }, {
        key: "_getEventName",
        value: function _getEventName() {
          if (!this._fullScreenEventName) {
            var _document = this._document;

            if (_document.fullscreenEnabled) {
              this._fullScreenEventName = 'fullscreenchange';
            } else if (_document.webkitFullscreenEnabled) {
              this._fullScreenEventName = 'webkitfullscreenchange';
            } else if (_document.mozFullScreenEnabled) {
              this._fullScreenEventName = 'mozfullscreenchange';
            } else if (_document.msFullscreenEnabled) {
              this._fullScreenEventName = 'MSFullscreenChange';
            }
          }

          return this._fullScreenEventName;
        }
        /**
         * When the page is put into fullscreen mode, a specific element is specified.
         * Only that element and its children are visible when in fullscreen mode.
         */

      }, {
        key: "getFullscreenElement",
        value: function getFullscreenElement() {
          var _document = this._document;
          return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
        }
      }]);

      return FullscreenOverlayContainer;
    }(OverlayContainer);

    FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
      return new (t || FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
    };

    FullscreenOverlayContainer.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function FullscreenOverlayContainer_Factory() {
        return new FullscreenOverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]));
      },
      token: FullscreenOverlayContainer,
      providedIn: "root"
    });

    FullscreenOverlayContainer.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenOverlayContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=overlay.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js ***!
    \*********************************************************************/

  /*! exports provided: Platform, PlatformModule, _getShadowRoot, _supportsShadowDom, getRtlScrollAxisType, getSupportedInputTypes, normalizePassiveListenerOptions, supportsPassiveEventListeners, supportsScrollBehavior */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PlatformJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Platform", function () {
      return Platform;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlatformModule", function () {
      return PlatformModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getShadowRoot", function () {
      return _getShadowRoot;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function () {
      return _supportsShadowDom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function () {
      return getRtlScrollAxisType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function () {
      return getSupportedInputTypes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function () {
      return normalizePassiveListenerOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function () {
      return supportsPassiveEventListeners;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function () {
      return supportsScrollBehavior;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // Whether the current platform supports the V8 Break Iterator. The V8 check
    // is necessary to detect all Blink based browsers.


    var hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
    } catch (_a) {
      hasV8BreakIterator = false;
    }
    /**
     * Service to detect the current platform by comparing the userAgent strings and
     * checking browser-specific global properties.
     */


    var Platform = function Platform(_platformId) {
      _classCallCheck(this, Platform);

      this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention

      /** Whether the Angular application is being rendered in the browser. */

      this.isBrowser = this._platformId ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
      /** Whether the current browser is Microsoft Edge. */

      this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /** Whether the current rendering engine is Microsoft Trident. */

      this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

      /** Whether the current rendering engine is Blink. */

      this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.

      /** Whether the current rendering engine is WebKit. */

      this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /** Whether the current platform is Apple iOS. */

      this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.

      /** Whether the current browser is Firefox. */

      this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /** Whether the current platform is Android. */
      // Trident on mobile adds the android platform to the userAgent to trick detections.

      this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.

      /** Whether the current browser is Safari. */

      this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    };

    Platform.ɵfac = function Platform_Factory(t) {
      return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    Platform.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function Platform_Factory() {
        return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
      },
      token: Platform,
      providedIn: "root"
    });

    Platform.ctorParameters = function () {
      return [{
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Platform, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var PlatformModule = function PlatformModule() {
      _classCallCheck(this, PlatformModule);
    };

    PlatformModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PlatformModule
    });
    PlatformModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PlatformModule_Factory(t) {
        return new (t || PlatformModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlatformModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Cached result Set of input types support by the current browser. */


    var supportedInputTypes;
    /** Types of `<input>` that *might* be supported. */

    var candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
    /** @returns The input types supported by this browser. */

    function getSupportedInputTypes() {
      // Result is cached.
      if (supportedInputTypes) {
        return supportedInputTypes;
      } // We can't check if an input type is not supported until we're on the browser, so say that
      // everything is supported when not on the browser. We don't use `Platform` here since it's
      // just a helper function and can't inject it.


      if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
      }

      var featureTestInput = document.createElement('input');
      supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
      }));
      return supportedInputTypes;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Cached result of whether the user's browser supports passive event listeners. */


    var supportsPassiveEvents;
    /**
     * Checks whether the user's browser supports passive event listeners.
     * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
     */

    function supportsPassiveEventListeners() {
      if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
          window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
            get: function get() {
              return supportsPassiveEvents = true;
            }
          }));
        } finally {
          supportsPassiveEvents = supportsPassiveEvents || false;
        }
      }

      return supportsPassiveEvents;
    }
    /**
     * Normalizes an `AddEventListener` object to something that can be passed
     * to `addEventListener` on any browser, no matter whether it supports the
     * `options` parameter.
     * @param options Object to be normalized.
     */


    function normalizePassiveListenerOptions(options) {
      return supportsPassiveEventListeners() ? options : !!options.capture;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */


    var rtlScrollAxisType;
    /** Cached result of the check that indicates whether the browser supports scroll behaviors. */

    var scrollBehaviorSupported;
    /** Check whether the browser supports scroll behaviors. */

    function supportsScrollBehavior() {
      if (scrollBehaviorSupported == null) {
        // If we're not in the browser, it can't be supported.
        if (typeof document !== 'object' || !document) {
          scrollBehaviorSupported = false;
        } // If the element can have a `scrollBehavior` style, we can be sure that it's supported.


        if ('scrollBehavior' in document.documentElement.style) {
          scrollBehaviorSupported = true;
        } else {
          // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
          // supported but it doesn't handle scroll behavior, or it has been polyfilled.
          var scrollToFunction = Element.prototype.scrollTo;

          if (scrollToFunction) {
            // We can detect if the function has been polyfilled by calling `toString` on it. Native
            // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
            // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
            // polyfilled functions as supporting scroll behavior.
            scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
          } else {
            scrollBehaviorSupported = false;
          }
        }
      }

      return scrollBehaviorSupported;
    }
    /**
     * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
     * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
     */


    function getRtlScrollAxisType() {
      // We can't check unless we're on the browser. Just assume 'normal' if we're not.
      if (typeof document !== 'object' || !document) {
        return 0
        /* NORMAL */
        ;
      }

      if (rtlScrollAxisType == null) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        var scrollContainer = document.createElement('div');
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        var content = document.createElement('div');
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = 0
        /* NORMAL */
        ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.

        if (scrollContainer.scrollLeft === 0) {
          // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
          // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
          // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
          // return 0 when we read it again.
          scrollContainer.scrollLeft = 1;
          rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
          /* NEGATED */
          : 2
          /* INVERTED */
          ;
        }

        scrollContainer.parentNode.removeChild(scrollContainer);
      }

      return rtlScrollAxisType;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var shadowDomIsSupported;
    /** Checks whether the user's browser support Shadow DOM. */

    function _supportsShadowDom() {
      if (shadowDomIsSupported == null) {
        var head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
      }

      return shadowDomIsSupported;
    }
    /** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */


    function _getShadowRoot(element) {
      if (_supportsShadowDom()) {
        var rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
        // teams have been able to hit this code path on unsupported browsers.

        if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
          return rootNode;
        }
      }

      return null;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=platform.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js ***!
    \*******************************************************************/

  /*! exports provided: BasePortalHost, BasePortalOutlet, CdkPortal, CdkPortalOutlet, ComponentPortal, DomPortal, DomPortalHost, DomPortalOutlet, Portal, PortalHostDirective, PortalInjector, PortalModule, TemplatePortal, TemplatePortalDirective */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015PortalJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalHost", function () {
      return BasePortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasePortalOutlet", function () {
      return BasePortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortal", function () {
      return CdkPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet", function () {
      return CdkPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentPortal", function () {
      return ComponentPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortal", function () {
      return DomPortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalHost", function () {
      return DomPortalHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomPortalOutlet", function () {
      return DomPortalOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Portal", function () {
      return Portal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalHostDirective", function () {
      return PortalHostDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalInjector", function () {
      return PortalInjector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalModule", function () {
      return PortalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortal", function () {
      return TemplatePortal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplatePortalDirective", function () {
      return TemplatePortalDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Throws an exception when attempting to attach a null portal to a host.
     * @docs-private
     */


    function throwNullPortalError() {
      throw Error('Must provide a portal to attach');
    }
    /**
     * Throws an exception when attempting to attach a portal to a host that is already attached.
     * @docs-private
     */


    function throwPortalAlreadyAttachedError() {
      throw Error('Host already has a portal attached');
    }
    /**
     * Throws an exception when attempting to attach a portal to an already-disposed host.
     * @docs-private
     */


    function throwPortalOutletAlreadyDisposedError() {
      throw Error('This PortalOutlet has already been disposed');
    }
    /**
     * Throws an exception when attempting to attach an unknown portal type.
     * @docs-private
     */


    function throwUnknownPortalTypeError() {
      throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
    }
    /**
     * Throws an exception when attempting to attach a portal to a null host.
     * @docs-private
     */


    function throwNullPortalOutletError() {
      throw Error('Attempting to attach a portal to a null PortalOutlet');
    }
    /**
     * Throws an exception when attempting to detach a portal that is not attached.
     * @docs-private
     */


    function throwNoPortalAttachedError() {
      throw Error('Attempting to detach a portal that is not attached to a host');
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A `Portal` is something that you want to render somewhere else.
     * It can be attach to / detached from a `PortalOutlet`.
     */


    var Portal =
    /*#__PURE__*/
    function () {
      function Portal() {
        _classCallCheck(this, Portal);
      }

      _createClass(Portal, [{
        key: "attach",

        /** Attach this portal to a host. */
        value: function attach(host) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (host == null) {
              throwNullPortalOutletError();
            }

            if (host.hasAttached()) {
              throwPortalAlreadyAttachedError();
            }
          }

          this._attachedHost = host;
          return host.attach(this);
        }
        /** Detach this portal from its host */

      }, {
        key: "detach",
        value: function detach() {
          var host = this._attachedHost;

          if (host != null) {
            this._attachedHost = null;
            host.detach();
          } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throwNoPortalAttachedError();
          }
        }
        /** Whether this portal is attached to a host. */

      }, {
        key: "setAttachedHost",

        /**
         * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
         * the PortalOutlet when it is performing an `attach()` or `detach()`.
         */
        value: function setAttachedHost(host) {
          this._attachedHost = host;
        }
      }, {
        key: "isAttached",
        get: function get() {
          return this._attachedHost != null;
        }
      }]);

      return Portal;
    }();
    /**
     * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
     */


    var ComponentPortal =
    /*#__PURE__*/
    function (_Portal) {
      _inherits(ComponentPortal, _Portal);

      var _super5 = _createSuper(ComponentPortal);

      function ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
        var _this26;

        _classCallCheck(this, ComponentPortal);

        _this26 = _super5.call(this);
        _this26.component = component;
        _this26.viewContainerRef = viewContainerRef;
        _this26.injector = injector;
        _this26.componentFactoryResolver = componentFactoryResolver;
        return _this26;
      }

      return ComponentPortal;
    }(Portal);
    /**
     * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
     */


    var TemplatePortal =
    /*#__PURE__*/
    function (_Portal2) {
      _inherits(TemplatePortal, _Portal2);

      var _super6 = _createSuper(TemplatePortal);

      function TemplatePortal(template, viewContainerRef, context) {
        var _this27;

        _classCallCheck(this, TemplatePortal);

        _this27 = _super6.call(this);
        _this27.templateRef = template;
        _this27.viewContainerRef = viewContainerRef;
        _this27.context = context;
        return _this27;
      }

      _createClass(TemplatePortal, [{
        key: "attach",

        /**
         * Attach the portal to the provided `PortalOutlet`.
         * When a context is provided it will override the `context` property of the `TemplatePortal`
         * instance.
         */
        value: function attach(host) {
          var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
          this.context = context;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "attach", this).call(this, host);
        }
      }, {
        key: "detach",
        value: function detach() {
          this.context = undefined;
          return _get(_getPrototypeOf(TemplatePortal.prototype), "detach", this).call(this);
        }
      }, {
        key: "origin",
        get: function get() {
          return this.templateRef.elementRef;
        }
      }]);

      return TemplatePortal;
    }(Portal);
    /**
     * A `DomPortal` is a portal whose DOM element will be taken from its current position
     * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
     * will be restored to its original position.
     */


    var DomPortal =
    /*#__PURE__*/
    function (_Portal3) {
      _inherits(DomPortal, _Portal3);

      var _super7 = _createSuper(DomPortal);

      function DomPortal(element) {
        var _this28;

        _classCallCheck(this, DomPortal);

        _this28 = _super7.call(this);
        _this28.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? element.nativeElement : element;
        return _this28;
      }

      return DomPortal;
    }(Portal);
    /**
     * Partial implementation of PortalOutlet that handles attaching
     * ComponentPortal and TemplatePortal.
     */


    var BasePortalOutlet =
    /*#__PURE__*/
    function () {
      function BasePortalOutlet() {
        _classCallCheck(this, BasePortalOutlet);

        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false; // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.

        this.attachDomPortal = null;
      }
      /** Whether this host has an attached portal. */


      _createClass(BasePortalOutlet, [{
        key: "hasAttached",
        value: function hasAttached() {
          return !!this._attachedPortal;
        }
        /** Attaches a portal. */

      }, {
        key: "attach",
        value: function attach(portal) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!portal) {
              throwNullPortalError();
            }

            if (this.hasAttached()) {
              throwPortalAlreadyAttachedError();
            }

            if (this._isDisposed) {
              throwPortalOutletAlreadyDisposedError();
            }
          }

          if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
          } else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal); // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
          } else if (this.attachDomPortal && portal instanceof DomPortal) {
            this._attachedPortal = portal;
            return this.attachDomPortal(portal);
          }

          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throwUnknownPortalTypeError();
          }
        }
        /** Detaches a previously attached portal. */

      }, {
        key: "detach",
        value: function detach() {
          if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);

            this._attachedPortal = null;
          }

          this._invokeDisposeFn();
        }
        /** Permanently dispose of this portal host. */

      }, {
        key: "dispose",
        value: function dispose() {
          if (this.hasAttached()) {
            this.detach();
          }

          this._invokeDisposeFn();

          this._isDisposed = true;
        }
        /** @docs-private */

      }, {
        key: "setDisposeFn",
        value: function setDisposeFn(fn) {
          this._disposeFn = fn;
        }
      }, {
        key: "_invokeDisposeFn",
        value: function _invokeDisposeFn() {
          if (this._disposeFn) {
            this._disposeFn();

            this._disposeFn = null;
          }
        }
      }]);

      return BasePortalOutlet;
    }();
    /**
     * @deprecated Use `BasePortalOutlet` instead.
     * @breaking-change 9.0.0
     */


    var BasePortalHost =
    /*#__PURE__*/
    function (_BasePortalOutlet) {
      _inherits(BasePortalHost, _BasePortalOutlet);

      var _super8 = _createSuper(BasePortalHost);

      function BasePortalHost() {
        _classCallCheck(this, BasePortalHost);

        return _super8.apply(this, arguments);
      }

      return BasePortalHost;
    }(BasePortalOutlet);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
     * application context.
     */


    var DomPortalOutlet =
    /*#__PURE__*/
    function (_BasePortalOutlet2) {
      _inherits(DomPortalOutlet, _BasePortalOutlet2);

      var _super9 = _createSuper(DomPortalOutlet);

      function DomPortalOutlet(
      /** Element into which the content is projected. */
      outletElement, _componentFactoryResolver, _appRef, _defaultInjector,
      /**
       * @deprecated `_document` Parameter to be made required.
       * @breaking-change 10.0.0
       */
      _document) {
        var _thisSuper, _this29;

        _classCallCheck(this, DomPortalOutlet);

        _this29 = _super9.call(this);
        _this29.outletElement = outletElement;
        _this29._componentFactoryResolver = _componentFactoryResolver;
        _this29._appRef = _appRef;
        _this29._defaultInjector = _defaultInjector;
        /**
         * Attaches a DOM portal by transferring its content into the outlet.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */

        _this29.attachDomPortal = function (portal) {
          // @breaking-change 10.0.0 Remove check and error once the
          // `_document` constructor parameter is required.
          if (!_this29._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Cannot attach DOM portal without _document constructor parameter');
          }

          var element = portal.element;

          if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('DOM portal content must be attached to a parent node.');
          } // Anchor used to save the element's previous position so
          // that we can restore it when the portal is detached.


          var anchorNode = _this29._document.createComment('dom-portal');

          element.parentNode.insertBefore(anchorNode, element);

          _this29.outletElement.appendChild(element);

          _get((_thisSuper = _assertThisInitialized(_this29), _getPrototypeOf(DomPortalOutlet.prototype)), "setDisposeFn", _thisSuper).call(_thisSuper, function () {
            // We can't use `replaceWith` here because IE doesn't support it.
            if (anchorNode.parentNode) {
              anchorNode.parentNode.replaceChild(element, anchorNode);
            }
          });
        };

        _this29._document = _document;
        return _this29;
      }
      /**
       * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
       * @param portal Portal to be attached
       * @returns Reference to the created component.
       */


      _createClass(DomPortalOutlet, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          var _this30 = this;

          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          var componentFactory = resolver.resolveComponentFactory(portal.component);
          var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
          // for the component (in terms of Angular's component tree, not rendering).
          // When the ViewContainerRef is missing, we use the factory to create the component directly
          // and then manually attach the view to the application.

          if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
            this.setDisposeFn(function () {
              return componentRef.destroy();
            });
          } else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);

            this._appRef.attachView(componentRef.hostView);

            this.setDisposeFn(function () {
              _this30._appRef.detachView(componentRef.hostView);

              componentRef.destroy();
            });
          } // At this point the component has been instantiated, so we move it to the location in the DOM
          // where we want it to be rendered.


          this.outletElement.appendChild(this._getComponentRootNode(componentRef));
          return componentRef;
        }
        /**
         * Attaches a template portal to the DOM as an embedded view.
         * @param portal Portal to be attached.
         * @returns Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this31 = this;

          var viewContainer = portal.viewContainerRef;
          var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
          // But for the DomPortalOutlet the view can be added everywhere in the DOM
          // (e.g Overlay Container) To move the view to the specified host element. We just
          // re-append the existing root nodes.

          viewRef.rootNodes.forEach(function (rootNode) {
            return _this31.outletElement.appendChild(rootNode);
          }); // Note that we want to detect changes after the nodes have been moved so that
          // any directives inside the portal that are looking at the DOM inside a lifecycle
          // hook won't be invoked too early.

          viewRef.detectChanges();
          this.setDisposeFn(function () {
            var index = viewContainer.indexOf(viewRef);

            if (index !== -1) {
              viewContainer.remove(index);
            }
          }); // TODO(jelbourn): Return locals from view.

          return viewRef;
        }
        /**
         * Clears out a portal from the DOM.
         */

      }, {
        key: "dispose",
        value: function dispose() {
          _get(_getPrototypeOf(DomPortalOutlet.prototype), "dispose", this).call(this);

          if (this.outletElement.parentNode != null) {
            this.outletElement.parentNode.removeChild(this.outletElement);
          }
        }
        /** Gets the root HTMLElement for an instantiated component. */

      }, {
        key: "_getComponentRootNode",
        value: function _getComponentRootNode(componentRef) {
          return componentRef.hostView.rootNodes[0];
        }
      }]);

      return DomPortalOutlet;
    }(BasePortalOutlet);
    /**
     * @deprecated Use `DomPortalOutlet` instead.
     * @breaking-change 9.0.0
     */


    var DomPortalHost =
    /*#__PURE__*/
    function (_DomPortalOutlet) {
      _inherits(DomPortalHost, _DomPortalOutlet);

      var _super10 = _createSuper(DomPortalHost);

      function DomPortalHost() {
        _classCallCheck(this, DomPortalHost);

        return _super10.apply(this, arguments);
      }

      return DomPortalHost;
    }(DomPortalOutlet);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
     * the directive instance itself can be attached to a host, enabling declarative use of portals.
     */


    var CdkPortal =
    /*#__PURE__*/
    function (_TemplatePortal) {
      _inherits(CdkPortal, _TemplatePortal);

      var _super11 = _createSuper(CdkPortal);

      function CdkPortal(templateRef, viewContainerRef) {
        _classCallCheck(this, CdkPortal);

        return _super11.call(this, templateRef, viewContainerRef);
      }

      return CdkPortal;
    }(TemplatePortal);

    CdkPortal.ɵfac = function CdkPortal_Factory(t) {
      return new (t || CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    CdkPortal.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortal,
      selectors: [["", "cdkPortal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    CdkPortal.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortal]',
          exportAs: 'cdkPortal'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /**
     * @deprecated Use `CdkPortal` instead.
     * @breaking-change 9.0.0
     */


    var TemplatePortalDirective =
    /*#__PURE__*/
    function (_CdkPortal) {
      _inherits(TemplatePortalDirective, _CdkPortal);

      var _super12 = _createSuper(TemplatePortalDirective);

      function TemplatePortalDirective() {
        _classCallCheck(this, TemplatePortalDirective);

        return _super12.apply(this, arguments);
      }

      return TemplatePortalDirective;
    }(CdkPortal);

    TemplatePortalDirective.ɵfac = function TemplatePortalDirective_Factory(t) {
      return ɵTemplatePortalDirective_BaseFactory(t || TemplatePortalDirective);
    };

    TemplatePortalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TemplatePortalDirective,
      selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
      exportAs: ["cdkPortal"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortal,
        useExisting: TemplatePortalDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵTemplatePortalDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TemplatePortalDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplatePortalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdk-portal], [portal]',
          exportAs: 'cdkPortal',
          providers: [{
            provide: CdkPortal,
            useExisting: TemplatePortalDirective
          }]
        }]
      }], null, null);
    })();
    /**
     * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
     * directly attached to it, enabling declarative use.
     *
     * Usage:
     * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
     */


    var CdkPortalOutlet =
    /*#__PURE__*/
    function (_BasePortalOutlet3) {
      _inherits(CdkPortalOutlet, _BasePortalOutlet3);

      var _super13 = _createSuper(CdkPortalOutlet);

      function CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef,
      /**
       * @deprecated `_document` parameter to be made required.
       * @breaking-change 9.0.0
       */
      _document) {
        var _thisSuper2, _this32;

        _classCallCheck(this, CdkPortalOutlet);

        _this32 = _super13.call(this);
        _this32._componentFactoryResolver = _componentFactoryResolver;
        _this32._viewContainerRef = _viewContainerRef;
        /** Whether the portal component is initialized. */

        _this32._isInitialized = false;
        /** Emits when a portal is attached to the outlet. */

        _this32.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
         * @param portal Portal to be attached.
         * @deprecated To be turned into a method.
         * @breaking-change 10.0.0
         */

        _this32.attachDomPortal = function (portal) {
          // @breaking-change 9.0.0 Remove check and error once the
          // `_document` constructor parameter is required.
          if (!_this32._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Cannot attach DOM portal without _document constructor parameter');
          }

          var element = portal.element;

          if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('DOM portal content must be attached to a parent node.');
          } // Anchor used to save the element's previous position so
          // that we can restore it when the portal is detached.


          var anchorNode = _this32._document.createComment('dom-portal');

          portal.setAttachedHost(_assertThisInitialized(_this32));
          element.parentNode.insertBefore(anchorNode, element);

          _this32._getRootNode().appendChild(element);

          _get((_thisSuper2 = _assertThisInitialized(_this32), _getPrototypeOf(CdkPortalOutlet.prototype)), "setDisposeFn", _thisSuper2).call(_thisSuper2, function () {
            if (anchorNode.parentNode) {
              anchorNode.parentNode.replaceChild(element, anchorNode);
            }
          });
        };

        _this32._document = _document;
        return _this32;
      }
      /** Portal associated with the Portal outlet. */


      _createClass(CdkPortalOutlet, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._isInitialized = true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "dispose", this).call(this);

          this._attachedPortal = null;
          this._attachedRef = null;
        }
        /**
         * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
         *
         * @param portal Portal to be attached to the portal outlet.
         * @returns Reference to the created component.
         */

      }, {
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
          // in the application tree. Otherwise use the location of this PortalOutlet.

          var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
          var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
          var componentFactory = resolver.resolveComponentFactory(portal.component);
          var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector); // If we're using a view container that's different from the injected one (e.g. when the portal
          // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
          // inside of the alternate view container.

          if (viewContainerRef !== this._viewContainerRef) {
            this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
          }

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
            return ref.destroy();
          });

          this._attachedPortal = portal;
          this._attachedRef = ref;
          this.attached.emit(ref);
          return ref;
        }
        /**
         * Attach the given TemplatePortal to this PortalHost as an embedded View.
         * @param portal Portal to be attached.
         * @returns Reference to the created embedded view.
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          var _this33 = this;

          portal.setAttachedHost(this);

          var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

          _get(_getPrototypeOf(CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
            return _this33._viewContainerRef.clear();
          });

          this._attachedPortal = portal;
          this._attachedRef = viewRef;
          this.attached.emit(viewRef);
          return viewRef;
        }
        /** Gets the root node of the portal outlet. */

      }, {
        key: "_getRootNode",
        value: function _getRootNode() {
          var nativeElement = this._viewContainerRef.element.nativeElement; // The directive could be set on a template which will result in a comment
          // node being the root. Use the comment's parent node if that is the case.

          return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
        }
      }, {
        key: "portal",
        get: function get() {
          return this._attachedPortal;
        },
        set: function set(portal) {
          // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
          // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
          // and attach a portal programmatically in the parent component. When Angular does the first CD
          // round, it will fire the setter with empty string, causing the user's content to be cleared.
          if (this.hasAttached() && !portal && !this._isInitialized) {
            return;
          }

          if (this.hasAttached()) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "detach", this).call(this);
          }

          if (portal) {
            _get(_getPrototypeOf(CdkPortalOutlet.prototype), "attach", this).call(this, portal);
          }

          this._attachedPortal = portal;
        }
        /** Component or view reference that is attached to the portal. */

      }, {
        key: "attachedRef",
        get: function get() {
          return this._attachedRef;
        }
      }]);

      return CdkPortalOutlet;
    }(BasePortalOutlet);

    CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
      return new (t || CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    CdkPortalOutlet.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CdkPortalOutlet,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: {
        portal: ["cdkPortalOutlet", "portal"]
      },
      outputs: {
        attached: "attached"
      },
      exportAs: ["cdkPortalOutlet"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    CdkPortalOutlet.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };

    CdkPortalOutlet.propDecorators = {
      attached: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkPortalOutlet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortalOutlet]',
          exportAs: 'cdkPortalOutlet',
          inputs: ['portal: cdkPortalOutlet']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /**
     * @deprecated Use `CdkPortalOutlet` instead.
     * @breaking-change 9.0.0
     */


    var PortalHostDirective =
    /*#__PURE__*/
    function (_CdkPortalOutlet) {
      _inherits(PortalHostDirective, _CdkPortalOutlet);

      var _super14 = _createSuper(PortalHostDirective);

      function PortalHostDirective() {
        _classCallCheck(this, PortalHostDirective);

        return _super14.apply(this, arguments);
      }

      return PortalHostDirective;
    }(CdkPortalOutlet);

    PortalHostDirective.ɵfac = function PortalHostDirective_Factory(t) {
      return ɵPortalHostDirective_BaseFactory(t || PortalHostDirective);
    };

    PortalHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: PortalHostDirective,
      selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
      inputs: {
        portal: ["cdkPortalHost", "portal"]
      },
      exportAs: ["cdkPortalHost"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: CdkPortalOutlet,
        useExisting: PortalHostDirective
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
    });

    var ɵPortalHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](PortalHostDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[cdkPortalHost], [portalHost]',
          exportAs: 'cdkPortalHost',
          inputs: ['portal: cdkPortalHost'],
          providers: [{
            provide: CdkPortalOutlet,
            useExisting: PortalHostDirective
          }]
        }]
      }], null, null);
    })();

    var PortalModule = function PortalModule() {
      _classCallCheck(this, PortalModule);
    };

    PortalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PortalModule
    });
    PortalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PortalModule_Factory(t) {
        return new (t || PortalModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortalModule, {
        declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
        exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective],
          declarations: [CdkPortal, CdkPortalOutlet, TemplatePortalDirective, PortalHostDirective]
        }]
      }], null, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Custom injector to be used when providing custom
     * injection tokens to components inside a portal.
     * @docs-private
     * @deprecated Use `Injector.create` instead.
     * @breaking-change 11.0.0
     */


    var PortalInjector =
    /*#__PURE__*/
    function () {
      function PortalInjector(_parentInjector, _customTokens) {
        _classCallCheck(this, PortalInjector);

        this._parentInjector = _parentInjector;
        this._customTokens = _customTokens;
      }

      _createClass(PortalInjector, [{
        key: "get",
        value: function get(token, notFoundValue) {
          var value = this._customTokens.get(token);

          if (typeof value !== 'undefined') {
            return value;
          }

          return this._parentInjector.get(token, notFoundValue);
        }
      }]);

      return PortalInjector;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=portal.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js ***!
    \**********************************************************************/

  /*! exports provided: CdkFixedSizeVirtualScroll, CdkScrollable, CdkScrollableModule, CdkVirtualForOf, CdkVirtualScrollViewport, DEFAULT_RESIZE_TIME, DEFAULT_SCROLL_TIME, FixedSizeVirtualScrollStrategy, ScrollDispatcher, ScrollingModule, VIRTUAL_SCROLL_STRATEGY, ViewportRuler, _fixedSizeVirtualScrollStrategyFactory */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015ScrollingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function () {
      return CdkFixedSizeVirtualScroll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollable", function () {
      return CdkScrollable;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkScrollableModule", function () {
      return CdkScrollableModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function () {
      return CdkVirtualForOf;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function () {
      return CdkVirtualScrollViewport;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function () {
      return DEFAULT_RESIZE_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function () {
      return DEFAULT_SCROLL_TIME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function () {
      return FixedSizeVirtualScrollStrategy;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function () {
      return ScrollDispatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollingModule", function () {
      return ScrollingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function () {
      return VIRTUAL_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewportRuler", function () {
      return ViewportRuler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function () {
      return _fixedSizeVirtualScrollStrategyFactory;
    });
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** The injection token used to specify the virtual scrolling strategy. */


    var _c0 = ["contentWrapper"];
    var _c1 = ["*"];
    var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Virtual scrolling strategy for lists with items of known fixed size. */

    var FixedSizeVirtualScrollStrategy =
    /*#__PURE__*/
    function () {
      /**
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        _classCallCheck(this, FixedSizeVirtualScrollStrategy);

        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /** The attached viewport. */

        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param viewport The viewport to attach this strategy to.
       */


      _createClass(FixedSizeVirtualScrollStrategy, [{
        key: "attach",
        value: function attach(viewport) {
          this._viewport = viewport;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /** Detaches this scroll strategy from the currently attached viewport. */

      }, {
        key: "detach",
        value: function detach() {
          this._scrolledIndexChange.complete();

          this._viewport = null;
        }
        /**
         * Update the item size and buffer size.
         * @param itemSize The size of the items in the virtually scrolling list.
         * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         */

      }, {
        key: "updateItemAndBufferSize",
        value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
          if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
          }

          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;

          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onContentScrolled",
        value: function onContentScrolled() {
          this._updateRenderedRange();
        }
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onDataLengthChanged",
        value: function onDataLengthChanged() {
          this._updateTotalContentSize();

          this._updateRenderedRange();
        }
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onContentRendered",
        value: function onContentRendered() {}
        /** @docs-private Implemented as part of VirtualScrollStrategy. */

      }, {
        key: "onRenderedOffsetChanged",
        value: function onRenderedOffsetChanged() {}
        /**
         * Scroll to the offset for the given index.
         * @param index The index of the element to scroll to.
         * @param behavior The ScrollBehavior to use when scrolling.
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index, behavior) {
          if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
          }
        }
        /** Update the viewport's total content size. */

      }, {
        key: "_updateTotalContentSize",
        value: function _updateTotalContentSize() {
          if (!this._viewport) {
            return;
          }

          this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
        }
        /** Update the viewport's rendered range. */

      }, {
        key: "_updateRenderedRange",
        value: function _updateRenderedRange() {
          if (!this._viewport) {
            return;
          }

          var renderedRange = this._viewport.getRenderedRange();

          var newRange = {
            start: renderedRange.start,
            end: renderedRange.end
          };

          var viewportSize = this._viewport.getViewportSize();

          var dataLength = this._viewport.getDataLength();

          var scrollOffset = this._viewport.measureScrollOffset();

          var firstVisibleIndex = scrollOffset / this._itemSize; // If user scrolls to the bottom of the list and data changes to a smaller list

          if (newRange.end > dataLength) {
            // We have to recalculate the first visible index based on new data length and viewport size.
            var maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
            var newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems)); // If first visible index changed we must update scroll offset to handle start/end buffers
            // Current range must also be adjusted to cover the new position (bottom of new list).

            if (firstVisibleIndex != newVisibleIndex) {
              firstVisibleIndex = newVisibleIndex;
              scrollOffset = newVisibleIndex * this._itemSize;
              newRange.start = Math.floor(firstVisibleIndex);
            }

            newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
          }

          var startBuffer = scrollOffset - newRange.start * this._itemSize;

          if (startBuffer < this._minBufferPx && newRange.start != 0) {
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
          } else {
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
              var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

              if (expandEnd > 0) {
                newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
              }
            }
          }

          this._viewport.setRenderedRange(newRange);

          this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

          this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
        }
      }]);

      return FixedSizeVirtualScrollStrategy;
    }();
    /**
     * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
     * `FixedSizeVirtualScrollStrategy` from the given directive.
     * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
     *     `FixedSizeVirtualScrollStrategy` from.
     */


    function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
      return fixedSizeDir._scrollStrategy;
    }
    /** A virtual scroll strategy that supports fixed-size items. */


    var CdkFixedSizeVirtualScroll =
    /*#__PURE__*/
    function () {
      function CdkFixedSizeVirtualScroll() {
        _classCallCheck(this, CdkFixedSizeVirtualScroll);

        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /** The scroll strategy used by this directive. */

        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      /** The size of the items in the list (in pixels). */


      _createClass(CdkFixedSizeVirtualScroll, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
      }, {
        key: "itemSize",
        get: function get() {
          return this._itemSize;
        },
        set: function set(value) {
          this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         */

      }, {
        key: "minBufferPx",
        get: function get() {
          return this._minBufferPx;
        },
        set: function set(value) {
          this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         */

      }, {
        key: "maxBufferPx",
        get: function get() {
          return this._maxBufferPx;
        },
        set: function set(value) {
          this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(value);
        }
      }]);

      return CdkFixedSizeVirtualScroll;
    }();

    CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
      return new (t || CdkFixedSizeVirtualScroll)();
    };

    CdkFixedSizeVirtualScroll.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkFixedSizeVirtualScroll,
      selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
      inputs: {
        itemSize: "itemSize",
        minBufferPx: "minBufferPx",
        maxBufferPx: "maxBufferPx"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CdkFixedSizeVirtualScroll;
        })]
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    CdkFixedSizeVirtualScroll.propDecorators = {
      itemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      minBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      maxBufferPx: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport[itemSize]',
          providers: [{
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return CdkFixedSizeVirtualScroll;
            })]
          }]
        }]
      }], function () {
        return [];
      }, {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Time in ms to throttle the scrolling events by default. */


    var DEFAULT_SCROLL_TIME = 20;
    /**
     * Service contained all registered Scrollable references and emits an event when any one of the
     * Scrollable references emit a scrolled event.
     */

    var ScrollDispatcher =
    /*#__PURE__*/
    function () {
      function ScrollDispatcher(_ngZone, _platform,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, ScrollDispatcher);

        this._ngZone = _ngZone;
        this._platform = _platform;
        /** Subject for notifying that a registered scrollable reference element has been scrolled. */

        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Keeps track of the global `scroll` and `resize` subscriptions. */

        this._globalSubscription = null;
        /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */

        this.scrollContainers = new Map();
        this._document = document;
      }
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param scrollable Scrollable instance to be registered.
       */


      _createClass(ScrollDispatcher, [{
        key: "register",
        value: function register(scrollable) {
          var _this34 = this;

          if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(function () {
              return _this34._scrolled.next(scrollable);
            }));
          }
        }
        /**
         * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
         * @param scrollable Scrollable instance to be deregistered.
         */

      }, {
        key: "deregister",
        value: function deregister(scrollable) {
          var scrollableReference = this.scrollContainers.get(scrollable);

          if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers["delete"](scrollable);
          }
        }
        /**
         * Returns an observable that emits an event whenever any of the registered Scrollable
         * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
         * to override the default "throttle" time.
         *
         * **Note:** in order to avoid hitting change detection for every scroll event,
         * all of the events emitted from this stream will be run outside the Angular zone.
         * If you need to update any data bindings as a result of a scroll event, you have
         * to run the callback using `NgZone.run`.
         */

      }, {
        key: "scrolled",
        value: function scrolled() {
          var _this35 = this;

          var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCROLL_TIME;

          if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
          }

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            if (!_this35._globalSubscription) {
              _this35._addGlobalListener();
            } // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.


            var subscription = auditTimeInMs > 0 ? _this35._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) : _this35._scrolled.subscribe(observer);
            _this35._scrolledCount++;
            return function () {
              subscription.unsubscribe();
              _this35._scrolledCount--;

              if (!_this35._scrolledCount) {
                _this35._removeGlobalListener();
              }
            };
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this36 = this;

          this._removeGlobalListener();

          this.scrollContainers.forEach(function (_, container) {
            return _this36.deregister(container);
          });

          this._scrolled.complete();
        }
        /**
         * Returns an observable that emits whenever any of the
         * scrollable ancestors of an element are scrolled.
         * @param elementRef Element whose ancestors to listen for.
         * @param auditTimeInMs Time to throttle the scroll events.
         */

      }, {
        key: "ancestorScrolled",
        value: function ancestorScrolled(elementRef, auditTimeInMs) {
          var ancestors = this.getAncestorScrollContainers(elementRef);
          return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (target) {
            return !target || ancestors.indexOf(target) > -1;
          }));
        }
        /** Returns all registered Scrollables that contain the provided element. */

      }, {
        key: "getAncestorScrollContainers",
        value: function getAncestorScrollContainers(elementRef) {
          var _this37 = this;

          var scrollingContainers = [];
          this.scrollContainers.forEach(function (_subscription, scrollable) {
            if (_this37._scrollableContainsElement(scrollable, elementRef)) {
              scrollingContainers.push(scrollable);
            }
          });
          return scrollingContainers;
        }
        /** Access injected document if available or fallback to global document reference */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /** Use defaultView of injected document if available or fallback to global window reference */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /** Returns true if the element is contained within the provided Scrollable. */

      }, {
        key: "_scrollableContainsElement",
        value: function _scrollableContainsElement(scrollable, elementRef) {
          var element = elementRef.nativeElement;
          var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
          // are the scrollable's element.

          do {
            if (element == scrollableElement) {
              return true;
            }
          } while (element = element.parentElement);

          return false;
        }
        /** Sets up the global scroll listeners. */

      }, {
        key: "_addGlobalListener",
        value: function _addGlobalListener() {
          var _this38 = this;

          this._globalSubscription = this._ngZone.runOutsideAngular(function () {
            var window = _this38._getWindow();

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe(function () {
              return _this38._scrolled.next();
            });
          });
        }
        /** Cleans up the global scroll listener. */

      }, {
        key: "_removeGlobalListener",
        value: function _removeGlobalListener() {
          if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();

            this._globalSubscription = null;
          }
        }
      }]);

      return ScrollDispatcher;
    }();

    ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
      return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };

    ScrollDispatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ScrollDispatcher_Factory() {
        return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ScrollDispatcher,
      providedIn: "root"
    });

    ScrollDispatcher.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Sends an event when the directive's element is scrolled. Registers itself with the
     * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
     * can be listened to through the service.
     */


    var CdkScrollable =
    /*#__PURE__*/
    function () {
      function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this39 = this;

        _classCallCheck(this, CdkScrollable);

        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
          return _this39.ngZone.runOutsideAngular(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this39.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this39._destroyed)).subscribe(observer);
          });
        });
      }

      _createClass(CdkScrollable, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scrollDispatcher.register(this);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.scrollDispatcher.deregister(this);

          this._destroyed.next();

          this._destroyed.complete();
        }
        /** Returns observable that emits when a scroll event is fired on the host element. */

      }, {
        key: "elementScrolled",
        value: function elementScrolled() {
          return this._elementScrolled;
        }
        /** Gets the ElementRef for the viewport. */

      }, {
        key: "getElementRef",
        value: function getElementRef() {
          return this.elementRef;
        }
        /**
         * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
         * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param options specified the offsets to scroll to.
         */

      }, {
        key: "scrollTo",
        value: function scrollTo(options) {
          var el = this.elementRef.nativeElement;
          var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

          if (options.left == null) {
            options.left = isRtl ? options.end : options.start;
          }

          if (options.right == null) {
            options.right = isRtl ? options.start : options.end;
          } // Rewrite the bottom offset as a top offset.


          if (options.bottom != null) {
            options.top = el.scrollHeight - el.clientHeight - options.bottom;
          } // Rewrite the right offset as a left offset.


          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != 0
          /* NORMAL */
          ) {
              if (options.left != null) {
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
              /* INVERTED */
              ) {
                  options.left = options.right;
                } else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
              /* NEGATED */
              ) {
                  options.left = options.right ? -options.right : options.right;
                }
            } else {
            if (options.right != null) {
              options.left = el.scrollWidth - el.clientWidth - options.right;
            }
          }

          this._applyScrollToOptions(options);
        }
      }, {
        key: "_applyScrollToOptions",
        value: function _applyScrollToOptions(options) {
          var el = this.elementRef.nativeElement;

          if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
          } else {
            if (options.top != null) {
              el.scrollTop = options.top;
            }

            if (options.left != null) {
              el.scrollLeft = options.left;
            }
          }
        }
        /**
         * Measures the scroll offset relative to the specified edge of the viewport. This method can be
         * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
         * about what scrollLeft means in RTL. The values returned by this method are normalized such that
         * left and right always refer to the left and right side of the scrolling container irrespective
         * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
         * in an RTL context.
         * @param from The edge to measure from.
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          var LEFT = 'left';
          var RIGHT = 'right';
          var el = this.elementRef.nativeElement;

          if (from == 'top') {
            return el.scrollTop;
          }

          if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
          } // Rewrite start & end as left or right offsets.


          var isRtl = this.dir && this.dir.value == 'rtl';

          if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
          } else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
          }

          if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 2
          /* INVERTED */
          ) {
              // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              } else {
                return el.scrollLeft;
              }
            } else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == 1
          /* NEGATED */
          ) {
              // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
              } else {
                return -el.scrollLeft;
              }
            } else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
              return el.scrollLeft;
            } else {
              return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
          }
        }
      }]);

      return CdkScrollable;
    }();

    CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
      return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8));
    };

    CdkScrollable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkScrollable,
      selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
    });

    CdkScrollable.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: ScrollDispatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollable, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdk-scrollable], [cdkScrollable]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Time in ms to throttle the resize events by default. */


    var DEFAULT_RESIZE_TIME = 20;
    /**
     * Simple utility for getting the bounds of the browser viewport.
     * @docs-private
     */

    var ViewportRuler =
    /*#__PURE__*/
    function () {
      function ViewportRuler(_platform, ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        var _this40 = this;

        _classCallCheck(this, ViewportRuler);

        this._platform = _platform;
        /** Stream of viewport change events. */

        this._change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Event listener that will be used to handle the viewport change events. */

        this._changeListener = function (event) {
          _this40._change.next(event);
        };

        this._document = document;
        ngZone.runOutsideAngular(function () {
          if (_platform.isBrowser) {
            var _window = _this40._getWindow(); // Note that bind the events ourselves, rather than going through something like RxJS's
            // `fromEvent` so that we can ensure that they're bound outside of the NgZone.


            _window.addEventListener('resize', _this40._changeListener);

            _window.addEventListener('orientationchange', _this40._changeListener);
          } // We don't need to keep track of the subscription,
          // because we complete the `change` stream on destroy.


          _this40.change().subscribe(function () {
            return _this40._updateViewportSize();
          });
        });
      }

      _createClass(ViewportRuler, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._platform.isBrowser) {
            var _window2 = this._getWindow();

            _window2.removeEventListener('resize', this._changeListener);

            _window2.removeEventListener('orientationchange', this._changeListener);
          }

          this._change.complete();
        }
        /** Returns the viewport's width and height. */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          if (!this._viewportSize) {
            this._updateViewportSize();
          }

          var output = {
            width: this._viewportSize.width,
            height: this._viewportSize.height
          }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

          if (!this._platform.isBrowser) {
            this._viewportSize = null;
          }

          return output;
        }
        /** Gets a ClientRect for the viewport's bounds. */

      }, {
        key: "getViewportRect",
        value: function getViewportRect() {
          // Use the document element's bounding rect rather than the window scroll properties
          // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
          // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
          // conceptual viewports. Under most circumstances these viewports are equivalent, but they
          // can disagree when the page is pinch-zoomed (on devices that support touch).
          // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
          // We use the documentElement instead of the body because, by default (without a css reset)
          // browsers typically give the document body an 8px margin, which is not included in
          // getBoundingClientRect().
          var scrollPosition = this.getViewportScrollPosition();

          var _this$getViewportSize = this.getViewportSize(),
              width = _this$getViewportSize.width,
              height = _this$getViewportSize.height;

          return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width
          };
        }
        /** Gets the (top, left) scroll position of the viewport. */

      }, {
        key: "getViewportScrollPosition",
        value: function getViewportScrollPosition() {
          // While we can get a reference to the fake document
          // during SSR, it doesn't have getBoundingClientRect.
          if (!this._platform.isBrowser) {
            return {
              top: 0,
              left: 0
            };
          } // The top-left-corner of the viewport is determined by the scroll position of the document
          // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
          // whether `document.body` or `document.documentElement` is the scrolled element, so reading
          // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
          // `document.documentElement` works consistently, where the `top` and `left` values will
          // equal negative the scroll position.


          var document = this._getDocument();

          var window = this._getWindow();

          var documentElement = document.documentElement;
          var documentRect = documentElement.getBoundingClientRect();
          var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
          var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
          return {
            top: top,
            left: left
          };
        }
        /**
         * Returns a stream that emits whenever the size of the viewport changes.
         * @param throttleTime Time in milliseconds to throttle the stream.
         */

      }, {
        key: "change",
        value: function change() {
          var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_RESIZE_TIME;
          return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
        }
        /** Access injected document if available or fallback to global document reference */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /** Use defaultView of injected document if available or fallback to global window reference */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /** Updates the cached viewport size. */

      }, {
        key: "_updateViewportSize",
        value: function _updateViewportSize() {
          var window = this._getWindow();

          this._viewportSize = this._platform.isBrowser ? {
            width: window.innerWidth,
            height: window.innerHeight
          } : {
            width: 0,
            height: 0
          };
        }
      }]);

      return ViewportRuler;
    }();

    ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
      return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };

    ViewportRuler.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function ViewportRuler_Factory() {
        return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
      },
      token: ViewportRuler,
      providedIn: "root"
    });

    ViewportRuler.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewportRuler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Checks if the given ranges are equal. */


    function rangesEqual(r1, r2) {
      return r1.start == r2.start && r1.end == r2.end;
    }
    /**
     * Scheduler to be used for scroll events. Needs to fall back to
     * something that doesn't rely on requestAnimationFrame on environments
     * that don't support it (e.g. server-side rendering).
     */


    var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
    /** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

    var CdkVirtualScrollViewport =
    /*#__PURE__*/
    function (_CdkScrollable) {
      _inherits(CdkVirtualScrollViewport, _CdkScrollable);

      var _super15 = _createSuper(CdkVirtualScrollViewport);

      function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher,
      /**
       * @deprecated `viewportRuler` parameter to become required.
       * @breaking-change 11.0.0
       */
      viewportRuler) {
        var _this41;

        _classCallCheck(this, CdkVirtualScrollViewport);

        _this41 = _super15.call(this, elementRef, scrollDispatcher, ngZone, dir);
        _this41.elementRef = elementRef;
        _this41._changeDetectorRef = _changeDetectorRef;
        _this41._scrollStrategy = _scrollStrategy;
        /** Emits when the viewport is detached from a CdkVirtualForOf. */

        _this41._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Emits when the rendered range changes. */

        _this41._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this41._orientation = 'vertical'; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.

        /** Emits when the index of the first element visible in the viewport changes. */

        _this41.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
          return _this41._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
            return Promise.resolve().then(function () {
              return _this41.ngZone.run(function () {
                return observer.next(index);
              });
            });
          });
        });
        /** A stream that emits whenever the rendered range changes. */

        _this41.renderedRangeStream = _this41._renderedRangeSubject;
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */

        _this41._totalContentSize = 0;
        /** A string representing the `style.width` property value to be used for the spacer element. */

        _this41._totalContentWidth = '';
        /** A string representing the `style.height` property value to be used for the spacer element. */

        _this41._totalContentHeight = '';
        /** The currently rendered range of indices. */

        _this41._renderedRange = {
          start: 0,
          end: 0
        };
        /** The length of the data bound to this viewport (in number of items). */

        _this41._dataLength = 0;
        /** The size of the viewport (in pixels). */

        _this41._viewportSize = 0;
        /** The last rendered content offset that was set. */

        _this41._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */

        _this41._renderedContentOffsetNeedsRewrite = false;
        /** Whether there is a pending change detection cycle. */

        _this41._isChangeDetectionPending = false;
        /** A list of functions to run after the next change detection cycle. */

        _this41._runAfterChangeDetection = [];
        /** Subscription to changes in the viewport size. */

        _this41._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;

        if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        } // @breaking-change 11.0.0 Remove null check for `viewportRuler`.


        if (viewportRuler) {
          _this41._viewportChanges = viewportRuler.change().subscribe(function () {
            _this41.checkViewportSize();
          });
        }

        return _this41;
      }
      /** The direction the viewport scrolls. */


      _createClass(CdkVirtualScrollViewport, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this42 = this;

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
          // the Viewport to be rendered with the correct size before we measure. We run this outside the
          // zone to avoid causing more change detection cycles. We handle the change detection loop
          // ourselves instead.


          this.ngZone.runOutsideAngular(function () {
            return Promise.resolve().then(function () {
              _this42._measureViewportSize();

              _this42._scrollStrategy.attach(_this42);

              _this42.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Collect multiple events into one until the next animation frame. This way if
              // there are multiple scroll events in the same frame we only need to recheck
              // our layout once.
              Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER)).subscribe(function () {
                return _this42._scrollStrategy.onContentScrolled();
              });

              _this42._markChangeDetectionNeeded();
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.detach();

          this._scrollStrategy.detach(); // Complete all subjects


          this._renderedRangeSubject.complete();

          this._detachedSubject.complete();

          this._viewportChanges.unsubscribe();

          _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
        }
        /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */

      }, {
        key: "attach",
        value: function attach(forOf) {
          var _this43 = this;

          if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('CdkVirtualScrollViewport is already attached.');
          } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
          // changes. Run outside the zone to avoid triggering change detection, since we're managing the
          // change detection loop ourselves.


          this.ngZone.runOutsideAngular(function () {
            _this43._forOf = forOf;

            _this43._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this43._detachedSubject)).subscribe(function (data) {
              var newLength = data.length;

              if (newLength !== _this43._dataLength) {
                _this43._dataLength = newLength;

                _this43._scrollStrategy.onDataLengthChanged();
              }

              _this43._doChangeDetection();
            });
          });
        }
        /** Detaches the current `CdkVirtualForOf`. */

      }, {
        key: "detach",
        value: function detach() {
          this._forOf = null;

          this._detachedSubject.next();
        }
        /** Gets the length of the data bound to this viewport (in number of items). */

      }, {
        key: "getDataLength",
        value: function getDataLength() {
          return this._dataLength;
        }
        /** Gets the size of the viewport (in pixels). */

      }, {
        key: "getViewportSize",
        value: function getViewportSize() {
          return this._viewportSize;
        } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
        // cycle happens. I'm being careful to only call it after the render cycle is complete and before
        // setting it to something else, but its error prone and should probably be split into
        // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

        /** Get the current rendered range of items. */

      }, {
        key: "getRenderedRange",
        value: function getRenderedRange() {
          return this._renderedRange;
        }
        /**
         * Sets the total size of all content (in pixels), including content that is not currently
         * rendered.
         */

      }, {
        key: "setTotalContentSize",
        value: function setTotalContentSize(size) {
          if (this._totalContentSize !== size) {
            this._totalContentSize = size;

            this._calculateSpacerSize();

            this._markChangeDetectionNeeded();
          }
        }
        /** Sets the currently rendered range of indices. */

      }, {
        key: "setRenderedRange",
        value: function setRenderedRange(range) {
          var _this44 = this;

          if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);

            this._markChangeDetectionNeeded(function () {
              return _this44._scrollStrategy.onContentRendered();
            });
          }
        }
        /**
         * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
         */

      }, {
        key: "getOffsetToRenderedContentStart",
        value: function getOffsetToRenderedContentStart() {
          return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
        }
        /**
         * Sets the offset from the start of the viewport to either the start or end of the rendered data
         * (in pixels).
         */

      }, {
        key: "setRenderedContentOffset",
        value: function setRenderedContentOffset(offset) {
          var _this45 = this;

          var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
          // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
          // in the negative direction.
          var isRtl = this.dir && this.dir.value == 'rtl';
          var isHorizontal = this.orientation == 'horizontal';
          var axis = isHorizontal ? 'X' : 'Y';
          var axisDirection = isHorizontal && isRtl ? -1 : 1;
          var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
          this._renderedContentOffset = offset;

          if (to === 'to-end') {
            transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).

            this._renderedContentOffsetNeedsRewrite = true;
          }

          if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;

            this._markChangeDetectionNeeded(function () {
              if (_this45._renderedContentOffsetNeedsRewrite) {
                _this45._renderedContentOffset -= _this45.measureRenderedContentSize();
                _this45._renderedContentOffsetNeedsRewrite = false;

                _this45.setRenderedContentOffset(_this45._renderedContentOffset);
              } else {
                _this45._scrollStrategy.onRenderedOffsetChanged();
              }
            });
          }
        }
        /**
         * Scrolls to the given offset from the start of the viewport. Please note that this is not always
         * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
         * direction, this would be the equivalent of setting a fictional `scrollRight` property.
         * @param offset The offset to scroll to.
         * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         */

      }, {
        key: "scrollToOffset",
        value: function scrollToOffset(offset) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
          var options = {
            behavior: behavior
          };

          if (this.orientation === 'horizontal') {
            options.start = offset;
          } else {
            options.top = offset;
          }

          this.scrollTo(options);
        }
        /**
         * Scrolls to the offset for the given index.
         * @param index The index of the element to scroll to.
         * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
         */

      }, {
        key: "scrollToIndex",
        value: function scrollToIndex(index) {
          var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

          this._scrollStrategy.scrollToIndex(index, behavior);
        }
        /**
         * Gets the current scroll offset from the start of the viewport (in pixels).
         * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
         *     in horizontal mode.
         */

      }, {
        key: "measureScrollOffset",
        value: function measureScrollOffset(from) {
          return from ? _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
        }
        /** Measure the combined size of all of the rendered items. */

      }, {
        key: "measureRenderedContentSize",
        value: function measureRenderedContentSize() {
          var contentEl = this._contentWrapper.nativeElement;
          return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
        }
        /**
         * Measure the total combined size of the given range. Throws if the range includes items that are
         * not rendered.
         */

      }, {
        key: "measureRangeSize",
        value: function measureRangeSize(range) {
          if (!this._forOf) {
            return 0;
          }

          return this._forOf.measureRangeSize(range, this.orientation);
        }
        /** Update the viewport dimensions and re-render. */

      }, {
        key: "checkViewportSize",
        value: function checkViewportSize() {
          // TODO: Cleanup later when add logic for handling content resize
          this._measureViewportSize();

          this._scrollStrategy.onDataLengthChanged();
        }
        /** Measure the viewport size. */

      }, {
        key: "_measureViewportSize",
        value: function _measureViewportSize() {
          var viewportEl = this.elementRef.nativeElement;
          this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
        }
        /** Queue up change detection to run. */

      }, {
        key: "_markChangeDetectionNeeded",
        value: function _markChangeDetectionNeeded(runAfter) {
          var _this46 = this;

          if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
          } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
          // properties sequentially we only have to run `_doChangeDetection` once at the end.


          if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular(function () {
              return Promise.resolve().then(function () {
                _this46._doChangeDetection();
              });
            });
          }
        }
        /** Run change detection. */

      }, {
        key: "_doChangeDetection",
        value: function _doChangeDetection() {
          var _this47 = this;

          this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
          // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
          // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
          // the `Number` function first to coerce it to a numeric value.

          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
          // from the root, since the repeated items are content projected in. Calling `detectChanges`
          // instead does not properly check the projected content.

          this.ngZone.run(function () {
            return _this47._changeDetectorRef.markForCheck();
          });
          var runAfterChangeDetection = this._runAfterChangeDetection;
          this._runAfterChangeDetection = [];

          var _iterator5 = _createForOfIteratorHelper(runAfterChangeDetection),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var fn = _step5.value;
              fn();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        /** Calculates the `style.width` and `style.height` for the spacer element. */

      }, {
        key: "_calculateSpacerSize",
        value: function _calculateSpacerSize() {
          this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
          this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
        }
      }, {
        key: "orientation",
        get: function get() {
          return this._orientation;
        },
        set: function set(orientation) {
          if (this._orientation !== orientation) {
            this._orientation = orientation;

            this._calculateSpacerSize();
          }
        }
      }]);

      return CdkVirtualScrollViewport;
    }(CdkScrollable);

    CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
      return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewportRuler));
    };

    CdkVirtualScrollViewport.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CdkVirtualScrollViewport,
      selectors: [["cdk-virtual-scroll-viewport"]],
      viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
        }
      },
      hostAttrs: [1, "cdk-virtual-scroll-viewport"],
      hostVars: 4,
      hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
        }
      },
      inputs: {
        orientation: "orientation"
      },
      outputs: {
        scrolledIndexChange: "scrolledIndexChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 4,
      consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
      template: function CdkVirtualScrollViewport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
        }
      },
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });

    CdkVirtualScrollViewport.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [VIRTUAL_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: ScrollDispatcher
      }, {
        type: ViewportRuler
      }];
    };

    CdkVirtualScrollViewport.propDecorators = {
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      scrolledIndexChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }],
      _contentWrapper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: ['contentWrapper', {
          "static": true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'cdk-virtual-scroll-viewport',
          template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
          host: {
            'class': 'cdk-virtual-scroll-viewport',
            '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
            '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
          },
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          providers: [{
            provide: CdkScrollable,
            useExisting: CdkVirtualScrollViewport
          }],
          styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: ScrollDispatcher
        }, {
          type: ViewportRuler
        }];
      }, {
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Helper to extract the offset of a DOM Node in a certain direction. */


    function getOffset(orientation, direction, node) {
      var el = node;

      if (!el.getBoundingClientRect) {
        return 0;
      }

      var rect = el.getBoundingClientRect();

      if (orientation === 'horizontal') {
        return direction === 'start' ? rect.left : rect.right;
      }

      return direction === 'start' ? rect.top : rect.bottom;
    }
    /**
     * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
     * container.
     */


    var CdkVirtualForOf =
    /*#__PURE__*/
    function () {
      function CdkVirtualForOf(
      /** The view container to add items to. */
      _viewContainerRef,
      /** The template to use when stamping out new items. */
      _template,
      /** The set of available differs. */
      _differs,
      /** The strategy used to render items in the virtual scroll viewport. */
      _viewRepeater,
      /** The virtual scrolling viewport that these items are being rendered in. */
      _viewport, ngZone) {
        var _this48 = this;

        _classCallCheck(this, CdkVirtualForOf);

        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewRepeater = _viewRepeater;
        this._viewport = _viewport;
        /** Emits when the rendered view of the data changes. */

        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Subject that emits when a new DataSource instance is given. */

        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Emits whenever the data in the current DataSource changes. */

        this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              prev = _ref2[0],
              cur = _ref2[1];

          return _this48._changeDataSource(prev, cur);
        }), // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /** The differ used to calculate changes to the data. */

        this._differ = null;
        /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe(function (data) {
          _this48._data = data;

          _this48._onRenderedDataChange();
        });

        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe(function (range) {
          _this48._renderedRange = range;
          ngZone.run(function () {
            return _this48.viewChange.next(_this48._renderedRange);
          });

          _this48._onRenderedDataChange();
        });

        this._viewport.attach(this);
      }
      /** The DataSource to display. */


      _createClass(CdkVirtualForOf, [{
        key: "measureRangeSize",

        /**
         * Measures the combined size (width for horizontal orientation, height for vertical) of all items
         * in the specified range. Throws an error if the range includes items that are not currently
         * rendered.
         */
        value: function measureRangeSize(range, orientation) {
          if (range.start >= range.end) {
            return 0;
          }

          if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
          } // The index into the list of rendered views for the first item in the range.


          var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

          var rangeLen = range.end - range.start; // Loop over all the views, find the first and land node and compute the size by subtracting
          // the top of the first node from the bottom of the last one.

          var firstNode;
          var lastNode; // Find the first node by starting from the beginning and going forwards.

          for (var i = 0; i < rangeLen; i++) {
            var view = this._viewContainerRef.get(i + renderedStartIndex);

            if (view && view.rootNodes.length) {
              firstNode = lastNode = view.rootNodes[0];
              break;
            }
          } // Find the last node by starting from the end and going backwards.


          for (var _i2 = rangeLen - 1; _i2 > -1; _i2--) {
            var _view = this._viewContainerRef.get(_i2 + renderedStartIndex);

            if (_view && _view.rootNodes.length) {
              lastNode = _view.rootNodes[_view.rootNodes.length - 1];
              break;
            }
          }

          return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            var changes = this._differ.diff(this._renderedItems);

            if (!changes) {
              this._updateContext();
            } else {
              this._applyChanges(changes);
            }

            this._needsUpdate = false;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._viewport.detach();

          this._dataSourceChanges.next(undefined);

          this._dataSourceChanges.complete();

          this.viewChange.complete();

          this._destroyed.next();

          this._destroyed.complete();

          this._viewRepeater.detach();
        }
        /** React to scroll state changes in the viewport. */

      }, {
        key: "_onRenderedDataChange",
        value: function _onRenderedDataChange() {
          if (!this._renderedRange) {
            return;
          }

          this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

          if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
          }

          this._needsUpdate = true;
        }
        /** Swap out one `DataSource` for another. */

      }, {
        key: "_changeDataSource",
        value: function _changeDataSource(oldDs, newDs) {
          if (oldDs) {
            oldDs.disconnect(this);
          }

          this._needsUpdate = true;
          return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        /** Update the `CdkVirtualForOfContext` for all views. */

      }, {
        key: "_updateContext",
        value: function _updateContext() {
          var count = this._data.length;
          var i = this._viewContainerRef.length;

          while (i--) {
            var view = this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);

            view.detectChanges();
          }
        }
        /** Apply changes to the DOM. */

      }, {
        key: "_applyChanges",
        value: function _applyChanges(changes) {
          var _this49 = this;

          this._viewRepeater.applyChanges(changes, this._viewContainerRef, function (record, adjustedPreviousIndex, currentIndex) {
            return _this49._getEmbeddedViewArgs(record, currentIndex);
          }, function (record) {
            return record.item;
          }); // Update $implicit for any items that had an identity change.


          changes.forEachIdentityChange(function (record) {
            var view = _this49._viewContainerRef.get(record.currentIndex);

            view.context.$implicit = record.item;
          }); // Update the context variables on all items.

          var count = this._data.length;
          var i = this._viewContainerRef.length;

          while (i--) {
            var view = this._viewContainerRef.get(i);

            view.context.index = this._renderedRange.start + i;
            view.context.count = count;

            this._updateComputedContextProperties(view.context);
          }
        }
        /** Update the computed properties on the `CdkVirtualForOfContext`. */

      }, {
        key: "_updateComputedContextProperties",
        value: function _updateComputedContextProperties(context) {
          context.first = context.index === 0;
          context.last = context.index === context.count - 1;
          context.even = context.index % 2 === 0;
          context.odd = !context.even;
        }
      }, {
        key: "_getEmbeddedViewArgs",
        value: function _getEmbeddedViewArgs(record, index) {
          // Note that it's important that we insert the item directly at the proper index,
          // rather than inserting it and the moving it in place, because if there's a directive
          // on the same node that injects the `ViewContainerRef`, Angular will insert another
          // comment node which can throw off the move when it's being repeated for all items.
          return {
            templateRef: this._template,
            context: {
              $implicit: record.item,
              // It's guaranteed that the iterable is not "undefined" or "null" because we only
              // generate views for elements if the "cdkVirtualForOf" iterable has elements.
              cdkVirtualForOf: this._cdkVirtualForOf,
              index: -1,
              count: -1,
              first: false,
              last: false,
              odd: false,
              even: false
            },
            index: index
          };
        }
      }, {
        key: "cdkVirtualForOf",
        get: function get() {
          return this._cdkVirtualForOf;
        },
        set: function set(value) {
          this._cdkVirtualForOf = value;

          if (Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value)) {
            this._dataSourceChanges.next(value);
          } else {
            // Slice the value if its an NgIterable to ensure we're working with an array.
            this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["isObservable"])(value) ? value : Array.prototype.slice.call(value || [])));
          }
        }
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         */

      }, {
        key: "cdkVirtualForTrackBy",
        get: function get() {
          return this._cdkVirtualForTrackBy;
        },
        set: function set(fn) {
          var _this50 = this;

          this._needsUpdate = true;
          this._cdkVirtualForTrackBy = fn ? function (index, item) {
            return fn(index + (_this50._renderedRange ? _this50._renderedRange.start : 0), item);
          } : undefined;
        }
        /** The template used to stamp out new elements. */

      }, {
        key: "cdkVirtualForTemplate",
        set: function set(value) {
          if (value) {
            this._needsUpdate = true;
            this._template = value;
          }
        }
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */

      }, {
        key: "cdkVirtualForTemplateCacheSize",
        get: function get() {
          return this._viewRepeater.viewCacheSize;
        },
        set: function set(size) {
          this._viewRepeater.viewCacheSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceNumberProperty"])(size);
        }
      }]);

      return CdkVirtualForOf;
    }();

    CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
      return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CdkVirtualForOf.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkVirtualForOf,
      selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
      inputs: {
        cdkVirtualForOf: "cdkVirtualForOf",
        cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
        cdkVirtualForTemplate: "cdkVirtualForTemplate",
        cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"],
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"]
      }])]
    });

    CdkVirtualForOf.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
      }, {
        type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]]
        }]
      }, {
        type: CdkVirtualScrollViewport,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CdkVirtualForOf.propDecorators = {
      cdkVirtualForOf: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTrackBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      cdkVirtualForTemplateCacheSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkVirtualForOf, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkVirtualFor][cdkVirtualForOf]',
          providers: [{
            provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"],
            useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"]
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_RecycleViewRepeaterStrategy"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["_VIEW_REPEATER_STRATEGY"]]
          }]
        }, {
          type: CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var CdkScrollableModule = function CdkScrollableModule() {
      _classCallCheck(this, CdkScrollableModule);
    };

    CdkScrollableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CdkScrollableModule
    });
    CdkScrollableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CdkScrollableModule_Factory(t) {
        return new (t || CdkScrollableModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CdkScrollableModule, {
        declarations: [CdkScrollable],
        exports: [CdkScrollable]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkScrollableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          exports: [CdkScrollable],
          declarations: [CdkScrollable]
        }]
      }], null, null);
    })();
    /**
     * @docs-primary-export
     */


    var ScrollingModule = function ScrollingModule() {
      _classCallCheck(this, ScrollingModule);
    };

    ScrollingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ScrollingModule
    });
    ScrollingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ScrollingModule_Factory(t) {
        return new (t || ScrollingModule)();
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollingModule, {
        declarations: function declarations() {
          return [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        },
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScrollingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"], CdkScrollableModule],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["BidiModule"], CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
          declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
        }]
      }], null, null);
    })();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=scrolling.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/cdk/fesm2015/coercion.js":
  /*!********************************************************!*\
    !*** ./node_modules/@angular/cdk/fesm2015/coercion.js ***!
    \********************************************************/

  /*! exports provided: _isNumberValue, coerceArray, coerceBooleanProperty, coerceCssPixelValue, coerceElement, coerceNumberProperty */

  /***/
  function node_modulesAngularCdkFesm2015CoercionJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_isNumberValue", function () {
      return _isNumberValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceArray", function () {
      return coerceArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function () {
      return coerceBooleanProperty;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function () {
      return coerceCssPixelValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceElement", function () {
      return coerceElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function () {
      return coerceNumberProperty;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a data-bound value (typically a string) to a boolean. */


    function coerceBooleanProperty(value) {
      return value != null && "".concat(value) !== 'false';
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceNumberProperty(value) {
      var fallbackValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return _isNumberValue(value) ? Number(value) : fallbackValue;
    }
    /**
     * Whether the provided value is considered a number.
     * @docs-private
     */


    function _isNumberValue(value) {
      // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
      // and other non-number values as NaN, where Number just uses 0) but it considers the string
      // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
      return !isNaN(parseFloat(value)) && !isNaN(Number(value));
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function coerceArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** Coerces a value to a CSS pixel value. */


    function coerceCssPixelValue(value) {
      if (value == null) {
        return '';
      }

      return typeof value === 'string' ? value : "".concat(value, "px");
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Coerces an ElementRef or an Element into an element.
     * Useful for APIs that can accept either a ref or the native element itself.
     */


    function coerceElement(elementOrRef) {
      return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    //# sourceMappingURL=coercion.js.map

    /***/

  },

  /***/
  "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js ***!
    \***********************************************************************************************/

  /*! exports provided: AutocompleteComponent, AutocompleteLibComponent, AutocompleteLibModule, HighlightPipe */

  /***/
  function node_modulesAngularNgAutocomplete__ivy_ngcc__Fesm2015AngularNgAutocompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function () {
      return AutocompleteComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteLibComponent", function () {
      return AutocompleteLibComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteLibModule", function () {
      return AutocompleteLibModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightPipe", function () {
      return HighlightPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete-lib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["searchInput"];
    var _c1 = ["filteredListElement"];
    var _c2 = ["historyListElement"];

    function AutocompleteComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_4_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.remove($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AutocompleteComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AutocompleteComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.heading);
      }
    }

    function AutocompleteComponent_li_10_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c3 = function _c3(a0) {
      return {
        $implicit: a0
      };
    };

    function AutocompleteComponent_li_10_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.select(item_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r14 = ctx_r21.index;
        var item_r13 = ctx_r21.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r15.selectedIdx);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r15.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, item_r13, ctx_r15.toHighlight)));
      }
    }

    function AutocompleteComponent_li_10_div_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function AutocompleteComponent_li_10_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_10_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.select(item_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "highlight");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r14 = ctx_r26.index;
        var item_r13 = ctx_r26.$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r14 === ctx_r16.selectedIdx);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r16.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 4, item_r13, ctx_r16.toHighlight, ctx_r16.searchKeyword)));
      }
    }

    function AutocompleteComponent_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_10_div_1_Template, 3, 9, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_10_div_2_Template, 3, 10, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r13 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isType(item_r13));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isType(item_r13));
      }
    }

    function AutocompleteComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_12_Template_div_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.resetHistoryList($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.historyHeading);
      }
    }

    function AutocompleteComponent_li_15_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function AutocompleteComponent_li_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_1_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.select(item_r29);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_ng_container_1_Template, 1, 0, "ng-container", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r30 = ctx_r37.index;
        var item_r29 = ctx_r37.$implicit;

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r31.selectedIdx);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
      }
    }

    function AutocompleteComponent_li_15_div_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function AutocompleteComponent_li_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_div_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var item_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.select(item_r29);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_2_ng_container_1_Template, 1, 0, "ng-container", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var idx_r30 = ctx_r42.index;
        var item_r29 = ctx_r42.$implicit;

        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("complete-selected", idx_r30 === ctx_r32.selectedIdx);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r32.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, item_r29));
      }
    }

    function AutocompleteComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_li_15_div_1_Template, 2, 6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutocompleteComponent_li_15_div_2_Template, 2, 6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_li_15_Template_div_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var idx_r30 = ctx.index;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.removeHistoryItem(idx_r30, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r29 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.isType(item_r29));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.isType(item_r29));
      }
    }

    function AutocompleteComponent_div_16_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function AutocompleteComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_div_16_ng_container_1_Template, 1, 0, "ng-container", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.notFoundTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r9.notFoundText));
      }
    }

    function AutocompleteComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_div_17_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.handleOverlay();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c4 = function _c4(a0) {
      return {
        "active": a0
      };
    };

    var _c5 = function _c5(a0, a1) {
      return {
        "is-hidden": a0,
        "is-visible": a1
      };
    };

    var AutocompleteLibComponent =
    /*#__PURE__*/
    function () {
      function AutocompleteLibComponent() {
        _classCallCheck(this, AutocompleteLibComponent);
      }
      /**
       * @return {?}
       */


      _createClass(AutocompleteLibComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AutocompleteLibComponent;
    }();

    AutocompleteLibComponent.ɵfac = function AutocompleteLibComponent_Factory(t) {
      return new (t || AutocompleteLibComponent)();
    };

    AutocompleteLibComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutocompleteLibComponent,
      selectors: [["ng-autocomplete-lib"]],
      decls: 2,
      vars: 0,
      template: function AutocompleteLibComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " autocomplete-lib works! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /** @nocollapse */

    AutocompleteLibComponent.ctorParameters = function () {
      return [];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteLibComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-autocomplete-lib',
          template: "\n    <p>\n      autocomplete-lib works!\n    </p>\n  "
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete/autocomplete.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Keyboard events
     * @type {?}
     */


    var isArrowUp =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isArrowUp(keyCode) {
      return keyCode === 38;
    };

    var ɵ0 = isArrowUp;
    /** @type {?} */

    var isArrowDown =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isArrowDown(keyCode) {
      return keyCode === 40;
    };

    var ɵ1 = isArrowDown;
    /** @type {?} */

    var isArrowUpDown =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isArrowUpDown(keyCode) {
      return isArrowUp(keyCode) || isArrowDown(keyCode);
    };

    var ɵ2 = isArrowUpDown;
    /** @type {?} */

    var isEnter =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isEnter(keyCode) {
      return keyCode === 13;
    };

    var ɵ3 = isEnter;
    /** @type {?} */

    var isBackspace =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isBackspace(keyCode) {
      return keyCode === 8;
    };

    var ɵ4 = isBackspace;
    /** @type {?} */

    var isDelete =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isDelete(keyCode) {
      return keyCode === 46;
    };

    var ɵ5 = isDelete;
    /** @type {?} */

    var isESC =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isESC(keyCode) {
      return keyCode === 27;
    };

    var ɵ6 = isESC;
    /** @type {?} */

    var isTab =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isTab(keyCode) {
      return keyCode === 9;
    };

    var ɵ7 = isTab;

    var AutocompleteComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       * @param {?} renderer
       */
      function AutocompleteComponent(elementRef, renderer) {
        _classCallCheck(this, AutocompleteComponent);

        this.renderer = renderer; // input events

        this.query = ''; // search query
        // search query

        this.filteredList = []; // list of items
        // list of items

        this.historyList = []; // list of history items
        // list of history items

        this.isHistoryListVisible = true;
        this.selectedIdx = -1;
        this.toHighlight = '';
        this.notFound = false;
        this.isFocused = false;
        this.isOpen = false;
        this.isScrollToEnd = false;
        this.overlay = false;
        this.manualOpen = undefined;
        this.manualClose = undefined; // @Inputs

        /**
         * Data of items list.
         * It can be array of strings or array of objects.
         */

        this.data = []; // keyword to filter the list

        this.placeHolder = ''; // input placeholder
        // input placeholder

        this.heading = '';
        /**
         * Heading text of history list.
         * If it is null then history heading is hidden.
         */

        this.historyHeading = 'Recently selected';
        this.historyListMaxNumber = 15; // maximum number of items in the history list.
        // maximum number of items in the history list.

        this.notFoundText = 'Not found'; // set custom text when filter returns empty result
        // input disable/enable

        /**
         * The minimum number of characters the user must type before a search is performed.
         */

        this.minQueryLength = 1; // @Output events

        /**
         * Event that is emitted whenever an item from the list is selected.
         */

        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is changed.
         */

        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is focused.
         */

        this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is cleared.
         */

        this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */

        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when scrolled to the end of items.
         */

        this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Propagates new value when model changes
         */

        this.propagateChange =
        /**
        * @return {?}
        */
        function () {};

        this.elementRef = elementRef;
      }
      /**
       * Writes a new value from the form model into the view,
       * Updates model
       * @param {?} value
       * @return {?}
       */


      _createClass(AutocompleteComponent, [{
        key: "writeValue",
        value: function writeValue(value) {
          this.query = value;
        }
        /**
         * Registers a handler that is called when something in the view has changed
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.propagateChange = fn;
        }
        /**
         * Registers a handler specifically for when a control receives a touch event
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
        /**
         * Event that is called when the value of an input element is changed
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange(event) {
          this.propagateChange(event.target.value);
        }
        /**
         * Event that is called when the control status changes to or from DISABLED
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setInitialValue(this.initialValue);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initEventStream();
          this.handleScroll();
        }
        /**
         * Set initial value
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setInitialValue",
        value: function setInitialValue(value) {
          if (this.initialValue) {
            this.select(value);
          }
        }
        /**
         * Update search results
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes && changes.data && Array.isArray(changes.data.currentValue)) {
            this.handleItemsChange();

            if (!changes.data.firstChange && this.isFocused) {
              this.handleOpen();
            }
          }
        }
        /**
         * Items change
         * @return {?}
         */

      }, {
        key: "handleItemsChange",
        value: function handleItemsChange() {
          this.isScrollToEnd = false;

          if (!this.isOpen) {
            return;
          }

          this.filteredList = this.data;
          this.notFound = !this.filteredList || this.filteredList.length === 0;
        }
        /**
         * Filter data
         * @return {?}
         */

      }, {
        key: "filterList",
        value: function filterList() {
          var _this51 = this;

          this.selectedIdx = -1;
          this.initSearchHistory();

          if (this.query != null && this.data) {
            this.toHighlight = this.query;
            this.filteredList = this.data.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (typeof item === 'string') {
                // string logic, check equality of strings
                return item.toLowerCase().indexOf(_this51.query.toLowerCase()) > -1;
              } else if (typeof item === 'object' && item.constructor === Object) {
                // object logic, check property equality
                return item[_this51.searchKeyword].toLowerCase().indexOf(_this51.query.toLowerCase()) > -1;
              }
            });
          } else {
            this.notFound = false;
          }
        }
        /**
         * Check type of item in the list.
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "isType",
        value: function isType(item) {
          return typeof item === 'string';
        }
        /**
         * Select item in the list.
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(item) {
          var _this52 = this;

          this.query = !this.isType(item) ? item[this.searchKeyword] : item;
          this.isOpen = true;
          this.overlay = false;
          this.selected.emit(item);
          this.propagateChange(item);

          if (this.initialValue) {
            // check if history already exists in localStorage and then update

            /** @type {?} */
            var history = window.localStorage.getItem("".concat(this.historyIdentifier));

            if (history) {
              /** @type {?} */
              var existingHistory = JSON.parse(localStorage["".concat(this.historyIdentifier)]);
              if (!(existingHistory instanceof Array)) existingHistory = []; // check if selected item exists in existingHistory

              if (!existingHistory.some(
              /**
              * @param {?} existingItem
              * @return {?}
              */
              function (existingItem) {
                return !_this52.isType(existingItem) ? existingItem[_this52.searchKeyword] == item[_this52.searchKeyword] : existingItem == item;
              })) {
                existingHistory.unshift(item);
                localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory)); // check if items don't exceed max allowed number

                if (existingHistory.length >= this.historyListMaxNumber) {
                  existingHistory.splice(existingHistory.length - 1, 1);
                  localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory));
                }
              } else {
                // if selected item exists in existingHistory swap to top in array
                if (!this.isType(item)) {
                  // object logic

                  /** @type {?} */
                  var copiedExistingHistory = existingHistory.slice(); // copy original existingHistory array

                  /** @type {?} */

                  var selectedIndex = copiedExistingHistory.map(
                  /**
                  * @param {?} el
                  * @return {?}
                  */
                  function (el) {
                    return el[_this52.searchKeyword];
                  }).indexOf(item[this.searchKeyword]);
                  copiedExistingHistory.splice(selectedIndex, 1);
                  copiedExistingHistory.splice(0, 0, item);
                  localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(copiedExistingHistory));
                } else {
                  // string logic

                  /** @type {?} */
                  var _copiedExistingHistory = existingHistory.slice();

                  _copiedExistingHistory.splice(_copiedExistingHistory.indexOf(item), 1);

                  _copiedExistingHistory.splice(0, 0, item);

                  localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(_copiedExistingHistory));
                }
              }
            } else {
              this.saveHistory(item);
            }
          } else {
            this.saveHistory(item);
          }

          this.handleClose();
        }
        /**
         * Document click
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "handleClick",
        value: function handleClick(e) {
          /** @type {?} */
          var clickedComponent = e.target;
          /** @type {?} */

          var inside = false;

          do {
            if (clickedComponent === this.elementRef.nativeElement) {
              inside = true;

              if (this.filteredList.length) {
                this.handleOpen();
              }
            }

            clickedComponent = clickedComponent.parentNode;
          } while (clickedComponent);

          if (!inside) {
            this.handleClose();
          }
        }
        /**
         * Handle body overlay
         * @return {?}
         */

      }, {
        key: "handleOverlay",
        value: function handleOverlay() {
          this.overlay = false;
        }
        /**
         * Scroll items
         * @return {?}
         */

      }, {
        key: "handleScroll",
        value: function handleScroll() {
          var _this53 = this;

          this.renderer.listen(this.filteredListElement.nativeElement, 'scroll',
          /**
          * @return {?}
          */
          function () {
            _this53.scrollToEnd();
          });
        }
        /**
         * Define panel state
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "setPanelState",
        value: function setPanelState(event) {
          if (event) {
            event.stopPropagation();
          } // If controls are untouched


          if (typeof this.manualOpen === 'undefined' && typeof this.manualClose === 'undefined') {
            this.isOpen = false;
            this.handleOpen();
          } // If one of the controls is untouched and other is deactivated


          if (typeof this.manualOpen === 'undefined' && this.manualClose === false || typeof this.manualClose === 'undefined' && this.manualOpen === false) {
            this.isOpen = false;
            this.handleOpen();
          } // if controls are touched but both are deactivated


          if (this.manualOpen === false && this.manualClose === false) {
            this.isOpen = false;
            this.handleOpen();
          } // if open control is touched and activated


          if (this.manualOpen) {
            this.isOpen = false;
            this.handleOpen();
            this.manualOpen = false;
          } // if close control is touched and activated


          if (this.manualClose) {
            this.isOpen = true;
            this.handleClose();
            this.manualClose = false;
          }
        }
        /**
         * Manual controls
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this.manualOpen = true;
          this.isOpen = false;
          this.handleOpen();
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.manualClose = true;
          this.isOpen = true;
          this.handleClose();
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.handleFocus(event);
        }
        /**
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this.remove(event);
        }
        /**
         * Remove search query
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(e) {
          e.stopPropagation();
          this.query = '';
          this.inputCleared.emit();
          this.propagateChange(this.query);
          this.setPanelState(e);
        }
        /**
         * Initialize historyList search
         * @return {?}
         */

      }, {
        key: "initSearchHistory",
        value: function initSearchHistory() {
          this.isHistoryListVisible = false;

          if (this.historyIdentifier && !this.query) {
            /** @type {?} */
            var history = window.localStorage.getItem("".concat(this.historyIdentifier));

            if (history) {
              this.isHistoryListVisible = true;
              this.filteredList = [];
              this.historyList = history ? JSON.parse(history) : [];
            } else {
              this.isHistoryListVisible = false;
            }
          } else {
            this.isHistoryListVisible = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleOpen",
        value: function handleOpen() {
          if (this.isOpen || this.isOpen && !this.isLoading) {
            return;
          } // If data exists


          if (this.data && this.data.length) {
            this.isOpen = true;
            this.overlay = true;
            this.filterList();
            this.opened.emit();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleClose",
        value: function handleClose() {
          if (!this.isOpen) {
            this.isFocused = false;
            return;
          }

          this.isOpen = false;
          this.overlay = false;
          this.filteredList = [];
          this.selectedIdx = -1;
          this.notFound = false;
          this.isHistoryListVisible = false;
          this.isFocused = false;
          this.closed.emit();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handleFocus",
        value: function handleFocus(e) {
          this.searchInput.nativeElement.focus();

          if (this.isFocused) {
            return;
          }

          this.inputFocused.emit(e); // if data exists then open

          if (this.data && this.data.length) {
            this.setPanelState(event);
          }

          this.isFocused = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollToEnd",
        value: function scrollToEnd() {
          if (this.isScrollToEnd) {
            return;
          }
          /** @type {?} */


          var scrollTop = this.filteredListElement.nativeElement.scrollTop;
          /** @type {?} */

          var scrollHeight = this.filteredListElement.nativeElement.scrollHeight;
          /** @type {?} */

          var elementHeight = this.filteredListElement.nativeElement.clientHeight;
          /** @type {?} */

          var atBottom = scrollHeight === scrollTop + elementHeight;

          if (atBottom) {
            this.scrolledToEnd.emit();
            this.isScrollToEnd = true;
          }
        }
        /**
         * Initialize keyboard events
         * @return {?}
         */

      }, {
        key: "initEventStream",
        value: function initEventStream() {
          this.inputKeyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e;
          }));
          this.inputKeyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e;
          }));
          this.listenEventStream();
        }
        /**
         * Listen keyboard events
         * @return {?}
         */

      }, {
        key: "listenEventStream",
        value: function listenEventStream() {
          var _this54 = this;

          // key up event
          this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return !isArrowUpDown(e.keyCode) && !isEnter(e.keyCode) && !isESC(e.keyCode) && !isTab(e.keyCode);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.debounceTime)).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this54.onKeyUp(e);
          }); // cursor up & down

          this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isArrowUpDown(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            e.preventDefault();

            _this54.onFocusItem(e);
          }); // enter keyup

          this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isEnter(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {//this.onHandleEnter();
          }); // enter keydown

          this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isEnter(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this54.onHandleEnter();
          }); // ESC

          this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isESC(e.keyCode);
          }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100))).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this54.onEsc();
          }); // TAB

          this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isTab(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this54.onTab();
          }); // delete

          this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isBackspace(e.keyCode) || isDelete(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this54.onDelete();
          });
        }
        /**
         * on keyup == when input changed
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "onKeyUp",
        value: function onKeyUp(e) {
          this.notFound = false; // search results are unknown while typing
          // if input is empty

          if (!this.query) {
            this.notFound = false;
            this.inputChanged.emit(e.target.value);
            this.inputCleared.emit(); //this.filterList();

            this.setPanelState(e);
          } // note that '' can be a valid query


          if (!this.query && this.query !== '') {
            return;
          } // if query >= to minQueryLength


          if (this.query.length >= this.minQueryLength) {
            this.inputChanged.emit(e.target.value);
            this.filterList(); // If no results found

            if (!this.filteredList.length && !this.isLoading) {
              this.notFoundText ? this.notFound = true : this.notFound = false;
            }
          }
        }
        /**
         * Keyboard arrow top and arrow bottom
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "onFocusItem",
        value: function onFocusItem(e) {
          // move arrow up and down on filteredList or historyList
          if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList

            /** @type {?} */
            var totalNumItem = this.filteredList.length;

            if (e.key === 'ArrowDown') {
              /** @type {?} */
              var sum = this.selectedIdx;
              sum = this.selectedIdx === null ? 0 : sum + 1;
              this.selectedIdx = (totalNumItem + sum) % totalNumItem;
              this.scrollToFocusedItem(this.selectedIdx);
            } else if (e.key === 'ArrowUp') {
              if (this.selectedIdx == -1) {
                this.selectedIdx = 0;
              }

              this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
              this.scrollToFocusedItem(this.selectedIdx);
            }
          } else {
            // historyList

            /** @type {?} */
            var _totalNumItem = this.historyList.length;

            if (e.key === 'ArrowDown') {
              /** @type {?} */
              var _sum = this.selectedIdx;
              _sum = this.selectedIdx === null ? 0 : _sum + 1;
              this.selectedIdx = (_totalNumItem + _sum) % _totalNumItem;
              this.scrollToFocusedItem(this.selectedIdx);
            } else if (e.key === 'ArrowUp') {
              if (this.selectedIdx == -1) {
                this.selectedIdx = 0;
              }

              this.selectedIdx = (_totalNumItem + this.selectedIdx - 1) % _totalNumItem;
              this.scrollToFocusedItem(this.selectedIdx);
            }
          }
        }
        /**
         * Scroll to focused item
         * * \@param index
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "scrollToFocusedItem",
        value: function scrollToFocusedItem(index) {
          /** @type {?} */
          var listElement = null; // Define list element

          if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList element
            listElement = this.filteredListElement.nativeElement;
          } else {
            // historyList element
            listElement = this.historyListElement.nativeElement;
          }
          /** @type {?} */


          var items = Array.prototype.slice.call(listElement.childNodes).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            if (node.nodeType === 1) {
              // if node is element
              return node.className.includes('item');
            } else {
              return false;
            }
          });

          if (!items.length) {
            return;
          }
          /** @type {?} */


          var listHeight = listElement.offsetHeight;
          /** @type {?} */

          var itemHeight = items[index].offsetHeight;
          /** @type {?} */

          var visibleTop = listElement.scrollTop;
          /** @type {?} */

          var visibleBottom = listElement.scrollTop + listHeight - itemHeight;
          /** @type {?} */

          var targetPosition = items[index].offsetTop;

          if (targetPosition < visibleTop) {
            listElement.scrollTop = targetPosition;
          }

          if (targetPosition > visibleBottom) {
            listElement.scrollTop = targetPosition - listHeight + itemHeight;
          }
        }
        /**
         * Select item on enter click
         * @return {?}
         */

      }, {
        key: "onHandleEnter",
        value: function onHandleEnter() {
          // click enter to choose item from filteredList or historyList
          if (this.selectedIdx > -1) {
            if (!this.historyList.length || !this.isHistoryListVisible) {
              // filteredList
              this.query = !this.isType(this.filteredList[this.selectedIdx]) ? this.filteredList[this.selectedIdx][this.searchKeyword] : this.filteredList[this.selectedIdx];
              this.saveHistory(this.filteredList[this.selectedIdx]);
              this.select(this.filteredList[this.selectedIdx]);
            } else {
              // historyList
              this.query = !this.isType(this.historyList[this.selectedIdx]) ? this.historyList[this.selectedIdx][this.searchKeyword] : this.historyList[this.selectedIdx];
              this.saveHistory(this.historyList[this.selectedIdx]);
              this.select(this.historyList[this.selectedIdx]);
            }
          }

          this.isHistoryListVisible = false;
          this.handleClose();
        }
        /**
         * Esc click
         * @return {?}
         */

      }, {
        key: "onEsc",
        value: function onEsc() {
          this.searchInput.nativeElement.blur();
          this.handleClose();
        }
        /**
         * Tab click
         * @return {?}
         */

      }, {
        key: "onTab",
        value: function onTab() {
          this.searchInput.nativeElement.blur();
          this.handleClose();
        }
        /**
         * Delete click
         * @return {?}
         */

      }, {
        key: "onDelete",
        value: function onDelete() {
          // panel is open on delete
          this.isOpen = true;
        }
        /**
         * Select item to save in localStorage
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "saveHistory",
        value: function saveHistory(selected) {
          var _this55 = this;

          if (this.historyIdentifier) {
            // check if selected item exists in historyList
            if (!this.historyList.some(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !_this55.isType(item) ? item[_this55.searchKeyword] == selected[_this55.searchKeyword] : item == selected;
            })) {
              this.saveHistoryToLocalStorage([selected].concat(_toConsumableArray(this.historyList))); // check if items don't exceed max allowed number

              if (this.historyList.length >= this.historyListMaxNumber) {
                this.historyList.splice(this.historyList.length - 1, 1);
                this.saveHistoryToLocalStorage([selected].concat(_toConsumableArray(this.historyList)));
              }
            } else {
              // if selected item exists in historyList swap to top in array
              if (!this.isType(selected)) {
                // object logic

                /** @type {?} */
                var copiedHistoryList = this.historyList.slice(); // copy original historyList array

                /** @type {?} */

                var selectedIndex = copiedHistoryList.map(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  return item[_this55.searchKeyword];
                }).indexOf(selected[this.searchKeyword]);
                copiedHistoryList.splice(selectedIndex, 1);
                copiedHistoryList.splice(0, 0, selected);
                this.saveHistoryToLocalStorage(_toConsumableArray(copiedHistoryList));
              } else {
                // string logic

                /** @type {?} */
                var _copiedHistoryList = this.historyList.slice();

                _copiedHistoryList.splice(this.historyList.indexOf(selected), 1);

                _copiedHistoryList.splice(0, 0, selected);

                this.saveHistoryToLocalStorage(_toConsumableArray(_copiedHistoryList));
              }
            }
          }
        }
        /**
         * Save item in localStorage
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "saveHistoryToLocalStorage",
        value: function saveHistoryToLocalStorage(selected) {
          window.localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(selected));
        }
        /**
         * Remove item from localStorage
         * @param {?} index
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "removeHistoryItem",
        value: function removeHistoryItem(index, e) {
          e.stopPropagation();
          this.historyList = this.historyList.filter(
          /**
          * @param {?} v
          * @param {?} i
          * @return {?}
          */
          function (v, i) {
            return i !== index;
          });
          this.saveHistoryToLocalStorage(this.historyList);

          if (this.historyList.length == 0) {
            window.localStorage.removeItem("".concat(this.historyIdentifier));
            this.filterList();
          }
        }
        /**
         * Reset localStorage
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "resetHistoryList",
        value: function resetHistoryList(e) {
          e.stopPropagation();
          this.historyList = [];
          window.localStorage.removeItem("".concat(this.historyIdentifier));
          this.filterList();
        }
      }]);

      return AutocompleteComponent;
    }();

    AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
      return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutocompleteComponent,
      selectors: [["ng-autocomplete"]],
      contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTemplate = _t.first);
        }
      },
      viewQuery: function AutocompleteComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.filteredListElement = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.historyListElement = _t.first);
        }
      },
      hostAttrs: [1, "ng-autocomplete"],
      hostBindings: function AutocompleteComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        data: "data",
        placeHolder: "placeHolder",
        heading: "heading",
        historyHeading: "historyHeading",
        historyListMaxNumber: "historyListMaxNumber",
        notFoundText: "notFoundText",
        minQueryLength: "minQueryLength",
        disabled: "disabled",
        searchKeyword: "searchKeyword",
        initialValue: "initialValue",
        historyIdentifier: "historyIdentifier",
        isLoading: "isLoading",
        debounceTime: "debounceTime",
        itemTemplate: "itemTemplate",
        notFoundTemplate: "notFoundTemplate"
      },
      outputs: {
        selected: "selected",
        inputChanged: "inputChanged",
        inputFocused: "inputFocused",
        inputCleared: "inputCleared",
        opened: "opened",
        closed: "closed",
        scrolledToEnd: "scrolledToEnd"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return AutocompleteComponent;
        }),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 18,
      vars: 22,
      consts: [[1, "autocomplete-container", 3, "ngClass"], [1, "input-container"], ["type", "text", 3, "placeholder", "ngModel", "disabled", "ngModelChange", "input", "focus"], ["searchInput", ""], ["class", "x", 3, "click", 4, "ngIf"], ["class", "sk-fading-circle", 4, "ngIf"], [1, "suggestions-container", 3, "ngClass"], ["class", "heading", 4, "ngIf"], ["filteredListElement", ""], ["class", "item", 4, "ngFor", "ngForOf"], ["historyListElement", ""], ["class", "not-found", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], [1, "x", 3, "click"], [1, "material-icons"], [1, "sk-fading-circle"], [1, "sk-circle1", "sk-circle"], [1, "sk-circle2", "sk-circle"], [1, "sk-circle3", "sk-circle"], [1, "sk-circle4", "sk-circle"], [1, "sk-circle5", "sk-circle"], [1, "sk-circle6", "sk-circle"], [1, "sk-circle7", "sk-circle"], [1, "sk-circle8", "sk-circle"], [1, "sk-circle9", "sk-circle"], [1, "sk-circle10", "sk-circle"], [1, "sk-circle11", "sk-circle"], [1, "sk-circle12", "sk-circle"], [1, "heading"], [1, "text"], [1, "item"], [3, "complete-selected", "click", 4, "ngIf"], [3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "not-found"], [1, "overlay", 3, "click"]],
      template: function AutocompleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutocompleteComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.query = $event;
          })("input", function AutocompleteComponent_Template_input_input_2_listener($event) {
            return ctx.onChange($event);
          })("focus", function AutocompleteComponent_Template_input_focus_2_listener($event) {
            return ctx.handleFocus($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AutocompleteComponent_div_4_Template, 3, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteComponent_div_5_Template, 13, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AutocompleteComponent_div_7_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", null, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AutocompleteComponent_li_10_Template, 3, 2, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AutocompleteComponent_div_12_Template, 6, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AutocompleteComponent_li_15_Template, 6, 2, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AutocompleteComponent_div_16_Template, 2, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AutocompleteComponent_div_17_Template, 1, 0, "div", 12);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c4, ctx.isOpen));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.placeHolder);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query)("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.query && !ctx.isLoading && !ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c5, ctx.isHistoryListVisible, !ctx.isHistoryListVisible));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredList.length > 0 && ctx.heading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c5, !ctx.isHistoryListVisible, ctx.isHistoryListVisible));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.historyList.length > 0 && ctx.historyHeading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.historyList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading ? !ctx.isLoading && ctx.notFound : ctx.notFound);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.overlay);
        }
      },
      directives: function directives() {
        return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]];
      },
      pipes: function pipes() {
        return [HighlightPipe];
      },
      styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.overlay{position:absolute;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"],
      encapsulation: 2
    });
    /** @nocollapse */

    AutocompleteComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    AutocompleteComponent.propDecorators = {
      searchInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['searchInput']
      }],
      filteredListElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['filteredListElement']
      }],
      historyListElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['historyListElement']
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchKeyword: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeHolder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      heading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initialValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      historyIdentifier: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      historyHeading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      historyListMaxNumber: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      notFoundText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      debounceTime: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minQueryLength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      inputChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      inputFocused: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      inputCleared: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scrolledToEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      itemTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      notFoundTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ng-autocomplete',
          template: "<div class=\"autocomplete-container\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput type=\"text\" placeholder={{placeHolder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           [disabled]=\"disabled\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isType(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isType(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isType(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isType(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return AutocompleteComponent;
            }),
            multi: true
          }],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          host: {
            '(document:click)': 'handleClick($event)',
            'class': 'ng-autocomplete'
          },
          styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.overlay{position:absolute;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeHolder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        heading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        historyHeading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        historyListMaxNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notFoundText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        minQueryLength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputFocused: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        inputCleared: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        closed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrolledToEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchInput']
        }],
        filteredListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['filteredListElement']
        }],
        historyListElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['historyListElement']
        }],
        searchKeyword: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        historyIdentifier: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isLoading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        debounceTime: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        notFoundTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        customTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete/highlight.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HighlightPipe =
    /*#__PURE__*/
    function () {
      function HighlightPipe() {
        _classCallCheck(this, HighlightPipe);
      }

      _createClass(HighlightPipe, [{
        key: "transform",

        /**
         * @param {?} text
         * @param {?} search
         * @param {?=} searchKeyword
         * @return {?}
         */
        value: function transform(text, search, searchKeyword) {
          /** @type {?} */
          var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
          pattern = pattern.split(' ').filter(
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            return t.length > 0;
          }).join('|');
          /** @type {?} */

          var regex = new RegExp(pattern, 'gi');

          if (!search) {
            return text;
          }

          if (searchKeyword) {
            /** @type {?} */
            var name = text[searchKeyword].replace(regex,
            /**
            * @param {?} match
            * @return {?}
            */
            function (match) {
              return "<b>".concat(match, "</b>");
            }); // copy original object

            /** @type {?} */

            var text2 = Object.assign({}, text); // set bold value into searchKeyword of copied object

            text2[searchKeyword] = name;
            return text2;
          } else {
            return search ? text.replace(regex,
            /**
            * @param {?} match
            * @return {?}
            */
            function (match) {
              return "<b>".concat(match, "</b>");
            }) : text;
          }
        }
      }]);

      return HighlightPipe;
    }();

    HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
      return new (t || HighlightPipe)();
    };

    HighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "highlight",
      type: HighlightPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'highlight'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete-lib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AutocompleteLibModule = function AutocompleteLibModule() {
      _classCallCheck(this, AutocompleteLibModule);
    };

    AutocompleteLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AutocompleteLibModule
    });
    AutocompleteLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AutocompleteLibModule_Factory(t) {
        return new (t || AutocompleteLibModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutocompleteLibModule, {
        declarations: function declarations() {
          return [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]];
        },
        exports: function exports() {
          return [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteLibModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          declarations: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe],
          exports: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-ng-autocomplete.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-ng-autocomplete.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js ***!
    \********************************************************************************/

  /*! exports provided: untilDestroyed */

  /***/
  function node_modulesNgxTakeUntilDestroyFesm2015NgxTakeUntilDestroyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "untilDestroyed", function () {
      return untilDestroyed;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function isFunction(value) {
      return typeof value === 'function';
    }
    /** @type {?} */


    var untilDestroyed = function untilDestroyed(componentInstance) {
      var destroyMethodName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ngOnDestroy';
      return function (source) {
        /** @type {?} */
        var originalDestroy = componentInstance[destroyMethodName];

        if (isFunction(originalDestroy) === false) {
          throw new Error("".concat(componentInstance.constructor.name, " is using untilDestroyed but doesn't implement ").concat(destroyMethodName));
        }

        if (!componentInstance['__takeUntilDestroy']) {
          componentInstance['__takeUntilDestroy'] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();

          componentInstance[destroyMethodName] = function () {
            isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
            componentInstance['__takeUntilDestroy'].next(true);
            componentInstance['__takeUntilDestroy'].complete();
          };
        }

        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(componentInstance['__takeUntilDestroy']));
      };
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRha2UtdW50aWwtZGVzdHJveS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LXRha2UtdW50aWwtZGVzdHJveS9zcmMvdGFrZS11bnRpbC1kZXN0cm95LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5leHBvcnQgY29uc3QgdW50aWxEZXN0cm95ZWQgPSAoXG4gIGNvbXBvbmVudEluc3RhbmNlLFxuICBkZXN0cm95TWV0aG9kTmFtZSA9ICduZ09uRGVzdHJveSdcbikgPT4gPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT4ge1xuICBjb25zdCBvcmlnaW5hbERlc3Ryb3kgPSBjb21wb25lbnRJbnN0YW5jZVtkZXN0cm95TWV0aG9kTmFtZV07XG4gIGlmIChpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYCR7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgIH0gaXMgdXNpbmcgdW50aWxEZXN0cm95ZWQgYnV0IGRvZXNuJ3QgaW1wbGVtZW50ICR7ZGVzdHJveU1ldGhvZE5hbWV9YFxuICAgICk7XG4gIH1cbiAgaWYgKCFjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10pIHtcbiAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgY29tcG9uZW50SW5zdGFuY2VbZGVzdHJveU1ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICBpc0Z1bmN0aW9uKG9yaWdpbmFsRGVzdHJveSkgJiYgb3JpZ2luYWxEZXN0cm95LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10ubmV4dCh0cnVlKTtcbiAgICAgIGNvbXBvbmVudEluc3RhbmNlWydfX3Rha2VVbnRpbERlc3Ryb3knXS5jb21wbGV0ZSgpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIHNvdXJjZS5waXBlKHRha2VVbnRpbDxUPihjb21wb25lbnRJbnN0YW5jZVsnX190YWtlVW50aWxEZXN0cm95J10pKTtcbn07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBR0Esb0JBQW9CLEtBQUs7SUFDdkIsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLENBQUM7Q0FDcEM7O0FBRUQsTUFBYSxjQUFjLEdBQUcsQ0FDNUIsaUJBQWlCLEVBQ2pCLGlCQUFpQixHQUFHLGFBQWEsS0FDOUIsQ0FBSSxNQUFxQjs7SUFDNUIsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3RCxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDekMsTUFBTSxJQUFJLEtBQUssQ0FDYixHQUNFLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUNoQyxrREFBa0QsaUJBQWlCLEVBQUUsQ0FDdEUsQ0FBQztLQUNIO0lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLEVBQUU7UUFDNUMsaUJBQWlCLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRXhELGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLEdBQUc7WUFDckMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEQsQ0FBQztLQUNIO0lBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBSSxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

    /***/

  },

  /***/
  "./src/app/modules/public-pages/contact/contact.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/public-pages/contact/contact.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppModulesPublicPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 63,
      vars: 0,
      consts: [[1, "contact-area"], [1, "container"], [1, "contact-max"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "contact-card"], [1, "flaticon-position"], [1, "flaticon-email"], ["href", "mailto:info@zoom-info.net"], ["href", "mailto:leopold.moffon@zoom-info.net"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], [1, "flaticon-telephone"], ["href", "tel:+(237) 650 76 69 69"], [1, "contact-map"], [1, "container-fluid", "m-0", "p-0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735257.9205168115!2d-75.33502765384733!3d40.30050562979537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a07dcfd9d0ce20e!2sUs%20Rt%2040%20%40%20Governors%20Sq%20Plaza%202!5e0!3m2!1sen!2sbd!4v1596709319151!5m2!1sen!2sbd"], [1, "contact-wrap"], [1, "contact-form"], ["id", "contactForm"], [1, "col-lg-6", "col-sm-6"], [1, "form-group"], [1, "bx", "bx-user"], ["type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Your Name*", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "E-mail*", 1, "form-control"], [1, "bx", "bx-phone"], ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Your Phone", 1, "form-control"], [1, "bx", "bx-file"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Your Subject", 1, "form-control"], [1, "col-lg-12", "col-md-12"], [1, "bx", "bx-envelope"], ["name", "message", "id", "message", "cols", "30", "rows", "8", "required", "", "placeholder", "Your Message", 1, "form-control"], ["type", "submit", 1, "default-btn", "border-radius"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "36, Rue Sylvanie,Akwa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "B.P 4462 Douala, Cameroun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "info@zoom-info.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "leopold.moffon@zoom-info.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "+(237) 650 76 69 69");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "+(237) 650 76 69 69");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "iframe", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "ENVOYER UN MESSAGE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Nous contacter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "textarea", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Send Message ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljLXBhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/details-page/details-page.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/public-pages/details-page/details-page.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DetailsPageComponent */

  /***/
  function srcAppModulesPublicPagesDetailsPageDetailsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function () {
      return DetailsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DetailsPageComponent =
    /*#__PURE__*/
    function () {
      function DetailsPageComponent() {
        _classCallCheck(this, DetailsPageComponent);
      }

      _createClass(DetailsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetailsPageComponent;
    }();

    DetailsPageComponent.ɵfac = function DetailsPageComponent_Factory(t) {
      return new (t || DetailsPageComponent)();
    };

    DetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetailsPageComponent,
      selectors: [["app-details-page"]],
      decls: 218,
      vars: 0,
      consts: [[1, "blog-details-area", "pt-45", "pb-45"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "blog-article"], [1, "article-content", 2, "margin-bottom", "15px"], [1, "article-img"], ["src", "assets/img/banner-home/plus-infos.jpg", "alt", "Images"], [2, "margin-top", "15px"], [1, "content-text"], [1, "listing-widget", "gallery-slider"], [1, "title"], [1, "gallery-slider-area", "owl-carousel", "owl-theme"], [1, "Gallery-item"], ["src", "assets/img/place-list/listing-details11.jpg", "alt", "Images"], ["src", "assets/img/place-list/listing-details22.jpg", "alt", "Images"], ["src", "assets/img/place-list/listing-details33.jpg", "alt", "Images"], ["src", "assets/img/place-list/listing-details44.jpg", "alt", "Images"], [1, "listing-widget", "listing-map"], ["src", "https://www.youtube.com/embed/tgbNymZ7vqY"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d735257.9205168115!2d-75.33502765384733!3d40.30050562979537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a07dcfd9d0ce20e!2sUs%20Rt%2040%20%40%20Governors%20Sq%20Plaza%202!5e0!3m2!1sen!2sbd!4v1596709319151!5m2!1sen!2sbd"], [1, "row", 2, "padding", "30px"], [1, "col-lg-12"], [1, "faq-item"], [1, "col-lg-4"], [1, "blog-widget-left"], [1, "blog-widget"], [1, "widget_categories", "custom-contact-details-view"], [1, "flaticon-place"], [1, "flaticon-telephone", 2, "color", "green"], [1, "flaticon-telephone"], [1, "flaticon-email-1"], [1, "flaticon-worldwide"], [1, "custom-contact-details-view-socialnetwork"], [1, "content"], [1, "social-link"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook", 2, "color", "white"], [1, "bx", "bxl-twitter", 2, "color", "white"], [1, "bx", "bxl-instagram", 2, "color", "white"], [1, "bx", "bxl-pinterest-alt", 2, "color", "white"], [1, "bx", "bxl-youtube", 2, "color", "white"], [1, "blog-widget-tag"], ["routerLink", "/"], [1, "widget-popular-post"], [1, "item"], ["routerLink", "/blog-details", 1, "thumb"], ["role", "img", 1, "full-image", "cover", "bg3"], [1, "info"], [1, "listing-widget-side"], [1, "listing-widget-list"], [2, "border-top", "0px solid #ededed"], [2, "border-top", "0px solid #ededed", "border-bottom", "0px solid #ededed"]],
      template: function DetailsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Description de l'activit\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore plicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntemo enim ipsam vo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore plicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit autquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Video");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "iframe", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Map Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "iframe", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "FAQs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Question 1: .............");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "A:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat, metus ut tincidunt vestibulum,nunc tellus fringilla lorem, ut auctor metus felis vel est. Mauris tristique leo nulla, id blandit sem malesuada ac. Orci varius natoque penatibus et magnis dis parturient montes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Question 2: .............");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "A:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat, metus ut tincidunt vestibulum,nunc tellus fringilla lorem, ut auctor metus felis vel est. Mauris tristique leo nulla, id blandit sem malesuada ac. Orci varius natoque penatibus et magnis dis parturient montes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Question 3: .............");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "A:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat, metus ut tincidunt vestibulum,nunc tellus fringilla lorem, ut auctor metus felis vel est. Mauris tristique leo nulla, id blandit sem malesuada ac. Orci varius natoque penatibus et magnis dis parturient montes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Question 4: .............");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "A:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat, metus ut tincidunt vestibulum,nunc tellus fringilla lorem, ut auctor metus felis vel est. Mauris tristique leo nulla, id blandit sem malesuada ac. Orci varius natoque penatibus et magnis dis parturient montes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Question 5: .............");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "A:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin placerat, metus ut tincidunt vestibulum,nunc tellus fringilla lorem, ut auctor metus felis vel est. Mauris tristique leo nulla, id blandit sem malesuada ac. Orci varius natoque penatibus et magnis dis parturient montes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Addresse : 36, Rue Sylvanie,Akwa B.P 4462 Douala, Cameroun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Sim Zoom : +237 652 02 12 80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Telephone : +237 652 02 12 80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Whatapp : +237 652 02 12 80");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Email : info@zoom-info.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Website : www.zoom-info.et");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Reseaux-Socio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " rejoiniez nous sur nos pages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Produits & Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "ul", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "#Sercive1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "#Sercive2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "#Produit1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "#Sercive3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "#Produit2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "#Produit3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Personnes clefs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "article", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Leopold Moffon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Directeur g\xE9n\xE9ral CISM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "article", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Andre Mouloken");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Directeur commercial CISM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "article", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "span", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Serge Takam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Direceur des operations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h3", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Jours Ouvrables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "ul", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Lundi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "9:00 AM - 8:00 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Mardi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "9:00 AM - 8:00 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Mercredi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "9:00 AM - 8:00 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Jeudi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "9:00 AM - 8:00 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Vendredi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "9:00 AM - 8:00 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "li", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Samedi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "9:00 AM - 12:00 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Dimanche ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Ferme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".custom-contact-details-view[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  color: var(--titleColor);\n  position: relative;\n  font-weight: 500;\n}\n.custom-contact-details-view[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px;\n  font-size: 14px;\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%] {\n  background-color: var(--whiteColor);\n  text-align: center;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  background-color: #fff6f2;\n  padding: 15px 30px;\n  border: 1px dashed var(--mainColor);\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--titleColor);\n  font-weight: 500;\n  margin-top: 30px;\n  margin-bottom: 7px;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--mainColor);\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 15px;\n  text-align: center;\n  margin-bottom: 5px;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  margin: 20px 0 0 0;\n  padding: 0;\n  list-style: 0;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 0px solid #ededed;\n  display: inline-block;\n  margin-right: 5px;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  width: 35px;\n  height: 35px;\n  line-height: 37px;\n  text-align: center;\n  color: var(--whiteColor);\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%] {\n  background-color: #3b5998;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--mainColor);\n  -webkit-animation: tada 1s linear;\n          animation: tada 1s linear;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  background-color: #55acee;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--mainColor);\n  -webkit-animation: tada 1s linear;\n          animation: tada 1s linear;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\n  background-color: #3f729b;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--mainColor);\n  -webkit-animation: tada 1s linear;\n          animation: tada 1s linear;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--mainColor);\n  -webkit-animation: tada 1s linear;\n          animation: tada 1s linear;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\n  background-color: #c80000;\n}\n.custom-contact-details-view-socialnetwork[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--mainColor);\n  -webkit-animation: tada 1s linear;\n          animation: tada 1s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvZGV0YWlscy1wYWdlL0M6XFxVc2Vyc1xcYXNlY25hXFxEZXNrdG9wXFxaT09NXFxab29tLVdlYkNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xccHVibGljLXBhZ2VzXFxkZXRhaWxzLXBhZ2VcXGRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvZGV0YWlscy1wYWdlL2RldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURFSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0RSO0FES0E7RUFHSSxtQ0FBQTtFQUVBLGtCQUFBO0FDTEo7QURPSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtBQ0xSO0FET0k7RUFFSSxvQkFBQTtBQ05SO0FET1E7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNMWjtBRE9RO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0FDTFo7QURTSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQUjtBRFNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ1BSO0FEUVE7RUFDSSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNOWjtBRE9ZO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0xoQjtBRE9ZO0VBQ0kseUJBQUE7QUNMaEI7QURNZ0I7RUFDSSxrQ0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNKcEI7QURPWTtFQUNJLHlCQUFBO0FDTGhCO0FETWdCO0VBQ0ksa0NBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDSnBCO0FET1k7RUFDSSx5QkFBQTtBQ0xoQjtBRE1nQjtFQUNJLGtDQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ0pwQjtBRE9ZO0VBQ0kseUJBQUE7QUNMaEI7QURNZ0I7RUFDSSxrQ0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNKcEI7QURPWTtFQUNJLHlCQUFBO0FDTGhCO0FETWdCO0VBQ0ksa0NBQUE7RUFDQSxpQ0FBQTtVQUFBLHlCQUFBO0FDSnBCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvZGV0YWlscy1wYWdlL2RldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY29udGFjdC1kZXRhaWxzLXZpZXcge1xyXG4gICAgaDQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGl0bGVDb2xvcik7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9ICAgIFxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4OyAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20tY29udGFjdC1kZXRhaWxzLXZpZXctc29jaWFsbmV0d29ya3tcclxuXHJcbiAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XHJcbiAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIC5pbWFnZXMge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY2ZjI7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1tYWluQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZUNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuc29jaWFsLWxpbmsge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwIDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IDA7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgI2VkZWRlZDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSBhIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdGFkYSAxcyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMikgYSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRhZGEgMXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIGEge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNzI5YjtcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiB0YWRhIDFzIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg0KSBhIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogdGFkYSAxcyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoNSkgYSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgwMDAwO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHRhZGEgMXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmN1c3RvbS1jb250YWN0LWRldGFpbHMtdmlldyBoNCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS10aXRsZUNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmN1c3RvbS1jb250YWN0LWRldGFpbHMtdmlldyBwIHtcbiAgbWFyZ2luOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY3VzdG9tLWNvbnRhY3QtZGV0YWlscy12aWV3LXNvY2lhbG5ldHdvcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmN1c3RvbS1jb250YWN0LWRldGFpbHMtdmlldy1zb2NpYWxuZXR3b3JrIC5pbWFnZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNmYyO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1tYWluQ29sb3IpO1xufVxuLmN1c3RvbS1jb250YWN0LWRldGFpbHMtdmlldy1zb2NpYWxuZXR3b3JrIC5jb250ZW50IHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uY3VzdG9tLWNvbnRhY3QtZGV0YWlscy12aWV3LXNvY2lhbG5ldHdvcmsgLmNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS10aXRsZUNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLmN1c3RvbS1jb250YWN0LWRldGFpbHMtdmlldy1zb2NpYWxuZXR3b3JrIC5jb250ZW50IHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xufVxuLmN1c3RvbS1jb250YWN0LWRldGFpbHMtdmlldy1zb2NpYWxuZXR3b3JrIHAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jdXN0b20tY29udGFjdC1kZXRhaWxzLXZpZXctc29jaWFsbmV0d29yayAuc29jaWFsLWxpbmsge1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IDA7XG59XG4uY3VzdG9tLWNvbnRhY3QtZGV0YWlscy12aWV3LXNvY2lhbG5ldHdvcmsgLnNvY2lhbC1saW5rIGxpIHtcbiAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNlZGVkZWQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uY3VzdG9tLWNvbnRhY3QtZGV0YWlscy12aWV3LXNvY2lhbG5ldHdvcmsgLnNvY2lhbC1saW5rIGxpIGEge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XG59XG4uY3VzdG9tLWNvbnRhY3QtZGV0YWlscy12aWV3LXNvY2lhbG5ldHdvcmsgLnNvY2lhbC1saW5rIGxpOm50aC1jaGlsZCgxKSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbn1cbi5jdXN0b20tY29udGFjdC1kZXRhaWxzLXZpZXctc29jaWFsbmV0d29yayAuc29jaWFsLWxpbmsgbGk6bnRoLWNoaWxkKDEpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xuICBhbmltYXRpb246IHRhZGEgMXMgbGluZWFyO1xufVxuLmN1c3RvbS1jb250YWN0LWRldGFpbHMtdmlldy1zb2NpYWxuZXR3b3JrIC5zb2NpYWwtbGluayBsaTpudGgtY2hpbGQoMikgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG59XG4uY3VzdG9tLWNvbnRhY3QtZGV0YWlscy12aWV3LXNvY2lhbG5ldHdvcmsgLnNvY2lhbC1saW5rIGxpOm50aC1jaGlsZCgyKSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbiAgYW5pbWF0aW9uOiB0YWRhIDFzIGxpbmVhcjtcbn1cbi5jdXN0b20tY29udGFjdC1kZXRhaWxzLXZpZXctc29jaWFsbmV0d29yayAuc29jaWFsLWxpbmsgbGk6bnRoLWNoaWxkKDMpIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xufVxuLmN1c3RvbS1jb250YWN0LWRldGFpbHMtdmlldy1zb2NpYWxuZXR3b3JrIC5zb2NpYWwtbGluayBsaTpudGgtY2hpbGQoMykgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gIGFuaW1hdGlvbjogdGFkYSAxcyBsaW5lYXI7XG59XG4uY3VzdG9tLWNvbnRhY3QtZGV0YWlscy12aWV3LXNvY2lhbG5ldHdvcmsgLnNvY2lhbC1saW5rIGxpOm50aC1jaGlsZCg0KSBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcbn1cbi5jdXN0b20tY29udGFjdC1kZXRhaWxzLXZpZXctc29jaWFsbmV0d29yayAuc29jaWFsLWxpbmsgbGk6bnRoLWNoaWxkKDQpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xuICBhbmltYXRpb246IHRhZGEgMXMgbGluZWFyO1xufVxuLmN1c3RvbS1jb250YWN0LWRldGFpbHMtdmlldy1zb2NpYWxuZXR3b3JrIC5zb2NpYWwtbGluayBsaTpudGgtY2hpbGQoNSkgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjODAwMDA7XG59XG4uY3VzdG9tLWNvbnRhY3QtZGV0YWlscy12aWV3LXNvY2lhbG5ldHdvcmsgLnNvY2lhbC1saW5rIGxpOm50aC1jaGlsZCg1KSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbiAgYW5pbWF0aW9uOiB0YWRhIDFzIGxpbmVhcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-details-page',
          templateUrl: './details-page.component.html',
          styleUrls: ['./details-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/forgot-password/forgot-password.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/public-pages/forgot-password/forgot-password.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppModulesPublicPagesForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent() {
        _classCallCheck(this, ForgotPasswordComponent);
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)();
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 29,
      vars: 0,
      consts: [[1, "user-area"], [1, "container-fluid", "m-0"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-xl-6", "p-0"], [1, "user-img"], ["src", "assets/img/banner-home/login_pub.jpg", "alt", "Images"], [1, "col-lg-6", "col-xl-6"], [1, "user-section", "text-center"], [1, "user-content"], [1, "tabs"], ["href", "#"], [1, "flaticon-contact"], [1, "user-all-form"], [1, "contact-form"], ["id", "contactForm"], [1, "row"], [1, "col-lg-12"], [1, "form-group"], [1, "bx", "bx-user"], ["type", "text", "name", "name", "id", "name", "required", "", "data-error", "Please enter your Username or Email", "placeholder", "Username or Email", 1, "form-control"], [1, "col-lg-12", "col-md-12", "text-center"], ["type", "submit", 1, "default-btn", "user-all-btn"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bienvenu sur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ZOOM-INFO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Re-initialiser son mot de passe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Re-initialiser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljLXBhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/home-page/home-page.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/public-pages/home-page/home-page.component.ts ***!
    \***********************************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppModulesPublicPagesHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomePageComponent =
    /*#__PURE__*/
    function () {
      function HomePageComponent() {
        _classCallCheck(this, HomePageComponent);

        this.options = [{
          id: 1,
          label: 'One'
        }, {
          id: 2,
          label: 'Two'
        }, {
          id: 3,
          label: 'Three'
        }];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](); // two way binding for input text

        this.inputItem = ''; // enable or disable visiblility of dropdown

        this.listHidden = true;
        this.showError = false;
        this.selectedIndex = -1; // the list to be shown after filtering

        this.filteredList = [];
      }

      _createClass(HomePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filteredList = this.list;
        } // modifies the filtered list as per input

      }, {
        key: "getFilteredList",
        value: function getFilteredList() {
          var _this56 = this;

          this.listHidden = false; // this.selectedIndex = 0;

          if (!this.listHidden && this.inputItem !== undefined) {
            this.filteredList = this.list.filter(function (item) {
              return item.toLowerCase().startsWith(_this56.inputItem.toLowerCase());
            });
          }
        } // select highlighted item when enter is pressed or any item that is clicked

      }, {
        key: "selectItem",
        value: function selectItem(ind) {
          this.inputItem = this.filteredList[ind];
          this.listHidden = true;
          this.selectedIndex = ind;
        } // navigate through the list of items

      }, {
        key: "onKeyPress",
        value: function onKeyPress(event) {
          if (!this.listHidden) {
            if (event.key === 'Escape') {
              this.selectedIndex = -1;
              this.toggleListDisplay(0);
            }

            if (event.key === 'Enter') {
              this.toggleListDisplay(0);
            }

            if (event.key === 'ArrowDown') {
              this.listHidden = false;
              this.selectedIndex = (this.selectedIndex + 1) % this.filteredList.length;

              if (this.filteredList.length > 0 && !this.listHidden) {
                document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
              }
            } else if (event.key === 'ArrowUp') {
              this.listHidden = false;

              if (this.selectedIndex <= 0) {
                this.selectedIndex = this.filteredList.length;
              }

              this.selectedIndex = (this.selectedIndex - 1) % this.filteredList.length;

              if (this.filteredList.length > 0 && !this.listHidden) {
                document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
              }
            }
          }
        } // show or hide the dropdown list when input is focused or moves out of focus

      }, {
        key: "toggleListDisplay",
        value: function toggleListDisplay(sender) {
          var _this57 = this;

          if (sender === 1) {
            // this.selectedIndex = -1;
            this.listHidden = false;
            this.getFilteredList();
          } else {
            // helps to select item by clicking
            setTimeout(function () {
              _this57.selectItem(_this57.selectedIndex);

              _this57.listHidden = true;

              if (!_this57.list.includes(_this57.inputItem)) {
                _this57.showError = true;
                _this57.filteredList = _this57.list;
              } else {
                _this57.showError = false;
              }
            }, 500);
          }
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ɵfac = function HomePageComponent_Factory(t) {
      return new (t || HomePageComponent)();
    };

    HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomePageComponent,
      selectors: [["app-home-page"]],
      inputs: {
        list: "list"
      },
      decls: 192,
      vars: 0,
      consts: [[1, "slider-area", "owl-carousel", "owl-theme"], [1, "slider-item", "item-bg1"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "slider-content"], [1, "slider-item", "item-bg2"], [1, "slider-item", "item-bg3"], [1, "slider-item", "item-bg4"], [1, "banner-form-area", "banner-form-mt"], [1, "form-list", "text-center", 2, "margin-bottom", "75px"], [1, "banner-form", "border-radius"], [1, "row"], [1, "col-lg-5", "col-md-6"], [1, "form-group"], [1, "flaticon-vision"], ["type", "text", "placeholder", "Mots clefs (avocat, informatique etc..)", "type", "text", "pInputText", "", 1, "form-control"], [1, "flaticon-place"], ["type", "text", "placeholder", "Ville ou Quartiers (Douala, Akwa etc..)", "type", "text", "pInputText", "", 1, "form-control"], [1, "col-lg-2", "col-sm-6", "offset-sm-3", "offset-lg-0", 2, "justify-content", "center"], ["type", "submit", 1, "default-btn", "border-radius"], [1, "flaticon-loupe"], [1, "category-area", "pt-100", "pb-70"], [1, "section-title"], [1, "row", "pt-45"], [1, "col-lg-2", "col-sm-6"], [1, "category-box"], ["routerLink", "/category"], [1, "flaticon-bake"], [1, "flaticon-hotel"], [1, "flaticon-barbell"], [1, "flaticon-store"], [1, "flaticon-event"], [1, "flaticon-flower"], [1, "video-area-two"], [1, "video-option"], ["href", "https://www.youtube.com/watch?v=kybroX-4LCI", 1, "video-btn"], [1, "bx", "bx-play", "play-video"], [1, "flaticon-arrow"], [1, "counter-area-three"], [1, "col-lg-4", "col-sm-6", "col-md-4"], [1, "single-counter"], [1, "text-color-white"], [1, "application-area-two"], [1, "row", "align-items-center"], [1, "col-lg-7"], [1, "application-content"], [1, "application-btn"], ["href", "#", 1, "application-play-btn"], ["src", "assets/img/google-play.svg", "alt", "svg"], [1, "btn-content"], ["src", "assets/img/company.svg", "alt", "svg"], [1, "col-lg-5"], ["src", "assets/img/mobile-app3.png", "alt", "Images", 1, "mymobile-image"]],
      template: function HomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Go");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Les rubriques et sous rubriques");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Rechercher ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "par rubriques");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Hotel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Fitness");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Shops");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Beauty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Restaurant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Hotel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Fitness");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Shops");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Beauty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Cliquer Pour Voir La Video De L'Entreprise De La semaine ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h3", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "25 ans ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Texte Texte Texte Texte Texte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h3", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "8 Pays");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Texte Texte Texte Texte Texte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h3", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "+15000 Activites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Texte Texte Texte Texte Texte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "T\xE9l\xE9charger l'application mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Obtenez plus dans notre application Asseyez-vous et profitez");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "ANDROID APP ON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Google Play");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "DOWNLOAD ON THE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "App Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".mymobile-image[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 560px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%] {\n  \n  height: auto;\n  width: 400px;\n  border: 0px none #212529;\n  border-top: 0px none #212529;\n  border-right: 0px none #212529;\n  border-bottom: 0px none #212529;\n  border-left: 11px none #212529;\n  margin: 0px;\n  padding: 0px 0px;\n  max-height: none;\n  min-height: auto;\n  min-width: auto;\n}\n\n.combobox[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.combobox-input[_ngcontent-%COMP%] {\n  width: 330px;\n  border: none;\n  padding: 10px;\n  font-size: 18px;\n  border-bottom: 2px solid #a57070;\n}\n\n.combobox-input[_ngcontent-%COMP%]:focus {\n  outline-style: none;\n}\n\n.combobox-options[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  background-color: white;\n  width: 350px;\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  z-index: 1;\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: cornsilk;\n  background-color: #a57070;\n}\n\nlist-item[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  padding: 10px;\n}\n\nlist-item[_ngcontent-%COMP%]:hover {\n  background-color: grey;\n  color: white;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #a57070;\n}\n\n.error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvaG9tZS1wYWdlL0M6XFxVc2Vyc1xcYXNlY25hXFxEZXNrdG9wXFxaT09NXFxab29tLVdlYkNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xccHVibGljLXBhZ2VzXFxob21lLXBhZ2VcXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0NKOztBRENBO0VBRUUsUUFBQTtFQUNELFlBQUE7RUFDRyxZQUFBO0VBQ0gsd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Q7O0FERUE7RUFFSSxZQUFBO0FDQUo7O0FER0U7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNESjs7QURJRTtFQUVFLG1CQUFBO0FDRko7O0FES0U7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1FO0VBRUUsZUFBQTtFQUNBLHlCQUFBO0FDSko7O0FET0U7RUFFRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNMSjs7QURRRTtFQUVFLHNCQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNFO0VBRUUsY0FBQTtBQ1BKOztBRFVFO0VBQ0UscUJBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljLXBhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXltb2JpbGUtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgaGVpZ2h0OiA1NjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuLm5nLWF1dG9jb21wbGV0ZXtcclxuICAgXHJcbiAgLyogQm94ICovXHJcblx0aGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG5cdGJvcmRlcjogMHB4IG5vbmUgcmdiKDMzLCAzNywgNDEpO1xyXG5cdGJvcmRlci10b3A6IDBweCBub25lIHJnYigzMywgMzcsIDQxKTtcclxuXHRib3JkZXItcmlnaHQ6IDBweCBub25lIHJnYigzMywgMzcsIDQxKTtcclxuXHRib3JkZXItYm90dG9tOiAwcHggbm9uZSByZ2IoMzMsIDM3LCA0MSk7XHJcblx0Ym9yZGVyLWxlZnQ6IDExcHggbm9uZSByZ2IoMzMsIDM3LCA0MSk7XHJcblx0bWFyZ2luOiAwcHg7XHJcblx0cGFkZGluZzogMHB4IDBweDtcclxuXHRtYXgtaGVpZ2h0OiBub25lO1xyXG5cdG1pbi1oZWlnaHQ6IGF1dG87XHRcclxuXHRtaW4td2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5jb21ib2JveCB7XHJcbiAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21ib2JveC1pbnB1dCB7XHJcbiAgXHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxNjUsIDExMiwgMTEyKTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbWJvYm94LWlucHV0OmZvY3Vze1xyXG4gIFxyXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbWJvYm94LW9wdGlvbnMge1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgXHJcbiAgICBjb2xvcjogY29ybnNpbGs7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxMTIsIDExMik7XHJcbiAgfVxyXG4gIFxyXG4gIGxpc3QtaXRlbXtcclxuICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgbGlzdC1pdGVtOmhvdmVye1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLXRleHR7XHJcbiAgXHJcbiAgICBjb2xvcjogcmdiKDE2NSwgMTEyLCAxMTIpO1xyXG4gIH1cclxuICBcclxuICAuZXJyb3J7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfSIsIi5teW1vYmlsZS1pbWFnZSB7XG4gIHdpZHRoOiAzODBweDtcbiAgaGVpZ2h0OiA1NjBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLm5nLWF1dG9jb21wbGV0ZSB7XG4gIC8qIEJveCAqL1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyOiAwcHggbm9uZSAjMjEyNTI5O1xuICBib3JkZXItdG9wOiAwcHggbm9uZSAjMjEyNTI5O1xuICBib3JkZXItcmlnaHQ6IDBweCBub25lICMyMTI1Mjk7XG4gIGJvcmRlci1ib3R0b206IDBweCBub25lICMyMTI1Mjk7XG4gIGJvcmRlci1sZWZ0OiAxMXB4IG5vbmUgIzIxMjUyOTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG4gIG1heC1oZWlnaHQ6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLmNvbWJvYm94IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29tYm9ib3gtaW5wdXQge1xuICB3aWR0aDogMzMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2E1NzA3MDtcbn1cblxuLmNvbWJvYm94LWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcbn1cblxuLmNvbWJvYm94LW9wdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc2VsZWN0ZWQge1xuICBjb2xvcjogY29ybnNpbGs7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNTcwNzA7XG59XG5cbmxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogI2E1NzA3MDtcbn1cblxuLmVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-page',
          templateUrl: './home-page.component.html',
          styleUrls: ['./home-page.component.scss']
        }]
      }], function () {
        return [];
      }, {
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/inscription-page/inscription-page.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/public-pages/inscription-page/inscription-page.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: InscriptionPageComponent */

  /***/
  function srcAppModulesPublicPagesInscriptionPageInscriptionPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionPageComponent", function () {
      return InscriptionPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var InscriptionPageComponent =
    /*#__PURE__*/
    function () {
      function InscriptionPageComponent() {
        _classCallCheck(this, InscriptionPageComponent);
      }

      _createClass(InscriptionPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InscriptionPageComponent;
    }();

    InscriptionPageComponent.ɵfac = function InscriptionPageComponent_Factory(t) {
      return new (t || InscriptionPageComponent)();
    };

    InscriptionPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InscriptionPageComponent,
      selectors: [["app-inscription-page"]],
      decls: 42,
      vars: 0,
      consts: [[1, "user-area"], [1, "container-fluid", "m-0"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-xl-6", "p-0"], [1, "user-img"], ["src", "assets/img/banner-home/login_pub.jpg", "alt", "Images"], [1, "col-lg-6", "col-xl-6"], [1, "user-section", "text-center"], [1, "user-content"], [1, "tabs"], ["href", "#"], [1, "flaticon-verify"], [1, "user-all-form"], [1, "contact-form"], ["id", "contactForm"], [1, "row"], [1, "col-lg-12"], [1, "form-group"], [1, "bx", "bxs-business"], ["type", "text", "name", "name", "id", "name", "required", "", "data-error", "Please enter your Name", "placeholder", "Nom de la societe", 1, "form-control"], [1, "flaticon-email-2"], ["type", "email", "name", "email", "id", "email", "required", "", "data-error", "Please enter email", "placeholder", "Email", 1, "form-control"], [1, "col-12"], [1, "bx", "bx-phone"], ["type", "text", "name", "password", "placeholder", "Numero de telephone ", 1, "form-control"], [1, "col-lg-12", "col-md-12", "text-center"], ["type", "submit", 1, "default-btn", "user-all-btn"], [1, "account-desc"], ["routerLink", "/home/login"]],
      template: function InscriptionPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bienvenu sur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ZOOM-INFO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " R\xE9f\xE9rence Une Entreprise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Se r\xE9f\xE9rence ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Vous etes deja reference ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljLXBhZ2VzL2luc2NyaXB0aW9uLXBhZ2UvaW5zY3JpcHRpb24tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InscriptionPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inscription-page',
          templateUrl: './inscription-page.component.html',
          styleUrls: ['./inscription-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/login-page/login-page.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/public-pages/login-page/login-page.component.ts ***!
    \*************************************************************************/

  /*! exports provided: LoginPageComponent */

  /***/
  function srcAppModulesPublicPagesLoginPageLoginPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function () {
      return LoginPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginPageComponent =
    /*#__PURE__*/
    function () {
      function LoginPageComponent() {
        _classCallCheck(this, LoginPageComponent);
      }

      _createClass(LoginPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginPageComponent;
    }();

    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) {
      return new (t || LoginPageComponent)();
    };

    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginPageComponent,
      selectors: [["app-login-page"]],
      decls: 38,
      vars: 0,
      consts: [[1, "user-area"], [1, "container-fluid", "m-0"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-xl-6", "p-0"], [1, "user-img"], ["src", "assets/img/banner-home/login_pub.jpg", "alt", "Images"], [1, "col-lg-6", "col-xl-6"], [1, "user-section", "text-center"], [1, "user-content"], [1, "tabs"], ["href", "#"], [1, "flaticon-contact"], [1, "user-all-form"], [1, "contact-form"], ["id", "contactForm"], [1, "row"], [1, "col-lg-12"], [1, "form-group"], [1, "bx", "bx-user"], ["type", "text", "name", "name", "id", "name", "required", "", "data-error", "Please enter your Username or Email", "placeholder", "Username or Email", 1, "form-control"], [1, "col-12"], [1, "bx", "bx-lock-alt"], ["type", "password", "name", "password", "placeholder", "Password", 1, "form-control"], [1, "col-lg-12", "col-md-12", "text-center"], ["type", "submit", 1, "default-btn", "user-all-btn"], [1, "col-lg-6", "col-sm-6", "form-condition"], [1, "agree-label"], [1, "col-lg-6", "col-sm-6"], ["routerLink", "/home/reset", 1, "forget"]],
      template: function LoginPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bienvenu sur ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ZOOM-INFO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Mot de passe oubli\xE9?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljLXBhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login-page',
          templateUrl: './login-page.component.html',
          styleUrls: ['./login-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete-content.directive.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete-content.directive.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: AutocompleteContentDirective */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPageAutocompleteAutocompleteAutocompleteContentDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteContentDirective", function () {
      return AutocompleteContentDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AutocompleteContentDirective = function AutocompleteContentDirective(tpl) {
      _classCallCheck(this, AutocompleteContentDirective);

      this.tpl = tpl;
    };

    AutocompleteContentDirective.ɵfac = function AutocompleteContentDirective_Factory(t) {
      return new (t || AutocompleteContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    AutocompleteContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AutocompleteContentDirective,
      selectors: [["", "appAutocompleteContent", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appAutocompleteContent]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: AutocompleteComponent */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPageAutocompleteAutocompleteAutocompleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function () {
      return AutocompleteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./autocomplete-content.directive */
    "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete-content.directive.ts");
    /* harmony import */


    var _option_option_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../option/option.component */
    "./src/app/modules/public-pages/public-layout-page/autocomplete/option/option.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["root"];

    function AutocompleteComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function AutocompleteComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content.tpl);
      }
    }

    var AutocompleteComponent =
    /*#__PURE__*/
    function () {
      function AutocompleteComponent() {
        _classCallCheck(this, AutocompleteComponent);
      }

      _createClass(AutocompleteComponent, [{
        key: "optionsClick",
        value: function optionsClick() {
          return this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (options) {
            var clicks$ = options.map(function (option) {
              return option.click$;
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(clicks$));
          }));
        }
      }]);

      return AutocompleteComponent;
    }();

    AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) {
      return new (t || AutocompleteComponent)();
    };

    AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutocompleteComponent,
      selectors: [["app-autocomplete"]],
      contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_1__["AutocompleteContentDirective"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _option_option_component__WEBPACK_IMPORTED_MODULE_2__["OptionComponent"], false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
        }
      },
      viewQuery: function AutocompleteComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rootTemplate = _t.first);
        }
      },
      exportAs: ["appAutocomplete"],
      decls: 2,
      vars: 0,
      consts: [["root", ""], [1, "autocomplete"], [4, "ngTemplateOutlet"]],
      template: function AutocompleteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutocompleteComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]],
      styles: [".autocomplete[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.2);\n  width: 100%;\n  display: block;\n  \n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvcHVibGljLWxheW91dC1wYWdlL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUvQzpcXFVzZXJzXFxhc2VjbmFcXERlc2t0b3BcXFpPT01cXFpvb20tV2ViQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxwdWJsaWMtcGFnZXNcXHB1YmxpYy1sYXlvdXQtcGFnZVxcYXV0b2NvbXBsZXRlXFxhdXRvY29tcGxldGVcXGF1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvcHVibGljLWxheW91dC1wYWdlL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvcHVibGljLWxheW91dC1wYWdlL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dG9jb21wbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMTRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiBtYXgtaGVpZ2h0OiAxMjJweDsgKi9cclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICB9IiwiLmF1dG9jb21wbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDE0cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogbWF4LWhlaWdodDogMTIycHg7ICovXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-autocomplete',
          template: "\n    <ng-template #root>\n      <div class=\"autocomplete\">\n        <ng-container *ngTemplateOutlet=\"content.tpl\"></ng-container>\n      </div>\n    </ng-template>\n  ",
          exportAs: 'appAutocomplete',
          styleUrls: ['./autocomplete.component.scss']
        }]
      }], null, {
        rootTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['root']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_1__["AutocompleteContentDirective"]]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_option_option_component__WEBPACK_IMPORTED_MODULE_2__["OptionComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.directive.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.directive.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: AutocompleteDirective, overlayClickOutside */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPageAutocompleteAutocompleteAutocompleteDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteDirective", function () {
      return AutocompleteDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "overlayClickOutside", function () {
      return overlayClickOutside;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-take-until-destroy */
    "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AutocompleteDirective =
    /*#__PURE__*/
    function () {
      function AutocompleteDirective(host, ngControl, vcr, overlay) {
        _classCallCheck(this, AutocompleteDirective);

        this.host = host;
        this.ngControl = ngControl;
        this.vcr = vcr;
        this.overlay = overlay;
      }

      _createClass(AutocompleteDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this58 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.origin, 'focus').pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this)).subscribe(function () {
            _this58.openDropdown();

            _this58.appAutocomplete.optionsClick().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this58.overlayRef.detachments())).subscribe(function (value) {
              _this58.control.setValue(value);

              _this58.close();
            });
          });
        }
      }, {
        key: "openDropdown",
        value: function openDropdown() {
          var _this59 = this;

          this.overlayRef = this.overlay.create({
            width: this.origin.offsetWidth,
            maxHeight: 40 * 3,
            backdropClass: '',
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            positionStrategy: this.getOverlayPosition()
          });
          var template = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"](this.appAutocomplete.rootTemplate, this.vcr);
          this.overlayRef.attach(template);
          overlayClickOutside(this.overlayRef, this.origin).subscribe(function () {
            return _this59.close();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "close",
        value: function close() {
          this.overlayRef.detach();
          this.overlayRef = null;
        }
      }, {
        key: "getOverlayPosition",
        value: function getOverlayPosition() {
          var positions = [new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({
            originX: 'start',
            originY: 'bottom'
          }, {
            overlayX: 'start',
            overlayY: 'top'
          }), new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({
            originX: 'start',
            originY: 'top'
          }, {
            overlayX: 'start',
            overlayY: 'bottom'
          })];
          return this.overlay.position().flexibleConnectedTo(this.origin).withPositions(positions).withFlexibleDimensions(false).withPush(false);
        }
      }, {
        key: "control",
        get: function get() {
          return this.ngControl.control;
        }
      }, {
        key: "origin",
        get: function get() {
          return this.host.nativeElement;
        }
      }]);

      return AutocompleteDirective;
    }();

    AutocompleteDirective.ɵfac = function AutocompleteDirective_Factory(t) {
      return new (t || AutocompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]));
    };

    AutocompleteDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: AutocompleteDirective,
      selectors: [["", "appAutocomplete", ""]],
      inputs: {
        appAutocomplete: "appAutocomplete"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appAutocomplete]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]
        }];
      }, {
        appAutocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    function overlayClickOutside(overlayRef, origin) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
        var clickTarget = event.target;
        var notOrigin = clickTarget !== origin; // the input

        var notOverlay = !!overlayRef && overlayRef.overlayElement.contains(clickTarget) === false; // the autocomplete

        return notOrigin && notOverlay;
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(overlayRef.detachments()));
    }
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.module.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.module.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: AutocompleteModule */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPageAutocompleteAutocompleteAutocompleteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteModule", function () {
      return AutocompleteModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./autocomplete.component */
    "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.component.ts");
    /* harmony import */


    var _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./autocomplete.directive */
    "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.directive.ts");
    /* harmony import */


    var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./autocomplete-content.directive */
    "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete-content.directive.ts");
    /* harmony import */


    var _option_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../option/option.component */
    "./src/app/modules/public-pages/public-layout-page/autocomplete/option/option.component.ts");

    var publicApi = [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteComponent"], _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__["AutocompleteDirective"], _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__["AutocompleteContentDirective"], _option_option_component__WEBPACK_IMPORTED_MODULE_5__["OptionComponent"]];

    var AutocompleteModule = function AutocompleteModule() {
      _classCallCheck(this, AutocompleteModule);
    };

    AutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AutocompleteModule
    });
    AutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AutocompleteModule_Factory(t) {
        return new (t || AutocompleteModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutocompleteModule, {
        declarations: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteComponent"], _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__["AutocompleteDirective"], _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__["AutocompleteContentDirective"], _option_option_component__WEBPACK_IMPORTED_MODULE_5__["OptionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteComponent"], _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__["AutocompleteDirective"], _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__["AutocompleteContentDirective"], _option_option_component__WEBPACK_IMPORTED_MODULE_5__["OptionComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [publicApi],
          exports: [publicApi]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/filter.pipe.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/filter.pipe.ts ***!
    \**************************************************************************************************/

  /*! exports provided: FilterPipe */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPageAutocompleteAutocompleteFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterPipe =
    /*#__PURE__*/
    function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, searchTerm, labelKey) {
          if (!items || !searchTerm) {
            return items;
          }

          return items.filter(function (item) {
            return item[labelKey || 'label'].toLowerCase().includes(searchTerm.toLowerCase()) === true;
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe.ɵfac = function FilterPipe_Factory(t) {
      return new (t || FilterPipe)();
    };

    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filter",
      type: FilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/autocomplete/option/option.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/autocomplete/option/option.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: OptionComponent */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPageAutocompleteOptionOptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionComponent", function () {
      return OptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var _c0 = ["*"];

    var OptionComponent =
    /*#__PURE__*/
    function () {
      function OptionComponent(host) {
        _classCallCheck(this, OptionComponent);

        this.host = host;
      }

      _createClass(OptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.click$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.element, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(this.value));
        }
      }, {
        key: "element",
        get: function get() {
          return this.host.nativeElement;
        }
      }]);

      return OptionComponent;
    }();

    OptionComponent.ɵfac = function OptionComponent_Factory(t) {
      return new (t || OptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    OptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OptionComponent,
      selectors: [["app-option"]],
      inputs: {
        value: "value"
      },
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "option"]],
      template: function OptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.no-result[_nghost-%COMP%] {\n  pointer-events: none;\n}\n\n.option[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 14px;\n  cursor: pointer;\n  display: block;\n}\n\n.option[_ngcontent-%COMP%]:hover {\n  background-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvcHVibGljLWxheW91dC1wYWdlL2F1dG9jb21wbGV0ZS9vcHRpb24vQzpcXFVzZXJzXFxhc2VjbmFcXERlc2t0b3BcXFpPT01cXFpvb20tV2ViQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxwdWJsaWMtcGFnZXNcXHB1YmxpYy1sYXlvdXQtcGFnZVxcYXV0b2NvbXBsZXRlXFxvcHRpb25cXG9wdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvcHVibGljLWxheW91dC1wYWdlL2F1dG9jb21wbGV0ZS9vcHRpb24vb3B0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksY0FBQTtBQ0FKOztBREdFO0VBQ0Usb0JBQUE7QUNBSjs7QURHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRTtFQUNFLDJCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3B1YmxpYy1wYWdlcy9wdWJsaWMtbGF5b3V0LXBhZ2UvYXV0b2NvbXBsZXRlL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0Lm5vLXJlc3VsdCB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLm9wdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5vcHRpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIH1cclxuICAiLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdC5uby1yZXN1bHQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm9wdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-option',
          template: "\n                <div class=\"option\">\n                  <ng-content></ng-content>\n                </div>\n              ",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styleUrls: ['./option.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/combox-box/combox-box.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/combox-box/combox-box.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ComboxBoxComponent */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPageComboxBoxComboxBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComboxBoxComponent", function () {
      return ComboxBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ComboxBoxComponent_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invalid Selection.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "selected": a0
      };
    };

    function ComboxBoxComponent_div_3_list_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "list-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComboxBoxComponent_div_3_list_item_1_Template_list_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var i_r7 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.selectItem(i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, i_r7 === ctx_r5.selectedIndex));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6);
      }
    }

    function ComboxBoxComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ComboxBoxComponent_div_3_list_item_1_Template, 2, 4, "list-item", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.filteredList);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "error": a0
      };
    };

    var ComboxBoxComponent =
    /*#__PURE__*/
    function () {
      function ComboxBoxComponent() {
        _classCallCheck(this, ComboxBoxComponent);

        // two way binding for input text
        this.inputItem = ''; // enable or disable visiblility of dropdown

        this.listHidden = true;
        this.showError = false;
        this.selectedIndex = -1; // the list to be shown after filtering

        this.filteredList = [];
      }

      _createClass(ComboxBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filteredList = this.list;
        } // modifies the filtered list as per input

      }, {
        key: "getFilteredList",
        value: function getFilteredList() {
          var _this60 = this;

          this.listHidden = false; // this.selectedIndex = 0;

          if (!this.listHidden && this.inputItem !== undefined) {
            this.filteredList = this.list.filter(function (item) {
              return item.toLowerCase().startsWith(_this60.inputItem.toLowerCase());
            });
          }
        } // select highlighted item when enter is pressed or any item that is clicked

      }, {
        key: "selectItem",
        value: function selectItem(ind) {
          this.inputItem = this.filteredList[ind];
          this.listHidden = true;
          this.selectedIndex = ind;
        } // navigate through the list of items

      }, {
        key: "onKeyPress",
        value: function onKeyPress(event) {
          if (!this.listHidden) {
            if (event.key === 'Escape') {
              this.selectedIndex = -1;
              this.toggleListDisplay(0);
            }

            if (event.key === 'Enter') {
              this.toggleListDisplay(0);
            }

            if (event.key === 'ArrowDown') {
              this.listHidden = false;
              this.selectedIndex = (this.selectedIndex + 1) % this.filteredList.length;

              if (this.filteredList.length > 0 && !this.listHidden) {
                document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
              }
            } else if (event.key === 'ArrowUp') {
              this.listHidden = false;

              if (this.selectedIndex <= 0) {
                this.selectedIndex = this.filteredList.length;
              }

              this.selectedIndex = (this.selectedIndex - 1) % this.filteredList.length;

              if (this.filteredList.length > 0 && !this.listHidden) {
                document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
              }
            }
          }
        } // show or hide the dropdown list when input is focused or moves out of focus

      }, {
        key: "toggleListDisplay",
        value: function toggleListDisplay(sender) {
          var _this61 = this;

          if (sender === 1) {
            // this.selectedIndex = -1;
            this.listHidden = false;
            this.getFilteredList();
          } else {
            // helps to select item by clicking
            setTimeout(function () {
              _this61.selectItem(_this61.selectedIndex);

              _this61.listHidden = true;

              if (!_this61.list.includes(_this61.inputItem)) {
                _this61.showError = true;
                _this61.filteredList = _this61.list;
              } else {
                _this61.showError = false;
              }
            }, 500);
          }
        }
      }]);

      return ComboxBoxComponent;
    }();

    ComboxBoxComponent.ɵfac = function ComboxBoxComponent_Factory(t) {
      return new (t || ComboxBoxComponent)();
    };

    ComboxBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComboxBoxComponent,
      selectors: [["app-combox-box"]],
      inputs: {
        list: "list"
      },
      decls: 4,
      vars: 6,
      consts: [[1, "combobox"], ["type", "text", "placeholder", "Select one...", 1, "combobox-input", 3, "ngModel", "ngClass", "ngModelChange", "keyup", "blur", "focus"], ["class", "error-text", 4, "ngIf"], ["class", "combobox-options", 4, "ngIf"], [1, "error-text"], [1, "combobox-options"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"]],
      template: function ComboxBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ComboxBoxComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.inputItem = $event;
          })("ngModelChange", function ComboxBoxComponent_Template_input_ngModelChange_1_listener() {
            return ctx.getFilteredList();
          })("keyup", function ComboxBoxComponent_Template_input_keyup_1_listener($event) {
            return ctx.onKeyPress($event);
          })("blur", function ComboxBoxComponent_Template_input_blur_1_listener() {
            return ctx.toggleListDisplay(0);
          })("focus", function ComboxBoxComponent_Template_input_focus_1_listener() {
            return ctx.toggleListDisplay(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ComboxBoxComponent_span_2_Template, 3, 0, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ComboxBoxComponent_div_3_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputItem)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.showError));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.listHidden);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".combobox[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.combobox-input[_ngcontent-%COMP%] {\n  width: 330px;\n  border: none;\n  padding: 10px;\n  font-size: 18px;\n  border-bottom: 2px solid #a57070;\n}\n\n.combobox-input[_ngcontent-%COMP%]:focus {\n  outline-style: none;\n}\n\n.combobox-options[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  background-color: white;\n  width: 350px;\n  max-height: 200px;\n  overflow-y: auto;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  z-index: 1;\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: cornsilk;\n  background-color: #a57070;\n}\n\nlist-item[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  padding: 10px;\n}\n\nlist-item[_ngcontent-%COMP%]:hover {\n  background-color: grey;\n  color: white;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  color: #a57070;\n}\n\n.error[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvcHVibGljLWxheW91dC1wYWdlL2NvbWJveC1ib3gvQzpcXFVzZXJzXFxhc2VjbmFcXERlc2t0b3BcXFpPT01cXFpvb20tV2ViQ2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxwdWJsaWMtcGFnZXNcXHB1YmxpYy1sYXlvdXQtcGFnZVxcY29tYm94LWJveFxcY29tYm94LWJveC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvcHVibGljLWxheW91dC1wYWdlL2NvbWJveC1ib3gvY29tYm94LWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7QUNBSjs7QURHRTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0RKOztBRElFO0VBRUUsbUJBQUE7QUNGSjs7QURLRTtFQUVFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0FDSEo7O0FETUU7RUFFRSxlQUFBO0VBQ0EseUJBQUE7QUNKSjs7QURPRTtFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRFFFO0VBRUUsc0JBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0U7RUFFRSxjQUFBO0FDUEo7O0FEVUU7RUFDRSxxQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvcHVibGljLWxheW91dC1wYWdlL2NvbWJveC1ib3gvY29tYm94LWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21ib2JveCB7XHJcbiAgXHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21ib2JveC1pbnB1dCB7XHJcbiAgXHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxNjUsIDExMiwgMTEyKTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbWJvYm94LWlucHV0OmZvY3Vze1xyXG4gIFxyXG4gICAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbWJvYm94LW9wdGlvbnMge1xyXG4gIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgXHJcbiAgICBjb2xvcjogY29ybnNpbGs7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY1LCAxMTIsIDExMik7XHJcbiAgfVxyXG4gIFxyXG4gIGxpc3QtaXRlbXtcclxuICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgbGlzdC1pdGVtOmhvdmVye1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLXRleHR7XHJcbiAgXHJcbiAgICBjb2xvcjogcmdiKDE2NSwgMTEyLCAxMTIpO1xyXG4gIH1cclxuICBcclxuICAuZXJyb3J7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfSIsIi5jb21ib2JveCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbWJvYm94LWlucHV0IHtcbiAgd2lkdGg6IDMzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhNTcwNzA7XG59XG5cbi5jb21ib2JveC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG59XG5cbi5jb21ib2JveC1vcHRpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMzUwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggI2NjYztcbiAgei1pbmRleDogMTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgY29sb3I6IGNvcm5zaWxrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTU3MDcwO1xufVxuXG5saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5saXN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6ICNhNTcwNzA7XG59XG5cbi5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComboxBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-combox-box',
          templateUrl: './combox-box.component.html',
          styleUrls: ['./combox-box.component.scss']
        }]
      }], function () {
        return [];
      }, {
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/footer/footer.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/footer/footer.component.ts ***!
    \************************************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPageFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 109,
      vars: 0,
      consts: [[1, "footer-area", 2, "background-color", "#2a2a2a"], [1, "footer-middle", "pt-45"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "footer-widget"], ["routerLink", "/", 1, "logo"], ["src", "assets/img/logo/zoominfo-logo.svg", "alt", "Logo"], [1, "footer-contact-list"], ["href", "tel:2151234567"], ["href", "mailto:info@pilar.com"], [1, "social-link"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-instagram"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-youtube"], [1, "col-lg-2", "col-md-6"], [1, "footer-widget", "pl-1"], [1, "footer-list"], ["routerLink", "/", "onmouseover", "this.style.color='#FFF'", "onmouseout", "this.style.color='#BCC7D1'"], [1, "col-lg-3", "col-md-6"], [1, "footer-widget", "pl-5"], [1, "footer-form"], [1, "col-lg-12"], [1, "form-group"], ["type", "email", "name", "email", "id", "email", "required", "", "data-error", "Please enter your email", "placeholder", "Votre Email*", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["type", "submit", 1, "default-btn"], [1, "copy-right-area", "copy-right-area-two"], [1, "col-lg-7", "col-md-7"], [1, "copy-right-list"], ["routerLink", "/terms-condition", "target", "_blank"], ["routerLink", "/privacy-policy", "target", "_blank"], [1, "col-lg-5", "col-md-5"], [1, "copy-right-text", "text-right"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Communication,Information & Sales Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "36, Rue Sylvanie,Akwa B.P 4462 Douala, Cameroun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "T\xE9l\xE9phone :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " +237 650 76 69 69");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " info@zoom-info.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "SERVICES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Service 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Service 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Service 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Service 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "LIENS UTILISENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "A Propos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Comment Ca Marche");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "FAQ's");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Nous Contacter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Se R\xE9f\xE9rencer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "NEWSLETTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Recevez les derni\xE8res nouvelles et les derni\xE8res mises \xE0 jour de notre part");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Abonnez-vous maintenant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Termes & conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Politique de confidentialit\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Copyright @2020 CISM. Designed by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Nicanor Sarl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljLXBhZ2VzL3B1YmxpYy1sYXlvdXQtcGFnZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/nar-bar/nar-bar.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/nar-bar/nar-bar.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: NarBarComponent */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPageNarBarNarBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NarBarComponent", function () {
      return NarBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var NarBarComponent =
    /*#__PURE__*/
    function () {
      function NarBarComponent() {
        _classCallCheck(this, NarBarComponent);
      }

      _createClass(NarBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NarBarComponent;
    }();

    NarBarComponent.ɵfac = function NarBarComponent_Factory(t) {
      return new (t || NarBarComponent)();
    };

    NarBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NarBarComponent,
      selectors: [["app-nar-bar"]],
      decls: 79,
      vars: 10,
      consts: [[1, "navbar-area"], [1, "mobile-nav"], ["routerLink", "/", 1, "logo"], [1, "nav-two", "main-nav", 2, "box-shadow", "0 0 15px #2a2a2a"], [1, "container-fluid"], [1, "container-max", "navbar", "navbar-expand-md", "navbar-light"], ["routerLink", "/", 1, "navbar-brand"], ["src", "assets/img/logo/zoominfo-logo.svg", "alt", "Logo"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav", "m-auto"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link"], [1, "dropdown-menu"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/home/inscription", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/home/contact", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "side-nav", "d-in-line", "align-items-center"], [1, "side-item"], [1, "nav-add-btn"], ["routerLink", "/home/login", 1, "default-btn", "border-radius", 2, "background-color", "#910a0a"], [1, "bx", "bx-user-circle"], [1, "side-nav-responsive"], [1, "container"], [1, "dot-menu"], [1, "circle-inner"], [1, "circle", "circle-one"], [1, "circle", "circle-two"], [1, "circle", "circle-three"], [1, "side-nav-inner"], [1, "side-nav", "justify-content-center", "align-items-center"], [1, "cart-btn"], ["routerLink", "/cart"], [1, "flaticon-shopping-bags"], [1, "search-box"], [1, "flaticon-loupe"], [1, "user-btn"], ["routerLink", "/"], [1, "flaticon-contact"], ["routerLink", "/", 1, "default-btn", "border-radius"], [1, "bx", "bx-plus"], [1, "search-overlay"], [1, "d-table"], [1, "d-table-cell"], [1, "search-layer"], [1, "search-close"], [1, "search-close-line"], [1, "search-form"], ["type", "text", "placeholder", "Search here...", 1, "input-search"], ["type", "submit"]],
      template: function NarBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LOGO ZOOM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Nos Solutions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Service 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "service 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "service 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Se r\xE9f\xE9rencer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nous Contacter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Se connecter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Add Listing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljLXBhZ2VzL3B1YmxpYy1sYXlvdXQtcGFnZS9uYXItYmFyL25hci1iYXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NarBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nar-bar',
          templateUrl: './nar-bar.component.html',
          styleUrls: ['./nar-bar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-layout-page/public-layout-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/public-pages/public-layout-page/public-layout-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PublicLayoutPageComponent */

  /***/
  function srcAppModulesPublicPagesPublicLayoutPagePublicLayoutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicLayoutPageComponent", function () {
      return PublicLayoutPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nar_bar_nar_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nar-bar/nar-bar.component */
    "./src/app/modules/public-pages/public-layout-page/nar-bar/nar-bar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/modules/public-pages/public-layout-page/footer/footer.component.ts");

    var PublicLayoutPageComponent =
    /*#__PURE__*/
    function () {
      function PublicLayoutPageComponent() {
        _classCallCheck(this, PublicLayoutPageComponent);
      }

      _createClass(PublicLayoutPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PublicLayoutPageComponent;
    }();

    PublicLayoutPageComponent.ɵfac = function PublicLayoutPageComponent_Factory(t) {
      return new (t || PublicLayoutPageComponent)();
    };

    PublicLayoutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublicLayoutPageComponent,
      selectors: [["app-public-layout-page"]],
      decls: 3,
      vars: 0,
      template: function PublicLayoutPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nar-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_nar_bar_nar_bar_component__WEBPACK_IMPORTED_MODULE_1__["NarBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHVibGljLXBhZ2VzL3B1YmxpYy1sYXlvdXQtcGFnZS9wdWJsaWMtbGF5b3V0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicLayoutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-public-layout-page',
          templateUrl: './public-layout-page.component.html',
          styleUrls: ['./public-layout-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-pages-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/public-pages/public-pages-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: PublicPagesRoutingModule */

  /***/
  function srcAppModulesPublicPagesPublicPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicPagesRoutingModule", function () {
      return PublicPagesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _public_layout_page_public_layout_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./public-layout-page/public-layout-page.component */
    "./src/app/modules/public-pages/public-layout-page/public-layout-page.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/modules/public-pages/home-page/home-page.component.ts");
    /* harmony import */


    var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details-page/details-page.component */
    "./src/app/modules/public-pages/details-page/details-page.component.ts");
    /* harmony import */


    var _search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-results-page/search-results-page.component */
    "./src/app/modules/public-pages/search-results-page/search-results-page.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/modules/public-pages/login-page/login-page.component.ts");
    /* harmony import */


    var _inscription_page_inscription_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./inscription-page/inscription-page.component */
    "./src/app/modules/public-pages/inscription-page/inscription-page.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/modules/public-pages/contact/contact.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/modules/public-pages/forgot-password/forgot-password.component.ts");

    var routes = [{
      path: '',
      component: _public_layout_page_public_layout_page_component__WEBPACK_IMPORTED_MODULE_2__["PublicLayoutPageComponent"],
      children: [{
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
      }, {
        path: 'recherche',
        component: _search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_5__["SearchResultsPageComponent"]
      }, {
        path: 'infos',
        component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_4__["DetailsPageComponent"]
      }, {
        path: 'login',
        component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"]
      }, {
        path: 'inscription',
        component: _inscription_page_inscription_page_component__WEBPACK_IMPORTED_MODULE_7__["InscriptionPageComponent"]
      }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
      }, {
        path: 'reset',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"]
      } //{ path: ':id', component: CustomersDetailComponent }
      ]
    }];

    var PublicPagesRoutingModule = function PublicPagesRoutingModule() {
      _classCallCheck(this, PublicPagesRoutingModule);
    };

    PublicPagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PublicPagesRoutingModule
    });
    PublicPagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PublicPagesRoutingModule_Factory(t) {
        return new (t || PublicPagesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublicPagesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicPagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/public-pages.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/public-pages/public-pages.module.ts ***!
    \*************************************************************/

  /*! exports provided: PublicPagesModule */

  /***/
  function srcAppModulesPublicPagesPublicPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicPagesModule", function () {
      return PublicPagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _public_pages_public_layout_page_autocomplete_autocomplete_filter_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../public-pages/public-layout-page/autocomplete/autocomplete/filter.pipe */
    "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/filter.pipe.ts");
    /* harmony import */


    var _public_pages_public_layout_page_autocomplete_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.module */
    "./src/app/modules/public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.module.ts");
    /* harmony import */


    var _public_layout_page_combox_box_combox_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./public-layout-page/combox-box/combox-box.component */
    "./src/app/modules/public-pages/public-layout-page/combox-box/combox-box.component.ts");
    /* harmony import */


    var _public_pages_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./public-pages-routing.module */
    "./src/app/modules/public-pages/public-pages-routing.module.ts");
    /* harmony import */


    var _public_layout_page_nar_bar_nar_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./public-layout-page/nar-bar/nar-bar.component */
    "./src/app/modules/public-pages/public-layout-page/nar-bar/nar-bar.component.ts");
    /* harmony import */


    var _public_layout_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./public-layout-page/footer/footer.component */
    "./src/app/modules/public-pages/public-layout-page/footer/footer.component.ts");
    /* harmony import */


    var _public_layout_page_public_layout_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./public-layout-page/public-layout-page.component */
    "./src/app/modules/public-pages/public-layout-page/public-layout-page.component.ts");
    /* harmony import */


    var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home-page/home-page.component */
    "./src/app/modules/public-pages/home-page/home-page.component.ts");
    /* harmony import */


    var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./details-page/details-page.component */
    "./src/app/modules/public-pages/details-page/details-page.component.ts");
    /* harmony import */


    var _search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./search-results-page/search-results-page.component */
    "./src/app/modules/public-pages/search-results-page/search-results-page.component.ts");
    /* harmony import */


    var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./login-page/login-page.component */
    "./src/app/modules/public-pages/login-page/login-page.component.ts");
    /* harmony import */


    var _inscription_page_inscription_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./inscription-page/inscription-page.component */
    "./src/app/modules/public-pages/inscription-page/inscription-page.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/modules/public-pages/contact/contact.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/modules/public-pages/forgot-password/forgot-password.component.ts"); //import { SharedModule } from '../../shared/shared-module';
    // //==> this is to be move to shared module
    //this should go to shared module
    //import { AutocompleteComponent } from '../public-pages/public-layout-page/autocomplete/autocomplete/autocomplete.component';
    //routes
    //pages


    var PublicPagesModule = function PublicPagesModule() {
      _classCallCheck(this, PublicPagesModule);
    };

    PublicPagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PublicPagesModule
    });
    PublicPagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PublicPagesModule_Factory(t) {
        return new (t || PublicPagesModule)();
      },
      providers: [],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _public_pages_routing_module__WEBPACK_IMPORTED_MODULE_8__["PublicPagesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_2__["AutocompleteLibModule"], _public_pages_public_layout_page_autocomplete_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_6__["AutocompleteModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublicPagesModule, {
        declarations: [_public_pages_public_layout_page_autocomplete_autocomplete_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"], _public_layout_page_combox_box_combox_box_component__WEBPACK_IMPORTED_MODULE_7__["ComboxBoxComponent"], _public_layout_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _public_layout_page_nar_bar_nar_bar_component__WEBPACK_IMPORTED_MODULE_9__["NarBarComponent"], _public_layout_page_public_layout_page_component__WEBPACK_IMPORTED_MODULE_11__["PublicLayoutPageComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"], _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_13__["DetailsPageComponent"], _search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_14__["SearchResultsPageComponent"], _inscription_page_inscription_page_component__WEBPACK_IMPORTED_MODULE_16__["InscriptionPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_15__["LoginPageComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _public_pages_routing_module__WEBPACK_IMPORTED_MODULE_8__["PublicPagesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_2__["AutocompleteLibModule"], _public_pages_public_layout_page_autocomplete_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_6__["AutocompleteModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicPagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _public_pages_routing_module__WEBPACK_IMPORTED_MODULE_8__["PublicPagesRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_2__["AutocompleteLibModule"], _public_pages_public_layout_page_autocomplete_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_6__["AutocompleteModule"]],
          exports: [],
          declarations: [_public_pages_public_layout_page_autocomplete_autocomplete_filter_pipe__WEBPACK_IMPORTED_MODULE_5__["FilterPipe"], _public_layout_page_combox_box_combox_box_component__WEBPACK_IMPORTED_MODULE_7__["ComboxBoxComponent"], _public_layout_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _public_layout_page_nar_bar_nar_bar_component__WEBPACK_IMPORTED_MODULE_9__["NarBarComponent"], _public_layout_page_public_layout_page_component__WEBPACK_IMPORTED_MODULE_11__["PublicLayoutPageComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"], _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_13__["DetailsPageComponent"], _search_results_page_search_results_page_component__WEBPACK_IMPORTED_MODULE_14__["SearchResultsPageComponent"], _inscription_page_inscription_page_component__WEBPACK_IMPORTED_MODULE_16__["InscriptionPageComponent"], _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_15__["LoginPageComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__["ForgotPasswordComponent"]],
          providers: [],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/public-pages/search-results-page/search-results-page.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/public-pages/search-results-page/search-results-page.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SearchResultsPageComponent */

  /***/
  function srcAppModulesPublicPagesSearchResultsPageSearchResultsPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResultsPageComponent", function () {
      return SearchResultsPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SearchResultsPageComponent =
    /*#__PURE__*/
    function () {
      function SearchResultsPageComponent() {
        _classCallCheck(this, SearchResultsPageComponent);
      }

      _createClass(SearchResultsPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchResultsPageComponent;
    }();

    SearchResultsPageComponent.ɵfac = function SearchResultsPageComponent_Factory(t) {
      return new (t || SearchResultsPageComponent)();
    };

    SearchResultsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchResultsPageComponent,
      selectors: [["app-search-results-page"]],
      decls: 199,
      vars: 0,
      consts: [[1, "container"], [1, "custom-banner-list"], [1, "row"], [1, "col-lg-12", "col-md-12"], ["src", "assets/img/banner-home/search-listing.jpg", "alt", ""], [1, "banner-form", "border-radius"], [1, "col-lg-5", "col-md-6"], [1, "form-group"], [1, "flaticon-vision"], ["type", "text", "placeholder", "What are looking for?", "type", "text", "pInputText", "", 1, "form-control"], [1, "flaticon-place"], [1, "form-control"], [1, "col-lg-2", "col-sm-6", "offset-sm-3", "offset-lg-0", 2, "justify-content", "center"], ["type", "submit", 1, "default-btn", "border-radius"], [1, "flaticon-loupe"], [1, "col-lg-8"], [1, "col-lg-12", "col-md-12", 2, "padding-top", "0px", "padding-left", "30px", "padding-right", "30px", "padding-bottom", "30px"], [1, "row", "custom-listing"], [1, "col-lg-2", "col-md-3", 2, "padding", "0"], ["src", "assets/img/logo/listing-logo.jpg", "alt", "Images", 2, "margin", "0"], [1, "col-lg-10", "col-md-9", "custom-carte-view"], [1, "flaticon-email"], [1, "flaticon-web-page"], [1, "flaticon-telephone", 2, "color", "green"], [1, "flaticon-telephone"], [1, "col-lg-12", "col-md-12", 2, "margin", "0px", "padding", "0px"], ["routerLink", "/home/infos", 1, "custom-action-details"], [1, "flaticon-writing"], [1, "flaticon-worldwide"], [1, "col-lg-12", "text-center"], ["routerLink", "/", 1, "default-btn", "border-radius", 2, "margin-bottom", "30px"], [1, "col-lg-4"], [1, "listing-section-right"], ["src", "assets/img/banner-home/bg_img3.jpg", "alt", ""], ["src", "assets/img/banner-home/bg_img2.jpg", "alt", ""]],
      template: function SearchResultsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "All Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Restaurants");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hotels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Go");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "1542 resulat(s) correspondant aux termes de recherche \"ttttttttt\" \"ttttttt\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "CISM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Agence de Communication ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 36, Rue Sylvanie,Akwa B.P 4462 Douala, Cameroun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " direction@zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " www.zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "(SIM-ZOOM) +237 652021280 | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " +237 652021280");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Plus d'info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Localisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "CISM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Agence de Communication ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " 36, Rue Sylvanie,Akwa B.P 4462 Douala, Cameroun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " direction@zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " www.zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "(SIM-ZOOM) +237 652021280 | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " +237 652021280");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Plus d'info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Localisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "CISM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Agence de Communication ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " 36, Rue Sylvanie,Akwa B.P 4462 Douala, Cameroun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " direction@zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " www.zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "(SIM-ZOOM) +237 652021280 | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " +237 652021280");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Plus d'info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Localisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "CISM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Agence de Communication ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " 36, Rue Sylvanie,Akwa B.P 4462 Douala, Cameroun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " direction@zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " www.zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "(SIM-ZOOM) +237 652021280 | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " +237 652021280");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Plus d'info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, " Localisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "CISM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Agence de Communication ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " 36, Rue Sylvanie,Akwa B.P 4462 Douala, Cameroun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " direction@zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " www.zoom-info.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "(SIM-ZOOM) +237 652021280 | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " +237 652021280");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Plus d'info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Localisation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Afficher plus ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".custom-banner-list[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 25px 30px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n  position: relative;\n  bottom: -40px;\n  border-radius: 10px;\n  margin-bottom: 40px;\n}\n\n.custom-listing[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 20px 20px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n  z-index: 1;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  flex-wrap: inherit;\n}\n\n.custom-listing[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 14px;\n  margin-right: 15px;\n}\n\n.custom-listing[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--mainColor);\n}\n\n.custom-listing[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon-color[_ngcontent-%COMP%] {\n  color: var(--optionalColor) !important;\n}\n\n.custom-listing[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  font-size: 14px;\n  color: var(--mainColor);\n  text-align: center;\n  border: 1px solid var(--mainColor);\n  border-radius: 50px;\n}\n\n.custom-carte-view[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n  color: var(--titleColor);\n  position: relative;\n  font-weight: 500;\n}\n\n.custom-carte-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  font-size: 14px;\n  color: var(--mainColor);\n}\n\n.custom-carte-view[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px;\n  font-size: 14px;\n  color: var(--paragraphColor);\n}\n\n.custom-carte-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--mainColor);\n}\n\n.sim-zoom[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--mainColor);\n}\n\n.custom-action-details[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--mainColor);\n  padding: 4px 7px;\n  margin-right: 7px;\n  border-radius: 50px;\n  border: 1px dashed var(--mainColor);\n  width: 148px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvc2VhcmNoLXJlc3VsdHMtcGFnZS9DOlxcVXNlcnNcXGFzZWNuYVxcRGVza3RvcFxcWk9PTVxcWm9vbS1XZWJDbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXHB1YmxpYy1wYWdlc1xcc2VhcmNoLXJlc3VsdHMtcGFnZVxcc2VhcmNoLXJlc3VsdHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvc2VhcmNoLXJlc3VsdHMtcGFnZS9zZWFyY2gtcmVzdWx0cy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREFJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QUREUTtFQUNJLHVCQUFBO0FDR1o7O0FERFE7RUFDSSxzQ0FBQTtBQ0daOztBRERRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0daOztBREdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0FSOztBREVJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0FSOztBREVJO0VBQ0ksdUJBQUE7QUNBUjs7QURNSTtFQUNJLHVCQUFBO0FDSFI7O0FET0E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wdWJsaWMtcGFnZXMvc2VhcmNoLXJlc3VsdHMtcGFnZS9zZWFyY2gtcmVzdWx0cy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1iYW5uZXItbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDI1cHggMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IC00MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tbGlzdGluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGZsZXgtd3JhcDogaW5oZXJpdDtcclxuICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29uLWNvbG9yIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLW9wdGlvbmFsQ29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAgdmFyKC0tbWFpbkNvbG9yKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jdXN0b20tY2FydGUtdmlldyB7XHJcbiAgICBoNCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10aXRsZUNvbG9yKTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7ICAgICAgIFxyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXJhZ3JhcGhDb2xvcik7XHJcbiAgICB9XHJcbiAgICBpe1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuLnNpbS16b29te1xyXG4gICAgaXtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLmN1c3RvbS1hY3Rpb24tZGV0YWlscyB7ICBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xyXG4gICAgcGFkZGluZzogNHB4IDdweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1tYWluQ29sb3IpO1xyXG4gICAgd2lkdGg6IDE0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4iLCIuY3VzdG9tLWJhbm5lci1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDI1cHggMzBweDtcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogLTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5jdXN0b20tbGlzdGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZsZXgtd3JhcDogaW5oZXJpdDtcbn1cbi5jdXN0b20tbGlzdGluZyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uY3VzdG9tLWxpc3RpbmcgbGkgaSB7XG4gIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xufVxuLmN1c3RvbS1saXN0aW5nIGxpIC5pY29uLWNvbG9yIHtcbiAgY29sb3I6IHZhcigtLW9wdGlvbmFsQ29sb3IpICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWxpc3RpbmcgbGkgYSB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW5Db2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5jdXN0b20tY2FydGUtdmlldyBoNCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB2YXIoLS10aXRsZUNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmN1c3RvbS1jYXJ0ZS12aWV3IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1tYWluQ29sb3IpO1xufVxuLmN1c3RvbS1jYXJ0ZS12aWV3IHAge1xuICBtYXJnaW46IDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tcGFyYWdyYXBoQ29sb3IpO1xufVxuLmN1c3RvbS1jYXJ0ZS12aWV3IGkge1xuICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbn1cblxuLnNpbS16b29tIGkge1xuICBjb2xvcjogdmFyKC0tbWFpbkNvbG9yKTtcbn1cblxuLmN1c3RvbS1hY3Rpb24tZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLW1haW5Db2xvcik7XG4gIHBhZGRpbmc6IDRweCA3cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgdmFyKC0tbWFpbkNvbG9yKTtcbiAgd2lkdGg6IDE0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResultsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-results-page',
          templateUrl: './search-results-page.component.html',
          styleUrls: ['./search-results-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-public-pages-public-pages-module-es5.js.map