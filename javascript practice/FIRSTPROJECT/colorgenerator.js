function randomcolor() {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let color = "rbg(" + x + "," + y +"," + z + ")"
    console.log(color)
    return color
}