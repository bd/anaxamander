import  neo4j  from 'node-neo4j';
import { CONNECTION_STRING }from '../conf';

export const graph = new neo4j(CONNECTION_STRING);