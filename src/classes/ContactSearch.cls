public class ContactSearch {
    public static List<Contact> searchForContacts (String lastName,String postalCode){
        List<Contact> contacts = [Select name from contact where lastName = :lastName and MailingPostalCode = :postalCode];
        return contacts;
    }
}