// function checkPalinderome(num){
//     let sum=0;
//     let reminder;
//     let result ;
//     let temp=num
    
//      while(reminder>0){
//              reminder = num%10
//              sum=reminder+(sum*10)
//             num=num/10;
//             if(temp==sum) {
//                 console.log("hello")
//             }
    
//      }
   
// }
// checkPalinderome(121)



// // Merge two sorted array
// list1 = [1,2,4];
// list2 = [1,3,4];
// const list3=[]

// // o/p = Output: [1,1,2,3,4,4]

// for(let i=0;i<list1.length&&list2.length;i++){
//     list3.push(list1[i])
//       list3.push(list2[i])
// }
// console.log(list3)



// // Remove duplicates

// const head = [1,1,2];
// const sorted = [];

// for(let i=0;i<head.length;i++){
//     if(!sorted.includes(head[i])){
//         sorted.push(head[i])
//     }
// }

// console.log(sorted)



// const digits = [4,3,2,1];
// // const digits = [9];
// //  const digits = [1,2,3]
// // o/p =[1,2,4];
// const onePlus = []

// let last = digits[digits.length-1];
// // console.log("last",last)
// onePlus.push()
// for(let i=0;i<digits.length;i++){
//     if(digits[i]==last){
//        digits[i]= digits[i]+1;
//       if(digits[i]<9)
//     onePlus.push(digits[i])
//      if(digits[i]>9){
//         let data =digits[i].toString().split('');
//         console.log("breakeeeeeeee",data)
//         let lastdata = data[data.length-1];
//         onePlus.push(data)
//     }
//     }
   
//     else{
//          onePlus.push(digits[i])
//     }
// }
// console.log(onePlus)



// //Length nof last word

// var lengthOfLastWord = function(s) {
//     let count=0;
//  let data =s.trim()
 
//  for(let i=data.length;i>=0;i--){
//      // console.log(data[i])
//      if( data[i-1] && data[i-1] !== " "){
//          count++
//          // console.log("nammm",count)
//      }else if(count>0){
//         return count;
//      }
           
     
 
//  }
//  };

//  //find index of first occurence a string

//  let haystack = "sadbutsad";
// let needle = "leetcode";

// console.log(haystack.indexOf(needle))


//majority element

// const nums = [3,3,5,5,5,6,6,6,6,7];
// const counts={}

// for(let i=0;i<nums.length;i++){
//      if(!counts[nums[i]]){
//         counts[nums[i]] = 1
//      }else{
//          counts[nums[i]]++
//      }
//     // console.log(counts)
    
// }

// const valus = Object.values(counts)
// const maxValue = Math.max(...valus)
// // console.log("====",valus,maxValue)
// for(let key in counts){
//   if(counts[key]  === maxValue){
//  console.log("=====>", key ,":", counts[key])
//   }
// }

//moves all zeros to last

// const nums = [9,0,7,8,0,6]
// const moves = []
// for(let i=0;i<nums.length;i++){
//     if(!nums[i]==0){
//        moves.push(nums[i])
//     }
// }
// for(let j=0;j<nums.length;j++){
//     if(nums[j]==0){
//         moves.push(nums[j])
//     }
// }


//ADD DIGIT
// num = 38

// //  let myFunc = num => Number(num); 
// //     let arr = Array.from(String(num), myFunc); 
    
// //     if(arr==[0]){
// //         console.log("0000");
// //     }

// function hello(val){
//     let sum =0
//     let myFunc = num => Number(num); 
//     let arr = Array.from(String(val), myFunc); 
//     // const arr = val.toString().split("")
//     // console.log("arr",arr)
//     if(arr.length > 1)
//     for(let i=0;i<arr.length;i++){
//      sum = sum+arr[i];
//     //  num = sum
//      hello(sum)
//     }
//     else{
//         console.log(arr[0],"else block")
//     }

// }

// hello(num)


//MISSING NUMBER
// const num = [3,0,1]
//  for(let i = 0;i<=num.length;i++){
//      if(!num.includes(i)){
//          console.log(i,"i")
//      }
//  }

//Shuffule String
// s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// str = []
// for(let i=0;i<s.length;i++){
//     console.log("charAt",s.charAt(i))
//     console.log("indices",indices[i])
//   str[indices[i]]= s.charAt(i)
// }
// console.log(str.toString(),"str")
// console.log(str.join(""))

//Suffule Array

// const nums = [1,2,3,4,4,3,2,1]
// let n = 4;
// const data1 = []
// const data2= []
// const final=[]
// // Output: [2,3,5,4,1,7]

// for(let i=0;i<2*n/2;i++){
//  data1.push(nums[i])
// }
// console.log(nums.length,'length')
// // for(let i= nums.length-1; i>= nums.length/2; i--)
// for(let j=2*n/2;j<nums.length;j++){
//     data2.push(nums[j])
// }
// console.log(data1,"data1")
// console.log(data2,"data2") 
// for(let k =0;k<data1.length&&data2.length;k++){
//     final.push(data1[k])
//      final.push(data2[k])
// }

// console.log("final",final)
