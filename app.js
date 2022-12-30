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



const comparaLetra = (letters) =>{
  letters=letters.replace(/ai/g,"a");
  letters=letters.replace(/enter/g,"e");
  letters=letters.replace(/imes/g,"i");
  letters=letters.replace(/ober/g,"o");
  letters=letters.replace(/ufat/g,"u");
  return letters
}

const compareArrays = ( letters ) => {
    return letters.map( letter => {
      return decode.hasOwnProperty( letter ) ? 
      decode[ letter ] 
      : letter;
    });
  };



const joinArrays = ( arrays ) => {
  return arrays.join( "" );
};



const getString =( choice )=> {
  text =  message.value
  return !text ? 
    alert("No message found"): 
    text.split(" ").map(word =>{
      if( choice==='normal' ) {
          const letters = word.split( "" );
          newWord = compareArrays( letters );  
          return joinArrays( newWord );
        } else if(choice === 'reverse'){
          newWord = comparaLetra( word );
          console.log(newWord);
          return newWord
        } else{
          console.log('invalid');
        }

      });
};
    


const renderText=(result)=>{
  let textLength = result.length <= 625?
        "small-length": 
            result.length <= 800 ? "medium2-length" :   
            result.length <=1100? "medium2-length":   "large-length";

    finalMessage.innerHTML = `<div  class="crypted-text fade-in-fwd ${textLength}">${result} </div>`
}

//va a ir al inicio de getString
const checkRegex=(str)=> {
  const regex = /(\W+$|[0-9]|[A-Záéíóú])/;
 //  const regex = /^[a-z\s]*$/;
  if (regex.test(str)) {
    return false
  } else {
    console.log('Message valid');
  }
 }
 
 

const copyText =( )=>{
  let text = document.querySelector(".crypted-text").innerText
  navigator.clipboard.writeText(text)
}


btnEncrypt.addEventListener('click',e =>{
    e.preventDefault();
    
    try {
      validateMessage = checkRegex(message.value)
      if (validateMessage==false) {
        result = `Please: Enter only lowercase avoid numbers & symbols`
        renderText(result) 

      }else{

        const result = getString('normal').join(" "); 
        console.log(result);   
        renderText(result)  
      }  
    } catch (error) {

      console.log('empty text');
    }
    
});


btnDecrypt.addEventListener('click',e =>{
    e.preventDefault();
    try {
      validateMessage = checkRegex(message.value)
      if (validateMessage==false) {
        result = `Please: Enter only lowercase avoid numbers & symbols`
        renderText(result) 

      }else{

        const result = getString('reverse').join(" "); 
        console.log(result);   
        renderText(result)  
      }  
    } catch (error) {

      console.log('empty text');
    }
    
});



btnCopy.addEventListener('click', e =>{
  e.preventDefault();
  copyText();
});

  



      





