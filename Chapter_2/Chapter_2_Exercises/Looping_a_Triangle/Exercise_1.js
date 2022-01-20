// ***** [Exercise_1] *****
// 1. Start Exercise with a basic for loop that counts from 1 to 7
console.log('Step 1:')
for(let number = 0; number <= 7; number++){
  console.log(number);
}

// 2. Assign '#' to a value and add it into the console.log
console.log('Step 2:')
let hash1 = '#';
for(let numb = 0; numb <=7; numb++){
  console.log(numb + hash1);
}

// 3. Add an if statement inside the for loop that looks at the length of hash ("#")
//    and as long as it's less than or equal to 7 hash's then increase by one hash.
//    You will console.log the hash first and then increase the hash by 1. If not you'll start
//    off with 2 hashes. And that's the original problem you ran into.
console.log('Step 3:')
let hash = '#';
for(let num = 0; num <=7; num++){
  if(hash.length <=7){
    console.log(hash);
    // Here to check the number of hash's there are on each line and log them.
    //console.log(`${hash + '-' + hash.length}`)
    hash += '#';
  }
}