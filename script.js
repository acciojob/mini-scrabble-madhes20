//your code here
let inputText = document.getElementById('evaluatedText');
let outputText = document.getElementById('letterCount');

inputText.onkeyup = function(){
    outputText.innerText=inputText.value.length;
} ;
