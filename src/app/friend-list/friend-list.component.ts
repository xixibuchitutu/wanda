import { Component, OnInit } from '@angular/core';
import { tvservice } from '../tv.service';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  constructor(private televesion:tvservice,private router: Router,private activatedRoute : ActivatedRoute) { }
  friend_list:any
  name:any
  data:any
  friendsApply:any = {
    acceptName:'',
    sendName:''
  }
  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.queryParams['user']
    this.show_friend()
  }
  show_friend(){
    this.name=this.activatedRoute.snapshot.queryParams['user']
    this.televesion.friend_list(this.name).subscribe({
      next:(res)=>{
       this.friend_list = res.list_friend
      }
    })
}
deletefriend(id:any){
  this.televesion.delete_friend(id).subscribe({
    next:(res)=>{
      alert('delete success')
      this.show_friend()
    }
  })
}
}
