def copiar_archivo_texto(origen, destino):
    try:
        with open(origen, 'r', encoding='utf-8') as f_origen:
            contenido = f_origen.read()
        
        with open(destino, 'w', encoding='utf-8') as f_destino:
            f_destino.write(contenido)
        print(f"Texto copiado de {origen} a {destino}")
    except FileNotFoundError:
        print(f"El archivo {origen} no existe.")

def copiar_archivo_binario(origen, destino):
    try:
        with open(origen, 'rb') as f_origen:
            contenido = f_origen.read()
        
        with open(destino, 'wb') as f_destino:
            f_destino.write(contenido)
        print(f"Binario copiado de {origen} a {destino}")
    except FileNotFoundError:
        print(f"El archivo {origen} no existe.")

# Crear un archivo de prueba
with open("origen.txt", "w") as f:
    f.write("Hola, este es un archivo de prueba para copiar.")

# Ejecutar copias
copiar_archivo_texto("origen.txt", "copia_texto.txt")
