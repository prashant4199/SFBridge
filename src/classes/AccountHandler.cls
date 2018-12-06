public class AccountHandler {
    public static Account insertNewAccount (String accountName){
        try{
        	Account newAcc = new Account(Name = accountName);
            insert newAcc;
        	return newAcc;
    	}
        catch (DmlException e) {
    		System.debug('A DML exception has occurred: ' +
                e.getMessage());
            return null;
		}
        
	}
}