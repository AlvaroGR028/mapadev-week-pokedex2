/*
Quando clicar no pokemon da listagem, temos que esconder o cartão do pokémon aberto e mostrar o cartão do pokémon correspondente ao que foi selecionado na listagem 

Para isso vamos precisar trabalhar com 2 elementos:
1 - listagem
2 - cartão pokémon

precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

vamos precisar trabalhar com um elemento de clique feito pelo usuário na listagem de pokémons
- Remover a classe aberto só do cartão que está aberto
- ao clicar em pokémon da listagem pegamos o id desse pokémmon para saber qual cartão mostrar
- remover a classe ativa que marca o pokemon selecionado
-adicionar a classe ativo no item da lista selecionado
44:21
*/

const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard =document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemon.forEach(pokemon => {
  pokemon.addEventListener('click', () =>  {
    //- Remover a classe aberto só do cartão que está aberto
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')


    //- ao clicar em pokémon da listagem pegamos o id desse pokémmon para saber qual cartão mostrar 
    const idPokemonSelecionado = pokemon.attributes.id.value

    const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('aberto')
    
    //- remover a classe ativa que marca o pokemon selecionado

    const pokemonAtivoNaListagem = document.querySelector('.ativo')
    pokemonAtivoNaListagem.classList.remove('ativo')

   //-adicionar a classe ativo no item da lista selecionado
     const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado) 
     pokemonSelecionadoNaListagem.classList.add('ativo')

})  
})