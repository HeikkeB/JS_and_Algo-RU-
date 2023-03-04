const object = {
  value: '42',
  print () {
    function type() {
      return typeof this.value;
    }
    
    console.log(`${this.value} is ${type()}`);
  }
}

object.print(); // Поправьте замыкание