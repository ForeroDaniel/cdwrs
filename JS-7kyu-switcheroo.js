function switcheroo(x){
  return x.replace(/a/g, 'tempPlaceholder') // Replace 'a' with a temporary placeholder
        .replace(/b/g, 'a')               // Replace 'b' with 'a'
        .replace(/tempPlaceholder/g, 'b'); // Replace the placeholder with 'b'
}
