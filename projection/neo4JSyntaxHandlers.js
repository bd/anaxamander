import { map } from 'lodash';
import { project, graph } from './Neo4JProject';
import assert from 'assert';

export const translate = (AST, parent, accumulator=[]) => {
    //base cases:
    if (!AST) return accumulator;

    //recursive case:
    if (isArray(AST)){
        accumulator.concat(map(AST, node => translate(translator[node.type](AST, parent))));
    } else{
        assert(AST.type, `Neo4JProject:: Invalid AST: must contain a valid "type" : ${AST}`);
        accumulator.push(translate(translator[AST.type](AST)));
        return accumulator;
    }
};

// see https://github.com/estree/estree/blob/master/es2015.md


export const Program = async(node, parent = null) => {
    assert(node.type === 'Program');
    // create node Program
    const result = await graph.cypher({
        query: 'CREATE (program:Program {AST:{node}}) RETURN program',
        params: {node}
    });
    assert(result && result[0], `Failed to create Program Node`);
    // create Program dependent relations for the children of the new node
    return map(node.body, child => {
        return translate(graph, result[0], child);
    });
};

export const IfStatement = async(node, parent) => {
    assert(node.type === 'IfStatement');
    assert(parent && parent.type,
        `IfStatement cannot be absolute the root of an AST: invalid parent or parent.type: ${parent.type}`);
    try {
        const result = await graph.cypher({
            query: 'MATCH (n:{parentType})' +
            'WHERE ID(n) = {parentID}' +
            'CREATE (n)-[contains]->(is:IfStatement {AST:{node}}' +
            'CREATE (is)-[:Test]->(t:{testType} )' +
            'CREATE (is)-[:Consequent]->(c:{consequentType})' +
            'CREATE (is)-[:Alternate]->(a:{alternateType})' +
            'RETURN is, t, c, a',
            params: {
                node,
                testType: node.test.type,
                consequentType: node.consequent.type,
                alternateType: node.alternate.type
            }
        });
        const [ conditional, test, consequent, alternate ] = result;
        //TODO: refactor to create nodes only in  own handler
    }catch (e){
        throw new Error(`Unable to write IfStatement to graph: ${parent}`, e);
    }


};

export const ImportDeclaration = (node, parent) => {
    assert(node.type === 'ImportDeclaration');
    return `${node.type} not yet implemented`;

};

export const ExpressionStatement = (node, parent) => {
    assert(node.type === 'ExpressionStatement');
    return `${node.type} not yet implemented`;
};

export const VariableDeclaration = (node, parent) => {
    assert(node.type === 'VariableDeclaration ');
    return `${node.type} not yet implemented`;
};

export const BinaryExpression = (node, parent) => {
    assert(node.type === 'BinaryExpression ');
    return `${node.type} not yet implemented`;
};

export const Literal = (node, parent) => {
    assert(node.type === 'Literal ');
    return `${node.type} not yet implemented`;
};

export const MemberExpression = (node, parent) => {
    assert(node.type === 'MemberExpression ');
    return `${node.type} not yet implemented`;
};

export const BlockStatement = (node, parent) => {
    assert(node.type === 'BlockStatement ');
    return `${node.type} not yet implemented`;
};

export const CallExpression = (node, parent) => {
    assert(node.type === 'CallExpression ');
    return `${node.type} not yet implemented`;
};


export const Identifier = (node, parent) => {
    assert(node.type === 'Identifier');
    return `${node.type} not yet implemented`;
};

export const VariableDeclarator = (node, parent) => {
    assert(node.type === 'VariableDeclarator');
    return `${node.type} not yet implemented`;
};

export const ImportSpecifier = (node, parent) => {
    assert(node.type === 'ImportSpecifier');
    return `${node.type} not yet implemented`;
};

export const ImportDefaultSpecifier = (node, parent) => {
    assert(node.type === 'ImportDefaultSpecifier');
    return `${node.type} not yet implemented`;
};

export const ExportNamedDeclaration = (node, parent) => {
    assert(node.type === 'ExportNamedDeclaration');
    return `${node.type} not yet implemented`;
};

export const ExportSpecifier = (node, parent) => {
    assert(node.type === 'ExportSpecifier');
    return `${node.type} not yet implemented`;
};

export const ExportDefaultDeclaration = (node, parent) => {
    assert(node.type === 'ExportDefaultDeclaration');
    return `${node.type} not yet implemented`;
};

export const ExportAllDeclaration = (node, parent) => {
    assert(node.type === 'ExportAllDeclaration');
    return `${node.type} not yet implemented`;
};

export const Class = (node, parent) => {
    assert(node.type === 'Class');
    return `${node.type} not yet implemented`;
};

export const ClassBody = (node, parent) => {
    assert(node.type === 'ClassBody');
    return `${node.type} not yet implemented`;
};

export const MethodDefinition = (node, parent) => {
    assert(node.type === 'MethodDefinition');
    return `${node.type} not yet implemented`;
};

export const ClassDeclaration = (node, parent) => {
    assert(node.type === 'ClassDeclaration');
    return `${node.type} not yet implemented`;
};
export const ClassExpression = (node, parent) => {
    assert(node.type === 'ClassExpression');
    return `${node.type} not yet implemented`;
};

export const MetaProperty = (node, parent) => {
    assert(node.type === 'MetaProperty');
    return `${node.type} not yet implemented`;
};

