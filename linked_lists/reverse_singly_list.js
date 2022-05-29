const ListNode = require("./ListNode");

// returns : new head
// @desc: reverses the linked list given head pointer

const reverse = (head) => {
  let curr = head;
  let prev = null;
  while(curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next
  }

  return prev;
}

// @desc: displays the linked list given head pointer

const display = (head) => {
  let currNode = head;
  console.log("Linked list ===");
  while(currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log("===============");
}


// testing
const n1 = new ListNode(1, null);
const n2 = new ListNode(2, null);
const n3 = new ListNode(3, null);
n1.next = n2;
n2.next = n3;
let head = n1;

display(head);
head = reverse(head);
display(head);
