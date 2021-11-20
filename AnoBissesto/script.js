
function anoBissexto(ano){
// Retorna se o ano é bissexto ou não
    if ( ( ano % 4 == 0 && ano % 100 != 0 ) || (ano % 400 == 0) ) { 
        return true
    } else {
       return false
    }    
}
console.log(anoBissexto(2025))



