import { delay, of, race } from "rxjs";

const obs1 = of("Winner").pipe(delay(1000));
const obs2 = of("Loser").pipe(delay(2000));

race(obs1, obs2).subscribe((result) => {
  console.log(result);
});

const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Winner"), 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Loser"), 2000);
});

Promise.race([promise1, promise2]).then((result) => {
  console.log(result);
});
