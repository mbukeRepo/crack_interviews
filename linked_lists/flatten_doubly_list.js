const {multiLinkedList, printListMulti, printList } = require("./flatten_utilities");

// flatten: flattens a doubly Linked list
// @params:
//   head: the pointer to the first node
// @returns: head of the flattened list

const flatten = (head) => {
  if (!head) return head;
  let currNode = head;
  while(currNode !== null){
    if (currNode.child === null){
      currNode = currNode.next;
    } else {
      let tail = currNode.child;
      while(tail.next !== null)
        tail = tail.next;
      tail.next = currNode.next;
      if(tail.next !== null)
        tail.next.prev = tail;
      currNode.next = currNode.child;
      currNode.next.prev = currNode;
      currNode.child = null;
    }
  }
  return head;
};


printListMulti(multiLinkedList);
console.log("after flatten");
printList(flatten(multiLinkedList));
