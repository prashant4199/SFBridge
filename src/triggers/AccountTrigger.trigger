trigger AccountTrigger on Account (before insert) {
    if(trigger.isInsert && trigger.isBefore){
        AccountTriggerHandler.CreateAccounts(Trigger.new);
    }
	
}