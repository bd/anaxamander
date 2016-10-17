// see https://github.com/estree/estree/blob/master/es2015.md

export const Program = (node, parent = null) => {
    assert(node.type === 'Program');
};

export const IfStatement = (node, parent) => {
    assert(node.type === 'IfStatement');
};

export const ImportDeclaration = (node, parent) => {
    assert(node.type === 'ImportDeclaration');
};

export const ExpressionStatement = (node, parent) => {
    assert(node.type === 'ExpressionStatement');
};

export const VariableDeclaration = (node, parent) => {
    assert(node.type === 'VariableDeclaration ');
};

export const BinaryExpression = (node, parent) => {
    assert(node.type === 'BinaryExpression ');
};

export const Literal = (node, parent) => {
    assert(node.type === 'Literal ');
};

export const MemberExpression = (node, parent) => {
    assert(node.type === 'MemberExpression ');
};

export const BlockStatement = (node, parent) => {
    assert(node.type === 'BlockStatement ');
};

export const CallExpression = (node, parent) => {
    assert(node.type === 'CallExpression ');
};


export const Identifier = (node, parent) => {
    assert(node.type === 'Identifier');
};

export const VariableDeclarator = (node, parent) => {
    assert(node.type === 'VariableDeclarator');
};

export const ImportSpecifier = (node, parent) => {
    assert(node.type === 'ImportSpecifier')
};

export const ImportDefaultSpecifier = (node, parent) => {
    assert(node.type === 'ImportDefaultSpecifier')
};

export const ExportNamedDeclaration = (node, parent) => {
    assert(node.type === 'ExportNamedDeclaration')
};

export const ExportSpecifier = (node, parent) => {
    assert(node.type === 'ExportSpecifier')
};

export const ExportDefaultDeclaration = (node, parent) => {
    assert(node.type === 'ExportDefaultDeclaration')
};

export const ExportAllDeclaration = (node, parent) => {
    assert(node.type === 'ExportAllDeclaration')
};

export const Class = (node, parent) => {
    assert(node.type === 'Class');
};

export const ClassBody = (node, parent) => {
    assert(node.type === 'ClassBody');
};

export const MethodDefinition = (node, parent) => {
    assert(node.type === 'MethodDefinition');
};

export const ClassDeclaration = (node, parent) => {
    assert(node.type === 'ClassDeclaration');
};
export const ClassExpression = (node, parent) => {
    assert(node.type === 'ClassExpression');
};

export const MetaProperty = (node, parent) => {
    assert(node.type === 'MetaProperty');
};

