function domainName(url){
  // Remove any protocol part from the URL
  let withoutProtocol = url.replace(/(^\w+:|^)\/\//, '');
    
  // Extract the domain name using a regular expression
  let domainName = withoutProtocol.match(/(?:www\.)?([^\.]+)/);
    
  // If a match is found, return the domain name, otherwise return null
  return domainName ? domainName[1] : null;
}
