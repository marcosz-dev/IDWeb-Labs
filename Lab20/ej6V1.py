import math

def normalizar(lista, modo):
    if not lista:
        return []
    
    resultado = []
    
    if modo == "minmax":
        min_val = min(lista)
        max_val = max(lista)
        rango = max_val - min_val
        if rango == 0:
            return [0.0] * len(lista)
        for x in lista:
            resultado.append((x - min_val) / rango)
            
    elif modo == "zscore":
        media = sum(lista) / len(lista)
        suma_cuadrados = sum((x - media) ** 2 for x in lista)
        desviacion = math.sqrt(suma_cuadrados / len(lista))
        
        if desviacion == 0:
            return [0.0] * len(lista)
            
        for x in lista:
            resultado.append((x - media) / desviacion)
            
    elif modo == "unit":
        suma_cuadrados = sum(x**2 for x in lista)
        norma = math.sqrt(suma_cuadrados)
        
        if norma == 0:
            return [0.0] * len(lista)
            
        for x in lista:
            resultado.append(x / norma)
            
    else:
        print("Error: Modo no válido. Use 'minmax', 'zscore' o 'unit'.")
        return lista

    return resultado

# Pruebas
valores = [10, 20, 30]
print("Original:", valores)
print("MinMax:", normalizar(valores, "minmax"))
print("Z-Score:", normalizar(valores, "zscore"))
print("Unit:", normalizar(valores, "unit"))

