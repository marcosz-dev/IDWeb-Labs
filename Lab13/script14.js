function gestionarEmpleados(empleados) {
    let areaMap = new Map();
    
    for (let empleado of empleados) {
        if (!areaMap.has(empleado.area)) {
            areaMap.set(empleado.area, {
                empleados: [],
                salarios: []
            });
        }
        
        let areaData = areaMap.get(empleado.area);
        areaData.empleados.push(empleado.nombre);
        areaData.salarios.push(empleado.salario);
    }
    
    // Convertir a objeto con promedios
    let resultado = {};
    for (let [area, data] of areaMap) {
        let promedio = data.salarios.reduce((sum, sal) => sum + sal, 0) / data.salarios.length;
        resultado[area] = {
            empleados: data.empleados,
            promedio: promedio
        };
    }
    
    return resultado;
}

// Pruebas
const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
];

console.log(gestionarEmpleados(listaEmpleados));