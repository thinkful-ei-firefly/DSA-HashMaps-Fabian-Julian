const hashMap = require('./hashMaps');


function main(){
  // const lor = new hashMap;
  // hashMap.MAX_LOAD_RATIO = 0.5;
  // hashMap.SIZE_RATIO = 3;
  // lor.set("Hobbit", "Bilbo");
  // lor.set("Hobbit", "Frodo");
  // lor.set("Wizard", "Gandolf");
  // lor.set("Human", "Aragon");
  // lor.set("Elf", "Legolas");
  // lor.set("Maiar", "The Necromancer");
  // lor.set("Maiar", "Sauron");
  // lor.set("RingBearer", "Gollum");
  // lor.set("LadyOfLight", "Galadriel");
  // lor.set("HalfElven", "Arwen");
  // lor.set("Ent", "Treebeard");

  // console.log(lor._hashTable);

    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new hashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new hashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));


}
//main();

//1) Maiar and Hobbit have been replaced with
// with the latest values assigned to them.
//1b) The capacity is 24 because initial capacity
// is 8 and we multiply that by size_ratio in the set method

//2) first console log is 20. The second console log is 10.
// we are re-assigning str 1 and str 3 because Hello Wold is the only key.


function duplicates(str){
  const lor = new hashMap;
  hashMap.MAX_LOAD_RATIO = 0.5;
  hashMap.SIZE_RATIO = 3;
  let result = '';

  for (let i=0; i<str.length; i++){
    if (!lor.has(str.charAt(i))){
      result += str[i]
    }
    lor.set(str.charAt(i), str[i])
  }
  return result
}
//console.log(duplicates('google'));//gole
//console.log(duplicates('google all that you think can think of'));

//input is a string
//output is boolean

function palindrome(str){
  const isPalindrome = new Map();
  hashMap.MAX_LOAD_RATIO = 0.5;
  hashMap.SIZE_RATIO = 3;

  for (let i=0; i<str.length; i++){
      if (isPalindrome.has(str[i])){
        isPalindrome.set(str[i], isPalindrome.get(str[i]) + 1);
      } else {
        isPalindrome.set(str[i], 1);
      }
    }
    let f = false;
    let t = true;
    for (let [key, value] of isPalindrome){
      if (value % 2 === 1){
        if (f === true){
          t = false
        }
        else f = true;
      }
    }
    return t;
  }

  //console.log(palindrome("acecarr"))

  function anagramGroup(arr) {
    const anagram = new Map()
    for (let i=0; i< arr.length; i++){
      let currentWord = arr[i].split('');
      currentWord = currentWord.sort().join('')
      if (anagram.has(currentWord)){
        anagram.set(currentWord, [...anagram.get(currentWord), arr[i]])
      }else{
        anagram.set(currentWord, [arr[i]])
      }
    }
    let result = []
    for (let [key, value] of anagram){
      result.push(value);
    }
    return result;
  }

console.log(anagramGroup(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']));
