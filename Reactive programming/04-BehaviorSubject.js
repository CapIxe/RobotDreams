import { BehaviorSubject } from "rxjs";

const behaviorSubject = new BehaviorSubject("Initial");

behaviorSubject.subscribe((value) => console.log(`Subscriber 1: ${value}`));
behaviorSubject.next("Hello");

behaviorSubject.subscribe((value) => console.log(`Subscriber 2: ${value}`));
behaviorSubject.next("World");
