# Setup for running importer scripts & GUI (MacOS)
```
1 - "python3 -m venv env"
2 - "source env/bin/activate"
3 - "python3 -m pip install --upgrade pip"
4 - "pip install -r requirements.txt" 
5 - "cd importers"
6 - "python /importers/dataCleaner.py"

```

> Clearing python cache in directory
```
find . | grep -E "(__pycache__|\.pyc|\.pyo$)" | xargs rm -rf
```