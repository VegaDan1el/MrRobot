// INICIO
function entrar(){
    let p = document.getElementById("pass").value;

    if(p === "CETIS155"){
        window.location.href = "pagina1.html";
    } else {
        alert("Acceso denegado");
    }
}

// PAGINA 1
function p1(){
    let r = document.getElementById("r").value.toUpperCase();

    if(r === "M"){
        localStorage.setItem("p1", r);
        window.location.href = "pagina2.html";
    } else {
        alert("Incorrecto");
    }
}

// PAGINA 2
function p2(){
    let r = document.getElementById("r").value.toUpperCase();

    if(r === "R"){
        localStorage.setItem("p2", r);
        window.location.href = "pagina3.html";
    } else {
        alert("Incorrecto");
    }
}

// PAGINA 3
function p3(){
    let r = document.getElementById("r").value.toUpperCase();

    if(r === "ROBOT"){
        localStorage.setItem("p3", r);
        window.location.href = "final.html";
    } else {
        alert("Incorrecto");
    }
}

// FINAL
function verificar(){
    let p1 = localStorage.getItem("p1") || "";
    let p2 = localStorage.getItem("p2") || "";
    let p3 = localStorage.getItem("p3") || "";

    let clave = p1 + p2 + p3;

    let user = document.getElementById("clave").value.toUpperCase();

    if(user === clave && user === "MRROBOT"){
        document.body.innerHTML = "<h1>🎉 FELICIDADES HACKER 🎉</h1>";
    } else {
        alert("Clave incorrecta");
        localStorage.clear();
        window.location.href = "index.html";
    }
}
