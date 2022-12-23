const form       = document.getElementById('form'),
      message    = document.querySelector('.entrada'),
      btnEncrypt = document.querySelector('.first'),
      btnDecrypt = document.querySelector('.second'),
      btnCopy    = document.querySelector('.third');

const decode ={
    "a" : "ai",
    "e" : "enter",
    "i" : "imes",
    "o" : "ober",
    "u" : "ufat"
};

const wordKeys = Object.entries(decode);


const getString =()=>{
    text = message.value
    !text ? 
        alert( 'No message founded' ) : 
        console.log( text.split("") );
    return text.split("")
}

const encrypt =()=>{
    let arrayMessage = getString()
    for (let index; index<arrayMessage.length; index++) {
        
        console.log(index);
        console.log(wordKeys[index][0]);
        // elem == wordKeys[elem][0]?  elem = decode[elem][1] : elem;
        // console.log(elem);
        }        
    }

    
        
    


btnEncrypt.addEventListener('click',e =>{
    e.preventDefault();
    encrypt()
});


btnDecrypt.addEventListener('click',e =>{
    e.preventDefault();
    console.log(message);
});



      





