class OwnArray {
  constructor() {
    this.argument = arguments;
  }

  ownFind(condition) {
    for (const item of this.argument) {
      if (condition(item)) {
        return item;
      }
    }
  }

  ownPush(newItem) {
    return (this.argument[this.argument.length++] = newItem);
  }
}

let arr = new OwnArray(10, 11, 12, 13, 14);
console.log(arr);
console.log(arr.ownPush(15));

function checkNum(number) {
  return number > 13;
}
console.log(arr.ownFind(checkNum));
