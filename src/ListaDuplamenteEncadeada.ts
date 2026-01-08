export class Elemento {
    public valor: number;
    public proximo: Elemento | null;
    public anterior: Elemento | null; // Requisito: encadeamento em ambas as direções 

    constructor(val: number) {
        this.valor = val;
        this.proximo = null;
        this.anterior = null;
    }
}

export class ListaDuplamenteEncadeada {
    private inicio: Elemento | null;
    private fim: Elemento | null;
    private total: number;

    constructor() {
        this.inicio = null;
        this.fim = null;
        this.total = 0;
    }

    // Adicionar no início 
    public adicionarNoInicio(val: number): void {
        const novo = new Elemento(val);
        if (this.estaVazia()) {
            this.inicio = novo;
            this.fim = novo;
        } else {
            novo.proximo = this.inicio;
            this.inicio!.anterior = novo;
            this.inicio = novo;
        }
        this.total++;
    }

    // Adicionar no final 
    public adicionarNoFinal(val: number): void {
        const novo = new Elemento(val);
        if (this.estaVazia()) {
            this.inicio = novo;
            this.fim = novo;
        } else {
            novo.anterior = this.fim;
            this.fim!.proximo = novo;
            this.fim = novo;
        }
        this.total++;
    }

    // Adicionar em posição específica 
    public adicionarNaPosicao(val: number, posicao: number): void {
        if (posicao <= 0) return this.adicionarNoInicio(val);
        if (posicao >= this.total) return this.adicionarNoFinal(val);

        const novo = new Elemento(val);
        let aux = this.inicio;
        for (let i = 0; i < posicao; i++) {
            aux = aux!.proximo;
        }

        novo.proximo = aux;
        novo.anterior = aux!.anterior;
        aux!.anterior!.proximo = novo;
        aux!.anterior = novo;
        this.total++;
    }

    // Remover do início 
    public removerDoInicio(): number | null {
        if (this.estaVazia()) return null;

        const valor = this.inicio!.valor;
        this.inicio = this.inicio!.proximo;

        if (this.inicio) {
            this.inicio.anterior = null;
        } else {
            this.fim = null;
        }

        this.total--;
        return valor;
    }

    // Remover do final 
    public removerDoFinal(): number | null {
        if (this.estaVazia()) return null;

        const valor = this.fim!.valor;
        this.fim = this.fim!.anterior;

        if (this.fim) {
            this.fim.proximo = null;
        } else {
            this.inicio = null;
        }

        this.total--;
        return valor;
    }

    // Remover de posição específica 
    public removerDaPosicao(posicao: number): number | null {
        if (this.estaVazia() || posicao < 0 || posicao >= this.total) return null;
        if (posicao === 0) return this.removerDoInicio();
        if (posicao === this.total - 1) return this.removerDoFinal();

        let aux = this.inicio;
        for (let i = 0; i < posicao; i++) {
            aux = aux!.proximo;
        }

        const valor = aux!.valor;
        aux!.anterior!.proximo = aux!.proximo;
        aux!.proximo!.anterior = aux!.anterior;
        
        this.total--;
        return valor;
    }

    // Buscar valor 
    public buscar(val: number): boolean {
        let aux = this.inicio;
        while (aux != null) {
            if (aux.valor === val) return true;
            aux = aux.proximo;
        }
        return false;
    }

    // Verificar se está vazia
    public estaVazia(): boolean {
        return this.inicio === null;
    }

    // Quantidade de elementos
    public tamanho(): number {
        return this.total;
    }

    // Exibir do início ao fim 
    public exibirOrdemDireta(): void {
        let aux = this.inicio;
        let resultado = "Início -> ";
        while (aux != null) {
            resultado += `${aux.valor} `;
            aux = aux.proximo;
        }
        console.log(resultado);
    }

    // Exibir do fim ao início 
    public exibirOrdemInversa(): void {
        let aux = this.fim;
        let resultado = "Fim -> ";
        while (aux != null) {
            resultado += `${aux.valor} `;
            aux = aux.anterior;
        }
        console.log(resultado);
    }
}