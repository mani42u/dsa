public class LinkedList {
    public static class Node{
        int data ;
        Node next;
        public Node(int data){
            this.data = data;
            next = null;
        }
    }
    public Node head;
    public Node tail;

    public void addFirst(int data){
        Node newNode = new Node(data);
        if(head == null){
           head = tail = newNode;
           return;
        }
        newNode.next = head;
        head = newNode;
    }
    public void addLast(int data){
        Node newNode = new Node(data);
        if(tail == null){
           head = tail = newNode;
           return;
        }
        tail.next = newNode;
        tail = newNode;
    }
    public void print(){
        if(head == null){
            System.out.println("Empty list");
            return;
        }
        Node temp = head;
        while(temp != null){
            System.out.print(temp.data+"->");
            temp = temp.next;
        }
        System.out.println("null");
    }
    public static void main(String[] args) {
        LinkedList l = new LinkedList();
        l.addFirst(2);
        l.addFirst(1);
        l.print();
        l.addLast(3);
        l.addLast(4);
        l.print();
        System.out.println("Second List");
        LinkedList l2 = new LinkedList();
        l2.print();
        l2.addFirst(10);
        l2.addFirst(9);
        l2.print();

    }
}
