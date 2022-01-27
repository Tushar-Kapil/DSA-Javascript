class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        const newNode = new Node(value);
        let leader = this.TransverseToIndex(index - 1);
        let nextToLeader = leader.next;
        leader.next = newNode;
        newNode.next = nextToLeader;
        this.length++;
        return this;
    }

    TransverseToIndex(index){
        let counter = 0;
        let currentNode = this.head
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    
    remove(index){
        let leader = this.TransverseToIndex(index-1);
        let unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this;
    }

    printList(){
        let array = [];
        let currentNode = this.head;
        while (currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    reverse(){
        if (this.length === 1){
            return this;
        }
        let first = this.head;
        let second = first.next;
        this.tail = this.head;
        while (second){
            let third = second.next;
            second.next = first;
            first = second;
            second = third;
        }
        this.head.next = null;
        this.head = first;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(8);
myLinkedList.prepend(1);
myLinkedList.insert(2,20)
myLinkedList.remove(2)
myLinkedList.reverse();
console.log(myLinkedList.printList());

