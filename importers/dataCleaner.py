import pandas as pd 


defaultGeoLabFile2 = [""]
class Clean:
    def __init__(self, inputFileName, headerRow=0):
        currHeader = headerRow-1 if headerRow > 0 else 0
        self.inputFileDf = pd.read_excel(inputFileName, header=currHeader)
        self.outputFileDf = self.inputFileDf
        self.columnNames = list(self.outputFileDf.columns.values)

    def displayInput(self):
        return self.inputFileDf

    def displayColumnNames(self):
        return self.columnNames

    def dropEmptyColumns(self):
        self.outputFileDf.dropna(axis="columns", how="all", inplace=True)

    def dropEmptyRows(self):
        self.outputFileDf.dropna(axis="index", how="all", inplace=True)

    def dropSpecificRows(self):
        pass
        """
        try:
            self.outputFileDf = self.outputFileDf
        except:
            return ("\n\nAn error occurred trying to delete specified rows!!\n\n")
        """

    def dropDuplicatesInColumn(self, columnNames=[]):
        if(columnNames):
            try:
                for columnName in columnNames:
                    self.outputFileDf.sort_values(by=columnName, key=lambda col: col.str.lower())
                    self.outputFileDf.drop_duplicates(subset=columnName, keep="first", inplace= True )
            except:
                return "An error occurred when removing duplicate values in the columns you entered. Please check you column names!\n"
        else:
            return "\n'.dropDuplicatesInColumn([column names here])' - Please provide column names!\n"

    def dropNullRowsInColumn(self, columnNames=[]):
        if(columnNames):
            self.outputFileDf.dropna(subset=columnNames, inplace= True )
        else:
            return "\n'.dropNullRowsInColumn([column names here])' - Please provide column names!\n"

    def dropAllColumnsExcept(self, columnsToKeep=[]):
        if(columnsToKeep):
            # add excepting for checking if 
            # allow user to either stop during batch process or continue, log errors to a file.
            self.outputFileDf = self.outputFileDf.filter(columnsToKeep)
        else:
            return "\n'.dropAllColumnsExcept([column names here])' - Please provide column names!\n"
    
    def displayOutput(self):
        return (self.outputFileDf)

    def saveOutput(self, outputFileName):
        self.outputFileDf.to_excel(outputFileName,index = False, header=True)
    



excel_file = "Tephra Mount Catalog.xlsx"

example = Clean(excel_file, headerRow = 7)

print("\n1)\nInput File Content:\n",example.displayInput())
print("\n2)\nCurrent Column Names:\n",example.displayColumnNames())
example.dropEmptyColumns()
example.dropEmptyRows()
print("For #3-5, none means no errors occurred when calling the individual methods. ")
print("\n3)\n",example.dropAllColumnsExcept(["Mount ID", "Position on Mount", "Mounted by"]))
print("\n4)\n",example.dropNullRowsInColumn(["Mount ID","Position on Mount", "Mounted by"]))
print("\n5)\n",example.dropDuplicatesInColumn(["Position on Mount"]))
print("\n6)\n",example.displayOutput())
example.saveOutput("output.xlsx")

# allow for batch processing 
# allow user to make a list of files to run batch process on! - GUI
