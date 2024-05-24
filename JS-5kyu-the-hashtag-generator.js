function generateHashtag(str) {
  str = str.trim();
  
  if (str === "") return false;

  const words = str.split(" ");
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const hashtag = "#" + capitalizedWords.join("");

  return hashtag.length > 140 ? false : hashtag;
}
