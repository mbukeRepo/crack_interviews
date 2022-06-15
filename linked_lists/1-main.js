const reverse = require('./reverse_singly_list');
const display = require('./display');
const ListNode = require('./ListNode');
const mnReversal = require('./mn_reversal');

// testing reversing singly linked list
const n1 = new ListNode(1, null);
const n2 = new ListNode(2, null);
const n3 = new ListNode(3, null);
const n4 = new ListNode(4, null);
const n5 = new ListNode(5, null);
const n6 = new ListNode(6, null);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
let head = n1;

//display(head);
//head = reverse(head);
//display(head);

// testing m, n -reversal
display(head);
head = mnReversal(head, 1, 5);
display(head);
