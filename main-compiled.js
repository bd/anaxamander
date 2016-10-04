'use strict';

var _fs = require('fs');

var _parser = require('./parser');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _projection = require('./projection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = 'utf8'; /**
                       * Entry point for application
                       *
                       * */

// Read conf based on ENV
//   select parser

var args = (0, _minimist2.default)(process.argv.slice(2));

//   select projection


var srcFile = args.src;
var code = (0, _fs.readFileSync)(srcFile, options);
console.log("Anaxamander to analyze", srcFile, "with projection:", _projection.graph, "and parser: esdown");

// parse
// const AST = parser.transformFileSync(srcFile, options);
var AST = _parser.parser.parse(code);

// project

// finalize
console.log("Anaxamander completed ... ");

//# sourceMappingURL=main-compiled.js.map