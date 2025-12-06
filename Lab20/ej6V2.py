import numpy as np

def normalizar_numpy(lista, modo):
    arr = np.array(lista, dtype=float)
    
    if modo == "minmax":
        min_val = np.min(arr)
        max_val = np.max(arr)
        if max_val - min_val == 0:
            return np.zeros_like(arr)
        return (arr - min_val) / (max_val - min_val)
        
    elif modo == "zscore":
        desviacion = np.std(arr) 
        if desviacion == 0:
            return np.zeros_like(arr)
        return (arr - np.mean(arr)) / desviacion
        
    elif modo == "unit":
        norma = np.linalg.norm(arr)
        if norma == 0:
            return np.zeros_like(arr)
        return arr / norma
        
    else:
        print("Modo no válido")
        return arr

# Pruebas
valores = [10, 20, 30]
print("NumPy MinMax:", normalizar_numpy(valores, "minmax"))
print("NumPy Z-Score:", normalizar_numpy(valores, "zscore"))
print("NumPy Unit:", normalizar_numpy(valores, "unit"))

