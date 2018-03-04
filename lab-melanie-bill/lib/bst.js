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
    if(!root) return null;
    let removed = this.find(value);
    console.log('removed',removed);
    let smallest = this._findSmallest(removed);
    console.log('smallest',smallest);
    let parent = this._findParent(root, value);
    console.log('parent',parent);
    let left = removed.left;
    let right = removed.right;
    if (parent.right.value === value) parent.right = smallest;
    if (parent.left.value === value) parent.left = smallest;
    smallest.left = left;
    smallest.right = right;
  }

  _findParent(root, value) {
    // console.log('findparent',root);
    if (root.left.value === value || root.right.value === value) return root;
    if(root.value < value) return this._findParent(root.right, value);
    return this._findParent(root.left, value);

  }
  _findSmallest(node){
    return node.left ? this._findSmallest(node.left) : node;
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
