function alphabetWar(fight){
   fight = fight.replace(/[a-z]\*[a-z]|[a-z]\*|\*[a-z]/g,"")
    var l = 0;
    var r = 0;
    fight.split("").forEach(i=>"1sbpw".indexOf(i)>0?l+="1sbpw".indexOf(i):l)
    fight.split("").forEach(j=>"1zdqm".indexOf(j)>0?r+="1zdqm".indexOf(j):r)
    if(l==r){return "Let's fight again!"}
    return l>r ? "Left side wins!" : "Right side wins!";
}
