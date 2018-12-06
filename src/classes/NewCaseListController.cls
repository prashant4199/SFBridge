public class NewCaseListController {
    private String caseCondition = 'New';
    
    public List<Case> getNewCases (){
        List<Case> result = Database.query(
            'SELECT CASENUMBER,ID '+
            'FROM CASE '+
            'Where Status = :caseCondition'
        );
        return result;
    }

}