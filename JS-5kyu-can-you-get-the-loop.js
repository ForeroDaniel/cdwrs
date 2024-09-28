class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function loop_size(head){
  let slow = head;
    let fast = head;
    
    // Step 1: Detect the cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Cycle detected
            break;
        }
    }
    
    if (!fast || !fast.next) {
        // No cycle detected
        return 0;
    }
    
    // Step 2: Find the length of the loop
    let loopLength = 0;
    let current = slow;

    do {
        current = current.next;
        loopLength++;
    } while (current !== slow);

    return loopLength;
}
