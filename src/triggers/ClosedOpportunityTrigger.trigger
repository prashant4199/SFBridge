trigger ClosedOpportunityTrigger on Opportunity (before insert,before update) {
	List<Task> taskList = new List<Task>();
    for(Opportunity opp : Trigger.new){
        if(opp.StageName == 'Closed Won'){
            Task t = new Task(WhatId  = opp.id,Subject= 'Follow Up Test Task');
        	taskList.add(t);
        	System.debug('New List is '+taskList);
        } 
    }
    
    if(taskList.size() > 0){
        insert taskList;
    }
}