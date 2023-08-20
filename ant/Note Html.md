# Short hand
<!--{
    background properties 
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;!-->

   
    background shorthand
    background: #000 url(images/bg.gif) no-repeat left top;
    /* font properties*/
    Font-style: italic;
 <!--Font-weight: bold;
Font-size: .8em;
Line-height: 1.2;
Font-family: Arial, sans-serif;

/* font shorthand*/
font: italic bold .8em/1.2 Arial, sans-serif; !-->



# Funções

Um tipo de valor existente no CSS, é estruturado com um nome seguido de abre e fecha parênteses.

Recebe um argumento, que são seus valores.

Um exemplo de função é:

color: rgb(255,0,100);

São coisas que permitem que browsers adiocionem features a fim de colocar em uso alguma novidade que vemos no CSS.

Exemplos:

<!--p {
	-webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge*/
	-o-background-clip: text; /* Opera */!-->

# Unidades comuns
<!--<length> - é um dos mais usados no CSS e representa um valor de distância: px, em, vw
<angle> - representa um ângulo: deg, rad, turn
<time> - representa um tempo: s, ms
<resolution> - representa resoluções para dispositivos: dpi !-->

# Box model
Tamanho (largura x altura) → width | height
Conteúdo                   → content
Bordas                     → border
Preenchimento interno       → padding
Espaços fora da caixa       → margin
justify content: center; - todas as caixas no centro



*{
  margin: 0;
}
# div {
  width: 100px;
  height: 100px;
  border: 1px solid;
  margin: 10px;
  background-color:greenyellow;

}

# bordas 
style: solid | dotted | dashed | double | groove | ridge | inset | outset

# background
{
  -color: cor
  -imagine-repeat: repetição nos eixos 
  -position: posição;
  -origin: onde o background começa
  -attachment: tipo de rolamento, scroll, fixed
  -background: linear-gradient(45deg, red, yellow)
}

# Fontes
MDN
Mobzilla

# Imagem
<a href="--">
<img
src=""
alt=""
title=""
height=""\
>

# Figure
<a href="https://www.google.com/"> link
    <figure>
        <img
        src="https://source.unsplash.com/random" imagem da figura
        alt="Imagem de title"
        title="Titulo"
        height="250px"
        >
        <figcaption> Colocar um titulo</figcaption>
    </figure>
</a>

# svg
figma.com

<svg width="200" height="200">
    <circle cx="100" cy="100" r="98" stroke="black"
    stroke-width="6" fill="blue" />
</svg>

# Position - css
position: relative; relativo à pagina.
absolute- relativo à inteiro podendo sobrepor elementos.
fixed- fixo.
z-index- camada.

position: relative/absolute;
    right: 10vh;

# grid
body {
    Margin: 7vh;
    height: 100vh;

    display: grid;
    grid-template-areas:
        "header header"
        "aside main "
        "footer footer";

    grid-template-rows: 0.2fr 6fr 0.04fr; altura da linha
    grid-template-columns: 0.25fr 1.1fr; largura da coluna
}
# texto
font-family - tipo de fonte
   font-family: "Times New Roman", Times, serid; a primeira, senão a segunda, senão a terceira fonte

font-weight- o quão escura a fonte é
(normal, bold100,200,300...)

font-style: estilo
(normal, italic, oblique)

font-size- tamanho
(px,em)

Font web- 
<link href="link" rel="stylesheet">

# Fontes
font-variant: varição da fonte
(small-caps)

Font-stretch: alargamento ou encolhimento da fonte
(expansed,condensed,normal,50%,200%)

Word-spacing: espaço entre palavras
(px,em) 

Letter-spacing: espaço entre letras
(px,em) 

line=height: espaço entre linhas
(px,em)

Text-transform: ttransformação do texto
(uppercase(tudo maiúsculo), lowercaseI(tudo minúsculo))

Text-decoration: decoração de texto(linha,estilo e cor)
(overline-sublinhado em cima)

Text-aligh: alinhamneto do texto
(right,center,justify)

Text-shadow: sombra do 
(3 posição, 1px, 1px, 1px, cor, green, embaçamento)

# Shorthand
Style, variant, weight, streth, size/ height e family.

# Forms - Formulário - HTML
<label>: Associar e identificar uma ou mais tags de entrada de dados.
    <form action="">
        <fieldset>
            <legend>Contato</legend>
            <label for="">Nome</label>
            <input type="text">
        </fieldset>
    </form>
  
<button>: butão

<Datalist>: 
lista de valores como sugestão a uma tag imput
Sugestivo e não obrogatório
<datalist id="colorsdata">
  <option>Red</option>
  <option>Green</option>
  <option>Blue</option>
</datalist>

# Input 
type=""-
    Email, text, file, passsword, url, checkbox, 

    hidden- esconde o  input

    radio- Usado para selecionar uma das opções.

# Checkbox
<input type="checkbox" name="terms" id="terms">
    <label for="terms">Você declara que possui +18 anos e concorda com os termos e condições.</label>

<legend>Bora tomar um café?</legend>

# Radio
<label for="yep">Sim</label>
<input type="radio" id="yep" name=" coffee" value=" yes">

<label for="yep">Não</label>
<input checked type="radio" id="nono" name=" coffee" value="no">


    autocomplete- completa automaticamente com dados já usados

    autofocus - o cursor foca nele, um por página

    disable- desabilita uma função

    required- exige o preenchimento do input

    placeholder- mensagem dentro do imput

# Input type="password"
    minlenght="4" minimo e
    maxlenght="0" maximo de caracteres

    size="8"-o input tem o tamanho da quantidade de letras

    patern- [0-9a-fA-f] aceita de 0 à 9, a à f letras
    maiúsculas e minúsculas

    patern- .*\.com\.br.*
    pode ser usado para exigir apenas algo especifico

# Input type="file"

    accept-Descrve tipos de arquivos aceitos(.doc, .pdf)

    files- lista de arquivos

    value- contém o arquivo a ser enviado

# Textarea<>
    
    id, name, rows, cols,max e minlenght, autocomplete,
    autofocus,disabled, placeholder, readomly, form, required
    size, select.

    Wrap="on" premite mais de uma linha

    <optogroup>
    
# Select- 
Contém apenas opções não podendo digitar
            <label for="gameselect">Qual o jogo?</label>
            <select name="game" id="gameselect">
                <option value=""> Selecione o modelo</option>
                <option value="Call of Dutty"> COD</option>
                <option value="Fortnite"> Fort</option>
            </select>

# search

<datalist id="search terms">
    <option>Mac</option>
    <option>Win</option>
    <option>Linux</option>
</datalist>

<form action="">
    <input type="search" name="q" list="search terms"
    place holder="Digit seu termo de busca"
    size="29"
    aria-label="Campo de pesquisa"> <!--Permite acessibilidde!-->
    <button>Pesuisar</botton>
</form>

# Number
step- pula de ua certa quantidade de número
<form action="">
    <input type="number"


            



