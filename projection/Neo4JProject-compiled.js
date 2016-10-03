'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graph = undefined;

var _nodeNeo4j = require('node-neo4j');

var neo4j = _interopRequireWildcard(_nodeNeo4j);

var _conf = require('../conf');

var _conf2 = _interopRequireDefault(_conf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var graph = exports.graph = new neo4j(_conf2.default);

//# sourceMappingURL=Neo4JProject-compiled.js.map