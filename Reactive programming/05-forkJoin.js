import { delay, forkJoin, map, of, zip } from "rxjs";

const obs1 = of("First").pipe(delay(1000));
const obs2 = of("Second").pipe(delay(3000));

forkJoin([obs1, obs2]).subscribe((results) => {
  console.log(results);
});

const age$ = of(27);
const name$ = of("Foo");
const isDev$ = of(true);
forkJoin(age$, name$, isDev$, obs2).subscribe((x) => {
  console.log("rows");
  console.log(x);
});
