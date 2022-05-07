
 
function sortLinerTime (arr)
{
  
    let maxNum=Math.max(...arr);
    let minNUM=Math.min(...arr);
    //initialize the helper array 
    let helperPos=[];
  for(var i=minNUM;i<maxNum+1;i++)
  helperPos[i]=0;
  for (i=0;i<arr.length;i++)
      helperPos[arr[i]]++;
 j=minNUM;
 for(i=0;i<arr.length;i++)
      {
        if(helperPos[j]==0  )
         {
             i--; 
             j++;
        } 
          else{ 
              if(helperPos[j]>0)
            {
                arr[i]=j;
                helperPos[j]--;
                if(helperPos[j]==0)
                j++;
            }
          }
      }
    console.log(arr);

    console.log(helperPos);
    

}

sortLinerTime([10,4,30,13,9,17,2,24,11,23,5,7])