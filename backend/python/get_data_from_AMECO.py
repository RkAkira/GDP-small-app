from pysdmx.api.fmr import RegistryClient

client = RegistryClient("https://registry.sdmx.org/sdmx/v2")


dataflows = client.get_dataflows()
print("Flux de données disponibles :")
for flow in dataflows:
    # print(f"- {flow.id}: {flow.name}")
    print(f"- {flow}")
# data = client.get(
#     resource_type= "data",
#     resource_id="AMECO",
#     key={
#         "FREQ":"A",
#         "NA_ITEM": "B1GQ",
#         "COUNTRY": "EU27"  
#     }
# )