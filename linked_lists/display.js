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

module.exports = display;
