import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TrackService} from "../track.service"
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  collection:any=[];
  
  constructor(public router:ActivatedRoute,public track:TrackService) { }


  ngOnInit(): void {
    console.warn(this.router.snapshot.params.name)
    this.track.GetList(this.router.snapshot.params.name).subscribe((result)=>{
      console.warn(result);
      this.collection=result;
    });
  }

}
