# Setup for running importer scripts & GUI (MacOS)
```
1 - "python3 -m venv env"
2 - "source env/bin/activate"
3 - "python3 -m pip install --upgrade pip"
4 - "pip install -r requirements.txt" 
5 - "cd importers"
6 - "python /importers/dataCleaner.py"
```

## Steps to get sparrow working
```
in your terminal
1 - curl -o get-sparrow.sh https://raw.githubusercontent.com/EarthCubeGeochron/Sparrow/HEAD/get-sparrow.sh
2 - sudo sh get-sparrow.sh
3 - make sure Docker is currently running with sufficient memory allocation
4 - make sure you're in the sparrow folder
5 - you should be able to run "sparrow" with no errors
6 - SPARROW_SECRET_KEY=TemporaryKey sparrow up
7 - go to localhost:5002
```

> Clearing python cache in directory
```
find . | grep -E "(__pycache__|\.pyc|\.pyo$)" | xargs rm -rf
```

## To do
- [ ] allow batch processing 
- [x] allow users to make a list of files to run batch process on! - GUI
- [ ] Schema for database  - https://sparrow-data.org/docs/motivation-and-design
- [ ] Add more testing for data cleaner class
- [ ] Json export * https://github.com/EarthCubeGeochron/Sparrow/blob/main/backend/sparrow_tests/fixtures/large-test.json
  - [ ] https://earthchem.org/communities/tephra/
  - [ ] https://zenodo.org/record/4075613#.YUzSAi1h3zJ
- [ ] Importer file https://github.com/EarthCubeGeochron/Sparrow-CU-TRaIL/blob/a9089678891d24af1c2440f575d64ac26285377a/plugins/import_reduction_sheet/importer.py#L280


