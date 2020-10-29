function twoNumSum(array, targetSum) {
  if (!array.length) return [];
  const validNums = {};
  let index = 0;
  while (index < array.length) {
    let posibleMatch = targetSum - array[index];
    if (posibleMatch in validNums) return [array[index], posibleMatch];
    validNums[array[index]] = true;
    index++;
  }
  return [];
}

//x+y = target
//target - x = y
//10-3= 7 ?  :{3:true}
//10-5= 5 ?  :{3:true, 5=true}
//10--4= 14 ?  :{3:true, 5=true, -4:true}
//10-8= 2 ?  :{3:true, 5=true, -4:true, 8:true}
//10-11= -1 ?  :{3:true, 5=true, -4:true, 8:true, 11:true}
//10-1= 9 ?  :{3:true, 5=true, -4:true, 8:true, 11:true, 1:true}
//10--1= 11 ? [x,target] :

console.log(twoNumSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
