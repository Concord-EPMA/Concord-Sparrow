import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, \
    QDesktopWidget, QAction, QFileDialog, QMessageBox, \
    QPushButton, QLabel,QListWidget,QVBoxLayout,QHBoxLayout,QDialog


class DataCleanerGUI(QDialog):
    def __init__(self):
        # required line of code for __init__ functions
        super().__init__()
        # window name
        self.setWindowTitle("Geo-Lab Spreedsheet Cleaner.")
        # fixed window size (width, height)
        self.setFixedSize(800, 800)
        # center the GUI window
        self.frameGeometry().moveCenter(QDesktopWidget().availableGeometry().center())

        self.inputFileColumns=[]
        self.outputColumns=[]

        self.listWidget = QListWidget()
        buttonLayout = QVBoxLayout()
        for text, slot in (("&Delete Column...", self.deleteColumn),
                           ("&Sort Columns", self.listWidget.sortItems)):
            button = QPushButton(text)
            buttonLayout.addWidget(button)
            button.clicked.connect(slot)

        verticalDefaultLayout = QVBoxLayout()
        horizontalLayout = QHBoxLayout()
        horizontalLayout.addWidget(self.listWidget)
        horizontalLayout.addLayout(buttonLayout)
        verticalDefaultLayout.addLayout(horizontalLayout)
        self.setLayout(verticalDefaultLayout)

    def deleteColumn(self):
        if(self.listWidget.currentItem()):
            row = self.listWidget.currentRow()
            columnName = self.listWidget.currentItem().text()
            msg = QMessageBox()
            msg.setIcon(QMessageBox.Warning)
            msg.setText("Are you sure you want to remove this item?")
            msg.setWindowTitle("Remove " + columnName)
            msg.setStandardButtons(QMessageBox.Yes | QMessageBox.No)
            answer = msg.exec_()
            if answer == QMessageBox.Yes:
                self.listWidget.takeItem(row)
                self.outputColumns.remove(columnName)
        
    def updateColumnList(self, columnList):
        self.listWidget.addItems(columnList)
        self.listWidget.setCurrentRow(0)

    # allows the user to save current drawing
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
# Choose input file
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