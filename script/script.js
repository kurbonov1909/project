

const dat = {}


function myfunction() {
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let text = document.getElementById('text').value;

    


    if (name != "null" || number != "null" || email != "null" || text != "null") {
        alert(`Salom ${name}.  Murojat qoldirganingizdan minnatdormiz`)
        dat["username"] = name;
        dat["number"] = number;
        dat["email"] = email;
        dat["email"] = text;
    } else{
        alert("Maydonni to`liq kiriting")
    }
    console.log(dat);
    
}

// const sl = {}

function sletter() {
    let input = document.getElementById('sletters').value;
    dat["sletters"] = input;
    console.log("ishladi")
    alert("Etiborsiz qoldirmaganingiz uchun raxmat")
}



const users = {}



function regis() {
    let username = document.getElementById("user_name").value;
    let userage = document.getElementById("user_age").value;
    let usernumber = document.getElementById("user_number").value;


    if (username == "" && userage == "" && usernumber == "") {
        alert("Maydonni to`liq to`ldiring");
    } else{
        users["username"] = username;
        users["userage"] = userage;
        users["usernumber"] = usernumber;
        alert(`Siz ro'yxatdan o'tdingiz`);   
        location.replace("https://kurbonovbnpz.netlify.app/")
    }






}