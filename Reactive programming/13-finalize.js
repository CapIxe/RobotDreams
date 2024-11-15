import { catchError, finalize, of, throwError } from "rxjs";

const source$ = throwError("error");

source$.pipe(finalize(() => console.log("Stream completed!"))).subscribe(
  (result) => console.log(`Received: ${result}`),
  (err) => console.log(err),
);
