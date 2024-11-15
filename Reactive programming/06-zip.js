import { delay, map, of, zip } from "rxjs";

const obs1 = of("A").pipe(delay(1000));
const obs2 = of("B").pipe(delay(2000));

zip(obs1, obs2).subscribe((results) => {
  console.log(results);
});

const age$ = of(27, 25, 29);
const name$ = of("Foo", "Bar", "Beer");
const isDev$ = of(true, true, false);
zip(age$, name$, isDev$)
  .pipe(map(([age, name, isDev]) => ({ age, name, isDev })))
  .subscribe((x) => {
    console.log("rows");
    console.log(x);
  });
