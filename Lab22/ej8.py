from wsgiref.simple_server import make_server
import json

# Base de datos en memoria
libros = [
    {"id": 1, "titulo": "1984", "autor": "George Orwell", "anio": 1949}
]
next_id = 2

def app(environ, start_response):
    global next_id
    method = environ['REQUEST_METHOD']
    path = environ['PATH_INFO']
    
    #Listar libros
    if method == "GET" and path == "/libros":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(libros).encode("utf-8")]

    #Registrar libro
    elif method == "POST" and path == "/libros":
        try:
            length = int(environ.get("CONTENT_LENGTH", 0))
            body = environ["wsgi.input"].read(length)
            data = json.loads(body)
            
            nuevo_libro = {
                "id": next_id,
                "titulo": data.get("titulo"),
                "autor": data.get("autor"),
                "anio": data.get("anio")
            }
            libros.append(nuevo_libro)
            next_id += 1
            
            start_response("201 Created", [("Content-Type", "application/json")])
            return [json.dumps(nuevo_libro).encode("utf-8")]
        except:
            start_response("400 Bad Request", [("Content-Type", "text/plain")])
            return [b"Error en los datos enviados"]

    #Consultar libro por ID 
    elif method == "GET" and path.startswith("/libros/"):
        try:
            #Extraer ID de la URL 
            parts = path.split("/")
            if len(parts) == 3 and parts[2].isdigit():
                book_id = int(parts[2])
                # Buscar libro
                libro_encontrado = next((l for l in libros if l["id"] == book_id), None)
                
                if libro_encontrado:
                    start_response("200 OK", [("Content-Type", "application/json")])
                    return [json.dumps(libro_encontrado).encode("utf-8")]
            
            #Si no se encuentra o el ID no es valido
            start_response("404 Not Found", [("Content-Type", "text/plain")])
            return [b"Libro no encontrado"]
        except:
            start_response("500 Server Error", [("Content-Type", "text/plain")])
            return [b"Error interno"]

    #Ruta no encontrada
    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta desconocida"]

if __name__ == "__main__":
    print("API de Libros corriendo en http://localhost:8000")
    server = make_server('localhost', 8000, app)
    server.serve_forever()