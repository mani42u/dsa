
public class LinkListDemo {
    public static class Node {
        int data;
        Node next; 
        public Node(int data){
            this.data = data;
            this.next = null;
        }   
    }
    public Node head;
    public Node tail;

    public void addFirst(int data){
        //step1 create new node
        Node newNode = new Node(data );
        if (head == null) {
            head = tail = newNode;
            return;
        }
        //step2 newNode next = head
        newNode.next = head; //link
        //step3 head = new node
        head = newNode;
    }
    public void addLast(int data){
        //step1 create new node
        Node newNode = new Node(data);
        if(tail == null){
            head = tail = newNode;
            return;
        }
        //step2 new node next = tail
        tail.next = newNode;
        tail = newNode;
    }
    public void print(){
        
        if(head == null){
            System.out.println("Empty list");
            return;
        }
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data+"--> ");
            temp = temp.next;
        }
        System.out.println("null");
    }
    public static void main(String[] args) {
        LinkListDemo ll = new LinkListDemo();
        ll.print();
        ll.addFirst(2);
        ll.print();
        ll.addFirst(1);
        ll.print();
        ll.addLast(3);
        ll.print();
        ll.addLast(4);
        ll.print();
        System.out.println("printing second");
        LinkListDemo l2 = new LinkListDemo();
        l2.print();
    }
    
}
