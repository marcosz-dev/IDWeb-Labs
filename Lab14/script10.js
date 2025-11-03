function normalizarCalificaciones(calificaciones) {
    const maximo = Math.max(...calificaciones);
    const normalizadas = calificaciones.map(nota => nota / maximo);
    
    console.log(`Calificaciones originales: [${calificaciones}]`);
    console.log(`Valor máximo: ${maximo}`);
    console.log(`Calificaciones normalizadas: [${normalizadas.map(n => n.toFixed(2))}]`);
    
    return normalizadas;
}

// Pruebas
normalizarCalificaciones([85, 90, 78, 92, 88]);