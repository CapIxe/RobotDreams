import { delay, mergeMap, of, interval } from "rxjs";
import { take, map } from 'rxjs/operators';

const source$ = of("A", "B");

source$
  .pipe(mergeMap((value) => of(`${value} - transformed`).pipe(delay(1000))))
  .subscribe((result) => console.log(result));



const firstObservable = of('Перший потік');
const secondObservable = () => interval(1000).pipe(take(3));

firstObservable
    .pipe(
        mergeMap(() => {
            return secondObservable()
        })
    )
    .subscribe(data1 => {
        console.log('Вкладений subscribe:', data1)
});
