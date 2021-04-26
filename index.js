// const Memory = require('./memory')

// class Array {
//     constructor() {
//         this.length = 0;
//         this._capacity = 0;
//         this.ptr = Memory.allocate(this.length);
//     }

//     push(value) {
//         if (this.length >= this._capacity) {
//             this._resize((this.length + 1) * Array.SIZE_RATIO);
//         }

//         Memory.set(this.ptr + this.length, value);
//         this.length++;
//     }

//     _resize(size) {
//         const oldPtr = this.ptr;
//         this.ptr = Memory.allocate(size);
//         if (this.ptr === null) {
//             throw new Error('Out of Memory');
//         }
//         Memory.copy(this.ptr, oldPtr, this.length);
//         Memory.free(oldPtr);
//         this._capacity = size;
//     }

//     get(index) {
//         if (index < 0 || index >= this.length) {
//             throw new Error('Index error');
//         }
//         return Memory.get(this.ptr + index);
//     }

//     pop() {
//         if (this.length == 0) {
//             throw new Error('Index error');
//         }
//         const value = Memory.get(this.ptr + this.length - 1);
//         this.length--;
//         return value;
//     }

//     insert(index, value) {
//         if (index < 0 || index >= this.length) {
//             throw new Error('Index error');
//         }

//         if (this.length >= this._capacity) {
//             this._resize((this.length + 1) * Array.SIZE_RATIO);
//         }

//         Memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
//         Memory.set(this.ptr + index, value);
//         this.length++;
//     }

//     remove(index) {
//         if (index < 0 || index >= this.length) {
//             throw new Error('Index error');
//         }
//         Memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
//         this.length--;
//     }
// }

// function main(){

//     Array.SIZE_RATIO = 3;

//     // Create an instance of the Array class
//     let arr = new Array();

//     // Add an item to the array
//     arr.push(3);

//     console.log(arr);
// }

// console.log(main())



// ************** URLify a String

// function replaceSpace(input) {
// //Turn into an array
// //loop through array and if ' ' replace with %
// //turn array back to string

// // let newArr = input.split(' ')
//  let finalString = ''

// for(let i = 0; i < input.length; i++) {
//     if (input[i] !== ' ') {
//         finalString += input[i]
//     } else {
//         finalString += '%'
//     }
//     // finalString += input[i] + '%'
// }
// return finalString
// }


// const input = "www.thinkful.com /tauh ida parv een"

// console.log(replaceSpace(input))


// //  ************* Filter an array 

// function filterNum(input, lowest) {
//     //helper array
//     // helper hold new arr
//     //loop through the arr and return num if >= 5
//     let newArr = []

//     for(const el of input) {
//         if(el >= lowest) {
//             newArr.push(el)
//         } 
//     }
// return newArr
// }

// let input = [1, 4, 7, 2, 8, 9]
// let lowest = 5

// console.log(filterNum(input, lowest))

// ************** Max sum in the array

// function maxSum(input) {
//     //maybe use while loop
//     //if just one element is the largest that would be the longest sequence 
//     let sum = 0
//     // newArr with sum of sequence of numbers at increment index
//     let newArr = []
//     for (let i = 0; i < input.length; i++) {
//         // sum += input[i]
//         // console.log(sum)
//         newArr.push(sum += input[i])
//     }

//     let maxValue = 0
//     for(const el of newArr) {
//         if(el > maxValue) {
//             maxValue = el
//         }
//     }
//     return maxValue
// }

// let input = [4, 6, -3, 5, -2, 1]

// console.log(maxSum(input))


// ****************** Merge Arrays

function merge(arr1, arr2) {
    // probably going to need a nested loop
    // helper variable that will build the new arr
    // if el first index is less than push to new arr i++ 
    let firstArr = arr1
    let secondArr = arr2

    let mergedArr = []

    for(let i = 0; i <= firstArr.length; i++) {
        let arr1El = firstArr[i]
        for(let j = 0; j <= secondArr.length; j++) {
            console.log('trigger' +secondArr[j] )
            let arr2El = secondArr[j]
            if(arr1El > arr2El) {
                mergedArr.push(arr2El)
                // firstArr.shift()

            } else {
                mergedArr.push(arr1El)
                // firstArr.shift()
            }
        }
    }

    return mergedArr
}

let arr1 = [1, 3, 6, 8, 11]
let arr2 = [2, 3, 5, 8, 9, 10]

console.log(merge(arr1, arr2))