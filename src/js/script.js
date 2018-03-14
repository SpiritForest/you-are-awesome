var one = {
  first: "first-val"
  third: "three-val",
  four: "four-val"
};

var two = {
  second: "second object"
};

two.__proto__ = one;

two.first = "third object";
alert('dd');