function Node(data) {
  this.data = data;
  this.next = null;
}

function getNth(node, index) {
  if (node != null)
    return index == 0 ? node : getNth(node.next, index - 1);
  else
    throw "invalid argument";  
}
