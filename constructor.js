/* class oldName {
  constructor(name) {
    this.name = "Hemant";
    console.log;
  }
}

class newName extends oldName {
  showName() {
    console.log("I am a new name :" + this.name);
    console.log("I am a old name :" + super.name);
  }
}

var a = new newName();
a.showName();
 */

class A {
  myFunc() {
    return "a";
  }
}

class B extends A {
  myFunc() {
    return super.myFunc();
  }
}

const b = new B();
console.log(b.myFunc());
