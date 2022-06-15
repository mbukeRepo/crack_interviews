const cycleDetection = require("./cycle_detection");
const ListNode = require("./ListNode");

const n1 = new ListNode(1, null);
const n2 = new ListNode(2, null);
const n3 = new ListNode(3, null);
const n4 = new ListNode(4, null);
const n5 = new ListNode(5, null);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n3;

console.log(cycleDetection(n1))

n1.next = n2;
n2.next = n1;
console.log(cycleDetection(n1));
