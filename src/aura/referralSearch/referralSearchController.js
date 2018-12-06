({
	init : function(component, event, helper) {
		helper.fetchDropdownOptions(component);
	},
    handleChange:function(component,event,helper){
        console.log("change triggered");
        helper.fetchDropdownOptions(component);
    }
})