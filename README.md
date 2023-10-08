<h1 align="center">Pokedex Ionic + Angular</h1>


## Deploy
Preview: </br>
[Acesse aqui a Pokedex](https://dashboard.ionicframework.com/app/ca862f37/preview/8952798)

obs: deploy através do ionic framework está causando conflitos pois altera as url's, para o comportamento correto da aplicação rodar local ou assistir no tópico de "Visão Geral"

## Abordagem
- Optei pela navegação por tabs, bem consolidado no meio mobile então as pessoas conseguem se orientar bem
- Para os componentes utilizados criei um módulo shared onde posso importá-los depois onde for necessário e me aproveitei ao máximo do ionic ui components onde fosse viável
- Para a criação dos favoritos utilizei o storage que o ionic já oferece suporte, criei ele como um serviço e fiz a injeção da dependência na raiz para prover a todos os módulos.
- Estilização feita com scss sem nenhuma lib e me aproveitando ao máximo do ionic ui components reduzi muito a necessidade de adaptações.
- Criação de tipagens relacionadas a API que estava utilizando para o typescript auxilios inferindo os tipos

## Descritivo
O escopo do projeto era a entrega de uma listagem paginada de pokemons onde ao clicar em um deverá ser mostrado uma tela onde contenha 6 informações sobre eles e implementar algum sistema para salvar os pokemons favoritos.

![image](https://github.com/augusto-f-rodrigues/bsn-app/assets/85464318/d25b88e8-05f9-4be4-8c9c-68b1e716a77f)

<h2>Informações: </h2>
1. Health Points </br>
2. Imagem </br>
3. Número correspondente a Pokedex </br>
4. Nome </br>
5. Tipos elementais </br>
6. Altura em metros </br>
7. Peso em quilos

## Visão geral

https://github.com/augusto-f-rodrigues/bsn-app/assets/85464318/c89bd975-394e-47f1-a810-e4199e9912f5

## ⚙️ Como executar 

```
npm install -g @ionic/cli @capacitor/assets
git clone https://github.com/augusto-f-rodrigues/bsn-app.git bsn-app
cd bsn-app && npm install && ionic serve
```

Feito por Augusto Rodrigues  [ 🌐 LinkedIn.](https://www.linkedin.com/in/augusto-f-rodrigues/)

