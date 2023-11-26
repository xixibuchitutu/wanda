import { Component, OnInit } from '@angular/core';
import { tvservice } from '../tv.service';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-friend-apply',
  templateUrl: './friend-apply.component.html',
  styleUrls: ['./friend-apply.component.css']
})
export class FriendApplyComponent implements OnInit {

  constructor(private televesion:tvservice,private router: Router,private activatedRoute : ActivatedRoute) { }
  apply_list:any
  name:any
  data:any
  friendsApply:any = {
    acceptName:'',
    sendName:''
  }
  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.queryParams['user']
    this.show_Apply()
  }
  show_Apply(){
    this.name=this.activatedRoute.snapshot.queryParams['user']
    this.televesion.friendApply_list(this.name).subscribe({
      next:(res)=>{
        console.log(res)
       this.apply_list = res.list_apply
      }
    })
}
deleteApply(id:any){
  this.televesion.delete_apply(id).subscribe({
    next:(res)=>{
      alert('delete success')
      this.show_Apply()
    }
  })
}
AccpetApply(id:any,sendName:any,acceptName:any){
  this.friendsApply.sendName = sendName
  this.friendsApply.acceptName = acceptName
  this.televesion.agree_Apply(id,this.friendsApply).subscribe({
    next:(res)=>{
      alert('agree success')
      this.show_Apply()
    }
  })
}
addApply(){
  this.friendsApply.sendName = this.name
  this.friendsApply.acceptName = this.data
  if(this.data == null){
    alert('not empty!')
  }
  this.televesion.add_Apply(this.friendsApply).subscribe({
    next:(res)=>{
      if(res[1]== 404){
        alert('not have this user')
      }else{
      alert('add success')
      }
    }
  })
}
}
