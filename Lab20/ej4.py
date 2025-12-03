def calcular_impuestos():
    print("--- Calculadora de Impuestos Progresivos ---")
    ingreso_mensual = float(input("Ingrese su ingreso mensual: "))
    
    # 12 meses + 2 aguinaldos
    ingreso_anual = ingreso_mensual * 14
    
    impuesto_total = 0
    detalle_impuestos = []

    # Tramo 1: 0 - 20000 (0%)
    if ingreso_anual > 20000:
        tramo1 = 0
    else:
        tramo1 = 0
    detalle_impuestos.append(f"Tramo [0-20000]: 0.00")

    # Tramo 2: 20000 - 50000 (10%)
    if ingreso_anual > 20000:
        monto_sujeto = min(ingreso_anual, 50000) - 20000
        impuesto = monto_sujeto * 0.10
        impuesto_total += impuesto
        detalle_impuestos.append(f"Tramo <20000-50000]: {impuesto:.2f}")

    # Tramo 3: 50000 - 100000 (20%)
    if ingreso_anual > 50000:
        monto_sujeto = min(ingreso_anual, 100000) - 50000
        impuesto = monto_sujeto * 0.20
        impuesto_total += impuesto
        detalle_impuestos.append(f"Tramo <50000-100000]: {impuesto:.2f}")

    # Tramo 4: Mayor a 100000 (30%)
    if ingreso_anual > 100000:
        monto_sujeto = ingreso_anual - 100000
        impuesto = monto_sujeto * 0.30
        impuesto_total += impuesto
        detalle_impuestos.append(f"Tramo >100000: {impuesto:.2f}")

    # Cálculo de tasa efectiva
    if ingreso_anual > 0:
        tasa_efectiva = (impuesto_total / ingreso_anual) * 100
    else:
        tasa_efectiva = 0

    print(f"\nIngreso Anual Total: {ingreso_anual:.2f}")
    print("\n--- Impuesto por tramo ---")
    for linea in detalle_impuestos:
        print(linea)
        
    print(f"\nTotal de impuestos: {impuesto_total:.2f}")
    print(f"Tasa efectiva real: {tasa_efectiva:.2f}%")

if __name__ == "__main__":
    calcular_impuestos()