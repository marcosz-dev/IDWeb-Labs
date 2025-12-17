import requests

def main():
    url = "https://httpbin.org/get"
    # Realiza la petición GET con un argumento de prueba
    response = requests.get(url, params={"curso": "Python", "lab": 22})
    
    if response.status_code == 200:
        data = response.json()
        print("=== DATOS OBTENIDOS ===")
        print(f"IP de origen: {data.get('origin')}")
        print(f"Headers: {data.get('headers')}")
        print(f"Argumentos (Args): {data.get('args')}")
    else:
        print(f"Error en la petición: {response.status_code}")

if __name__ == "__main__":
    main()