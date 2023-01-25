## Array JS

"*Todo Array é um objeto!*"

- Pode inserir tipos diferentes no mesmo array **POREM** não é recomendado que isso seja feito.

- Pode ser declarado de duas formas:

  ```js
  // método 1
  let aprovados = new Array ('Bia', 'Carlos', 'Ana')
  
  // método 2
  let aprovados = ['Bia', 'Carlos', 'Ana']
  ```



- Para acessar algum valor dentro de um array deve-se referenciar da seguinte maneira:

  ```js
  /* 
  O valor colocado entre colchetes é o indice,
  o indice é um valor que começa de 0 portanto 
  o retorno dessa operação deveria ser 'Bia'
  */
  console.log(aprovados = [0])
  ```

  

- Para adicionar um valor em um Array as seguintes formas devem ser utilizadas:

  ```js
  // Referenciando um index não ocupado ainda
  aprovados[3] = 'Paulo'
  
  // Método Push
  aprovados.push('Abia')
  ```



- **CUIDADO**: Quando referenciar um index não ocupado, se atente pra que ele seja a sequência do array (se o array terminou no índice 4 que ele seja o 5), pois senão ele irá ocupar todos os espaços entre o ultimo valor e o valor colocado como undefined. Segue um exemplo:

  ```js
  let aprovados = ['Bia', 'Carlos', 'Ana']
  
  aprovados[6] = "Beto"
  
  console.log(aprovados)
  // >> ['Bia', 'Carlos', 'Ana', <3 empty items>, 'Beto']
  ```



- **Comando sort()**: Organiza o array em ordem alfabética, deixando os itens vazios no final dele.

  ```js
  let aprovados = ['Bia', 'Carlos', 'Ana']
  
  aprovados[6] = 'Beto'
  
  aprovados.sort()
  
  console.log(aprovados)
  // >> ['Ana', 'Beto', 'Bia', 'Carlos', <3 empty items>]
  ```

  

- **Excluindo um índice do array**: podemos utilizar vários métodos, seguem exemplos:

  ```js
  /*
  Considere o seguinte array para os exemplos abaixo:
  	- aprovados = ['Ana', 'Beto', 'Bia', 'Carlos']
  Pense que as funções não tão sendo executadas uma após a outra e sim estão alterando o array acima.
  */
  
  // Vai apagar o valor no índice informado
  delete aprovados[1]
  // >> [ 'Ana', <1 empty item>, 'Bia', 'Carlos' ]
  
  // Vai apagar o valor do último índice do array e retorna-lo
  aprovados.pop()
  // >> [ 'Ana', 'Beto', 'Bia' ]
  
  // Vai apagar o valor do primeiro índice do array e retorna-lo
  aprovados.shift()
  // >> [ 'Beto', 'Bia', 'Carlos' ]
  
  // Vai apagar um valor baseado no índice informado e a quantidade passada
  aprovados.splice(1, 1)
  // >> ['Ana', 'Bia', 'Carlos']
  aprovados.splice(1,2)
  // >> [ 'Ana', 'Carlos' ]
  aprovados.splice(0,2)
  // >> [ 'Bia', 'Carlos' ]
  ```

  - Repare que *delete* não reorganiza o array de nenhuma forma, somente apaga o valor no índice informado.

    

- **Inserindo valores em um array**: podemos utilizar vários métodos, seguem exemplos:

  ```js
  /*
  Considere o seguinte array para os exemplos abaixo:
  	const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
  Pense que as funções não tão sendo executadas uma após a outra e sim estão alterando o array acima.
  */
  
  // Insere um valor no final do array
  pilotos.push('Verstappen')
  // >> ['Vettel', 'Alonso', 'Raikkonen', 'Massa', 'Verstappen']
  
  // Insere um valor no começo do array
  pilotos.unshift('Verstappen')
  // >> ['Verstappen', 'Vettel', 'Alonso', 'Raikkonen', 'Massa']
  
  /* 
  Adiciona baseado no índice passado no primeiro parâmentro, remove o indíce informado no segundo e adiciona os parâmetros passados após esses dois
  */
  pilotos.splice(2, 0, 'Bottas', 'Senna')
  // >> [ 'Vettel', 'Alonso', 'Bottas', 'Senna', 'Raikkonen', 'Massa' ]
  
  // Caso fosse passado um parametro diferente no valor 0 ele apagaria e adicionaria após apagar
  pilotos.splice(2, 2, 'Bottas', 'Senna')
  // >> [ 'Vettel', 'Alonso', 'Bottas', 'Senna' ]
  
  // Retorna um novo array a partir de um pedaço de um array
  const algunsPilotos2 = pilotos.slice(2)
  // log do algunsPilotos2
  // >> [ 'Raikkonen', 'Massa' ]
  
  // Retorna um novo array a partir de um pedaço de um array inicio 1 ao 3
  const algunsPilotos2 = pilotos.slice(1, 4)
  // log do algunsPilotos2
  // >> [ 'Alonso', 'Raikkonen', 'Massa' ]
  ```




- **Iterando pelo array**: métodos para percorrer um array, seguem exemplos:

- **forEach()**

  ```js
  /*
  Considere o seguinte array para os exemplos abaixo:
  	const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
  Pense que as funções não tão sendo executadas uma após a outra e sim estão alterando o array acima.
  */
  
  // Realiza a função descrita para cada elemento do array
  aprovados.forEach(
      function(nome, indice){
          console.log(`${nome}: ${indice}`)
      }
  )
  /* 
  >> Agatha: 0
  >> Aldo: 1
  >> Daniel: 2
  >> Raquel: 3
  */
  
  // Pode realizar o forEach() sem passar parâmetros também
  aprovados.forEach(nome => console.log(nome))
  /* 
  >> Agatha
  >> Aldo
  >> Daniel
  >> Raquel
  */
  
  // Pode passar também uma função em variável pro método forEach()
  const cumprimentar = (nome) => {
      console.log(`Olá, ${nome}`)
  }
  
  aprovados.forEach(cumprimentar)
  /* 
  >> Olá, Agatha
  >> Olá, Aldo
  >> Olá, Daniel
  >> Olá, Raquel
  */
  
  // Para utilizar somente o índice precisa passar o primeiro parametro, mesmo que não seja utilizado
  const printa_indice = (nome, indice) => {
  	console.log(indice)
  }
  
  aprovados.forEach(printa_indice)
  /*
  >> 0
  >> 1
  >> 2
  >> 3
  */
  
  // A ordem dos parametros é nome, indice e array
  const printa_valor = (nome, indice, arr) => {
  	console.log(arr[indice])
  }
  
  aprovados.forEach(printa_valor)
  /*
  >> Agatha
  >> Aldo
  >> Daniel
  >> Raquel
  */
  ```

- **map()**

  ```js
  /*
  Considere o seguinte array para os exemplos abaixo:
  	const nums = [1, 2, 3, 4, 5]
  Pense que as funções não tão sendo executadas uma após a outra e sim estão alterando o array acima.
  */
  
  // Mapeia um array transformando-o em um novo array de mesmo tamanho com valores processados
  let novo_arr = nums.map(
      function(e) {
          return e * 2
      }
  )
  // log do novo_arr
  // >> [ 2, 4, 6, 8, 10 ]
  
  // Exemplo que soma 10 aos elementos do array nums
  const soma10 = e => e + 10
  
  let novo_arr = nums.map(soma10)
  // log do novo_arr
  // >> [ 11, 12, 13, 14, 15 ]
  
  // Exemplo que gera um array novo com o triplo dos valores
  const triplo = e => e * 3
  
  let novo_arr = nums.map(triplo)
  // log do novo_arr
  // >> [ 3, 6, 9, 12, 15 ]
  
  // Exemplo que converte em um formato de dinheiro
  const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
  
  let novo_arr = nums.map(paraDinheiro)
  // log do novo_arr
  // >> [ 'R$ 1,00', 'R$ 2,00', 'R$ 3,00', 'R$ 4,00', 'R$ 5,00' ]
  
  // Agora as 3 funções juntas
  const soma10 = e => e + 10
  const triplo = e => e * 3
  const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
  
  let novo_arr = nums.map(soma10).map(triplo).map(paraDinheiro)
  // log do novo_arr
  // >> [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
  ```

  

- **filter()**

  ```js
  /*
  	const produtos = [
  		{ nome: 'Notebook', preco: 2499, fragil: true },
  		{ nome: 'iPad Pro', preco: 4199, fragil: true },
  		{ nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  		{ nome: 'Copo de Plastico', preco: 18.99, fragil: false },
  	] 
  */
  
  // Filtra um array em outro diminuindo se necessário o número de indices
  let novo_arr = produtos.filter(function(e){
      return (e.preco > 2500)
  })
  // log do novo_arr
  // >> [ { nome: 'iPad Pro', preco: 4199, fragil: true } ]
  
  // Filtra para retornar somente os produtos frageis
  const fragil = e => (e.fragil == true)
  
  let novo_arr = produtos.filter(fragil)
  // log do novo_arr
  /*
  >> [
       { nome: 'Notebook', preco: 2499, fragil: true },
       { nome: 'iPad Pro', preco: 4199, fragil: true },
       { nome: 'Copo de Vidro', preco: 12.49, fragil: true }
     ]
  */
  
  // Filtra para retorar somente produtos que custam mais que 500 reais
  const caro = e => (e.preco > 500)
  
  let novo_arr = produtos.filter(caro)
  // log do novo_arr
  /*
  >> [
       { nome: 'Notebook', preco: 2499, fragil: true },
       { nome: 'iPad Pro', preco: 4199, fragil: true }
     ]
  */
  
  // Produtos caros e frageis
  const caro = e => (e.preco > 500)
  const fragil = e => (e.fragil == true)
  
  let novo_arr = produtos.filter(caro).filter(fragil)
  // log do novo_arr
  /*
  >> [
       { nome: 'Notebook', preco: 2499, fragil: true },
       { nome: 'iPad Pro', preco: 4199, fragil: true }
     ]
  */
  ```

  

- **reduce()**

  ```js
  /*
  	const alunos = [
          { nome: 'João', nota: 7.3, bolsista: false},
          { nome: 'Maria', nota: 9.2, bolsista: true},
          { nome: 'Pedro', nota: 9.8, bolsista: false},
          { nome: 'Ana', nota: 8.7, bolsista: true},
  	]
  */
  
  // Transforma um array em um elemento com um parametro sendo acumulado durante a iteração
  const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
      return (acumulador + atual)
  } )
  // log do resultado
  // >> 35
  
  // Tira a média dos valores das notas
  const soma = (anterior, atual) => {
      return (anterior + atual)
  }
  
  let resultado = ((alunos.map(a => a.nota).reduce(soma))/ alunos.length)
  // >> 8.75
  
  //Tira a média das notas dos bolsistas
  const soma = (anterior, atual) => {
      return (anterior + atual)
  }
  
  const bolsista = e => (e.bolsista == true)
  
  let arr_bolsistas = alunos.filter(bolsista).map(a => a.nota)
  
  let resultado = arr_bolsistas.reduce(soma) / arr_bolsistas.length
  // log do resultado
  // >> 8.95
  ```

- concat()

  ```js
  // Concatena Arrays
  const prof = ['Alberson', 'Walter']
  const func = ['Reis', 'Alexandra']
  const todos = prof.concat(func)
  // >> [ 'Alberson', 'Walter', 'Reis', 'Alexandra' ]
  
  // O que acontece se concatenar o seguinte exemplo ?
  let teste = []
  console.log(teste.concat([1, 2], [[1,2], [3,4]]))
  // Os valores do primeiro array vão ser extraidos como valores os arrays dentro do array
  // como arrays.
  // >> [ 1, 2, [ 1, 2 ], [ 3, 4 ] ]
  ```

- FlatMap()

  ```js
  const escola = [{
      nome: 'Turma M1',
      alunos: [{
          nome: 'Gustavo',
          nota: 8.1
      }, {
          nome: 'Ana',
          nota: 9.3
      }]
  }, {
      nome: 'Turma M2',
      alunos: [{
          nome: 'Rebeca',
          nota: 8.9
      }, {
          nome: 'Roberto',
          nota: 7.3
      }]
  }]
  
  // Gostariamos de extrair as notas de todos os alunos independente das turmas
  const getNotaDoAluno = aluno => aluno.nota
  const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
  
  const notas1 = escola.map(getNotasDaTurma)
  console.log(notas1)
  // >> [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]
  // Retornou um array com arrays, porém queremos somente um array com tudo incluso nele.
  
  Array.prototype.flatMap = function(callback) {
     return Array.prototype.concat.apply([], this.map(callback))
  }
  
  const notas2 = escola.flatMap(getNotasDaTurma)
  console.log(notas2)
  // >> [ 8.1, 9.3, 8.9, 7.3 ]
  // Agora sim!
  ```

  