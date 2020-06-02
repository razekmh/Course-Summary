# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'test05.ui'
#
# Created by: PyQt5 UI code generator 5.13.0
#
# WARNING! All changes made in this file will be lost!


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(981, 691)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.photo = QtWidgets.QLabel(self.centralwidget)
        self.photo.setGeometry(QtCore.QRect(10, 20, 961, 521))
        self.photo.setText("")
        self.photo.setPixmap(QtGui.QPixmap("../../../verge_wp_repeat_01.0.jpg"))
        self.photo.setScaledContents(True)
        self.photo.setObjectName("photo")
        self.Red = QtWidgets.QPushButton(self.centralwidget)
        self.Red.setGeometry(QtCore.QRect(30, 570, 401, 71))
        self.Red.setObjectName("Red")
        self.Pink = QtWidgets.QPushButton(self.centralwidget)
        self.Pink.setGeometry(QtCore.QRect(460, 570, 421, 71))
        self.Pink.setObjectName("Pink")
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QtWidgets.QMenuBar(MainWindow)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 981, 22))
        self.menubar.setObjectName("menubar")
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QtWidgets.QStatusBar(MainWindow)
        self.statusbar.setObjectName("statusbar")
        MainWindow.setStatusBar(self.statusbar)

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

        self.Red.clicked.connect(self.show_red)

        self.Pink.clicked.connect(self.show_pink)

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "MainWindow"))
        self.Red.setText(_translate("MainWindow", "Red"))
        self.Pink.setText(_translate("MainWindow", "Pink"))

    def show_pink(self):
        self.photo.setPixmap(QtGui.QPixmap("../../../verge_wp_repeat_01.0.jpg"))
    def show_red(self):
        self.photo.setPixmap(QtGui.QPixmap("../../../verge_wp_repeat_00.0.jpg"))
if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    ui = Ui_MainWindow()
    ui.setupUi(MainWindow)
    MainWindow.show()
    sys.exit(app.exec_())
