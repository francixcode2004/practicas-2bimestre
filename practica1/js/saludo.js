var today = new Date()
var hora=today.getHours()
var saludo

console.log(today)
console.log(hora)


if(hora>18){
    saludo ='Buenas noches'
}else if(hora>12){
saludo ='Buenas Tardes'
}else if(hora>0){
    saludo ='Buenos dias'
}

document.write('<h3>'+saludo+'</h3>')
var persona = { nombre: 'francsico' };

function Saludo (){
    document.write("hola "+  persona.nombre+'\n')
}
Saludo()

function saludo_1(nombre) {
    document.write("Hola " + nombre);
}

saludo_1('francix'); 