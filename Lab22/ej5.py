from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class MiServidor(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            # Respuesta HTML estática
            self.send_response(200)
            self.send_header("Content-type", "text/html; charset=utf-8")
            self.end_headers()
            html = """
            <html>
                <head><title>Ejercicio 5</title></head>
                <body><h1>Bienvenido al Servidor Python</h1></body>
            </html>
            """
            self.wfile.write(html.encode("utf-8"))
            
        elif self.path == "/saludo":
            # Respuesta JSON
            self.send_response(200)
            self.send_header("Content-type", "application/json")
            self.end_headers()
            data = {"msg": "Hola"}
            self.wfile.write(json.dumps(data).encode("utf-8"))
            
        else:
            self.send_error(404, "Ruta no encontrada")

def run():
    print("Iniciando servidor en http://localhost:8000")
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, MiServidor)
    httpd.serve_forever()

if __name__ == "__main__":
    run()