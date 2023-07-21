import { Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';
import {Subject, Subscription, debounceTime}from 'rxjs'
@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit,  OnDestroy {
private debouncer: Subject<string>= new Subject<string>();
private debouncerSucription?: Subscription;

@Input()
placeholder:string=''
@Output()
onValue= new EventEmitter<string>();
@Output()
onDebouce= new EventEmitter<string>();


ngOnInit(): void {
  this.debouncerSucription=this.debouncer
.pipe(
  debounceTime(300)
)
.subscribe(value=> {
this.onDebouce.emit(value)
})
}
ngOnDestroy(): void {
  this.debouncerSucription?.unsubscribe()
}


emitValue(value:string){
  this.onValue.emit(value)

}
onKeyPress(searchTerm:string ){

this.debouncer.next(searchTerm)



}

}
