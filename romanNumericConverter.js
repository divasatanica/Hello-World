 var units = 0, units2 = 0, tens = 0, hundreds = 0, thousands = 0; 
  var result = "";
  var newArray = [];

function convert(num) {
  if(num === 1000){
    return "M";
  }
  else if (num === 50){
      return "L";
    }
  else if (num === 500){
      return "D";
    }
  else if(num >= 1 && num < 10){
    return single(num);
  } // 1 - 9
  else if (num >= 10 && num < 50){
    if(num < 40){
      return tenBit(num) + convert(num - tens * 10);
    }
    else if(num >= 40){
      return "XL" + convert(num - 40);
    }
  } // 10 - 49
  else if (num >= 50 && num < 100){
    if(num < 90){
      return "L" + convert(num - 50);
    }
    else if (num >= 90){
      return "XC" + convert(num - 90);
    }
    
  } // 50 - 99
  else if (num >= 100 && num < 500){
    if (num < 400){
      return hundredBit(num) + convert(num - hundreds * 100);
    }
    else if (num >= 400){
      return "CD" + convert(num - 400);
    }
  } // 100 - 499
  else if (num >= 500 && num < 1000){
    if (num < 900){
      return "D" + convert(num - 500);
    }
    else if (num >= 900){
      return "CM" + convert(num - 900);
    }
  } // 500 - 999
  else if (num > 1000){
    if(num < 4000){
      return thousandBit(num) + convert(num - thousands * 1000);
    }
  }
}
function repeatString(str, n){
    var string = '';
    for(var i = 0; i < n; i ++){
      string += str;
    }
    return string;
  }
function single(num){
    units = num % 5;
    units2 = num - units;
    while(units2){
      if(units < 4){
        result = 'V' + repeatString('I', units);
        return result;
                   }
      
      else if (units == 4){
        result = "IX";
        return result;
                          }   
                 }
    
    if(units < 4){
       result = repeatString('I', units);
       return result;
                 }
    
      else if(units == 4){
        result = "IV";
        return result;
                         }
    
    else if(num == 5){
      return "V";
                     }
}
function tenBit(num){
  units = num % 10;
  tens = (num - units) / 10;
  return repeatString('X', tens);
}
function hundredBit(num){
  units2 = num % 100;
  hundreds = (num - units2) / 100;
  return repeatString('C', hundreds);
}
function thousandBit(num){
  units = num % 1000;
  thousands = (num - units) / 1000;
  return repeatString('M', thousands);
}
convert(1004);
