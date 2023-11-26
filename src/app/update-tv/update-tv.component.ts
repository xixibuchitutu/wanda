import { Component, OnInit } from '@angular/core';
import { tvservice } from '../tv.service';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import { XPlace } from '@ng-nest/ui/core';
import { XDialogAction } from '@ng-nest/ui/dialog';
import { XMessageBoxService, XMessageBoxAction } from '@ng-nest/ui/message-box';
import {DialogService} from "primeng/dynamicdialog";
@Component({
  selector: 'app-update-tv',
  templateUrl: './update-tv.component.html',
  styleUrls: ['./update-tv.component.css']
})
export class UpdateTvComponent implements OnInit {
  updateTv:any={
    Picture_qualtiy:'',
    Product_Name:'',
    Speaker:'',
    channel:'',
    current_price:'',
    Frequency:'',
    Image_url:'',
    Operating_system:'',
  }
  updateTv2:any={
    Picture_qualtiy:'',
    Product_Name:'',
    Speaker:'',
    channel:'',
    current_price:'',
    Frequency:'',
    Image_url:'',
    Operating_system:'',
    MRP:'',
    Ratings:''
  }
  id:any
  tv_detail:any
  constructor(private televesion:tvservice,private router: Router,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.queryParams['id']
    this.show_tv_detail()
  }
  show_tv_detail(){
    this.televesion.show_tv_detail(this.id).subscribe({
      next:(res)=>{
        console.log(res.tv_detail)
        this.tv_detail = res.tv_detail  
        this.updateTv2 = res.tv_detail
      }
    })
  }
  updateTvs(){
    console.log(this.updateTv2.Ratings)
    this.televesion.updateTvs(this.id,this.updateTv2).subscribe({
      next:(res)=>{
       alert('update success')
       window.location.reload()

      }
    })
  }
}
