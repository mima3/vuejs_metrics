class Animal { 
  // complex:1
  constructor(name) {
    this.name = name;
  }
  // complex:2
  get Name() {
    if (this.name) {
      return this.name();
    } else {
      return 'No set...';
    }
  }
  set Name(v) {
    if (v !== 'dog') {
      throw new Error('Error')
    } else {
      this.name = name;
    }
  }
  // complex:2
  speak() {
    if (this.name) {
      console.log(`${this.name} makes a noise.`);
    }
  }
}

