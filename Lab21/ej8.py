import json

equipos = [
    {
        "Nombre": "Real Madrid",
        "pais": "España",
        "nivelAtaque": 95,
        "nivelDefensa": 90
    },
    {
        "Nombre": "Manchester City",
        "pais": "Inglaterra",
        "nivelAtaque": 96,
        "nivelDefensa": 92
    },
    {
        "Nombre": "Melgar",
        "pais": "Perú",
        "nivelAtaque": 75,
        "nivelDefensa": 78
    }
]

# Convertir a JSON String con formato legible (indent=4)
json_str = json.dumps(equipos, indent=4, ensure_ascii=False)

print(json_str)