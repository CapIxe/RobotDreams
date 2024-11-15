import { delay, of, switchMap } from "rxjs";
const source$ = of("A", "B");
source$
  .pipe(switchMap((value) => of(`${value} - transformed`).pipe(delay(1000))))
  .subscribe((result) => console.log(result));
