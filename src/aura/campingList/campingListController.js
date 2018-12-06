({
    clickCreateItem: function(component, event, helper) {
        
        console.error("Inside Camping List Controller");
        var validItem = component.find('ItemForm').reduce(function (validItem, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validItem && inputCmp.get('v.validity').valid;
        }, true);
        

        if(validItem){
            var newItem = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItem));
        	helper.createItem(component,newItem);
            component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                    'Name': '',
                    'Quantity__c': 0,
                    'Price__c': 0,
                    'Packed__c': false });
        }
    },
    doInit: function(component, event, helper){
        var action = component.get("c.getItems");
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state === "SUCCESS"){
                console.log("Success",response.getReturnValue());
                component.set("v.items",response.getReturnValue());
            }else{
                console.error("Failed with State",state);
            }
        });
        //Dispatch Action
        $A.enqueueAction(action);
    }
})