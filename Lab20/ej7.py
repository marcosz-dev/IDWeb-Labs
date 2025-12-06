estudiantes = []

def agregar_estudiante():
    nombre = input("Nombre: ")
    try:
        edad = int(input("Edad: "))
        promedio = float(input("Promedio: "))
        
        estudiante = {
            "nombre": nombre,
            "edad": edad,
            "promedio": promedio
        }
        estudiantes.append(estudiante)
        print("Estudiante registrado con éxito.")
    except ValueError:
        print("Error: Edad o promedio inválidos.")

def mostrar_estudiantes():
    if not estudiantes:
        print("No hay estudiantes registrados.")
    else:
        print("\n--- Lista de Estudiantes ---")
        for e in estudiantes:
            print(f"Nombre: {e['nombre']}, Edad: {e['edad']}, Promedio: {e['promedio']}")

def mejor_promedio():
    if not estudiantes:
        print("No hay estudiantes.")
        return
    
    mejor = max(estudiantes, key=lambda x: x['promedio'])
    print(f"\nMejor estudiante: {mejor['nombre']} con promedio {mejor['promedio']}")

def buscar_por_nombre():
    nombre_b = input("Ingrese nombre a buscar: ")
    encontrado = False
    for e in estudiantes:
        if e['nombre'].lower() == nombre_b.lower():
            print(f"Encontrado: {e}")
            encontrado = True
            break
    if not encontrado:
        print("Estudiante no encontrado.")

def eliminar_estudiante():
    nombre_e = input("Ingrese nombre a eliminar: ")
    global estudiantes
    inicial = len(estudiantes)
    estudiantes = [e for e in estudiantes if e['nombre'].lower() != nombre_e.lower()]
    
    if len(estudiantes) < inicial:
        print("Estudiante eliminado.")
    else:
        print("No se encontró el estudiante.")

def menu():
    while True:
        print("\n--- SISTEMA DE ESTUDIANTES ---")
        print("1. Agregar estudiante")
        print("2. Mostrar estudiantes")
        print("3. Mostrar mejor promedio")
        print("4. Buscar por nombre")
        print("5. Eliminar por nombre")
        print("6. Salir")
        
        opcion = input("Seleccione una opción: ")
        
        if opcion == "1":
            agregar_estudiante()
        elif opcion == "2":
            mostrar_estudiantes()
        elif opcion == "3":
            mejor_promedio()
        elif opcion == "4":
            buscar_por_nombre()
        elif opcion == "5":
            eliminar_estudiante()
        elif opcion == "6":
            print("Saliendo...")
            break
        else:
            print("Opción no válida.")

if __name__ == "__main__":
    menu()