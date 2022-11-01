import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyComponent } from './shared/formly/formly.component';

export function minValidatorMessage(err:any,field:FormlyFieldConfig){
  return `This field should have atleast ${err.requiredLength} characters.but you have provided ${err.actualLength} character`;//global error message
}
export function fieldPatternMessage(err:any,field:FormlyFieldConfig){ 
  return `Invalid field value,your provided value ${err.actualValue} doesn't match with the pattern.`;
}


@NgModule({
  declarations: [
    AppComponent,
    FormlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule.forRoot({
      validationMessages:[
      { name: 'required', message: 'This field is required' },
      { name: 'minLength', message: minValidatorMessage },
      { name: 'pattern', message: fieldPatternMessage },
      ],
     
    }),
    FormlyBootstrapModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
