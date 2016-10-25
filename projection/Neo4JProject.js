import  neo4j  from 'neo4j';
import { CONNECTION_STRING } from '../conf';
import { translate } from './neo4JSyntaxHandlers';
import { isArray, map } from 'lodash';

export const graph = new neo4j.GraphDatabase(CONNECTION_STRING);

/*
* Produces a Neo4J graph structure describing an abstract syntax tree
*
* @param graph -- the Neo4J connection
* @param AST -- an (esprima) Abstract Syntax Tree to graph
* */
export const project = (graph, AST) => {
    return translate(AST);
};

