function push(head, data) {
  return new Node(data, head);
}

function buildOneTwoThree() {
  return [3, 2, 1].reduce( (head, data) => push(head, data), null );
}

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
