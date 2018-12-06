public class AccountUtils {
    public static List<Account> accountsByState(String state){
        List<Account> acc = Database.query(
       	 'SELECT Id,Name from Account where BillingState = :state'
    		);
        return acc;
    } 
}