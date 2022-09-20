
    function validate(){
    var username = document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username =="Liliana" && password==20)
    {
        alert ("Bienvenida Amor 💞");
        window.open("menu.html");
        

    }
    else{
        alert("Usuario o contraseña Incorrecta")
    }
}
