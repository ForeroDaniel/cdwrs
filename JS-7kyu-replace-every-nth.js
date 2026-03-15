const replaceNth=(s,n,x,y,i=1)=>n<1?s:s.replace(RegExp(x,"g"),_=>i++%n?x:y)
