public class ContactAndLeadSearch {
    public static List<List< SObject>> searchContactsAndLeads (String searchWord){
        List<List< SObject>> result = [FIND :searchWord IN NAME FIELDS RETURNING CONTACT(FirstName,LastName),Lead(FirstName,LastName)];
        return result;
    }
}