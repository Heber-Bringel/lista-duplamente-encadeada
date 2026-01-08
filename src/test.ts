import { ListaDuplamenteEncadeada } from "./ListaDuplamenteEncadeada";

const minhaLista = new ListaDuplamenteEncadeada();

console.log("Está vazia?", minhaLista.estaVazia()); // true 

minhaLista.adicionarNoFinal(10);
minhaLista.adicionarNoFinal(20);
minhaLista.adicionarNoInicio(5);
minhaLista.adicionarNaPosicao(15, 2);

minhaLista.exibirOrdemDireta();  // Saída: Início -> 5 10 15 20
minhaLista.exibirOrdemInversa(); // Saída: Fim -> 20 15 10 5

console.log("Removido do início:", minhaLista.removerDoInicio()); // 5
console.log("Tamanho atual:", minhaLista.tamanho()); // 3

console.log("Existe o valor 15?", minhaLista.buscar(15)); // true