// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let vowel = 0;
    str.split("");
    for(let i = 0; i < str.length; i++){
      if (str[i].toLowerCase() === "a"){
        vowel += 1;
      } else if (str [i].toLowerCase() === "e"){
        vowel += 1;
      } else if (str[i].toLowerCase() === "i"){
        vowel += 1;
      } else if (str[i].toLowerCase() === "o"){
        vowel += 1;
      } else if (str [i].toLowerCase() === "u"){
        vowel += 1;
      }
    }
    return vowel;
  }
  
  console.log(getCount("abracadabra"));
  
  console.log(getCount("peartree"));
  
  console.log(getCount('o a kak ushakov lil vo kashu kakao'
  ));
  
  console.log(getCount("my pyx"));

  //this was my favorite problem to do, I was stuck on it for a while but 
  //it was fun to solve. I did my code talk on the logical operators and originally
  //thought about using the OR but I remembered you cannot use OR in this because
  //it will only take the first true value and not go through the rest
  //after solving it I know you can also use a regrex for this
