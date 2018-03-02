'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(root) {
    this.root = root;
  }

  insert(node) {
    if(!this.root) {
      this.root = node;
    } else {
      this._insert(this.root, node);
    }
  }

  _insert(root, node) {
    if(node.value < root.value) {
      // go left
      if(!root.left) {
        root.left = node;
      } else {
        this._insert(root.left, node);
      }
    } else {
      // go right
      if(!root.right) {
        root.right = node;
      } else {
        this._insert(root.right, node);
      }
    }
  }

  find(value) {
    return this._find(this.root, value);
  }

  _find(root, value) {
    if(!root) return null;
    if(root.value === value) return root;
    if(root.value < value) return this._find(root.right, value);
    return this._find(root.left, value);
  }

  isBalanced(node) {
    let leftHeight, rightHeight;

    if(this.root === null) return true;

    leftHeight = this._height(node.left);
    rightHeight = this._height(node.right);

    if(Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right)) return true;

    return false;
  }

  _height(node) {
    if(node === null) return 0;

    return 1 + Math.max(this._height(node.left), this._height(node.right));
  }
}

module.exports.TreeNode = TreeNode;
module.exports.BST = BST;
