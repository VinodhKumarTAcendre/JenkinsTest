pipeline { 
    agent any 
    stages {
        stage('Development') { 
            steps { 
                bat returnStdout: true, script: '''cls
                @ECHO OFF
                ECHO. ***********************************
                ECHO. ** Executing Scripts **
                ECHO. *******************************
                Call "C:\\Program Files (x86)\\HP Inc\\ReadBookingReferenceIDApplication\\ReadBookingReferenceID.exe" C:\\Users\\vinodh.kt\\Desktop\\AutomationDetailedSummaryReport.html
                cls
                EXIT'''
            }
        }
        stage('QA') { 
            steps { 
                bat returnStdout: true, script: '''cls
                @ECHO OFF
                ECHO. ***********************************
                ECHO. ** Executing Scripts **
                ECHO. *******************************
                Call "C:\\Program Files (x86)\\HP Inc\\ReadBookingReferenceIDApplication\\ReadBookingReferenceID.exe" C:\\Users\\vinodh.kt\\Desktop\\AutomationDetailedSummaryReport.html
                cls
                EXIT'''
            }
        }
        stage('Production') { 
            steps { 
                bat returnStdout: true, script: '''cls
                @ECHO OFF
                ECHO. ***********************************
                ECHO. ** Executing Scripts **
                ECHO. *******************************
                Call "C:\\Program Files (x86)\\HP Inc\\ReadBookingReferenceIDApplication\\ReadBookingReferenceID.exe" C:\\Users\\vinodh.kt\\Desktop\\AutomationDetailedSummaryReport.html
                cls
                EXIT'''
            }
        }
    }
}
