def calcular_salario():
    print("--- Calculadora de Salario ---")
    salario_base = float(input("Ingrese el salario base: "))
    horas_extras = float(input("Ingrese horas extras trabajadas: "))
    pago_hora_extra = float(input("Ingrese pago por hora extra: "))
    bono = float(input("Ingrese monto de bonificaciones: "))
    afp_porcentaje = float(input("Ingrese porcentaje de AFP (ej. 10 para 10%): "))
    salud_porcentaje = float(input("Ingrese porcentaje de Salud (ej. 5 para 5%): "))

    ingresos_extra = (horas_extras * pago_hora_extra) + bono
    salario_bruto = salario_base + ingresos_extra
    
    descuento_afp = salario_base * (afp_porcentaje / 100)
    descuento_salud = salario_base * (salud_porcentaje / 100)
    descuentos_totales = descuento_afp + descuento_salud
    
    salario_neto = salario_bruto - descuentos_totales

    print("\n--- Resultados ---")
    print(f"Salario Bruto (Base + Extras + Bonos): {salario_bruto:.2f}")
    print(f"Descuentos Totales (AFP + Salud): {descuentos_totales:.2f}")
    print(f"Salario Neto a Pagar: {salario_neto:.2f}")

if __name__ == "__main__":
    calcular_salario()

