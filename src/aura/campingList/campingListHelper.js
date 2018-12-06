({
	createItem : function(component,newItem) {
        console.log("Inside Helper Function");
		var action = component.get("c.saveItem");
        console.log("Inside Helper Function with Action",action);
        
        //parametrize method
        action.setParams({
            "item":newItem 
        });
        
        //Set Callback
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items",items);
            }
        });
        
        //Enqueue Action 
        $A.enqueueAction(action);
	}
})