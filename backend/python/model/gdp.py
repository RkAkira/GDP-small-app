from pydantic import BaseModel

class GDPEntry(BaseModel):
    country: str
    time: str
    gdp: float
