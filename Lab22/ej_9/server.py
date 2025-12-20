from wsgiref.simple_server import make_server
import json
import os
import mimetypes

# Configuración
STATIC_DIR = "static"
equipos = [
    {"id": 1, "nombre": "Real Madrid", "ciudad": "Madrid", "nivelAtaque": 10, "nivelDefensa": 9},
    {"id": 2, "nombre": "Melgar", "ciudad": "Arequipa", "nivelAtaque": 8, "nivelDefensa": 7}
]
next_id = 3

def servir_estatico(path):
    # Eliminar prefijo /static/ y limpiar ruta
    filename = path.replace("/static/", "", 1)
    file_path = os.path.join(STATIC_DIR, filename)
    
    if os.path.isfile(file_path):
        mime_type, _ = mimetypes.guess_type(file_path)
        mime_type = mime_type or "application/octet-stream"
        with open(file_path, "rb") as f:
            return f.read(), mime_type
    return None, None

def app(environ, start_response):
    global next_id
    method = environ['REQUEST_METHOD']
    path = environ['PATH_INFO']

    # Servir Archivos Estáticos
    if path.startswith("/static/"):
        content, mime = servir_estatico(path)
        if content:
            start_response("200 OK", [("Content-Type", mime)])
            return [content]
        else:
            start_response("404 Not Found", [("Content-Type", "text/plain")])
            return [b"Archivo estatico no encontrado"]

    #  Servir Index en raiz
    if method == "GET" and path == "/":
        content, mime = servir_estatico("/static/index.html")
        if content:
            start_response("200 OK", [("Content-Type", "text/html")])
            return [content]

    # API ENDPOINTS
    
    # Listar equipos
    if method == "GET" and path == "/equipos":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos).encode("utf-8")]

    # Registrar equipo
    elif method == "POST" and path == "/equipos":
        try:
            length = int(environ.get("CONTENT_LENGTH", 0))
            body = environ["wsgi.input"].read(length)
            data = json.loads(body)
            
            nuevo_equipo = {
                "id": next_id,
                "nombre": data.get("nombre"),
                "ciudad": data.get("ciudad"),
                "nivelAtaque": data.get("nivelAtaque"),
                "nivelDefensa": data.get("nivelDefensa")
            }
            equipos.append(nuevo_equipo)
            next_id += 1
            
            start_response("201 Created", [("Content-Type", "application/json")])
            return [json.dumps(nuevo_equipo).encode("utf-8")]
        except:
            start_response("400 Bad Request", [("Content-Type", "text/plain")])
            return [b"Error procesando JSON"]

    # Consultar equipo por ID
    elif method == "GET" and path.startswith("/equipos/"):
        parts = path.split("/")
        if len(parts) == 3 and parts[2].isdigit():
            team_id = int(parts[2])
            equipo = next((e for e in equipos if e["id"] == team_id), None)
            
            if equipo:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(equipo).encode("utf-8")]
        
        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Equipo no encontrado"]

    # 404 Default
    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Pagina no encontrada"]

if __name__ == "__main__":
    print("Servidor Avanzado corriendo en http://localhost:8000")
    server = make_server('localhost', 8000, app)
    server.serve_forever()