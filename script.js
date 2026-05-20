const button = document.querySelector("button")
const input = document.querySelector("input")
const lista = document.querySelector("ul")

function adicionarTarefa() {

    if(input.value === ""){
        alert("Digite uma tarefa!")
        return
    }

    const novaTarefa = document.createElement("li")

    novaTarefa.innerHTML = `
        ${input.value}
        <span>❌</span>
    `

    lista.appendChild(novaTarefa)

    input.value = ""

    const botaoExcluir = novaTarefa.querySelector("span")

    botaoExcluir.addEventListener("click", function(){
        novaTarefa.remove()
    })
}

button.addEventListener("click", adicionarTarefa)