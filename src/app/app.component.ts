import { Component } from '@angular/core';
import { FormlyService } from './core/formly.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AssetTracker';
  fieldConfig = [];
  
  constructor(private formlyService:FormlyService){
    // this.formlyService.getRepairForm().map((res:any)=>this.fieldConfig = res)
    this.formlyService.getRepairForm().subscribe((res:any)=>this.fieldConfig = res);
    
    console.log(this.fieldConfig);
  }

  handleFormSubmission(event:any){
    console.log('parent--event',event);
  }
}
