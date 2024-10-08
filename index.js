
// Classe Heroi para representar um herói de uma aventura
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que exibe a mensagem de ataque conforme o tipo de herói
    atacar() {
        let ataque;

        // Verifica o tipo de herói e define a mensagem com o ataque apropriado
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
                break;
        }

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de criação de objetos Heroi e chamada do método atacar
const heroi1 = new Heroi('Gandalf', 1000, 'mago');
const heroi2 = new Heroi('Conan', 35, 'guerreiro');
const heroi3 = new Heroi('Bruce', 40, 'monge');
const heroi4 = new Heroi('Naruto', 18, 'ninja');

// Chama o método atacar para cada herói
heroi1.atacar(); // Saída: O mago atacou usando magia
heroi2.atacar(); // Saída: O guerreiro atacou usando espada
heroi3.atacar(); // Saída: O monge atacou usando artes marciais
heroi4.atacar(); // Saída: O ninja atacou usando shuriken

  


  
