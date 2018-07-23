package stepDefinition;

import cucumber.api.java.*;

public class Hooks {
	@Before(order=1)
    public void beforeScenario(){
        System.out.println("This will run before the Scenario");
    }
	
	@Before(order=0)
    public void beforeSmokeScenario(){
        System.out.println("This will run before the Scenario");
    }
	
	@After
    public void afterScenario(){
        System.out.println("This will run after the Scenario");
    }
}
