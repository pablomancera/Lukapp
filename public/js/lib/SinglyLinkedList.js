/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/js/lib/SinglyLinkedList.js ***!
  \**********************************************/
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = /*#__PURE__*/_createClass(function Node(data) {
  _classCallCheck(this, Node);

  this.key = data;
  this.next = null;
});

window.SinglyLinkedList = /*#__PURE__*/function () {
  function SinglyLinkedList() {
    _classCallCheck(this, SinglyLinkedList);

    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.key = null;
    this.head.next = null;
    this.tail.key = null;
    this.tail.next = null;
  }

  _createClass(SinglyLinkedList, [{
    key: "pushFront",
    value: function pushFront(key) {
      if (this.nullKey(key)) {
        // Customer is trying to add a null value to the list
        return;
      }

      var newNode = new Node(key);

      if (this.empty()) {
        // If the list is empty we set the newNode as the head and tail of the list
        this.head.next = newNode;
        this.head.tail = newNode;
      } else {
        // Cause the list is not empty it should have a head
        newNode.next = this.head.next; // So we know that the actual Head will become the second on the list

        this.head.next = newNode; // And the newNode becomes the new Head
      }
    }
  }, {
    key: "topFront",
    value: function topFront() {
      if (this.empty()) {
        // We verify if the list is empty
        return "List is Empty";
      }

      return this.head.next.key; // In case is not empty we return the key on the node pointed by the head
    }
  }, {
    key: "popFront",
    value: function popFront() {
      if (this.empty()) {
        // We verify if the list is empty
        return "It's not possible to remove because list is empty";
      }

      if (this.head.next === this.tail.next) {
        // If the head is the same tail that means we just have 1 element
        this.head.next = null; // Then if we are removing that element the list will be empty

        this.tail.next = null; // So both head and tail must point to null
      } else {
        // If not we have more than 1 element
        this.head.next = this.head.next.next; // We just need to change the head to the next node
      }
    }
  }, {
    key: "pushBack",
    value: function pushBack(key) {
      if (this.nullKey(key)) {
        // Customer is trying to add a null value to the list
        return;
      }

      var newNode = new Node(key);

      if (this.empty()) {
        // If the list is empty we set the newNode
        this.head.next = newNode; // as the head

        this.head.next = newNode; // and tail of the list
      } else {
        // Cause the list is not empty it should have a tail
        this.tail.next.next = newNode; // The last tail must point to the newNode

        this.tail.next = newNode; // The newNode will be the tail now
      }
    }
  }, {
    key: "topBack",
    value: function topBack() {
      if (this.empty()) {
        // We verify if the list is empty
        return "List is Empty";
      }

      return this.tail.next.key; // If not we get the key of the node pointed by the tail
    }
  }, {
    key: "popBack",
    value: function popBack() {
      if (this.empty()) {
        return "It's not possible to remove because list is Empty";
      }

      if (this.head.next === this.tail.next) {
        // If there's only 1 item on the list
        this.head.next = null; // We point the head to null

        this.tail.next = null; // And the same with the tail

        return;
      } // If there's more than 1 item


      var node = this.head.next;

      while (node.next.next != null) {
        // We need to find the node behind to the tail
        node = node.next;
      }

      node.next = null; // Once we find it we need to point to null with that node

      this.tail.next = node;
    }
  }, {
    key: "find",
    value: function find(key) {
      var node = this.head.next;

      while (node != null) {
        // While the node exists
        if (node.key === key) {
          // We verify if the key is the same
          return true; // If yes return true
        }

        node = node.next; // If not keep going.
      } // If the node is null it's because we got to the final


      return false;
    }
  }, {
    key: "erase",
    value: function erase(key) {
      var node = this.head.next;

      if (this.head.next.key === key) {
        this.popFront();
        return; // If the key is at the head we just run a PopFront() function
      } // If is not the head, we need to see the list item by item


      while (!node.next.key === key) {
        // The key of the next node is the key we are looking for?
        node = node.next; // 1) No: keep looking

        if (node.next == null) {
          // If the next node is null we are at final and without the key
          return "Key is not in the list";
        }
      } // 2) Yes: you found the key


      if (node.next === tail.next && this.tail.next.key === key) {
        // If the node is pointing to the tail
        this.popBack();
        return; // and the key is in the tail we just run a PopBack() function
      } // If not, erase the item by changing the pointer of the node before the item to the node after it


      node.next = node.next.next;
    }
  }, {
    key: "empty",
    value: function empty() {
      return this.head.next === null; // If head is null list is empty
    }
  }, {
    key: "addBefore",
    value: function addBefore(node, key) {
      if (this.nullKey(key)) {
        return;
      } // Customer is trying to add a null value to the list


      if (this.empty()) {
        // If the list is empty we add the value.
        console.log("Node " + node + " is not in list, because it's empty so we are adding " + key + " to the list");
        this.pushBack(key);
        return;
      }

      if (this.head.next === node) {
        // If the node is the head we just run a PushFront() function
        this.pushFront(key);
        return;
      }

      var node2 = this.head.next;

      while (node2.next != null) {
        // We need to see the list item by item and we are verifying 1 node after
        if (!node2.next === node) {
          // to keep the node before the one we are looking for
          node2 = node2.next; //If is not the node we want keep going
        } else {
          // If is the node
          var newNode = new Node(key); // Create a new node with the new key

          newNode.next = node; // newNode has to point to the node we were looking for

          node2.next = newNode; // The node before the one we were searching needs to point to the new one

          return;
        }
      }

      console.log("Node is not in the list");
    }
  }, {
    key: "addAfter",
    value: function addAfter(node, key) {
      if (this.nullKey(key)) {
        return;
      } // Customer is trying to add a null value to the list


      if (this.empty()) {
        // If the list is empty we add the value.
        console.log("Node " + node + " is not in list, because it's empty so we are adding " + key + " to the list");
        this.pushBack(key);
        return;
      }

      var node2 = this.head.next;

      while (node2 != null) {
        // While the node exist
        if (!node2 === node) {
          // If is different for the node we are searching
          node2 = node2.next; // Keep going
        } else {
          // Bingo! you have the node
          if (node === this.tail.next) {
            this.pushBack(key);
            return; // If the node is the tail just run a PushBack() function
          }

          var newNode = new Node(key); // Create new node

          newNode.next = node2.next; // newNode points to the node next to the node we were searching

          node2.next = newNode; // The node we were looking for points to the newNode

          return;
        }
      }

      console.log("Node is not in the list");
    }
  }, {
    key: "size",
    value: function size() {
      var node = this.head.next;
      var count = 0;

      while (node != null) {
        count++;
        node = node.next;
      }

      return count;
    }
  }, {
    key: "nullKey",
    value: function nullKey(key) {
      if (key == null) {
        // Customer is trying to add a null value to the list
        window.alert("It's not possible to add a null value");
        return true;
      }

      return false;
    }
  }, {
    key: "print",
    value: function print() {
      var printNode = this.head.next;

      for (var j = 0; j < this.size(); j++) {
        if (j !== this.size() - 1) {
          console.log(printNode.key + " ");
        } else {
          if (count === cases - 1) {
            console.log(printNode.key);
          } else {
            console.log(printNode.key + "\n");
          }
        }

        printNode = printNode.next;
      }
    }
  }]);

  return SinglyLinkedList;
}();
/******/ })()
;