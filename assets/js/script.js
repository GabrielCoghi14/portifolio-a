document.querySelector("#paginas").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#prototipo_sim").addEventListener("change", calcular)
document.querySelector("#prototipo_nao").addEventListener("change", calcular)

document.querySelector("#prazo").addEventListener("input", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerText = "Risco:" + prazo
    calcular()
})

function calcular(){
    
    const qtdeDePaginas = document.querySelector("#paginas").value
    let valor = qtdeDePaginas*10

    const tipo = document.querySelector("tipo").value
    if(tipo == 2) valor += 2000

    const prototipo = document.querySelector("#prototipo").checked
    if(prototipo) valor *= 1.1
    
    document.querySelector("#valor").innerText = "R$" + valor.toFixed(2)


}

