'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LayerForm = require('./components/LayerForm');

var _loop = function _loop(_key2) {
  if (_key2 === "default") return 'continue';
  Object.defineProperty(exports, _key2, {
    enumerable: true,
    get: function get() {
      return _LayerForm[_key2];
    }
  });
};

for (var _key2 in _LayerForm) {
  var _ret = _loop(_key2);

  if (_ret === 'continue') continue;
}