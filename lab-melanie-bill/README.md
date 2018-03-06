# Binary Trees and Binary Search Trees

This repository contains data structures for `binary trees` and `binary search trees`.

`Binary Tree` allows a user to traverse a tree using three traversal methods:
* `inOrderTraversal` - returns an array and console logs each node as it occurs in-order (left, root, right). Big O notation: O(n)
* `preOrderTraversal` - returns an array and console logs each node as is occurs pre-order (root, left, right). Big O notation: O(n)
* `postOrderTraversal` - returns an array and console logs each node as it occurs post-order (left, right, root). Big O notation: O(n)

`Binary Search Tree` has built in methods including:
* `insert` - allows you to insert a new node into the tree. Big O notation: O(log n)
* `find` - finds a given node in the tree. Big O notation: O(log n)
* `remove` - removes given node from the tree and re-assigns left and right branches. Big O notation: O(log n)
* `isBalanced` - returns true/false based on if the tree is balanced. Big O notation: O(n)



To utilize these methods run this application via the index.js. You can utilize the methods with the following syntax.
```
// create a new tree
let myTree = new BST;

//insert a node into the tree (with given value)
myTree.insert(new TreeNode(2))

// find a tree node based on a value
myTree.find(2)

// remove a tree node based on a value
myTree.remove(2)

// find out if the tree is balanced
myTree.isBalanced()
```

