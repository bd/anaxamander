/**
 * Entry point for application
 *
 * */

// Read conf based on ENV
//   select parser
import { parser } from './parser';
import  minimist from 'minimist';
const options = {};
const args = minimist(process.argv.slice(2));

//   select projection
import { graph } from './projection';

const srcFile = args.src;

console.log("Anaxamander to analyze", srcFile,"with projection:", graph, "and parser: Babel" , parser.version, "" );

// parse
const AST = parser.transformFileSync(srcFile, options);

// project

// finalize
console.log("Anaxamander completed ... ");
