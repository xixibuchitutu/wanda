import { Component, OnInit } from '@angular/core';
import { tvservice } from '../tv.service';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import { XPlace } from '@ng-nest/ui/core';
import { XDialogAction } from '@ng-nest/ui/dialog';
import { XMessageBoxService, XMessageBoxAction } from '@ng-nest/ui/message-box';
import {DialogService} from "primeng/dynamicdialog";
import { UpdateTvComponent } from '../update-tv/update-tv.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private televesion:tvservice,private router: Router,private activatedRoute : ActivatedRoute,private msgBox: XMessageBoxService,public dialogService: DialogService) { }
  id:any
  tv_detail:any
  review_list:any
  visible!: boolean;
  placement!: XPlace;
  data:any
  cancel = "cancel"
  confirmText: string = 'confirm';
  concelText: string = 'cancel';
  width:string = "50rem"
  model = 3;
  text="add review"
  reviewform:any={
    name:this.activatedRoute.snapshot.queryParams['user'],
    detail:'',
    rate:''
  }
  reviewidform:any={
    id:'',
    username:'',
    comment:'',
    star:'',
    videoid:this.activatedRoute.snapshot.queryParams['id']
  }
  reviewid:any={
    vvideoid:''
  }
  reviewdata:any={
    username:this.activatedRoute.snapshot.queryParams['user'],
    comment:'',
    star:'',
    videoid:''
  }
  tanslateforma:any={
    text:''
  }
    ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.queryParams['id'])
    this.id=this.activatedRoute.snapshot.queryParams['id']
    console.log(this.id)
    this.show_tv_detail()
    this.show_review_list()
  }
  dialog() {
    this.visible = true;
    console.log(this.visible)
  }
  close() {
    this.visible = false;
  }

  evt(type: string) {
    console.log('output', type);
    if(type =="close"){
      this.reviewform.detail = this.data
      this.reviewform.rate = this.model
      this.AddReview(this.id,this.reviewform)
    }
  }

  show_tv_detail(){
    this.televesion.show_tv_detail1(this.id).subscribe({
      next:(res)=>{
        console.log(res.value[0])

       this.tv_detail = res.value[0]
      }
    })
  }
  show_review_list(){
    this.reviewid.videoid = this.id
    this.televesion.show_review_detail1(this.reviewid).subscribe({
      next:(res)=>{
        console.log(res)
        console.log(res.value)
       this.review_list = res.value
      }
    })
  }
translate(data:any){
this.tanslateforma.text =data
    this.televesion.translate(this.tanslateforma).subscribe({
      next:(res)=>{
        console.log(res)
        console.log(res.text)

        alert('tanslate information:'+res.text)
      }
    })
  }
  show_review_list1(){
    this.reviewid.videoid = this.id
    this.televesion.show_review_detail1(this.reviewid).subscribe({
      next:(res)=>{
        console.log(res)
        console.log(res.value)
       this.review_list = null
      }
    })
  }
  
  AddReview(id:any,data:any){
    if(data.detail == null){
      alert('information must input')
    }
    this.reviewdata.username = data.name
    this.reviewdata.comment = data.detail
    this.reviewdata.star = data.rate
    this.reviewdata.videoid = this.id
    this.televesion.add_tv_review(this.reviewdata).subscribe({
      next:(res)=>{
        console.log(res)
       
       alert(" add review success")
       this.show_review_list()
        
      }
    })
  }
  
  deleteReview(data:any){

    console.log(data)
    this.reviewidform.id = data.id
    this.reviewidform.username = data.username
    this.reviewidform.comment = data.comment
    this.reviewidform.star = data.star
       alert(" delete review success")
       this.review_list = null
      }
  
  
  deleteTv(){
    console.log(this.id)
    this.televesion.delete_tv(this.id).subscribe({
      next:(res)=>{
       alert(" delete success")
       this.router.navigate(['/home'],{ queryParams: { user:this.activatedRoute.snapshot.queryParams['user']}});
      }
    })
  }
  updateTv(){
    const open =  this.dialogService.open(UpdateTvComponent, {
      header: "updateTV",
      width: '20%',
      data: {
        id:this.activatedRoute.snapshot.queryParams['id']
      }
    });
  }
}
