import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter  } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.scss']
})
export class FormlyComponent implements OnChanges {

form = new FormGroup({});
model = {};
@Input() fields: FormlyFieldConfig[] = [];
@Output() formSubmitEvent = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log('ngchanges-formly-comp',this.fields)
  }
  
  onSubmit(model:any) {
    console.log('onsubmit---child',model);
    this.formSubmitEvent.emit(model);
  }

}
