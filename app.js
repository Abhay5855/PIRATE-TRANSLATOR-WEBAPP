var txtInput = document.querySelector("#text-input");


var btnTranslate = document.querySelector("#btn-translate");

var outputDiv = document.querySelector("#output");

// console.log(outputDiv)

// outputDiv.innerText = "Abhay patil"


var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(input){

    return serverURL + "?" + "text= " + input

}

function errorHandler(error){
    console.log("error occured", error)
    alert("something wrong in server")
}


function clickHandler() {

    // outputDiv.innerText = "wakanda " + txtInput.value;

    var inputText = txtInput.value
    
    fetch(getTranslationURL(inputText))

        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;



          
         })
        .catch(errorHandler)
    
};


btnTranslate.addEventListener("click" , clickHandler)
   

