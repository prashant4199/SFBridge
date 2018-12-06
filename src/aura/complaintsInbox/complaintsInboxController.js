({
    init: function (component, event, helper) {
        component.set('v.columns', [
            {label: 'Referral ID', fieldName: 'Referral_ID', type: 'text'},
            {label: 'Record Type', fieldName: 'Record_Type', type: 'text'},
            {label: 'Referral Date', fieldName: 'Referral_Date', type: 'date'},
            {label: 'Next Followup Date', fieldName: 'Next_Followup_Date', type: 'date'},
            {label: 'Assigned To', fieldName: 'Assigned_To', type: 'text'},
            {label: 'Referral Status', fieldName: 'Referral_Status', type: 'text'},
            {label: 'Status Type', fieldName: 'StatusType', type: 'text'},
            {label: 'Disposition', fieldName: 'Disposition', type: 'text'},
            {label: 'Merchant Name', fieldName: 'Merchant_Name', type: 'text'}, 
            {label: 'Merchant City', fieldName: 'Merchant_City', type: 'text'}, 
            {label: 'Corp Set Name', fieldName: 'Corp_Set_Name', type: 'text'},
            {label: 'Acquirer', fieldName: 'AcquirerName', type: 'text'},
            {label: 'Issuer', fieldName: 'Issuer', type: 'text'},
            {label: 'Issuer Type', fieldName: 'Issuer_Type', type: 'text'},
            {label: 'User Name', fieldName: 'UserName', type: 'text'},
            {label: 'Due Date', fieldName: 'DueDate', type: 'date'},
        ]);



        helper.fetchData(component);
    }
})