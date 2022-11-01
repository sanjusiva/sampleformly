import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';
import { FormlyCfg } from '../model';


@Injectable({
  providedIn: 'root'
})
export class FormlyService {
  uniqueArr: any[] = [];

  constructor(private http: HttpClient) { }

  public getRepairForm() {

    return this.http.get('http://localhost:8000/data')
      .pipe(map((res: any) => {
        const mappedRes = this.mapFields(res);
        return mappedRes;
      })
      );
  }

  private mapFields(formFields: any) {
    const formCfg: FormlyCfg[] = [];
    const align: any = [];
    console.log(formFields);

    formFields.map((field: any) => {
      if ("dependentRow" in field) {
        console.log("if: ", field.key);
        this.uniqueArr.push(field)
      } 
    });
    this.alignCfg(this.uniqueArr, formCfg, formFields)

    return formCfg;
  }

  private alignCfg(field: any, formCfg: any, formFields: any) {
    let a = [{
      fieldGroupClassName: 'row',
      fieldGroup: [...this.basicMap(field, formFields)]
    }
    ];
    formCfg.push(...a);

  }
  private basicMap(field: any, api = []) {
    let cfg: { props:{ }}[] = [];
      api.reduce((prev: any, curr: any, cuIndex) => {
          const mapCfg = {
            type: curr.type,
            key: curr.key,
            defaultValue:curr.defaultValue,
            ...(curr.className ? { className: curr.className } : {}),
            props: {
              label: curr.label,
              type: curr.propKey,
              minLength: curr.minLength,
              description:curr.description,
              pattern: curr.pattern,
              ...(curr.required ? { required: curr.required } : {}),
              ...(curr.options ? { options: curr.options } : {}),
            },
          
          };

          cfg.push(mapCfg);
          
      }, api);
    return cfg;
  }
}
