import math

class Figura:
    def area(self):
        pass

    def perimetro(self):
        pass

class Rectangulo(Figura):
    def __init__(self, id, ancho, alto):
        self.id = id
        self.ancho = ancho
        self.alto = alto

    def area(self):
        return self.ancho * self.alto

    def perimetro(self):
        return 2 * (self.ancho + self.alto)

class Triangulo(Figura):
    def __init__(self, id, lado1, lado2, lado3):
        self.id = id
        self.lado1 = lado1
        self.lado2 = lado2
        self.lado3 = lado3

    def area(self):
        s = self.semiperimetro()
        return math.sqrt(s * (s - self.lado1) * (s - self.lado2) * (s - self.lado3))
    
    def perimetro(self):
        return self.lado1 + self.lado2 + self.lado3 
    
    def semiperimetro(self):
        return self.perimetro() / 2

class Circulo(Figura):
    def __init__(self ,id ,radio):
        self.id = id
        self.radio = radio

    def area(self):
        return math.pi * self.radio ** 2

    def perimetro(self):
        return 2 * math.pi * self.radio

figuras = [
    Rectangulo("001",4, 5),
    Triangulo("002", 3, 4, 5),
    Circulo("003",6)
]

# alineación a la izquierda (<) para los títulos.
# El número indica el ancho total de la columna.
print(f"{'Figura':<15}{'ID':<5}{'Área':<10}{'Perímetro':<10}")

# alineación a la izquierda para texto y a la derecha (>) para números.
for figura in figuras:
    print(f"{figura.__class__.__name__:<15}"
          f"{figura.id:<5}"
          f"{figura.area():>10.2f}"  # Alineado a la derecha, 2 decimales
          f"{figura.perimetro():>10.2f}") # Alineado a la derecha, 2 decimales
