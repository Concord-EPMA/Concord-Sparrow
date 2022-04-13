from sparrow.plugins import SparrowPlugin
from starlette.responses import JSONResponse
import json


class PluginExample(SparrowPlugin):
    name="plugin-example"

    def test_endpoint(self):
        db = self.app.database
        return JSONResponse(json.loads(
            """{
                "Hey": "Jennifer Smith",
                "Contact Number": 7867567898,
                "Email": "jen123@gmail.com",
                "Hobbies":["Reading", "Sketching", "Horse Riding"]
            }"""
        ))

    def on_api_initialized_v2(self, api):
        api.add_route("/test", self.test_endpoint(), methods=['GET'], include_in_schema=False)
