function generarContraseña(){
    let contraseña = "";
    for (let i = 0; i < 6; i++) {
        contraseña += Math.floor(Math.random() * 10);
    }
    console.log(`Contraseña generada: ${contraseña}`);
}

generarContraseña();