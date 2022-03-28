import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.log('completado')
};

const intervalo$ = new Observable<number>(subs =>{
    let contador = 0;
    const interval= setInterval(()=>{
        contador++;
        subs.next(contador);  
    }, 1000);
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalo$.subscribe(num => console.log('Num: ', num));
const subs2 = intervalo$.subscribe(num => console.log('Num: ', num));
const subs3 = intervalo$.subscribe(num => console.log('Num: ', num));

setTimeout(()=>{
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('Completado Timeout');
},3000)