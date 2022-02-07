class BinaryNode{
    constructor(x=null,l=null,r=null) {
        this.element = x;
        this.left = l;
        this.right = r;
    }
}
class BinarySearchTree{
    constructor() {
        this.root = null;
    }

    makeEmpty(){
        this.root = null;
    }

    isEmpty(){
        return (this.root == null);
    }

    insert(x,node){
        if(node == null){
            return new BinaryNode(x,null,null);
        }
        let val = x.localeCompare(node.element);
        if(val<0){
            node.left = this.insert(x,node.left);
        }else if(val>0){
            node.right = this.insert(x,node.right);
        }
        return node;
    }
    remove(x,node){
        if (node == null){
            return node;
        }
        let val = x.localeCompare(node.element);
        if (val<0){
            node.left = this.remove(x,node.left);
        }else if(val>0){
            node.right = this.remove(x,t.right);
        }else if(node.left!=null && node.right!=null){
            node.element = this.findMin(node.right).element;
            node.right = this.remove(node.element,node.right);
        }else{
            node = (node.left!=null) ? node.left : node.right;
        }
        return node;
    }

    findMin(node){
        if (node == null){
            return null;
        } else if(node.left == null){
            return node;
        }
        return this.findMin(node.left);
    }

    findMax(node){
        if (node == null){
            return null;
        }else if(node.right == null){
            return node;
        }
        return this.findMax(node.right);
    }

    contains(x,node){
        if (node == null){
            return false;
        }
        let val = x.localeCompare(node.element);
        if (val<0){
            return this.contains(x,node.left);
        }else if(val>0){
            return this.contains(x,node.right);
        }else{
            return true; //Match
        }
    }

    height(node){
        if(node == null){
            return -1;
        }else{
            return 1+Math.max(this.height(node.left),this.height(node.right));
        }
    }

}
