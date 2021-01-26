export default class BST {
    constructor() {
        this.root = null;
    }

    // insert(node) {
    //   if (this.root === null) {
    //       this.root = node;
    //   } else {
    //       this.root.left = node;
    //   }
    // }
 
    // insert(node) {
    //   if (this.root === null) {
    //     this.root = node;
    //   } else if (this.root.data > node.data){
    //     this.root.left = node;
    //   } else if (this.root.data < node.data) {
    //     this.root.right = node;
    //   }
    // }

    insert(insertedNode) {
      if (this.root === null) {
        this.root = insertedNode;
      } else {
        let currentNode = this.root;
        while (true) {
          if (currentNode.data > insertedNode.data) {
            if ()
          } 
        }
      }
    }
}