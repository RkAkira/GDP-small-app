import sdmx

def fetch_eurostat():
    estat = sdmx.Client("ESTAT")
    # flow = estat.dataflow("namq_10_gdp")
    dm = estat.data("NAMQ_10_GDP", key={"geo":"EU27_2020"})
    return dm

def parse_eurostat(response):
    data = (sdmx.to_pandas(response))
    df = data[data.index.get_level_values("na_item") == "B1GQ"]
    df = df.reset_index()
    df = df[["geo", "TIME_PERIOD", "value"]]
    df = df.rename(columns={
        "geo": "country",
        "TIME_PERIOD":"time",
        "value":"gdp"
    })
    df["gdp"] = df["gdp"].astype(float)
    return df.to_dict(orient="records")
