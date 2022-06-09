// @desc: reverses the linked list given m-n interval
// space: O(1)
// time: O(n)
// @params: 
//    head: pointer to the head pointer
//    m: left position
//    n: right position
// @returns: the head of the new list

const mnReversal = (head, m, n) => {
  let start = head, currNode = head, currPos = 1, newList = null, tail = null;
  while (currPos < m) {
    start = currNode;
    currNode = currNode.next;
    currPos++;
  }
  tail = currNode;
  while (currPos >= m && currPos < n + 1) {
    let nextNode = currNode.next;
    currNode.next = newList;
    newList = currNode;
    currNode = nextNode;
    currPos++;
  }
  start.next = newList;
  tail.next = currNode;
  if (m > 1)
    return head;
  return newList;
};

module.exports = mnReversal;
