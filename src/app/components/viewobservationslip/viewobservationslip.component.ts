import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-viewobservationslip',
  templateUrl: './viewobservationslip.component.html',
  styleUrls: ['./viewobservationslip.component.css']
})
export class ViewobservationslipComponent implements OnInit {
    observationslips: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllObservationslips()
    .subscribe( data => {
      console.log(data);
      // this.observationslips = data.json();
      this.observationslips = data;
      console.log(this.observationslips);
    });
  }

}
