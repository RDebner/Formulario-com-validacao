let inputNome = document.getElementById('nome')
let inputEmail = document.getElementById('email')
let inputTelefone = document.getElementById('telefone')
let inputMensagem = document.getElementById('mensagem')

let botaoEnviar = document.getElementById('Enviar')
let nomeCampoObrigatorio = document.getElementById('nomeObrigatorio')
let emailCampoObrigatorio = document.getElementById('emailObrigatorio')
let telefoneCampoObrigatorio = document.getElementById('telefoneObrigatorio')
let mensagemCampoObrigatorio = document.getElementById('mensagemObrigatoria')
let formulario = document.getElementById('form')

inputNome.addEventListener('change', function () {
    if (inputNome !== "") {
        inputNome.classList.remove('borda')
        inputNome.classList.add('verde')
        inputNome.classList.remove('vermelha')
        nomeCampoObrigatorio.classList.add('esconder')
    }


})

inputEmail.addEventListener('change', function () {
    if (inputEmail !== "") {
        inputEmail.classList.remove('borda')
        inputEmail.classList.add('verde')
        inputEmail.classList.remove('vermelha')
        emailCampoObrigatorio.classList.add('esconder')
    }

})


inputTelefone.addEventListener('change', function () {
    if (inputTelefone !== "") {
        inputTelefone.classList.remove('borda')
        inputTelefone.classList.add('verde')
        inputTelefone.classList.remove('vermelha')
        telefoneCampoObrigatorio.classList.add('esconder')
    }

})

inputMensagem.addEventListener('change', function () {
    if (inputMensagem !== "") {
        inputMensagem.classList.remove('borda')
        inputMensagem.classList.add('verde')
        inputMensagem.classList.remove('vermelha')
        mensagemCampoObrigatorio.classList.add('esconder')
    }

})


function verificarInputs() {
    const inputNomeValue = inputNome.value.trim()
    const inputEmailValue = inputEmail.value.trim()
    const inputTelefoneValue = inputTelefone.value.trim()
    const inputMensagemValue = inputMensagem.value.trim()

    if (inputNomeValue == "") {
        inputNome.classList.remove('borda')
        inputNome.classList.remove('verde')
        inputNome.classList.add('vermelha')
        nomeCampoObrigatorio.classList.remove('esconder')
    }

    if (inputEmailValue == "") {
        inputEmail.classList.remove('borda')
        inputEmail.classList.remove('verde')
        inputEmail.classList.add('vermelha')
        emailCampoObrigatorio.classList.remove('esconder')
    }

    if (inputTelefoneValue == "") {
        inputTelefone.classList.remove('borda')
        inputTelefone.classList.remove('verde')
        inputTelefone.classList.add('vermelha')
        telefoneCampoObrigatorio.classList.remove('esconder')
    }

    if (inputMensagemValue == "") {
        inputMensagem.classList.remove('borda')
        inputMensagem.classList.remove('verde')
        inputMensagem.classList.add('vermelha')
        mensagemCampoObrigatorio.classList.remove('esconder')
    }
}

botaoEnviar.addEventListener('click', function (e) {

    verificarInputs()

    if (inputNome.classList.contains('vermelha') || inputEmail.classList.contains('vermelha') || inputMensagem.classList.contains('vermelha') || inputTelefone.classList.contains('vermelha')){
        e.preventDefault()
    }
})
