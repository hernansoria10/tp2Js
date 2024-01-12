let numeroRandom = Math.ceil(Math.random() * 100)
console.log(numeroRandom)
if(numeroRandom == 100){
    numeroRandom = numeroRandom - Math.ceil(Math.random() * 10)
}
document.write("<div>"+  numeroRandom+ "</div>"  )