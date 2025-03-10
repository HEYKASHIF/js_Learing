//Singly Linked List!





//brute force approach for finding the middle node in singly Linked List!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// var middleNode = function(head) {
  
//   if(head==null)
//   {
//     // console.log('head is null');
//     return null;
//   }
//   let count=1;
//   let temp=head;
//   while(temp.next!=null)
//   {
//     count++;
//     temp=temp.next;
//   }
//   let middle = (Math.floor(count/2));
//   // console.log(count,middle);
//   let start = 1;
//   temp=head;
//   while(start<=middle)
//   {
//     temp=temp.next;
//     start++;
//   }
//   return temp.data;
// };





//Inserting a node at head!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// // Complete the function below

// function insertNodeAtHead(head, data) {
  
//   let tempNode = new LinkedListNode(data);
//   tempNode.next = head;
//   head = tempNode;
//   return head;
// }






//Deleting the MIddle Node!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// var deleteMiddle = function(head, n) {
  
//   if(head==null)
//   {
//     return null;
//   }
//   let temp = head;
//   let middle = Math.floor(n/2);
//   let i=1;
//   while(i<middle)
//   {
//     temp=temp.next;
//     i++;
//   }
//   temp.next=temp.next.next;
//   return head;
// };





//Inserting a Node at a Tail!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// // Complete the function below

// function insertNodeAtTail(head, data) {
    
//     let tempNode = new LinkedListNode(data);
//     let current = head;
//     if(current==null)
//     {
//       return tempNode;
//     }
//     while(current.next != null)
//     {
//       current = current.next;
//     }
//     current.next = tempNode;
//     return head;
// }






//Inserting at a specific position!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// // Complete the function below

// function insertNodeAtPosition(head, data, position) {
  
//   let newNode = new LinkedListNode(data);
  
//   if(position == 0)
//   {
//     newNode.next = head;
//     return newNode;
//   }
  
//   let firstNode = head;
//   let i=1;
//   while(i<position)
//   {
//     if(firstNode==null || firstNode.next==null)
//     {
//       return head;
//     }
//     firstNode = firstNode.next;
//     i++;
//   }
  
//   let secondNode = firstNode.next;
//   firstNode.next = newNode;
//   newNode.next = secondNode;
  
//   return head;
// }






//Deleting a Node at a Specific Position!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// // Complete the function below

// function deleteNode(head, position) {
//   if(head==null)
//   {
//     return null;
//   }
//   let temp = head;
//   let i=1;
//   while(i<position)
//   {
//     if(temp.next!=null)
//     {
//       temp=temp.next;
//       i++;
//     }
//     else
//     {
//       return null;
//     }
//   }
//   temp.next=temp.next.next;
//   return head;
// }






//Linked List Cycle!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };
// // Complete the function below
// var hasCycle = function(head) {
  
//   if(head==null)
//   {
//     return null;
//   }
//   let temp = head;
//   let sett = new Set();
  
//   while(temp.next!=null)
//   {
//     if(sett.has(temp))
//     {
//       return true;
//     }
//     sett.add(temp);
//     temp=temp.next;
//   }
//   return false;
    
// };





//Nth Node From the End(two pointers approach)!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// function nth_node(head,n){
  
//   if(head==null)
//   {
//     return null;
//   }
  
//   let i=1;
//   let start=head;
//   let end=head;
//   while(i<n)
//   {
//     if(end.next!=null)
//     {
//       end=end.next;
//       i++;
//     }
//     else
//     {
//       return null;
//     }
//   }
//   while(end.next!=null)
//   {
//     start=start.next;
//     end=end.next;
//   }
//   return start.data;
// }






//Reverse a LinkedList!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// }

// function reverse(head) {
//   let temp = head;
//   let prev = null;
//   let next = null;
//   while(temp!=null)
//   {
//     next=temp.next;
//     temp.next=prev;
//     prev=temp;
//     temp=next;
//   }
//   head=prev;
//   return head;
// }






//Add 1 to Linked List!
// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };

// function reverseLinkedList(head)
// {
//   let temp = head;
//   let prev = null;
//   let next = null;
//   while(temp!=null)
//   {
//     next=temp.next;
//     temp.next=prev;
//     prev=temp;
//     temp=next;
//   }
//   head=prev;
//   return head;
// }

// var addOneToLinkedList = function(head) {
  
//   if(head==null)
//   {
//     return null;
//   }
//   head = reverseLinkedList(head);
//   let temp = head;
//   let carry = 1;
//   let sum=0;
//   let prev;
//   while(temp!=null)
//   {
//     sum=carry+temp.data;
//     carry=(sum>=10)?1:0;
//     sum=sum%10;
//     temp.data=sum;
//     prev=temp;
//     temp=temp.next;
//   }
//   if(carry>0)
//   {
//     prev.next = new LinkedListNode(carry);
//   }
//   head = reverseLinkedList(head);
//   return head;
// };




