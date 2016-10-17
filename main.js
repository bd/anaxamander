/**
 * Entry point for application
 *
 * */

// Read conf based on ENV
//   select parser
import { readFileSync } from 'fs';
import minimist from 'minimist';

const options = 'utf8';
const args = minimist(process.argv.slice(2));
const parserName = args.parser || 'esprima';
const parser = require(parserName);

//   select projection
import { graph, project } from './projection';

const srcFile = args.src;
let code = readFileSync(srcFile, options);
console.log("Anaxamander to analyze", srcFile,"with projection:", graph.url, `and parser: ${parserName}`);

// parse
const syntaxOptions = {
    loc: false,
    range: false,
    tokens: false,
    comment: false,
    tolerant: false,
    attachComment: false,
    sourceType: 'module',
};
const AST = parser.parse(code, syntaxOptions);
console.log(AST);
project(graph, AST);
// project
//    define visitor functions
//    define visitor
// visit root --> graphQL transformation

// run gql queries to produce graph

// finalize
console.log("Anaxamander completed ... ");
