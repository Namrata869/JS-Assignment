//ques1
// let n=parseInt(prompt("enter size of arr"))
// let arr=[];
// for(let i=0; i<n; i++){
//     arr[i]=parseInt(prompt("enter each element"))
// }
// function product(arr){
//     let product=1
// for(i=0;i<n;i++){
//     product= product*arr[i];

// }
// return product;}
// console.log(product(arr))
//ques2
// let n=parseInt(prompt("enter size of arr"))
// let arr=[];
// for(let i=0; i<n; i++){
//     arr[i]=parseInt(prompt("enter each element"))
// }
// function sum(arr){
//     let sum=0
// for(i=0;i<n;i++){
//     sum= sum+arr[i];

// }
// return sum;}
// console.log(sum(arr))

//ques3
// let N = 4;
// let K = 3;
// let A = [3, 3, 1, 2];

// function findCount(N, K, A) {
//     let count = 0;

//     for (let i = 0; i < N; i++) {
//         if (A[i] === K) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(findCount(N, K, A));
//ques 4
// let n=parseInt(prompt("enter size of arr"))
// let arr=[];
//  for(let i=0; i<n; i++){
//     arr[i]=parseInt(prompt("enter each element"))
//  }
//  function oddeven(arr){
//     let evenSum=0;
//     let oddSum=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
// evenSum+=arr[i]
//         }
//         else{
//             oddSum+=arr[i]
//         }
//     }
// return[evenSum,oddSum]
//  }
//  console.log(oddeven(arr))
//ques5
// let n=parseInt(prompt("enter size of arr"))
// let arr=[];
//  for(let i=0; i<n; i++){
//     arr[i]=parseInt(prompt("enter each element"))
//  }
// let num=parseInt(prompt("enter the number to find in array"))
// function checkNum(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==num){
//             console.log("yes num is present")
//         }
//         else{
//             console.log("num is not present")
//         }
//     }
// }
// console.log(checkNum(arr))
//ques6
// let n=parseInt(prompt("enter size of arr"))
// let arr=[];
//  for(let i=0; i<n; i++){
//     arr[i]=parseInt(prompt("enter each element"))
//  }
//  function ageCheck(arr){
//     let arr2=[]
//      for(let i=0;i<arr.length;i++){
//         if(arr[i]>=18){
//             arr2.push(arr[i]);
            
//         }}
//         return arr2


//  }
//  console.log(ageCheck(arr))
//ques7

// let n=parseInt(prompt("enter size of arr"))
// let arr=[];
//  for(let i=0; i<n; i++){
//     arr[i]=parseInt(prompt("enter each element"))
//  }
//  function increment(arr){
    
//      for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i] +1}
//         return arr


//  }
//  console.log(increment(arr))
//ques8
// let n=parseInt(prompt("enter size of arr"))
// let arr=[];
//  for(let i=0; i<n; i++){
//     arr[i]=parseInt(prompt("enter each element"))
//  }
//  function isallpass(arr){
    
//      for(let i=0;i<arr.length;i++){
//         if(arr[i]<32){
//             return "no";
//         }
//         return "yes";
//   }


//  }
//  console.log(isallpass(arr))
// ques 9
// function uniqueShirts(arr) {
//     return arr.filter((item) =>
//         arr.indexOf(item) === arr.lastIndexOf(item)
//     ).length;
// }

// console.log(uniqueShirts([3, 2, 4, 1, 2, 3]));
//ques 10
// function findmin(arr){
//     let min = arr[0];

//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }

//     return min;
// }

// console.log(findmin(arr));
let n=parseInt(prompt("enter size of arr"))
let arr=[];
 for(let i=0; i<n; i++){
    arr[i]=parseInt(prompt("enter each element"))
 }
function findmax(arr){
    let max= arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] >max){
            max = arr[i];
        }
    }

    return max;
}

console.log(findmax(arr));