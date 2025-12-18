class Libro:
    def __init__(self, titulo, autor, año):
        self.titulo = titulo
        self.autor = autor
        self.año = año
        self.disponible = True

    def prestar(self):
        if self.disponible:
            self.disponible = False
            print(f"Libro '{self.titulo}' prestado con éxito.")
            return True
        else:
            print(f"El libro '{self.titulo}' no está disponible.")
            return False

    def devolver(self):
        self.disponible = True
        print(f"Libro '{self.titulo}' devuelto.")

    def __str__(self):
        estado = "Disponible" if self.disponible else "Prestado"
        return f"['{self.titulo}' | {self.autor} | {estado}]"

class LibroDigital(Libro):
    def __init__(self, titulo, autor, año, formato, tamanoMB):
        super().__init__(titulo, autor, año)
        self.formato = formato
        self.tamanoMB = tamanoMB

    def prestar(self):
        # Sobrescritura: Los libros digitales siempre están disponibles para copia
        print(f"Descargando copia digital de '{self.titulo}' ({self.formato})... ¡Listo!")
        return True

class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self, libro):
        self.libros.append(libro)

    def listar_libros(self):
        print("\n--- Catálogo de Biblioteca ---")
        for libro in self.libros:
            print(libro)

    def buscar_por_autor(self, autor):
        print(f"\nBuscar por autor '{autor}':")
        encontrados = [l for l in self.libros if l.autor.lower() == autor.lower()]
        for l in encontrados:
            print(l)

    def prestar_libro(self, titulo):
        print(f"\nIntentando prestar: {titulo}")
        for libro in self.libros:
            if libro.titulo.lower() == titulo.lower():
                libro.prestar()
                return
        print("Libro no encontrado en el catálogo.")

# Ejecución de pruebas
biblio = Biblioteca()

# Agregar libros físicos
biblio.agregar_libro(Libro("Cien años de soledad", "Gabriel Garcia Marquez", 1967))
biblio.agregar_libro(Libro("El Principito", "Antoine de Saint-Exupery", 1943))
biblio.agregar_libro(Libro("1984", "George Orwell", 1949))

# Agregar libros digitales
biblio.agregar_libro(LibroDigital("Clean Code", "Robert C. Martin", 2008, "PDF", 5.2))
biblio.agregar_libro(LibroDigital("The Pragmatic Programmer", "Andy Hunt", 1999, "EPUB", 3.1))

# Pruebas solicitadas
biblio.listar_libros()
biblio.prestar_libro("1984")            # Físico
biblio.prestar_libro("Clean Code")      # Digital (vez 1)
biblio.prestar_libro("Clean Code")      # Digital (vez 2 - debe permitirlo)
biblio.prestar_libro("1984")            # Intentar prestar libro ya prestado
biblio.buscar_por_autor("Gabriel Garcia Marquez")