// assume number is less than 3500

class Roman{
  constructor() {
    this.romanString = '';
    this.map = {
      1: {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX'
      },
      10: {
        1: 'X',
        4: 'XL',
        5: 'L',
        9: 'XC'
      },
      100: {
        1: 'C',
        4: 'CD',
        5: 'D',
        9: 'CM'
      },
      1000: {
        1: 'M'
      }
    };
  }
  
  getRoman(num, factor) {
    if (factor < 1) {
      return this.romanString;
    }

    var quotient = Math.floor(num / factor);

    if (quotient === 9 || quotient === 4) {
      this.romanString += this.map[factor][quotient];
    } else {
      if (quotient >= 5) {
        this.romanString += this.map[factor][5];
        quotient = quotient - 5;
      }

      while (quotient > 0) {
        this.romanString += this.map[factor][1];
        quotient--;
      }
    }

    return this.getRoman(num % factor, factor / 10);
  }

  integerToRoman(num) {
    this.getRoman(num, 1000);
  
    return this.romanString;
  }
}

var myNum = new Roman();

console.log(myNum.integerToRoman(1896)); // MDCCCXCVI
