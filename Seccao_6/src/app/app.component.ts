import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  buttonsList = [
    'Botão 1',
    'Botão2',
    'Botão3',
  ];

  @ViewChildren('meuButton')
    buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit(){
      console.log(this.buttonsEl);

      this.buttonsEl.changes.subscribe((result) => {
        console.log(result);
      });
  }

  changeColor($event: Event) {
      console.log(event);

      const btnElement = event?.target as HTMLButtonElement;

      btnElement.style.backgroundColor = 'orange';
      btnElement.style.color= 'white';
  }

  resetButtons() {
      this.buttonsEl.forEach((btnEl) => {
        btnEl.nativeElement.style.backgroundColor = '';
        btnEl.nativeElement.style.color = 'black'
      })
  }

  first() {
    //const primeiro = this.buttonsEl.get(0);

    //const primeiro =this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-0')

    //const primeiro =
    //this.buttonsEl.toArray()[0];

    //console.log(primeiro);
  }

  remove(){
    this.buttonsList.shift();
  }
}

