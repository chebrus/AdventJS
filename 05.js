function daysToXmas(date) {
    const day = new Date('Dec 25, 2022')
    const diff = day.getTime() - date.getTime()
    if (diff >= 1) {
        return Math.ceil((diff / (1000 * 60 * 60 * 24)))
    }
    return diff < 1 ? Math.ceil((diff / (1000 * 60 * 60 * 24))) : Math.floor((diff / (1000 * 60 * 60 * 24)))
}

const date = new Date('Jan 1, 2023 23:59:59')
console.log(daysToXmas(date))