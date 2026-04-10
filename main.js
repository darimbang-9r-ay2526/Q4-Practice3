function verifyCategory() {
    var category = document.getElementById('categorya').value;
    
    switch (category) {
        case "A":
            document.getElementById("display").innerHTML =
             "Category: Clothing";
            break;
        case "B":
            document.getElementById("display").innerHTML =
             "Category: Electronics";
            break;
        case "C":
            document.getElementById("display").innerHTML =
             "Category: Books";
            break;
        default:
            window.alert("Invalid category. Please enter A, B, or C.");
    }
}