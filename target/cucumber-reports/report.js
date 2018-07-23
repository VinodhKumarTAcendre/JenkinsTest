$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "LoginTest",
  "description": "",
  "id": "logintest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 128853,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successful Login with InValid Credentials",
  "description": "",
  "id": "logintest;successful-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters UserName and Password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Steps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 37767840122,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 2325546580,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.user_enters_UserName_and_Password()"
});
formatter.result({
  "duration": 156208747,
  "status": "passed"
});
formatter.match({
  "location": "Test_Steps.message_displayed_Login_Successfully()"
});
formatter.result({
  "duration": 620994138,
  "status": "passed"
});
formatter.after({
  "duration": 76800,
  "status": "passed"
});
});