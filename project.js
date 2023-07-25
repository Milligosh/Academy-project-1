function fizzBuzz(n) {
    const result=[];
    for (let i=1 ;i<=n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            result.push('FizzBuzz')
        }else if(i % 3 === 0){
            result.push ('Fizz')
        }else if(i % 5 === 0){
            result.push('Buzz')
        }else{
            result.push(i.toString())
        }
        
    }return result;
}

console.log(fizzBuzz(30))





function theAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  function theDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
  }
  
const unsortedArray = [1, 6, 7, 7, 0, 9, 7, 2, 5, 6, 4];
const Ascending = theAscending(unsortedArray);
const Descending = theDescending(unsortedArray);
 
console.log(`Sorted in ascending order:, ${Ascending}`);
console.log(`Sorted in descending order:, ${Descending}`);
  
  
  
  
  
  
  