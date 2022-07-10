function cambiaResidentes(){
    cambiarTodoBlanco();
    console.log('Residentes{');
    for(let i = 1; i < 7; i++){
        let element = document.getElementById(`villa1${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1 || entero == 3){
            element.style.setProperty('background-color','rgb(255, 204, 0)');
        }
        if(entero == 2 || entero == 4 || entero == 5 || entero == 6){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
    }
    console.log('Colores cambiados en la villa 1!');

    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`villa2${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1 || entero == 2 || entero == 4){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
        if(entero == 3){
            element.style.setProperty('background-color','rgb(255, 204, 0)');
        }
    }
    console.log('Colores cambiados en la villa 2!');

    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`villa3${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1 || entero == 3 || entero == 4){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
        if(entero == 2){
            element.style.setProperty('background-color','rgba(128, 128, 128, 0.829)');
        }
    }
    console.log('Colores cambiados en la villa 3!');

    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`villa4${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1){
            element.style.setProperty('background-color','red');
        }
        if(entero == 2 || entero == 3 || entero == 4){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
    }
    console.log('Colores cambiados en la villa 4!');

    for(let i = 1; i < 6; i++){
        let element = document.getElementById(`villa5${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1){
            element.style.setProperty('background-color','rgba(128, 128, 128, 0.829)');
        }
        if(entero == 2){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
        if(entero == 3){
            element.style.setProperty('background-color','rgb(255, 204, 0)');
        }
        if(entero == 4){
            element.style.setProperty('background-color','yellow');
        }
        if(entero == 5){
            element.style.setProperty('background-color','red');
        }
    }
    console.log('Colores cambiados en la villa 5!');
    console.log('}');
    console.log('');
}


function cambiaResidentesSinDeudas(){
    cambiarTodoBlanco();
    console.log('ResidentesSinDeudas{');
    for(let i = 1; i < 7; i++){
        let element = document.getElementById(`villa1${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 2 || entero == 4 || entero == 5 || entero == 6){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
    }
    console.log('Colores cambiados en la villa 1!');

    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`villa2${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1 || entero == 2 || entero == 4){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
    }
    console.log('Colores cambiados en la villa 2!');

    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`villa3${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1 || entero == 3 || entero == 4){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
    }
    console.log('Colores cambiados en la villa 3!');

    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`villa4${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 2 || entero == 3 || entero == 4){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
    }
    console.log('Colores cambiados en la villa 4!');

    for(let i = 1; i < 6; i++){
        let element = document.getElementById(`villa5${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 2){
            element.style.setProperty('background-color','rgba(89, 255, 47, 0.985)');
        }
    }
    console.log('Colores cambiados en la villa 5!');
    console.log('}');
    console.log('');
}




function cambiaResidentesConDeudas(){
    cambiarTodoBlanco();
    console.log('ResidentesConDeudas{');
    for(let i = 1; i < 7; i++){
        let element = document.getElementById(`villa1${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1 || entero == 3){
            element.style.setProperty('background-color','rgb(255, 204, 0)');
        }
    }
    console.log('Colores cambiados en la villa 1!');
    
    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`villa2${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 3){
            element.style.setProperty('background-color','rgb(255, 204, 0)');
        }
    }
    console.log('Colores cambiados en la villa 2!');

    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`villa4${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1){
            element.style.setProperty('background-color','red');
        }
    }
    console.log('Colores cambiados en la villa 4!');

    for(let i = 1; i < 6; i++){
        let element = document.getElementById(`villa5${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 3){
            element.style.setProperty('background-color','rgb(255, 204, 0)');
        }
        if(entero == 4){
            element.style.setProperty('background-color','yellow');
        }
        if(entero == 5){
            element.style.setProperty('background-color','red');
        }
    }
    console.log('Colores cambiados en la villa 5!');
    console.log('}');
    console.log('');
}



function cambiaResidentesSinPropietarios(){
    cambiarTodoBlanco();
    console.log('ResidentesSinPropietarios{');
    for(let i = 1; i < 5; i++){
        let element = document.getElementById(`villa3${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 2){
            element.style.setProperty('background-color','rgba(128, 128, 128, 0.829)');
        }
    }
    console.log('Colores cambiados en la villa 3!');

    for(let i = 1; i < 6; i++){
        let element = document.getElementById(`villa5${i}`);
        let entero = parseInt(element.textContent);
        if(entero == 1){
            element.style.setProperty('background-color','rgba(128, 128, 128, 0.829)');
        }
    }
    console.log('Colores cambiados en la villa 5!');
    console.log('}');
    console.log('');
}


function cambiarTodoBlanco(){
    for(let i = 1; i < 6; i++){
        for(let j = 1; j < 7; j++){
            if(i == 1){
                let element = document.getElementsByClassName('villa').namedItem(`villa${i}${j}`);
                element.style.setProperty('background-color','white');
            }
            if(i == 2 || i == 3 || i == 4){
                if(j == 5){
                    break;
                }
                let element = document.getElementsByClassName('villa').namedItem(`villa${i}${j}`);
                element.style.setProperty('background-color','white');
            }
            if(i == 5){
                if(j == 6){
                    break;
                }
                let element = document.getElementsByClassName('villa').namedItem(`villa${i}${j}`);
                element.style.setProperty('background-color','white');
            }
        }
    }
}