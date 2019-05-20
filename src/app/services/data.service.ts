import { Injectable } from '@angular/core';
// import { Task } from '../../models/task/task';
// import { Station } from '../../models/station/station';
// import { Observationslip } from '../../models/observationslip/observationslip';

// import { Http,Headers,Response,RequestOptions } from '@angular/http';
// import 'rxjs/Rx';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class DataService {
//   public url:string='http://localhost:3000/Tasks';
//   public formsUrl:string='http://localhost:3000/forms';
//   public stationsUrl:string='http://localhost:3000/stations';
     private observationslipUrl = 'http;//localhost:8080/api/test/observationslip';

  constructor(private _http: HttpClient) { }

   //OBSERVATIONSLIP

    // getAllObservationslips(): Observable<any> {
    //   return this._http.get(this.observationslipUrl);
    // }
      // createObservationslip(observationslip: Observationslip){
      //   let body = JSON.stringify(observationslip);
      //   let headers = new Headers({ 'Content-Type': 'application/json'});
      //   let options = new RequestOptions({ headers: headers });
      //
      //   return this._http.post(this.formsUrl, body, options)
      //   .map((response: Response) => response.json());
      //
      // }
    //
    // getAllTasks(){
    //       return this._http.get(this.url)
    //        .map((response:Response)=>response.json());
    // }
    //
    // deleteTask(item:Task){
    //       let headers = new Headers({ 'Content-Type': 'application/json' });
    //       let options = new RequestOptions({ headers: headers });
    //
    //       return this._http.delete(this.url+item.Id,options)
    //       .map((response:Response)=>response.json());
    // }
    //
    //
    //
    // addTask(item:Task){
    //
    // let body = JSON.stringify(item);
    //
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    //
    // let options = new RequestOptions({ headers: headers });
    //
    // return this._http.post(this.url,body, options)
    //
    // .map((response:Response)=>response.json());
    //
    // }
    //
    // getTaskId(id:any){
    //
    // return this._http.get(this.url+id)
    //
    // .map((response:Response)=>response.json());
    //
    // }
    //
    // editTask(item:Task){
    //
    // let body = JSON.stringify(item);
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
    // return this._http.put(this.url+item.Id, body, options)
    // .map((response:Response)=>response.json());
    //
    // }

}
