function buttonclick() {
    let first = document.getElementById("fn").value
    let last = document.getElementById("ln").value
    console.log(first, last)
    if (first.length > 0 && last.length > 0) {
        document.body.bgColor = randomcolor()
        console.log("hello")
    }
}
    //change background color to a random color && is and
