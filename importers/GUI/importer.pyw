import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, \
    QDesktopWidget, QAction, QFileDialog, QMessageBox, \
    QInputDialog, \
    QPushButton, QLabel,QListWidget,QVBoxLayout,QHBoxLayout,QDialog


class DataCleanerGUI(QDialog):
    def __init__(self):
        # required line of code for __init__ functions
        super().__init__()
        # window name
        self.setWindowTitle("Geo-Lab Spreedsheet Cleaner.")
        # fixed window size (width, height)
        self.setFixedSize(700, 900)
        # center the GUI window
        self.frameGeometry().moveCenter(QDesktopWidget().availableGeometry().center())

        self.inputFiles=set()
        self.inputFileColumns=[]
        self.outputColumns=[]
        
        filePicker = QPushButton("Add Input Files (.xlsx or *xls)")
        filePicker.clicked.connect(self.chooseFiles)
        headerRow = QInputDialog("Enter the header row: ")

        inputFilesButtonLayout = QVBoxLayout()
        self.listWidget1 = QListWidget()
        for text, slot in (("&Remove File", self.removeInputFileName),
                           ("&Sort FileNames", self.listWidget1.sortItems)):
            button = QPushButton(text)
            inputFilesButtonLayout.addWidget(button)
            button.clicked.connect(slot)
        
        columnButtonsLayout = QVBoxLayout()
        self.listWidget2 = QListWidget()
        for text, slot in (("&Delete Column", self.deleteColumn),
                           ("&Sort Columns", self.listWidget2.sortItems)):
            button = QPushButton(text)
            columnButtonsLayout.addWidget(button)
            button.clicked.connect(slot)
        
        

        defaultLayout = QVBoxLayout()
        defaultLayout.addWidget(filePicker)
        defaultLayout.addWidget(headerRow)
        

        horizontalLayout1 = QHBoxLayout()
        horizontalLayout1.addWidget(self.listWidget1)
        horizontalLayout1.addLayout(inputFilesButtonLayout)

        horizontalLayout2 = QHBoxLayout()
        horizontalLayout2.addWidget(self.listWidget2)
        horizontalLayout2.addLayout(columnButtonsLayout)

        defaultLayout.addLayout(horizontalLayout1)
        defaultLayout.addLayout(horizontalLayout2)
        self.setLayout(defaultLayout)
        

    
    def removeInputFileName(self):
        if(self.listWidget1.currentItem()):
            row = self.listWidget1.currentRow()
            columnName = self.listWidget1.currentItem().text()
            msg = QMessageBox()
            msg.setIcon(QMessageBox.Warning)
            msg.setText("Are you sure you want to remove this file from the list?")
            msg.setWindowTitle("Remove " + columnName)
            msg.setStandardButtons(QMessageBox.Yes | QMessageBox.No)
            answer = msg.exec_()
            if answer == QMessageBox.Yes:
                self.listWidget1.takeItem(row)
                self.inputFiles.remove(columnName)

    def deleteColumn(self):
        if(self.listWidget2.currentItem()):
            row = self.listWidget2.currentRow()
            columnName = self.listWidget2.currentItem().text()
            msg = QMessageBox()
            msg.setIcon(QMessageBox.Warning)
            msg.setText("Are you sure you want to delete this column?")
            msg.setWindowTitle("Delete " + columnName)
            msg.setStandardButtons(QMessageBox.Yes | QMessageBox.No)
            answer = msg.exec_()
            if answer == QMessageBox.Yes:
                self.listWidget2.takeItem(row)
                self.outputColumns.remove(columnName)
        
    def updateInputFileList(self, inputFileList):
        self.listWidget1.clear()
        self.listWidget1.addItems(inputFileList)
        self.listWidget1.setCurrentRow(0)

    def updateColumnList(self, columnList):
        self.listWidget2.addItems(columnList)
        self.listWidget2.setCurrentRow(0)

    def chooseFiles(self):
        filter = "XlSX(*.xlsx *.xls)"
        file_name = QFileDialog()
        file_name.setFileMode(QFileDialog.ExistingFiles)
        fileNames,_ = file_name.getOpenFileNames(self, "Open files", "", filter)
        self.inputFiles.update(fileNames)
        self.updateInputFileList(list(self.inputFiles))        

    # allows the user to save current 
    def saveToFile(self):
        userFilePath, _ = QFileDialog.getSaveFileName(self, "Save Data", "",
                                                      "XlSX(*.xlsx *.xls)")
        if userFilePath == "":
            return
        else:
            self.image.save(userFilePath)

    # function for telling the users they about to close the app
    def closeEvent(self, event):
        exit_msg = "Are you sure you want to exit the program?\n" \
                   "All unsaved work would be lost."
        reply = QMessageBox.question(self, 'Message',
                                     exit_msg, QMessageBox.Yes, QMessageBox.No)

        if reply == QMessageBox.Yes:
            event.accept()
        else:
            event.ignore()


def main():
    # creating the Painter application
    app = QApplication(sys.argv)
    # creating an instance of our app window
    window = DataCleanerGUI()
    # showing the window
    window.show()
    # starting/executing the CSPaint application
    sys.exit(app.exec_())

if __name__ == '__main__':
    main()

#Week 4, 9, 14
"""
# creating a default button style
defaultButtonStyle = "QPushButton {border-radius:5px; border: 1px solid black;" \
                        " border-style: outset; min-width:20px;" \
                        "padding: 5px; margin:0 3px 7px 2px; color:#383838} " \
                        "QPushButton::hover:!pressed { color : black;}" \
                        "QMenu::item:selected {background-color: #7CB9E8;}"
self.setStyleSheet(defaultButtonStyle)
"""
#
# Choose input files
# What row is the header on -  number picker
#— Pass these into the data cleaner Class
#- drop all empty columns?
#- drop all empty rows? 
#- Show all current column names
#- pick headers you want to keep
#- show new list of headers
#- drop null rowsin column
#- drop duplicated in which column?
#- save file as
#
