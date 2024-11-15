import { Observable, of } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next("Hello");
  subscriber.error("World");
  subscriber.complete();
});

observable.subscribe({
  next(x) {
    console.log(x);
  },
  error(err) {
    console.error("Error: " + err);
  },
  complete() {
    console.log("Completed");
  },
});

const example = of(["someArray"]);
