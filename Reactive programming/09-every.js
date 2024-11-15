import { every, of } from "rxjs";

const source$ = of(2, 4, 6, 8, 10);

source$
  .pipe(every((value) => value % 2 === 0))
  .subscribe((result) => console.log(result));
