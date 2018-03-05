'use strict';

const {BST, TreeNode} = require('../lib/bst');

describe('Binary Search Tree', function() {
  let bst = new BST();
  bst.insert(new TreeNode(5));
  bst.insert(new TreeNode(2));
  bst.insert(new TreeNode(8));
  bst.insert(new TreeNode(16));
  describe('Insert Method', () => {
    it('should have a root node', () => {
      expect(bst.root.value).toEqual(5);
    });
    it('should have  a left and right branch', () => {
      expect(bst.root.left).toBeTruthy();
      expect(bst.root.right).toBeTruthy();
    });
    it('should insert higher value nodes on the right branch', () => {
      expect(bst.root.right.value).toEqual(8);
    });
  });
  describe('Find Method', () => {
    it('should return a node object', () => {
      expect(bst.find(8)).toHaveProperty('value');
      expect(bst.find(8)).toHaveProperty('left');
      expect(bst.find(8)).toHaveProperty('right');
    });
    it('should return null if the value does not exist in the tree', () => {
      expect(bst.find(10)).toBeNull();
    });
  });
  describe('Is Balanced Method', () => {
    it('should return true if an entire binary search tree is balanced', () => {
      expect(bst.isBalanced(bst.find(5))).toBe(true);
    });
    it('should return false if the tree is not balanced', () => {
      bst.insert(new TreeNode(25));
      bst.insert(new TreeNode(50));
      expect(bst.isBalanced(bst.find(5))).toBe(false);
    });
    it('should return true if tree is empty', () => {
      let empty = new BST();
      expect(empty.isBalanced({value: null, left: null, right: null})).toBe(true);
    });
  });
});
