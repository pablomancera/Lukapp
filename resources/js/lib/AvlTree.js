class AvlNode{
    constructor(x=null, l=null,r=null, h) {
        this.element = x;
        this.left = l;
        this.right= r;
        this.height = h;
    }
}
class AvlTree{

    constructor(rt=null) {
        this.root = rt;
        this.possibleNodes = 0;
    }

    updateHeight(node) {
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    height(node) {
        return node == null ? -1 : node.height;
    }

    getBalance(node){
        return (node == null) ? 0 : this.height(node.right) - this.height(node.left);
    }

    rotateRight(node){
        let x = node.left;
        let z = x.right;
        x.right = node;
        node.left = z;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    rotateLeft(node){
        let x = node.right;
        let z = x.left;
        x.left = node;
        node.right = z;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    }

    rebalance(node){
        this.updateHeight(node);
        let balance = this.getBalance(node);
        if (balance > 1) {
            if (this.height(node.right.right) > this.height(node.right.left)) {
                node = this.rotateLeft(node);
            } else {
                node.right = this.rotateRight(node.right);
                node = this.rotateLeft(node);
            }
        } else if (balance < -1) {
            if (this.height(node.left.left) > this.height(node.left.right))
                node = this.rotateRight(node);
            else {
                node.left = this.rotateLeft(node.left);
                node = this.rotateRight(node);
            }
        }
        return node;
    }

    insert(key, node){
        if(node === undefined){
            this.root = this.insert(key,this.root);
        }else{
            if (node == null) {
                return new AvlNode(key);
            }
            let val = key.localeCompare(node.element);
            if (val<0) {
                node.left = this.insert(key,node.left);
            } else if (val>0) {
                node.right = this.insert(key, node.right);
            } else {
                console.log("duplicate Key!");
            }
            return this.rebalance(node);
        }
    }

    delete(key,node){
        if(node === undefined){
            this.root = this.delete(key,this.root);
        }else{
            if (node == null) {
                return node;
            }
            let val = key.localeCompare(node.element);
            if (val<0) {
                node.left = this.delete(key, node.left);
            } else if (val>0) {
                node.right = this.delete(key, node.right);
            } else {
                if (node.left == null || node.right == null) {
                    node = (node.left == null) ? node.right : node.left;
                } else {
                    let mostLeftChild = this.findMinAvl(node.right);
                    node.element = mostLeftChild.element;
                    node.right = this.delete(node.element, node.right);
                }
            }
            if (node != null) {
                node = this.rebalance(node);
            }
            return node;
        }
    }

    findMinAvl(node) {
        if(node === undefined){
            return this.findMinAvl(this.root).element;
        }else{
            if (node == null){
                return null;
            } else if(node.left == null){
                return node;
            }
            return this.findMinAvl(node.left);
        }
    }

    findMaxAvl(node){
        if(node === undefined){
            return this.findMaxAvl(this.root).element;
        }else{
            if (node == null){
                return null;
            }else if(node.right == null){
                return node;
            }
            return this.findMaxAvl(node.right);
        }
    }

    containsAvl(key,node){
        if(node === undefined){
            return this.containsAvl(key,this.root);
        }else{
            if (node == null){
                return false;
            }
            let val = key.localeCompare(node.element);
            if (val<0){
                return this.containsAvl(key,node.left);
            }else if(val>0){
                return this.containsAvl(key,node.right);
            }else{
                return true; //Match
            }
        }
    }
    isEmptyAvl(){
        return (this.root==null);
    }
}
