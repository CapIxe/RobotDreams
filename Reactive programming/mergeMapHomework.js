import { mergeMap, of, interval } from "rxjs";
import { take, map } from 'rxjs/operators';

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
    })
;
