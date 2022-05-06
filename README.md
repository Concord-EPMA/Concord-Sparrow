# Concord University EMPA

- [Concord Tephra Lab Workflow Diagram](https://drive.google.com/file/d/1fGNQF_zcY1HmuG50Mj9d0ZvniA3EVQET/view?ts=613121e4)

## Getting Started

- clone this repository in a folder
  - `git clone https://github.com/Concord-EPMA/Concord-Sparrow/tree/main/website .`

### How to get sparrow working locally

1. `bash -c "$(curl -fsSL https://raw.githubusercontent.com/EarthCubeGeochron/Sparrow/HEAD/get-sparrow.sh)"`
2. ensure Docker has been updated and is currently running with sufficient memory allocation(>=4GB)
3. you should be able to run `sparrow` with no errors
4. run `sparrow up` (make sure you're in the directory you just cloned)
5. go to localhost:5002

### How to run the main website

1. `cd website`
2. `yarn && yarn dev`

[![Deploy the main website with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FConcord-EPMA%2FConcord-Sparrow%2Ftree%2Fmain%2Fwebsite)

#### How to run importer scripts & GUI (MacOS)

1. `python3 -m venv env`
2. `source env/bin/activate`
3. `python3 -m pip install --upgrade pip`
4. `pip install -r requirements.txt`
5. `cd importers`
6. `python /importers/dataCleaner.py`

#### Current Priority

- [ ] Convert [the current schema](https://docs.google.com/spreadsheets/d/1CC6BIcM31jh5B-xwD7vHvfJxFe8QO-LVyswkqvLjX24/edit#gid=1737684274) to a visual database diagram using a tool like [drawsql](https://drawsql.app/)
- [ ] Convert database diagrams into SQL and create required tables by using sparrow plugins
  - put created sql in plugins/backend-plugins directory
- [ ] Create custom api endpoints by creating sparrow plugins
  - for help look through the following repositories:
    - [EarthCubeGeochron/Sparrow](https://github.com/EarthCubeGeochron/Sparrow/blob/78aa58dd4f1fbcd7faaba3cb464f17c9dfec2be1/backend/sparrow/auth/api.py)
    - [EarthCubeGeochron/Sparrow](https://github.com/EarthCubeGeochron/Sparrow/blob/78aa58dd4f1fbcd7faaba3cb464f17c9dfec2be1/backend/sparrow/users/__init__.py#L5)
    - [Idzikowski-Casey/Sparrow](https://github.com/Idzikowski-Casey/Sparrow-WiscAr-Example/blob/master/site-content/backend-plugins/__init__.py)
- [ ] Dockerize website and replace default website by changing `sparrow-config.sh` file

for more help with sparrow visit - [sparrow database docs](https://sparrow-data.org/docs/database)