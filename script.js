// alert simples

// alert("ola mundo")

//alert de confirmacao
let msg=confirm("voce e um aluno?")

//alert passando valores em campos
let msg1=prompt("digite seu nome")
document.write("meu nome é:",msg1)

//condicao if 
if(10>7){
   document.write("dez é maior que sete")
}
let valor =15
if(valor>10){
  document.write("<br>")
   document.write("o + valor + e maior que 10")
}else{
    document.write("<br>")
    document.write("o valor é menor")
}


let idade =  19
if(idade  <=12){
    document.write("é uma criança")
}else if(idade <= 17){
    document.write("é um adolescente")
}else if(idade <=29){
    document.write("é um jovem")
}else{
    document.write("é um adulto")
}


let valores= prompt("digite um valor")
if(valor> 10){
    document.write("o valor e maior") 
}else{
    document.write("o valor e menor")
}

if(valor >10 && valor <20){
    document.write("este valor e valido")
}



