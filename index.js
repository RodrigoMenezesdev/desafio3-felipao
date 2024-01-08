class Heroi {
    constructor(nome,idade,tipo ){
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
      switch (this.tipo) {
        case 'mago':
          ataque = ' magia';
          break;
          case 'guerreiro':
            ataque = 'espada';
            break;  
          case 'monge':
              ataque = ' artes marciais';
              break;
            case 'ninja':
                ataque = ' shuriken';
                break;
            default:
              ataque = 'atacou';        
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  
  }
  
  const meuHeroi = new Heroi('Rodrigo', 37, 'mago');
  meuHeroi.atacar();
  const brabo = new Heroi('Ricardo', 16, 'guerreiro');
  brabo.atacar();
  const artes = new Heroi('Tiago', 16, 'monge');
  artes.atacar();
  const louco = new Heroi('Maria', 35, 'ninja');
  louco.atacar();