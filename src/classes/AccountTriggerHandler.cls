public class AccountTriggerHandler {
    public static void CreateAccounts (List<Account> acc){
        for(Integer count=0;count<acc.size();count++ ){
            acc[count].ShippingState  = acc[count].BillingState;
        }
        
    }  
}