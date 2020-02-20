module.exports = function toReadable (number) {
  if (!number || number === 0) return 'zero';

  const list = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
  };

	if(list[number]){
  	return `${list[number]}`;
  }
  else{
  	let hund = Math.floor(number / 100);
    let resH = hund ? `${list[hund]} hundred ` : ``;
  	let ten = Math.floor(number % 100);
    let unit = number % 100 % 10;
    let resU = unit ? `${list[unit]} ` : ``;
    if(list[ten]) return `${resH}${list[ten]}`.trim();
    else {
    	let tenT = Math.floor(ten/10) * 10;
      let resT = tenT ? `${list[tenT]} ` : ``;
    	return `${resH}${resT}${resU}`.trim();
    }
  }


}
