function generateCard() {
    
    const nameElement = document.getElementById("name");
    const nameValue = nameElement.value; 

    // const imageValue = document.getElementById("output").value;
    // document.getElementById("output").innerHTML = imageValue;

    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    const collegeNameValue = document.getElementById("collegeName").value;
    document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

    const locationValue = document.getElementById("location").value;
    document.getElementById("cardLocation").innerHTML = locationValue;

    document.getElementById("collegeCard").style.display = "block";

}
    

var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) 
    }
};