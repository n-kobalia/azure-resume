import azure.functions as func
import logging
from azure.cosmos import CosmosClient
import os
import json

app = func.FunctionApp(http_auth_level=func.AuthLevel.ANONYMOUS)

def get_cosmos_client():
    endpoint = os.environ["COSMOS_DB_ENDPOINT"]
    key = os.environ["COSMOS_DB_KEY"]
    return CosmosClient(endpoint, key)

@app.route(route="GetResumeCounter")
def GetResumeCounter(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Processing visitor counter request.')

    try:
        # Initialize Cosmos DB client
        client = get_cosmos_client()
        database = client.get_database_client(os.environ["COSMOS_DB_DATABASE"])
        container = database.get_container_client(os.environ["COSMOS_DB_CONTAINER"])

        # Query for counter document
        query = "SELECT * FROM c WHERE c.id = 'visitor'"
        items = list(container.query_items(query=query, enable_cross_partition_query=True))
        
        if not items:
            # Create new counter if doesn't exist
            counter_item = {"id": "new_counter_visit", "count": 0}
            container.create_item(body=counter_item)
            current_count = 1
        else:
            # Increment existing counter
            current_count = items[0]["count"] + 1
            container.upsert_item({"id": "visitor", "count": current_count})

        return func.HttpResponse(
            json.dumps({"count": current_count}),
            mimetype="application/json",
            status_code=200,
            headers={"Access-Control-Allow-Origin": "*"}
        )
    except Exception as e:
        logging.error(f"Error: {str(e)}")
        return func.HttpResponse(
            json.dumps({"error": str(e)}),
            status_code=500,
            headers={"Access-Control-Allow-Origin": "*"}
        )