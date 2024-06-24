/* 1.Cambia el contenido de la etiqueta h1 con document.querySelector
y asigna el siguiente texto: "Hora del Desafío".*/
let h1 = document.querySelector('h1')
h1.innerHTML = 'Hora del Desafío';


/* 2. Crea una función que muestre en la consola el mensaje
"El botón fue clicado" siempre que se presione el botón "Console".*/
function botonConsole(){
    console.log('El botón fue clicado');
}


/* 3. Crea una función que se ejecute cuando se haga clic en el botón
"prompt", preguntando el nombre de una ciudad de Brasil. Luego, 
muestra una alerta con el mensaje concatenando
la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".*/
function botonPrompt(){
    ciudad = prompt('Ingrese nombre de una ciudad de Brasil: ');
    alert(`Estuve en ${ciudad} y me acorde ti.`);
}


/* 5. Crea una función que muestre una alerta con el mensaje: 
"Yo amo JS" siempre que se presione el botón "Alerta".*/
function botonAlert(){
    alert('Yo amo JS');
}


/* 6. Al hacer clic en el botón "suma", 
pide 2 números y muestra el resultado de la suma en una alerta.*/
function botonSuma(){
    numeroUno = parseInt(prompt('Ingrese primer numero:'));
    numeroDos = parseInt(prompt('Ingrese segundo numero:'));
    resutlado = numeroUno + numeroDos;
    alert(`Resultado de ${numeroUno}+${numeroDos} = ${resutlado}`);
}
