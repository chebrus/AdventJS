function wrapGifts(gifts){
    let res=[]
    const initAndFinish= "*".repeat(2+gifts[0].length)
    res.push(initAndFinish)
    gifts.forEach((g)=>{
        res.push("*"+ g+ "*")
    })
    res.push(initAndFinish)
    return res
}

wrapGifts(["📷", "⚽️"])
wrapGifts(["🏈🎸", "🎮🧸"])


