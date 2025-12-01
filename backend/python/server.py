import uvicorn

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",  # Écoute sur toutes les interfaces
        port=5000,
        log_level="info",
        reload=True,  # Recharge automatiquement le code
        lifespan="on",  # Gère le cycle de vie
        timeout_keep_alive=30  # Évite les timeouts
    )
