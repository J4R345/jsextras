

//Efeito Maquina de Escrever

const title = document.querySelector('h1')

function typeWriter (el) {

    const textArray = el.innerHTML.split('')
    el.innerHTML = ''
    textArray.forEach((letter, i) => {

        setTimeout(() => el.innerHTML += letter, 75 * i)
   
    });

}

typeWriter (title)

