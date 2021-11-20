
function bestRockBand(band){
    return new Promise((resolve, reject) => {
        if(band == 'Queen'){

            resolve({
                sucess: true,
                bandName: band,
                msg: band + ' is the best rock band ever!'
            
            });
        }else {
            reject({
                success: false,
                msg: 'I\'m not so sure!'
            });
        }
    });
}

function bestRockSong(response){
    return new Promise((resolve, reject) => {
        if (response.sucess) {
            resolve('Bohemian Rhapsody by '+ response.bandName);
        }else {
            reject('do you know Queen?');
        }
    });
}

bestRockBand('Queen')
.then(response => {
    console.log('Cheking the answer...');
    return bestRockSong(response)
})
.then(response => {
    console.log('Finding the best song ...');
    console.log(response);
})
.catch(err => {
    console.log(err.msg);
})