// @desc: reverses the linked list given head pointer
// @params: 
//    head: pointer to the head node
// returns : new head

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
