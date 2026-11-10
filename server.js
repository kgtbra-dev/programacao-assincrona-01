import express from 'express';
const app = express();
const PORT = 3000;

//Exercício 1.1

function saudacaoAssincrona(nome) {
    return new Promise ((resolve) => {
        setTimeout(() => { 
            resolve (`Olá, ${nome}! Bem-vindo ao Mensageiro Local.`)
        }, 2000);
    });
}
saudacaoAssincrona("Seu Nome").then(resposta => console.log(resposta));

//Exercício 1.2 

function