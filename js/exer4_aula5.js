"use strict";
let botoes_numericos = document.querySelectorAll(".calc_botao");
let botoes_op = document.querySelectorAll(".calc_botao_op");

for (let botao of botoes_numericos){
    botao.addEventListener("click", function(){
        add(botao);
    });
}

for (let botao of botoes_op){
    botao.addEventListener("click", function(){
        add(botao);
    });
}

function add(botao){
    document.querySelector("#res").value += botao.innerText;
}

document.querySelector("#limpar").addEventListener("click", function(){
    document.querySelector("#res").value = " ";
})

document.querySelector("#resp").addEventListener("click", function(){
    document.querySelector("#res").value = eval(document.querySelector("#res").value);
})

document.querySelector("#pow").addEventListener("click", function(){
    document.querySelector("#res").value += "**"; //Math.pow()
})

document.querySelector("#sqrt").addEventListener("click", function(){
   document.querySelector("#res").value = Math.sqrt(document.querySelector("#res").value);
})

document.querySelector("#round").addEventListener("click",function(){
   document.querySelector("#res").value = Math.round(document.querySelector("#res").value);
})