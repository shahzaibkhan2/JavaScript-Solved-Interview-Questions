const reverseWord = (str) => {
  const tempStr = str.split("").reverse().join("");

  return tempStr;
};

console.log(reverseWord("king"));

const reverseString = (str) => {
  const tempStr = str.split(" ").map((word) => {
    return word.split("").reverse().join("");
  });
  return tempStr.join(" ");
};

console.log(reverseString("king is back hurry"));
