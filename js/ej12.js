let numeroRandom = Math.ceil(Math.random() * 100)
console.log(numeroRandom)
if(numeroRandom == 100){
    numeroRandom--
}
document.write("<div>"+  numeroRandom+ "</div>"  )