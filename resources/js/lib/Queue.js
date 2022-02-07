class Queue extends  SinglyLinkedList{
    constructor() {
        super();
    }
    enqueue(key){
        this.pushBack(key);
    }
    dequeue(){
        let head = this.head.next;
        this.popFront();
        return head.key;
    }
}
