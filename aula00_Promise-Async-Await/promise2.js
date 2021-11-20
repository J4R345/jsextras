/* function startIn(){
    
    // função para iniciar objetos do DOM
}

window.addEventListener('load',startIn);
*/

let p = new Promise((resolve, reject)=> {

    let a = 1 + 2
    
    if (a == 2) {
        resolve('Sucess')
    } else {
        reject('Failed')
    }
    })
    
    p.then((message) => {
        console.log("This is in the then " + message)
    }).catch((err) => {
        console.log("this is the catch " +err)
    })
