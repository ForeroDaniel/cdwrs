// Vertical Mirror
function vertMirror(s) {
  return s.split("\n")
          .map(line => line.split("").reverse().join(""))  // Reverse each line
          .join("\n");  // Join the reversed lines
}

// Horizontal Mirror
function horMirror(s) {
  return s.split("\n")
          .reverse()  // Reverse the order of lines
          .join("\n");  // Join the reversed lines
}

// High-order function
function oper(fct, s) {
  return fct(s);  // Apply the function fct to the string s
}
