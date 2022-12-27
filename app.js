import {  } from "module";

const form       = document.getElementById('form'),
      message    = document.querySelector('.entrada'),
      btnEncrypt = document.querySelector('.first'),
      btnDecrypt = document.querySelector('.second'),
      btnCopy    = document.querySelector('.third'),
      finalMessage = document.querySelector('.crypted-text');

finalMessage.innerHTML = muneco.svg

const decode ={
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat"
};

const compareArrays = ( letters ) => {
    return letters.map( letter => {
      return decode.hasOwnProperty( letter ) ? 
      decode[ letter ] 
      : letter;
    });
  }


const joinArrays = ( arrays ) => {
  return arrays.join( "" );
}

const getString = () => {
    text =  message.value
    return !text ? 
      alert("No message found")
      : text.split(" ").map(word => {
          const letters = word.split( "" );
          const newWord = compareArrays( letters );
          return joinArrays( newWord );
        });
  };




btnEncrypt.addEventListener('click',e =>{
    e.preventDefault();
    const result = getString().join(" "); 
    console.log(result);   
    finalMessage.inner
});


btnDecrypt.addEventListener('click',e =>{
    e.preventDefault();
    console.log(message);
});



      





