const reverse = require('./reverse_singly_list');
const display = require('./display');
const ListNode = require('./ListNode');

// testing reversing singly linked list
const n1 = new ListNode(1, null);
const n2 = new ListNode(2, null);
const n3 = new ListNode(3, null);
n1.next = n2;
n2.next = n3;
let head = n1;

display(head);
head = reverse(head);
display(head);

// testing m, n -reversal
