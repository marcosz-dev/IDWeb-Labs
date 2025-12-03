def generar_espiral():
    while True:
        try:
            n = int(input("Ingrese un número N (mayor o igual a 3): "))
            if n >= 3:
                break
            print("El número debe ser mayor o igual a 3.")
        except ValueError:
            print("Por favor ingrese un entero válido.")

    # Inicializar matriz con ceros
    matriz = [[0] * n for _ in range(n)]
    
    valor = 1
    arriba, abajo = 0, n - 1
    izquierda, derecha = 0, n - 1

    while valor <= n * n:
        # Llenar fila superior (izquierda a derecha)
        for i in range(izquierda, derecha + 1):
            matriz[arriba][i] = valor
            valor += 1
        arriba += 1

        # Llenar columna derecha (arriba a abajo)
        for i in range(arriba, abajo + 1):
            matriz[i][derecha] = valor
            valor += 1
        derecha -= 1

        # Llenar fila inferior (derecha a izquierda)
        if arriba <= abajo:
            for i in range(derecha, izquierda - 1, -1):
                matriz[abajo][i] = valor
                valor += 1
            abajo -= 1

        # Llenar columna izquierda (abajo a arriba)
        if izquierda <= derecha:
            for i in range(abajo, arriba - 1, -1):
                matriz[i][izquierda] = valor
                valor += 1
            izquierda += 1

    print("\nMatriz Espiral Generada:")
    for fila in matriz:
        # Formato para que se vea alineado
        print("\t".join(map(str, fila)))

if __name__ == "__main__":
    generar_espiral()