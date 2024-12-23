import { Component, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @input({ required: true }) personName: string = '';
  @input({ required: true }) personAge: number = 0;
  @input({ required: true }) personIndex: number = 0;
  @input({ required: true }) isFirst: boolean = false;
  @input({ required: true }) isLast: boolean = false;
  @input({ required: true }) isOdd: boolean = false;
  @input({ required: true }) isSelected: boolean = false;

  @Output('personSelected') onPersonSelectEmit = new EventEmitter<number>()

  selectPerson() {
    this.onPersonSelectEmit.emit(this.personIndex);
  }
}
