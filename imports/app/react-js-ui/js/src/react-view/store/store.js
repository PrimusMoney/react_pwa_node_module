"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.persistor = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxPersist = require("redux-persist");

var _autoMergeLevel = _interopRequireDefault(require("redux-persist/lib/stateReconciler/autoMergeLevel2"));

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _rootreducer = _interopRequireDefault(require("@primusmoney/react_client_wallet/imports/view/reducers/rootreducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var migrations = {};
var persistConfig = {
  key: 'root',
  version: 1,
  storage: _storage["default"],
  stateReconciler: _autoMergeLevel["default"],
  // see "Merge Process" section for details.
  migrate: (0, _reduxPersist.createMigrate)(migrations, {
    debug: false
  })
};
var pReducer = (0, _reduxPersist.persistReducer)(persistConfig, _rootreducer["default"]);
var initialState = {};
var middlewares = [_reduxThunk["default"]];
var store = (0, _redux.createStore)(pReducer, initialState, _redux.applyMiddleware.apply(void 0, middlewares));
exports.store = store;
var persistor = (0, _reduxPersist.persistStore)(store);
exports.persistor = persistor;