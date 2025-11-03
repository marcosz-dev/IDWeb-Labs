function gradosARadianes(grados) {
    let radianes = grados * (Math.PI / 180);
    console.log(`${grados} grados son ${radianes} radianes.`);
    console.log(`Coseno: ${Math.cos(radianes)}`);
    console.log(`Seno: ${Math.sin(radianes)}`);
}

function radianesAGrados(radianes) {
    let grados = radianes * (180 / Math.PI);
    console.log(`${radianes} radianes son ${grados} grados.`);
}

gradosARadianes(45);
radianesAGrados(Math.PI / 4);