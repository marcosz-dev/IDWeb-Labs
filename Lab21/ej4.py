# Programa para gestionar libros en una biblioteca

class Libro:
    def __init__(self, titulo, autor, año_publicacion, disponible=True):
        self.titulo = titulo
        self.autor = autor
        self.año_publicacion = año_publicacion

    def prestar(self):
        if self.disponible:
            self.disponible = False
            return True
        return False
    
    def devolver(self):
        if not self.disponible:
            self.disponible = True
            return True
        return False

class Libro_Digital(Libro):
    def __init__(self, titulo, autor, año_publicacion, formato, tamañoMB, disponible=True):
        super().__init__(titulo, autor, año_publicacion, disponible)
        self.formato = formato
        self.tamañoMB = tamañoMB
    
class Biblioteca:
    def __init__(self):
        self.libros = []

    def agregar_libro(self, libro):
        self.libros.append(libro)

    def buscar_por_autor(self, autor):
        return [libro for libro in self.libros if libro.autor.lower() == autor.lower()]

    def listar_disponibles(self):
        return [libro for libro in self.libros if libro.disponible]
    
    def prestar_libro(self, titulo):
        for libro in self.libros:
            if libro.titulo.lower() == titulo.lower():
                return libro.prestar()
        return False
    
    # metodo sobrecargado para prestar libros digitales
    def prestar_libro(self, titulo, formato=None):
        for libro in self.libros:
            if libro.titulo.lower() == titulo.lower():
                if formato and isinstance(libro, Libro_Digital):
                    if libro.formato.lower() == formato.lower():
                        return libro.prestar()
                elif formato is None:
                    return libro.prestar()
        return False
    
    def devolver_libro(self, titulo):
        for libro in self.libros:
            if libro.titulo.lower() == titulo.lower():
                return libro.devolver()
        return False
    
MiBiblioteca = Biblioteca()
#Libros fisicos
MiBiblioteca.agregar_libro(Libro("Cien Años de Soledad", "Gabriel García Márquez", 1967))
MiBiblioteca.agregar_libro(Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1605))
MiBiblioteca.agregar_libro(Libro("La Sombra del Viento", "Carlos Ruiz Zafón", 2001))

#Libros digitales
MiBiblioteca.agregar_libro(Libro_Digital("1984", "George Orwell", 1949, "PDF", 2))
MiBiblioteca.agregar_libro(Libro_Digital("El Principito", "Antoine de Saint-Exupéry", 1943, "ePub", 1))

#Listar todos los libros
print("Libros en la Biblioteca:")
for libro in MiBiblioteca.libros:
    tipo = "Digital" if isinstance(libro, Libro_Digital) else "Físico"
    estado = "Disponible" if libro.disponible else "Prestado"
    print(f"- {libro.titulo} by {libro.autor} ({libro.año_publicacion}) [{tipo}] - {estado}")

    
