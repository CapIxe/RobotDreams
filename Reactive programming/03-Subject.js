import { Subject } from "rxjs";

const subject = new Subject();

subject.subscribe((value) => console.log(`Subscriber 1: ${value}`));
subject.subscribe((value) => console.log(`Subscriber 2: ${value}`));

subject.next("Hello");
subject.next("World");
