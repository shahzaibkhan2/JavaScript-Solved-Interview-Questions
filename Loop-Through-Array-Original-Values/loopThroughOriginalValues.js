const tempArray = [1, 2, 3, 4, 5, 6];

tempArray.prototype.newValue1 = "new Value";
tempArray.prototype.newValue2 = "new Value 2";

// Common approach which will cause it's new values in the prototype to also loop through
for (let value in tempArray) {
  console.log(value);
}

// More accurate approach to loop through original values and ignoring the prototype values
// hasOwnProperty() method will only mark arrays original values to be true.

for (let value in tempArray) {
  if (tempArray.hasOwnProperty(value)) {
    console.log(value);
  }
}
