
const form       = document.getElementById('form'),
      message    = document.querySelector('.entrada'),
      btnEncrypt = document.querySelector('.first'),
      btnDecrypt = document.querySelector('.second'),
      finalMessage = document.querySelector('.crypted-void'),
      btnCopy    = document.querySelector('.third');



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
  };


const compareArraysReverse = ( letters ) => {
  return letters.map( letter => {
    return decode.values( letter ) ? 
    decode[ letter ] 
    : letter;
  });
};

const joinArrays = ( arrays ) => {
  return arrays.join( "" );
}

const getString =( )=> {
    text =  message.value
    return !text ? 
      alert("No message found")
      : text.split(" ").map(word => {
          const letters = word.split( "" );
          const newWord = compareArrays( letters );
          return joinArrays( newWord );
        });
};




const copyText =( )=>{
  let text = document.querySelector(".crypted-text").innerText
  navigator.clipboard.writeText(text)
}




btnEncrypt.addEventListener('click',e =>{
    e.preventDefault();
    const result = getString().join(" "); 
    console.log(result);   
    let textLength = result.length <= 625?
        "small-length": 
            result.length <= 1105 ? "medium-length"   :  "large-length";

    finalMessage.innerHTML = `<div  class="crypted-text ${textLength}">${result} </div>
    `
});


btnDecrypt.addEventListener('click',e =>{
    e.preventDefault();const result = getString().join(" "); 
    console.log(result);  
});






btnCopy.addEventListener('click', e =>{
  e.preventDefault();
  copyText();
});
  // copyText();
  // let text = document.querySelector( ".crypted-text" );
  



      





