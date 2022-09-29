const carta = 'bici coche  balón _playstation    bici coche peluche'

const listGifts = (letter) => {
    letter = letter.split(' ').filter(regalo => regalo && !regalo.split('')[0].includes('_')  )
    let value ={}
    letter.forEach(regalo => {
        if(value[regalo] ){
            value[regalo] += 1
        }else{
            value[regalo] = 1
        }
    })

    return value

}

const regalos = listGifts(carta)

console.log(regalos)