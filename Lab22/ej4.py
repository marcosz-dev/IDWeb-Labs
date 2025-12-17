import requests

def listar_pokemon():
    # URL base de la API, limita a 10 resultados usando params
    url = "https://pokeapi.co/api/v2/pokemon"
    params = {"limit": 10, "offset": 0}
    
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        data = response.json()
        results = data.get("results", [])
        
        print("=== LISTA DE PRIMEROS 10 POKÉMON ===")
        for i, pokemon in enumerate(results, 1):
            print(f"{i}. {pokemon['name']}")
    else:
        print("Error al consultar la API")

if __name__ == "__main__":
    listar_pokemon()