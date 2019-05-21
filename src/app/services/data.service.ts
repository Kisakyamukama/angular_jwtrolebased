import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class DataService {
     // private observationslipUrl = 'http://localhost:8080/api/getObservationslips';
     private observationslipUrl  = 'http://localhost:8080/api/test/getObservationslips';

  constructor(private _http: HttpClient) { }

   //OBSERVATIONSLIP
    getAllObservationslips(): Observable<any> {
      return this._http.get(this.observationslipUrl);
}
}
