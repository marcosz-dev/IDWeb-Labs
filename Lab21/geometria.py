import math

class Figura:
    def area(self): pass
    def perimetro(self): pass

class Rectangulo(Figura):
    def __init__(self, base, altura):
        self.base, self.altura = base, altura
    def area(self): return self.base * self.altura
    def perimetro(self): return 2 * (self.base + self.altura)

class Triangulo(Figura):
    def __init__(self, base, altura, l1, l2, l3):
        self.base, self.altura, self.l1, self.l2, self.l3 = base, altura, l1, l2, l3
    def area(self): return (self.base * self.altura) / 2
    def perimetro(self): return self.l1 + self.l2 + self.l3

class Circulo(Figura):
    def __init__(self, radio): self.radio = radio
    def area(self): return math.pi * (self.radio ** 2)
    def perimetro(self): return 2 * math.pi * self.radio