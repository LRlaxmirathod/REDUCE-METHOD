0// USING REDUCE FIND SUM

let arr = [1,2,3,4,5,6,7,8,9 , 10]

let sum = arr.reduce((pre , curr)=>{
  return pre + curr
})
console.log(sum)

//using reduce method find maximum number
let array = [1,2,3,4,5,6,7,8,9]

let max = array.reduce((pre , curr)=>{
    return pre > curr ? pre : curr;

})
console.log(max)


//find minimum number using reduce method
let arrr = [1,2,3,4,5,6,7,8,9,10]

let min = arrr.reduce((pre , curr)=>{
    return pre < curr ?  pre : curr;
})
console.log(min)


