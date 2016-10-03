'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _development = require('./development');

Object.keys(_development).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _development[key];
    }
  });
});

//# sourceMappingURL=index-compiled.js.map