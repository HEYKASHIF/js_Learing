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







