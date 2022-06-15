/**
* cycleDetection: returns the position where the cycle starts otherwise false
* @params:
*   head: the head of the linked list
* @returns:
*   the position where the cycle starts
* @time: O(n)
* @space: O(1)
*/
const cycleDetection = head => {
  let tortoise = head, hare = head;
  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;
    if (hare == null || hare.next == null)
      return false;
    hare = hare.next;
    if (hare == tortoise)
      break;
  }
  let pos = 0, p1 = head, p2 = tortoise;
  while(p1 !== p2) {
   p1 = p1.next;
   p2 = p2.next;
   pos++;
  }
  return pos;
};
module.exports = cycleDetection;
