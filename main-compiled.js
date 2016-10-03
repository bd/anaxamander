'use strict';

var _parser = require('./parser');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _projection = require('./projection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Entry point for application
 *
 * */

// Read conf based on ENV
//   select parser
var options = {};
var args = (0, _minimist2.default)(process.argv.slice(2));

//   select projection


var srcFile = args.src;

console.log("Anaxamander to analyze", srcFile, "with projection:", _projection.graph, "and parser: Babel", _parser.parser.version, "");

// parse
var AST = _parser.parser.transformFileSync(srcFile, options);

// project

// finalize
console.log("Anaxamander completed ... ");

//# sourceMappingURL=main-compiled.js.map