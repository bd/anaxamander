import  neo4j  from 'node-neo4j';
import { CONNECTION_STRING }from '../conf';

export const graph = new neo4j(CONNECTION_STRING);

export const project = (graph, AST) => {
//    naive method for exploration

    let query = `MERGE (_:${AST.type})-[:CONTAINS]->(_:${AST.program.type}) return *`
    graph.cypherQuery(query, (err, res)=>{
    if (err){
        throw err;
    } else {
        console.log(res);
    }
    });
};