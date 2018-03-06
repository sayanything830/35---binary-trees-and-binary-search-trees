This is a binary tree data structure. It has built in methods that you can run including:
    INSERT - allows you to insert a new value into the tree
    FIND - finds a given node in the tree
    REMOVE - removes given node
    ISBALANCED - returns true/false based on if the tree is balanced

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
