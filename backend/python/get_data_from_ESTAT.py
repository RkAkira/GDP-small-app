import sdmx

estat = sdmx.Client("ESTAT")
flow = estat.dataflow("namq_10_gdp")
estat_data = estat.data("NAMQ_10_GDP",  key={"geo": "FR+BE+ES"})