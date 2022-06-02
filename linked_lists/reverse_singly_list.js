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
module.exports = reverse;
