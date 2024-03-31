import java.util.ArrayList;
public class stack1 {
    static class stack{
        static ArrayList<Integer> list = new ArrayList<>();
        public static boolean isEmpty(){
            return list.size() == 0;
        }
        //PUSH
        public static void push(int data){
            list.add(data);
        } 
        //POP
        public static int pop(){
            if(isEmpty() == true)
            return -1;
            int top = list.get(list.size() - 1);
            list.remove(list.size() - 1);
            return top;
        }
        //PEEK
        public static int peek(){
            if(isEmpty() == true)
            return -1;
            return list.get(list.size() - 1);
        }
    }
    public static void main(String[] args) {
        stack s = new stack();
        s.push(1);
        s.push(2);
        s.push(3);
        while(s.isEmpty() != true){
            System.out.println(s.peek());
            s.pop();
        }
    }
}
