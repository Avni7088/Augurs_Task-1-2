
    // Form Validation
     
function validate() {
    var name = document.getElementById("fn").value;


    if (name == "") {
        alert("Name Can not be blank ");
        return false;
    }

    else if (name.length <= 3) {
        alert("Name is too Short")
    }

    else if (name.length >= 15) {
        alert("Name is too Long")
    }


    // l name

    var ln = document.getElementById("ln").value;

    if (ln == "") {
        alert("Last Name Can not be blank ");
        return false;
    }

    else if (ln.length <= 3) {
        alert("Last Name is too Short")
    }

    else if (ln.length >= 15) {
        alert("Last Name is too Long")
    }

    // email 

    var em = document.getElementById("em").value;

    if (em == "") {
        alert("Email Can not be blank ");
        return false;
    }
    else if (ln.length >= 20) {
        alert("Email is too Long")
    }

    // address

    var add = document.getElementById("add").value;

    if (add == "") {
        alert("Address Can not be blank ");
        return false;
    }

    else if (ln.length <= 3) {
        alert("Address is too Short")
    }

    else if (ln.length >= 50) {
        alert("Address is too Long")
    }

    // number

    var num = document.getElementById("num").value;

    if (num == "") {
        alert("Phone number Can not be blank ");
        return false;
    }

    else if (num.length <= 9) {
        alert(" please fill 10 number")
    }

    else if (num.length >= 11) {
        alert("giving numer is out of 10")
    }

    // Dob

    var dob = document.getElementById("dob").value;

    if (dob == "") {
        alert("DOB Can not be blank ");
        return false;
    }

    // cuntry

    var msg = document.getElementById("msg").value;

    if (msg == "") {
        alert("Please Messeage Write Minume 100 of Words ");
        return false;
    }

    else if (msg.length <= 10) {
        alert("Message is too Short")
    }

    else if (msg.length >= 500) {
        alert("Message is too Long")
    }


    // chkbox

    var ckhbox = document.getElementById("ckhbox");
    var text = document.getElementById("confirm");

    if (ckhbox.checked) {
        text.innerHTML = "Your response has been Sucsscefully Recorded.";
    } else {
        text.innerHTML = "Can you ensure Checkbox  are correctly Checked?";
    }

};

