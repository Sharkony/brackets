module.exports = function check(str, bracketsConfig) {
 const bracketMatch = {
  "(": ")",
  "[": "]",
  "{": "}",
  "1": "2",
  "3": "4",
  "5": "6",
 };
 
 const similarBrackets = ['|', '7', '8'];

 let checkArr = [];
 let openBracketArr = Object.keys(bracketMatch);
 let closedBracketArr = Object.values(bracketMatch);

 for (let i=0; i < str.length; i++) {
  let currentBracket = str[i];
  if (similarBrackets.includes(currentBracket)) {
    if (checkArr.includes(currentBracket)){
      checkArr.pop()
    } else {checkArr.push(currentBracket)
    }
  }

  if (openBracketArr.includes(currentBracket)) {
    checkArr.push(currentBracket);
  } else
  if (closedBracketArr.includes(currentBracket)){
    let lastBracket = checkArr.pop()
    if (bracketMatch[lastBracket] !== currentBracket) {
      return false
    }
  }
 }
  return (checkArr.length == 0)
 
}
