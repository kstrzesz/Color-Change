function buttonclick() {
    let first = document.getElementById("fn").value
    let last = document.getElementById("ln").value
    let validName = first + " " + last
    if (first.length > 0 && last.length > 0) {
        document.body.bgColor = randomcolor()
    }
    
}
    //change background color to a random color && is and
