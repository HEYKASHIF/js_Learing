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

