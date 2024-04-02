class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //prepend(value)
    prepend(value) {
        this.head = new Node(value, this.head);
        this.size++
    }

    //append(value)
    append(value) {
        let node = new Node(value);
        let current;

        //If the list is empty, then the new Node becomes the head
        //else, loop through the entire list and then add the new node to the end of it

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.nextNode) {
                current = current.nextNode
            }
            current.nextNode = node;
            
        }
        this.size++
    }
    
    insertAt(value, index) {

        let node = new Node(value);
        let current, previous;
        let l = 0;

        if (index === 0) {
            node.nextNode = this.head;
            this.head = node;
            this.size++
            return;
        }

        if (index > this.size) {
            console.error(`Can't insert value, index exceeds size. index: ${index}, size: ${this.size}`)
            return;
        }

        current = this.head;
        while(l < index) {
            previous = current
            current = current.nextNode
            l++
        }

        previous.nextNode = node;
        node.nextNode = current;
        this.size++;

    }

    removeAt(index) {

        if (this.size === 0) {
            console.error("Linked List is empty, cannot remove any Nodes")
            return;
        }
        if (index === 0) { 
            this.head = this.head.nextNode
            this.size--
            return;
        }
        if (index >= this.size) {
            console.error("Index out of bounds")
            return;
        }

        let current, previous;
        let l = 0;

        current=this.head;
        while (l < index) {
            previous = current
            current = current.nextNode
            l++
        }

        previous.nextNode = current.nextNode;
        this.size--;



    }

    //print list values
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.nextNode;
        }
    }    
}

const linkedlist = new LinkedList();

linkedlist.prepend(100)
linkedlist.prepend(200)
linkedlist.prepend(3040)
linkedlist.append(402)
linkedlist.insertAt(69, 4)

linkedlist.printListData()

console.log ("########")
console.log("BIG ASS LINE BREAK")
console.log("########")

// linkedlist.removeAt()


// console.log(linkedlist.size)


linkedlist.printListData()
