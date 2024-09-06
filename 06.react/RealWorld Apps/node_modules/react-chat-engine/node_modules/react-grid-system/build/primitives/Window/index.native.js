"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

var WindowRef = {
  current: null
};

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

WindowRef.current = {
  innerWidth: width,
  innerHeight: height,
  addEventListener: function addEventListener(___, callback) {
    _reactNative.Dimensions.addEventListener('change', function (_ref) {
      var window = _ref.window;
      var Window = WindowRef.current;
      Window.innerWidth = window.width;
      Window.innerHeight = window.height;
      callback();
    });
  },
  removeEventListener: function removeEventListener(___, callback) {
    _reactNative.Dimensions.removeEventListener('change', callback);
  }
};
var _default = WindowRef.current;
exports.default = _default;