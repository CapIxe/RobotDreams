import { of, tap } from "rxjs";

const source$ = of("A", "B", "C");

source$
  .pipe(tap((value) => console.log(`Value from tap: ${value}`)))
  .subscribe((result) => console.log(`Subscriber received: ${result}`));
