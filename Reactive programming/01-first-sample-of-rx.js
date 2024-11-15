import { range, filter, map } from "rxjs";

range(1, 200)
  .pipe(
    filter((x) => x % 2 === 1),
    map((x) => x + x),
  )
  .subscribe((x) => console.log(x));

for (let i = 0; i < 200; i++) {
  let x = 0;
  if (i % 2 === 1) {
    x = x + i;
    console.log(x);
  }
}
