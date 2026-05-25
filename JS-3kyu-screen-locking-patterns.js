function countPatternsFrom(firstDot, length) 
{
  // Your code here
  var map={
    'A':{'i':0,'j':0},
    'B':{'i':0,'j':1},
    'C':{'i':0,'j':2},
    'D':{'i':1,'j':0},
    'E':{'i':1,'j':1},
    'F':{'i':1,'j':2},
    'G':{'i':2,'j':0},
    'H':{'i':2,'j':1},
    'I':{'i':2,'j':2}
  }
  if(length <= 0)
    return 0;
  if(length >= 10)
    return 0;
  var pos=map[firstDot];  
  var matrix=[[false,false,false],[false,false,false],[false,false,false]];
 
  return calc(matrix,pos.i,pos.j,0,length)
}
var calc=function(matrix,row,col,count,length)
{
  // console.log(matrix,row,col,count,length)
  matrix[row][col]=true;
  if(length==1)
  {
    matrix[row][col]=false;
    return 1;
  }
    // return 1;
  for(var i=0;i<3;i++)
  {
    for(var j=0;j<3;j++)
    {
      if(!matrix[i][j])
      {
        if(((i==row)&&(Math.abs(j-col))==2)&&matrix[i][1])
          count=count+calc(matrix,i,j,0,length-1)        
          
        if(((j==col)&&(Math.abs(i-row))==2)&&matrix[1][j])
          count=count+calc(matrix,i,j,0,length-1)  
          
        if((Math.abs(j-col)==2)&&(Math.abs(i-row)==2)&&matrix[1][1])
          count=count+calc(matrix,i,j,0,length-1)
          
        if((Math.abs(j-col)==1)&&(Math.abs(i-row)==2))
          count=count+calc(matrix,i,j,0,length-1)  
          
        if((Math.abs(j-col)==2)&&(Math.abs(i-row)==1))
          count=count+calc(matrix,i,j,0,length-1)
          
        if((Math.abs(j-col)<2)&&(Math.abs(i-row)<2))
          count=count+calc(matrix,i,j,0,length-1)  
      }
    }
  }
  matrix[row][col]=false;
  return count;
}
