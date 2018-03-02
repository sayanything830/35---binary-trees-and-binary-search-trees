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

// console.log(bst.find(5));
// console.log(bst.find(16));
// console.log(bst.find(100));
console.log(bst.isBalanced(bst.find(5)));


// let one = new TreeNode(1);
// let two = new TreeNode(2);
// let three = new TreeNode(3);
// let four = new TreeNode(4);
// let five = new TreeNode(5);
// let six = new TreeNode(6);
// let seven = new TreeNode(7);
// let eight = new TreeNode(8);
// let nine = new TreeNode(9);

// let binaryTree = new BinaryTree();
// binaryTree.root = one;

// one.left = two;
// one.right = three;

// two.left = six;

// three.left = four;
// three.right = five;

// six.right = seven;

// seven.left = eight;
// seven.right = nine;

// console.log('in order', binaryTree.inOrderTraversal());
// console.log('');
// console.log('pre order', binaryTree.preOrderTraversal());
// console.log('');
// console.log('post order', binaryTree.postOrderTraversal());

