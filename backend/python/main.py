from fastapi import FastAPI, HTTPException
import eurostat_service
from model.gdp import GDPEntry
from utils import *

app = FastAPI()

@app.get("/eurostat/gdp", response_model=list[GDPEntry])
async def eurostat_gdp():
    try:
        logger.info("Request /eurostat/gdp")
        data = eurostat_service.fetch_eurostat()
        if not data:
            raise HTTPException(
                status_code=404,
                detail="No GDP data found"
            )
        response = eurostat_service.parse_eurostat(data)
        logger.info(f"Response: {len(response)} rows")
        return response
    except Exception as e:
        logger.error(f"Eurostat error: {str(e)}")
        raise HTTPException(status_code=500, detail="Eurostat GDP fetch failed")



@app.get("/ameco/gdp", response_model=list[GDPEntry])
async def ameco_gdp():
    return get_ameco_gdp()