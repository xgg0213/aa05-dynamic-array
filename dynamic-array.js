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
    if (this.length === this.capacity) this.resize();

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
      let res = this.data[0];
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i+1]; 
        // console.log(this.data); can use this to check if the array is being mutated correctly
        // need to comment out line 14 in test spec to not having the functions added to the array
      }
      this.length --;
      return res;
    }
    else {
      this.length = 0;
      return undefined;
    }



  }

  unshift(val) {

    // Your code here 
    if (this.length === this.capacity) this.resize();
    
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i-1];
    }
    this.length ++;
    this.data[0] = val;


  }

  indexOf(val) {

    // Your code here 
      for (let i = 0; i < this.length; i++) {
        if (this.data[i] === val) return i;
      }
    return -1;
  }

  resize() {

    // Your code here 
    this.capacity *= 2;
    // option 1: using concat
    // this.data = this.data.concat(new Array(this.capacity/2))
    // option 2: create a new array with current capacity & use that copy to create a replica of the current instance
    let newArr = new Array(this.capacity);
    for (let i = 0 ; i < this.length; i++) {
      newArr[i] = this.data[i];
    }
    this.data = newArr;

  }

}


module.exports = DynamicArray;


dynamicArr = new DynamicArray();
console.log(dynamicArr.capacity);
console.log(dynamicArr.length);
console.log(dynamicArr.data);

dynamicArr.push(10);
dynamicArr.push(11);
console.log(dynamicArr.length)

dynamicArr.push(12);
dynamicArr.push(13);
console.log(dynamicArr.length);

dynamicArr.resize();

console.log(dynamicArr.capacity)//.to.equal(8);
console.log(dynamicArr.data.length)//.to.equal(8);
console.log(dynamicArr.length)//.to.equal(4);

console.log(dynamicArr.read(0))//.to.equal(10);
console.log(dynamicArr.read(1))//.to.equal(11);
console.log(dynamicArr.read(2))//.to.equal(12);
console.log(dynamicArr.read(3))//.to.equal(13);
console.log(dynamicArr.read(4))//.to.equal(undefined);
console.log(dynamicArr.data)//.to.equal(undefined);





