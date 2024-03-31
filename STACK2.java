import java.util.ArrayList;
public class STACK2 {
    static class Stack {
      static ArrayList<Integer> list = new ArrayList<>();
      static boolean isEmpty(){
        return list.size() == 0;
      }  
    
        //PUSH
        public static void push(int data){
        list.add(data);
        }
        //POP
        public static int pop(){
            if(isEmpty()){
                return -1;//throw new RuntimeException("stack empty")
            }
            int top = list.get(list.size() - 1);
            list.remove(list.size() -1);
            return top;
        }
        //PEEk
        public static int peek(){
            if(isEmpty()){
            return -1;
            }
            return list.get(list.size() -1);
        }
        //print stack elements
        public static void print(){
            int i = list.size() - 1;
            while (i >= 0) {
                System.out.println(list.get(i));
                i--;
            }
        }
    } 
    public static void main(String[] args) {
        Stack s = new Stack();
        // s.push(1);
        // s.push(2);
        // s.print();
        Stack s2 = new Stack();
        s2.push(5);
        s2.print();
    }

}
