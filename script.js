let digArray = new Object({
  0: "1110111",
  1: "0100100",
  2: "1101011",
  3: "1101110",
  4: "0111100",
  5: "1011110",
  6: "1011111",
  7: "1100100",
  8: "1111111",
  9: "1111110",
});

let clockFunc = () => {
  let now = new Date();
  let seconds = now.getSeconds();
  let minuts = now.getMinutes();
  let hours = now.getHours();
  printDigit(1, seconds % 10);
  printDigit(2, Math.trunc(seconds / 10));
  printDigit(3, minuts % 10);
  printDigit(4, Math.trunc(minuts / 10));
  printDigit(5, hours % 10);
  printDigit(6, Math.trunc(hours / 10));
};

let printDigit = (number, digit) => {
  let secss = $(".number" + number + " .number-top-part");
  let sec_text = digArray[digit];
  for (let i = 1; i < 4; ++i) {
    if (sec_text[i - 1] === "1") {
      secss.addClass("seg" + i);
    } else {
      secss.removeClass("seg" + i);
    }
  }
  secss = $(".number" + number + " .number-bottom-part");
  for (let i = 4; i < 8; ++i) {
    if (sec_text[i - 1] === "1") {
      secss.addClass("seg" + i);
    } else {
      secss.removeClass("seg" + i);
    }
  }
};

setInterval(() => {
  clockFunc();
}, 1000);
