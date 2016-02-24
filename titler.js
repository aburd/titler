'use strict'

function titleCase(title, minorWords) {
  minorWords = minorWords || ''; 
  let newSentence = [];

  title.split(' ').forEach( (word, i) => {
    let newWord = [];
  
    word.split('').forEach( (letter, l) => {
      if(l == 0)
        newWord.push( letter.toUpperCase() )
      else
        newWord.push( letter.toLowerCase() )
    })
    
    newWord = newWord.join('');

    if(i != 0 && minorWords != ''){
      minorWords.split(' ').forEach( (mWord) => {
        if(newWord.toLowerCase() == mWord)
          newWord = newWord.toLowerCase();
      })
    }
  
    newSentence.push(newWord);
  })
    
  return newSentence.join(' ');
}

module.exports = titleCase;
