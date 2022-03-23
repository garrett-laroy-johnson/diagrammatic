let phrase;
let inputName;
// A random Adjective

// A random Adjective
let randomWordsURL  = "https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=noun%2Cadjective&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&limit=2&api_key=" +
"8b3489d01313968fd39080c8d970cf118378567906b3780e4";


function getPhrase(){
  fetch(randomWordsURL)
    .then(response => response.json())
    .then(json => gotData(json))
    .then(name => createMB(name))
    .catch(err => console.log(err));
}



 function gotData(data){
   let word1 = data[0].word;
   let word2 = data[1].word;
   phrase = word1 + " " + word2;
   inputName = prompt("enter MB name.", phrase);
   return inputName;
 }

//created by Daniel Schiffman
//https://editor.p5js.org/shiffman/sketches/rkJCfiSJx
