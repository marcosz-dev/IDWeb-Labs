from wsgiref.simple_server import make_server

def app(environ, start_response):
    path = environ.get('PATH_INFO')

    if path == "/":
        status = "200 OK"
        headers = [("Content-type", "text/plain; charset=utf-8")]
        response = b"Inicio"
    elif path == "/saludo":
        status = "200 OK"
        headers = [("Content-type", "text/plain; charset=utf-8")]
        response = b"Hola mundo desde WSGI"
    else:
        status = "404 Not Found"
        headers = [("Content-type", "text/plain; charset=utf-8")]
        response = b"404-Pagina no encontrada"

    start_response(status,headers)
    return [response]

if __name__=="__main__":
    port = 8000
    print(f"Servidor WSGI corriendo en https://localhost:{port}")
    server = make_server("localhost", 8000, app)
    server.serve_forever()