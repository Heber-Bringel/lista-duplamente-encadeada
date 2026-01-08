# Lista Duplamente Encadeada

Este projeto implementa uma **Lista Duplamente Encadeada** em TypeScript, conforme especificado na atividade proposta. A estrutura permite inserção, remoção, busca e exibição de elementos em ambas as direções (início → fim e fim → início).

## Identificação da Dupla
| Nome | Matrícula |
|------|-----------|
| Douglas Leone Cunha Pinheiro | 2025116TADS0011 |
| Heber P. Bringel Correia | 2025116TADS0002 |

## Estrutura do Projeto

- `src/ListaDuplamenteEncadeada.ts`: Implementação da lista e seus métodos.
- `src/test.ts`: Exemplo de uso e testes básicos.
- `package.json`, `tsconfig.json`: Configuração do projeto TypeScript.

## Funcionalidades Implementadas

- **Adicionar elemento**:
  - No início
  - No final
  - Em posição específica
- **Remover elemento**:
  - Do início
  - Do final
  - De posição específica
- **Buscar elemento** por valor
- **Exibir lista**:
  - Do início ao fim
  - Do fim ao início
- **Verificar se está vazia**
- **Obter tamanho da lista**

## Exemplo de Uso

```typescript
import { ListaDuplamenteEncadeada } from "./ListaDuplamenteEncadeada";

const lista = new ListaDuplamenteEncadeada();
lista.adicionarNoFinal(10);
lista.adicionarNoFinal(20);
lista.adicionarNoInicio(5);
lista.adicionarNaPosicao(15, 2);

lista.exibirOrdemDireta();  // Início -> 5 10 15 20
lista.exibirOrdemInversa(); // Fim -> 20 15 10 5

console.log(lista.removerDoInicio()); // 5
console.log(lista.tamanho()); // 3
console.log(lista.buscar(15)); // true
```

## Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Compile o projeto:**
   ```bash
   npm run build
   ```
3. **Execute os testes/exemplo:**
   ```bash
   npm start
   ```
   Ou, para rodar diretamente com ts-node (modo desenvolvimento):
   ```bash
   npm run dev
   ```

## Sobre a Lista Duplamente Encadeada

Uma lista duplamente encadeada é uma estrutura de dados dinâmica onde cada elemento (nó) possui referência para o próximo **e** para o anterior, permitindo percorrer a lista em ambas as direções. Isso facilita operações de inserção e remoção em qualquer posição com eficiência.

### Métodos principais
- `adicionarNoInicio(valor)`
- `adicionarNoFinal(valor)`
- `adicionarNaPosicao(valor, posicao)`
- `removerDoInicio()`
- `removerDoFinal()`
- `removerDaPosicao(posicao)`
- `buscar(valor)`
- `exibirOrdemDireta()`
- `exibirOrdemInversa()`
- `estaVazia()`
- `tamanho()`

## Requisitos da Atividade

- Implementação completa dos métodos de inserção, remoção, busca e exibição.
- Encadeamento em ambas as direções (anterior e próximo).
- Testes básicos no arquivo `test.ts`.

---

> Projeto desenvolvido para fins didáticos na disciplina de Estrutura de Dados.
