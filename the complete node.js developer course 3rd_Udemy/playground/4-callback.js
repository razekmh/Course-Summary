setTimeout(()=>{
    console.log("Two seconds!")
}, 2000)


const gecode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data) 
    }, 2000)
}

gecode('city', (collected) => {
    console.log(collected)
})