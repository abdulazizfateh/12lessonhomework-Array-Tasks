// TASK 1 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 1. array ichidagi eng katta va eng kichik sonlarni topib beradigan function yarating 


// Using TWO for-classic

// let arr = [1, 5, 0, 4, 100, 10];

// const findTheBiggestNum = (arr) => {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     for (let j = 0; j < arr.length; j++) {
//         if (min > arr[j]) {
//             min = arr[j]
//         }
//     }
//     return { max, min };
// }

// console.log(findTheBiggestNum(arr));



// Using only ONE for-classic
// let arr = [1, 0, 5, 10, 100];

// const findTheBiggestNum = (arr) => {
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         } else {
//             if (min > arr[i]){
//                 min = arr[i]
//             }
//         }
//     }
//     return { max, min };
// }

// console.log(findTheBiggestNum(arr));








// TASK 2 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 2. array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring 

// let arr = [1, 2, 3, 4, 5];

// const pickTheNumbersGreaterThanTwo = (arr) => {
//     let newArr = [];
//     for (i in arr) { // This task can be done using all the for loop (classic, in, of);
//         if (arr[i] > 2) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(pickTheNumbersGreaterThanTwo(arr));









// TASK 3 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 3. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar nechtaligini toping 

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const findTheEvenOddNums = (arr) => {
//     let even = 0;
//     let odd = 0;
//     let evenNums = [];
//     let oddNums = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             evenNums.push(arr[i]); 
//             even++;
//         } else {
//             oddNums.push(arr[i])
//             odd++;
//         }
//     }
//     return {evenNums, oddNums, even, odd };
// }

// console.log(findTheEvenOddNums(arr));









// TASK 4 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 4. function argumentiga berilgan sonlarning yig'indisini toping arrey yordamida

// for-in only for index, and the same as for-classic index. for-of is to take the values of each element,
// but not object properties, because it cannot get an access to it

// let numbers = [10, 15, 20];

// const findTheSum = (nums) => {
//     let sum = 0;
//     for (i of nums){
//         sum += i;
//     }
//     return `The sum of all numbers = ${sum}`;
// }

// console.log(findTheSum(numbers));









// TASK 5 |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 5. object ni key larini va value larini alohida array olib chiqib beradigan
// functionlar yarating value uchun alohida function key uchun alohida function

// let object = {
//     name: 'Abdulaziz',
//     age: 18,
//     fieldOfStudy: 'Computer Science',
//     nationality: 'Uzbekistan',
// };

// const pickTheKeys = () => {
//     return Object.keys(object);
// }

// const pickTheValues = () => {
//     return Object.values(object);
// }

// console.log(pickTheKeys(object));
// console.log(pickTheValues(object));