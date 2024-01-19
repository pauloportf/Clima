

const key = "d07de6f0b34e4671509dda74a2e0ee1b"

function formScreen (dados) {
    console.log(dados)
    document.querySelector(".title-city").innerHTML = `Clima em ${dados.name}`
    document.querySelector(".temp").innerHTML = `${Math.floor(dados.main.temp)}°C`
    document.querySelector(".text-content").innerHTML = dados.weather[0].description 
    document.querySelector(".text-umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
    document.querySelector(".img-content").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    let temperatura = dados.main.temp 

    if (temperatura > 30) {
        document.querySelector("body").style.backgroundImage = `https://images.unsplash.com/photo-1704485351547-a0a9893031f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
    } if (temperatura < 10) {
        document.querySelector("body").style.backgroundImage = `url(https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
    } else {
        document.querySelector("body").style.backgroundImage = `url(https://images.unsplash.com/photo-1609881142760-298c2e76725b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`
    }
}

async function buscarCidade (cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    
    formScreen(dados)
}

function pesquisar () {
    const cidade = document.querySelector(".input-city").value

    buscarCidade(cidade)
}