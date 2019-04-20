import { Component, OnInit } from "@angular/core";
import { WOW } from "wowjs/dist/wow.min";

declare var $: any;
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  username: String = "esmail";
  users: Object[] = [
    { name: "emsmail", slary: 222222, birthday: 1 / 1 / 1996 },
    { name: "ahmed", slary: 222222, birthday: 1 / 1 / 1996 },
    { name: "mona", slary: 222222, birthday: 1 / 1 / 1996 },
    { name: "ehab", slary: 222222, birthday: 1 / 1 / 1996 }
  ];

  ngAfterViewInit() {
    new WOW().init();
    $(".skitter-large").skitter();
  }

  constructor() {}

  ngOnInit() {}
}
