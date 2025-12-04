import sdmx
import pandas as pd

UE27 = ["EU27_2020","BE","BG","CZ","DK","DE","EE","IE","EL","ES","FR","HR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE"]

def fetch_eurostat():
    estat = sdmx.Client("ESTAT")
    dm = estat.data("NAMA_10_GDP",key={"unit":"CP_MEUR"}, params={"startPeriod":"2024"})
    return dm

def parse_eurostat(response):
    data = (sdmx.to_pandas(response))
    df = data[data.index.get_level_values("na_item") == "B1GQ"]
    df = df[df.index.get_level_values("geo").isin(UE27)]
    df = df.reset_index()
    df = df[["geo", "TIME_PERIOD", "value"]]
    df = df.rename(columns={
        "geo": "country",
        "TIME_PERIOD":"time",
        "value":"gdp"
    })
    df = df.dropna(subset=["gdp"]) 
    df["gdp"] = pd.to_numeric(df["gdp"], errors='coerce') 
    df = df.dropna(subset=["gdp"]) 
    return df.to_dict(orient="records")
