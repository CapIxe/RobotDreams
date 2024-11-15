// COLD
import { Observable, Subject } from "rxjs";

const coldObservable = new Observable((observer) => {
  console.log("Observable starting");
  observer.next(Math.random());
  observer.complete();
});

coldObservable.subscribe((value) => console.log(`First cold: ${value}`));
coldObservable.subscribe((value) => console.log(`Second cold: ${value}`));

const subject = new Subject();
// HOT
subject.subscribe((value) => console.log(`First hot: ${value}`));
subject.subscribe((value) => console.log(`Second  hot: ${value}`));

subject.next(Math.random());
