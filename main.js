/**
 * Entry point for application
 *
 * */

// Read conf based on ENV
//   select parser
import { readFileSync } from 'fs';
import { parser } from './parser';
import  minimist from 'minimist';
const options = 'utf8';
const args = minimist(process.argv.slice(2));

//   select projection
import { graph } from './projection';

const srcFile = args.src;
let code = readFileSync(srcFile, options);
console.log("Anaxamander to analyze", srcFile,"with projection:", graph, "and parser: esdown"  );

// parse
// const AST = parser.transformFileSync(srcFile, options);
const AST = parser.parse(code);

// project

// finalize
console.log("Anaxamander completed ... ");
