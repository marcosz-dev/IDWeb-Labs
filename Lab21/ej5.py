class OperadorInvalidoError(Exception):
    pass

def calcular_operacion(cadena):
    operadores = ['+', '-', '*', '/']
    operador = None
    
    # Identificar operador
    for op in operadores:
        if op in cadena:
            operador = op
            break
            
    if operador is None:
        raise OperadorInvalidoError(f"No se encontró un operador válido ({operadores}) en la cadena.")

    try:
        partes = cadena.split(operador)
        if len(partes) != 2:
            raise ValueError("Formato incorrecto. Debe ser 'num1 operador num2'.")

        num1 = float(partes[0].strip())
        num2 = float(partes[1].strip())

        if operador == '+':
            return num1 + num2
        elif operador == '-':
            return num1 - num2
        elif operador == '*':
            return num1 * num2
        elif operador == '/':
            if num2 == 0:
                raise ZeroDivisionError("División por cero detectada.")
            return num1 / num2

    except ValueError:
        print("Error: Los valores ingresados no son números válidos.")
    except ZeroDivisionError as e:
        print(f"Error Matemático: {e}")
    except Exception as e:
        print(f"Error inesperado: {e}")

# Pruebas
entrada = input("Ingrese operación (ej: 10/2): ")
try:
    resultado = calcular_operacion(entrada)
    if resultado is not None:
        print(f"Resultado: {resultado}")
except OperadorInvalidoError as e:
    print(f"Error de Operador: {e}")