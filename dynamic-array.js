class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here 
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(this.capacity);
  }

  read(index) {
    // Your code here 
    return this.data[index];
  }

  push(val) {

    // Your code here
    this.data[this.length] = val;
    this.length ++;
    
  }


  pop() {

    // Your code here 
    if (this.length >=1) {
      this.length --; // 3 => 2 [1,2,5]
      return this.data[this.length] // => 3
    }
    else {
      this.length = 0;
      return undefined;
    }
    
  }

  shift() {

    // Your code here 
    // [1,2,5] => this.shift() => return 1, with this.length = 2 // 0
    // shift() 2nd time => return 2, with this.length = 1 // 1
    // shift() 3rd time => return 5, with this.length = 0 // 2

    if (this.length >=1) {
      this.length --; // 3 => 2 [1,2,5]
      return this.data[] // => 3
    }
    else {
      this.length = 0;
      return undefined;
    }

    

  }

  unshift(val) {

    // Your code here 
    
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1];
    }
    this.length ++;
    this.data[0] = val;

  }

  indexOf(val) {

    // Your code here 
  }

  resize() {

    // Your code here 
  }

}


module.exports = DynamicArray;


dynamicArr = new DynamicArray(8);
dynamicArr.push(1);
dynamicArr.push(2);
dynamicArr.push(3);

console.log(dynamicArr.length);
console.log(dynamicArr.data)
console.log(dynamicArr.pop());
console.log(dynamicArr.length);
console.log(dynamicArr.pop());
console.log(dynamicArr.length);
console.log(dynamicArr.pop());
console.log(dynamicArr.length);
console.log(dynamicArr.data);

