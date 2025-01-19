import LinkedList from "./DS/Linked-List/SinglyLinkedListNodes";

const list = new LinkedList<number | string>();

list.push(1).push(2).shift(0).push("Delete-End").shift("Delete-Begin");
list.state();

list.pop();
list.state();

list.shift();
list.state();
