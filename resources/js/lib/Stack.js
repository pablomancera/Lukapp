class Stack extends SinglyLinkedList{
    constructor() {
        super();
    }
    push(key){
        this.popFront(key);
    }
    top(){
        return this.head.next.key;
    }
    pop(){
        let head = this.head.next;
        this.popFront();
        return head.key;
    }
}
