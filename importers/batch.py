from dataCleaner import Clean
import concurrent.futures
from datetime import date

fileNameArr  = ["/Users/vic8or/Desktop/currentProjects/sparrow/excelFiles/Tephra Mount Catalog.xlsx"]
headerRowNum = 7
columnListToDisplay = []
unselectedColumns = ["Mount ID", "Position on Mount", "Mounted by"]
noNullRowsInColumns = ["Mount ID","Position on Mount", "Mounted by"]
noDuplicatesInColumns = ["Position on Mount"]
presets,dropEmptyColumns, dropEmptyRows = False, True, True

def processData(fileName):
    try:
        instance = Clean(fileName, headerRow = headerRowNum)
        if (dropEmptyColumns):
            instance.dropEmptyColumns()
        if ((len(fileNameArr)==1 and not presets) or presets):
            columnListToDisplay = instance.displayColumnNames()
        if (dropEmptyRows):
            instance.dropEmptyRows()
        if (unselectedColumns):
            instance.dropAllColumnsExcept(unselectedColumns)
        if (noNullRowsInColumns):
            instance.dropNullRowsInColumn(noNullRowsInColumns)
        if (noDuplicatesInColumns):
            instance.dropDuplicatesInColumn(noDuplicatesInColumns)
        
        print("Output Dataframe: \n\n",instance.displayOutput())

        outputFileName = fileName
        if ".xlsx" in outputFileName:
            outputFileName = outputFileName.strip(".xlsx")
        elif(".csv" in outputFileName):
            outputFileName = outputFileName.strip(".csv")

        fileExtension  = str(date.today()) +"_clean.json" 
        outputFileName +=  fileExtension
        print("-->",outputFileName)
        instance.saveOutput(outputFileName)
    except:
        with open(file, "w+") as logFile:
            data = f"An error occurred trying to clean {fileName}"
            if (len(fileNameArr) > 1):
                data += "Please make sure all files are similar when batch processing."
            logFile.write(data)

with concurrent.futures.ThreadPoolExecutor() as executor:
        executor.map(processData, fileNameArr)