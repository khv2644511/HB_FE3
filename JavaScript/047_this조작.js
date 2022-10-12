var peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce);

// peter.sayName.call(bruce) 의 결과는 무엇이 될지 생각해 봅시다.

var peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce);

// peter.sayName.call(bruce) 의 결과는 무엇이 될지 생각해 봅시다.

peter.sayName.apply(bruce, ["batman", "richman"]);

function sayName() {
  console.log(this.name);
}

var bruce = {
  name: "bruce",
  sayName: sayName,
};

var peter = {
  name: "peter",
  sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();

//   /* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */
