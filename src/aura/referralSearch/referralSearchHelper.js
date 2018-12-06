({
	fetchDropdownOptions : function(component) {
        var categoryOptions = [{"label":"Debit","value":"Debit"},{"label":"Digital","value":"Digital"},{"label":"EMV","value":"EMV"},{"label":"Net to Net","value":"Net to Net"}];
        component.set("v.categoryOptions",categoryOptions);
        
        var assignedUsersOptions = [{"label":"prashant","value":"prashant"},{"label":"nate","value":"nate"}];
        component.set("v.assignedUsersOptions",assignedUsersOptions);
        
        var assignedTeamOptions =[{"label":"ACQ Relations","value":"ACQ Relations"},{"label":"Acquirer AE","value":"Acquirer AE"},{"label":"BPM Support","value":"BPM Support"}];
        component.set("v.assignedTeamOptions",assignedTeamOptions);
	}
})