import { Component, OnInit} from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {  Router } from '@angular/router';
import { ObservationslipInfo } from '../auth/observationslip-info';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-observationslipform',
  templateUrl: './observationslipform.component.html',
  styleUrls: ['./observationslipform.component.css']
})

export class ObservationslipformComponent implements OnInit {
  form: any = {};
  observatioslip: ObservationslipInfo;
  submitted = false;
  failedToSubmit = false;
  errorMessage = '';

  
constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  private authService: AuthService) { }


  ngOnInit() {}

  onSubmit() {
    console.log(this.form);
    this.observatioslip = new ObservationslipInfo(
            this.form.Time,
            this.form.Date,
            this.form.Station,
            this.form.stationName,
            this.form.TotalAmountOfAllClouds,
            this.form.TotalAmountOfLowClouds,
            this.form.TypeOfLowClouds1,
            this.form.OktasOfLowClouds1,
            this.form.HeightOfLowClouds1,
            this.form.CLCODEOfLowClouds1,
            this.form.TypeOfLowClouds2,
            this.form.OktasOfLowClouds2,
            this.form.HeightOfLowClouds2,
            this.form.CLCODEOfLowClouds2,
            this.form.TypeOfLowClouds3,
            this.form.OktasOfLowClouds3,
            this.form.HeightOfLowClouds3,
            this.form.CLCODEOfLowClouds3,
            this.form.TypeOfMediumClouds1,
            this.form.OktasOfMediumClouds1,
            this.form.HeightOfMediumClouds1,
            this.form.CLCODEOfMediumClouds1,
            this.form.TypeOfMediumClouds2,
            this.form.OktasOfMediumClouds2,
            this.form.HeightOfMediumClouds2,
            this.form.CLCODEOfMediumClouds2,
            this.form.TypeOfMediumClouds3,
            this.form.OktasOfMediumClouds3,
            this.form.HeightOfMediumClouds3,
            this.form.CLCODEOfMediumClouds3,
            this.form.TypeOfHighClouds1,
            this.form.OktasOfHighClouds1,
            this.form.HeightOfHighClouds1,
            this.form.CLCODEOfHighClouds1,
            this.form.TypeOfHighClouds2,
            this.form.OktasOfHighClouds2,
            this.form.HeightOfHighClouds2,
            this.form.CLCODEOfHighClouds2,
            this.form.TypeOfHighClouds3,
            this.form.OktasOfHighClouds3,
            this.form.HeightOfHighClouds3,
            this.form.CLCODEOfHighClouds3,
            this.form.CloudSearchLightReading,
            this.form.Rainfall,
            this.form.Dry_Bulb,
            this.form.Wet_Bulb,
            this.form.Max_Read,
            this.form.Max_Reset,
            this.form.Min_Read,
            this.form.Min_Reset,
            this.form.Piche_Read,
            this.form.Piche_Reset,
            this.form.TimeMarksThermo,
            this.form.TimeMarksHygro,
            this.form.TimeMarksRainRec,
            this.form.Present_Weather,
            this.form.Present_WeatherCode,
            this.form.Past_Weather,
            this.form.Visibility,
            this.form.Wind_Direction,
            this.form.Wind_Speed,
            this.form.Gusting,
            this.form.AttdThermo,
            this.form.PrAsRead,
            this.form.Correction,
            this.form.CLP,
            this.form.MSLPr,
            this.form.TimeMarksBarograph,
            this.form.TimeMarksAnemograph,
            this.form.OtherTMarks,
            this.form.SoilMoisture,
            this.form.SoilTemperature,
            this.form.sunduration,
            this.form.trend,
            this.form.windrun,
            this.form.speciOrMetar,
            this.form.UnitOfWindSpeed,
            this.form.IndOrOmissionOfPrecipitation,
            this.form.TypeOfStation_Present_Past_Weather,
            this.form.HeightOfLowestCloud,
            this.form.StandardIsobaricSurface,
            this.form.GPM,
            this.form.DurationOfPeriodOfPrecipitation,
            this.form.GrassMinTemp,
            this.form.CI_OfPrecipitation,
            this.form.BE_OfPrecipitation,
            this.form.IndicatorOfTypeOfIntrumentation,
            this.form.SignOfPressureChange,
            this.form.Supp_Info,
            this.form.VapourPressure,
            this.form.T_H_Graph,
            this.form.DeviceType,
            this.form.SubmittedBy,
            this.form.Remarks,
            this.form.Approved
    );

    this.authService.storeObservationslip(this.observatioslip).subscribe(
      data => {
        console.log(data);
        this.submitted = true;
        this.failedToSubmit = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error;
        this.failedToSubmit = true;
      }
    );
  }
}