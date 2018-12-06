public class StringArrayTest {
    
//public method
    public static List<String> generateStringArray(Integer strInt){
        String t = 'Test ';
        List<String> op = new List<String> ();
        for(Integer count=0;count<strInt;count++){
            op.add(t+count);
            System.debug(op);
        }
        return op;
    }
}