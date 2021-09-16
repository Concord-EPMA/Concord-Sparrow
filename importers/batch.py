from dataCleaner import Clean
import concurrent.futures

fileNameArr  = ["/Users/vic8or/Desktop/currentProjects/sparrow/excelFiles/Tephra Mount Catalog.xlsx"]
headerRowNum = 7
columnListToDisplay = []
unselectedColumns = ["Mount ID", "Position on Mount", "Mounted by"]
noNullRowsInColumns = ["Mount ID","Position on Mount", "Mounted by"]
noDuplicatesInColumns = ["Position on Mount"]
presets,dropEmptyColumns, dropEmptyRows = False, True, True

def processData(fileName):
    print("start")
    try:
        instance = Clean(fileName, headerRow = headerRowNum)
        print("1")
        if (dropEmptyColumns):
            print("2")
            instance.dropEmptyColumns()
        if ((len(fileNameArr)==1 and presets==False) or presets):
            print("3")
            columnListToDisplay = instance.displayColumnNames()
        if (dropEmptyRows):
            instance.dropEmptyRows()
            print("4")
        if (unselectedColumns):
            instace.dropAllColumnsExcept(unselectedColumns)
            print("5")
        if (noNullRowsInColumns):
            print("6")
            instace.dropNullRowsInColumn(columnNames=noNullRowsInColumns)
        if (noDuplicatesInColumns):
            instace.dropDuplicatesInColumn(columnNames=noDuplicatesInColumns)
            print("7")
        
        print("\n6)\n",instance.displayOutput())

        outputFileName = fileName
        if ".xlsx" in outputFileName:
            outputFileName = outputFileName.strip(".xlsx")
        elif(".csv" in outputFileName):
            outputFileName = outputFileName.strip(".csv")

        outputFileName +=  "CLEANED.xlsx" 
        instance.saveOutput(outputFileName)
    except:
        with open(file, "w+") as logFile:
            data = f"An error occurred trying to clean {fileName}"
            if (len(fileNameArr) > 1):
                data += "Please make sure all files are similar when batch processing."
            logFile.write(data)

with concurrent.futures.ThreadPoolExecutor() as executor:
        executor.map(processData, fileNameArr)