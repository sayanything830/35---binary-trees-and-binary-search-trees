'use strict';

const {BST} = require('./lib/bst');
const {BinaryTree, TreeNode} = require('./lib/binary-tree');

let bst = new BST();
bst.insert(new TreeNode(5));
bst.insert(new TreeNode(2));
bst.insert(new TreeNode(8));
bst.insert(new TreeNode(16));
bst.insert(new TreeNode(25));
bst.insert(new TreeNode(50));
bst.insert(new TreeNode(7));


console.dir(bst, {depth: null});
bst.remove(2);
console.dir(bst, {depth: null});
