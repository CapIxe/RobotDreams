import { iif, of } from "rxjs";

const isTrue = true;

const observable = iif(
  () => isTrue,
  of("Condition is true"),
  of("Condition is false"),
);

observable.subscribe((value) => console.log(value));
