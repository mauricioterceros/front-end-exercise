import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainserviceService} from "./services/mainservice.service";
import {RandomusersInterface} from "./models/randomusers.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'frontend-exercise';

  public data: RandomusersInterface[]=[];
  // public data:any;
  public subscription!: Subscription;
  public randomData!:RandomusersInterface;

  constructor(
    private mainService: MainserviceService
  ) {
  }

  ngOnInit(): void {
    this.callRandomUsers();
  }

  callRandomUsers() {

    this.subscription = this.mainService.getRandomUsers().subscribe((r)=> {
      this.data = r;
      console.log(r);
    });

    // const callData = this.mainService.getRandomUsers().toPromise();
    // Promise.resolve(callData).then((r:any) => {
    //   console.log(r);
    // }).catch((err:any) => {
    //   console.log(err);
    // })
  }

  sendRandomUserInfo(dataSended:RandomusersInterface){
    console.log(dataSended);
    this.randomData = dataSended;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
