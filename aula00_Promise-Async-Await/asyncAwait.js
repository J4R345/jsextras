
/*
async await deve ser usados com promises no JavaScrip?
*/
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

async function doTheJob(){
    try {
        const bestRockBandReponse = await bestRockBand('Queen');
        console.log(bestRockBandReponse);
        const bestRockSongResponse = await bestRockSong(bestRockBandReponse);
        console.log(bestRockSongResponse)
    } catch (err) {
        console.log(err.msg);
        
    }
}
doTheJob();