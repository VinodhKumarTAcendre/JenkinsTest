pipeline {
  agent any
  stages {
    stage('Development') {
      steps {
        bat '''cls
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
      when {
        expression {
          currentBuild.result == null || currentBuild.result == 'SUCCESS' (1)
        }

      }
      steps {
        bat '''cls
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
      when {
        expression {
          currentBuild.result == null || currentBuild.result == 'SUCCESS' (1)
        }

      }
      steps {
        bat '''cls
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