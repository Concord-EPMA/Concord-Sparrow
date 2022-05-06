from starlette.responses import JSONResponse
from sparrow.plugins import SparrowPlugin
from sparrow.util import relative_path
from pathlib import Path
import json
# https://github.com/EarthCubeGeochron/Sparrow/tree/main/backend/sparrow

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

class AddNewTable(SparrowPlugin):
    '''
        This plugin's purpose is to create a new table in the database.
        An example of how a lab can add a table for unqiue data models.
        TODO: How does this then get added to the api?
    '''
    name = 'favorite-rock'

    def on_database_ready(self, db):

        p = Path(relative_path(__file__, "favorite_rock.sql"))
        db.exec_sql(p)