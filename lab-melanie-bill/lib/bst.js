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

  remove(value) {
    return this._remove(this.root, value);
  }

  _remove(root, value) {
    if (root) {
      if (value < root.value) {
        root.left = this._remove(root.left, value);
      } else if (value > root.value) {
        root.right = this._remove(root.right, value);
      } else if (root.left && root.right) {
        root.value = this._findSmallest(root.right);
        root.right = this._remove(root.right, root.value);
      } else {
        root = root.left || root.right;
      }
    }
    return root;
  }

  _findSmallest(node){
    return node.left ? this._findSmallest(node.left) : node.value;
  }

  isBalanced(node) {
    let leftHeight, rightHeight;

    if(node === null) return true;

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
