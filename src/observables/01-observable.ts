import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.log('completado [obs]:')
};


// const obs$ = Observable.create();

const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error
    // const a = undefined;
    // a.nombre = 'Carlos';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});


obs$.subscribe(observer);