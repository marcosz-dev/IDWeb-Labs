import time
import random
import threading
import asyncio
import multiprocessing

# Función de simulación
def consulta_db(id_consulta):
    tiempo = random.randint(1, 5)
    print(f"[Consulta {id_consulta}] Iniciando (demora {tiempo}s)...")
    time.sleep(tiempo)
    print(f"[Consulta {id_consulta}] Terminada.")

# --- Versión Hilos (Threading) ---
def ejecutar_hilos():
    print("\n--- INICIANDO CON HILOS ---")
    inicio = time.time()
    hilos = []
    for i in range(3):
        h = threading.Thread(target=consulta_db, args=(i+1,))
        hilos.append(h)
        h.start()
    
    for h in hilos:
        h.join()
    print(f"Tiempo total Hilos: {time.time() - inicio:.2f}s")

# --- Versión Asyncio ---
async def consulta_async(id_consulta):
    tiempo = random.randint(1, 5)
    print(f"[Async {id_consulta}] Iniciando (demora {tiempo}s)...")
    await asyncio.sleep(tiempo)
    print(f"[Async {id_consulta}] Terminada.")

async def ejecutar_async():
    print("\n--- INICIANDO CON ASYNCIO ---")
    inicio = time.time()
    await asyncio.gather(consulta_async(1), consulta_async(2), consulta_async(3))
    print(f"Tiempo total Async: {time.time() - inicio:.2f}s")

# --- Versión Procesos ---
def ejecutar_procesos():
    print("\n--- INICIANDO CON PROCESOS ---")
    inicio = time.time()
    procesos = []
    for i in range(3):
        p = multiprocessing.Process(target=consulta_db, args=(i+1,))
        procesos.append(p)
        p.start()
    
    for p in procesos:
        p.join()
    print(f"Tiempo total Procesos: {time.time() - inicio:.2f}s")

if __name__ == "__main__":
    # Ejecutamos las 3 demostraciones secuencialmente
    ejecutar_hilos()
    asyncio.run(ejecutar_async())
    ejecutar_procesos()