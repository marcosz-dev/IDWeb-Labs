from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class SumaServer(BaseHTTPRequestHandler):
    def do_POST(self):
        # Leer la longitud del contenido
        content_length = int(self.headers['Content-Length'])
        # Leer y decodificar el cuerpo del mensaje
        post_data = self.rfile.read(content_length)
        
        try:
            data = json.loads(post_data)
            # Validar que existan las claves
            if 'a' in data and 'b' in data:
                resultado = data['a'] + data['b']
                respuesta = {"suma": resultado}
                
                self.send_response(200)
                self.send_header("Content-type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps(respuesta).encode("utf-8"))
            else:
                self.send_error(400, "Faltan parametros 'a' o 'b'")
        except json.JSONDecodeError:
            self.send_error(400, "JSON invalido")

def run():
    print("Servidor de Suma corriendo en http://localhost:8000")
    httpd = HTTPServer(('', 8000), SumaServer)
    httpd.serve_forever()

if __name__ == "__main__":
    run()