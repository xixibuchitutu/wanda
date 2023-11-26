import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { tvservice } from '../tv.service';
import {ActivatedRoute} from "@angular/router";
import { XMenuNode } from '@ng-nest/ui';
import { AddTvComponent } from '../add-tv/add-tv.component';
import {DialogService} from "primeng/dynamicdialog";

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  name: any
  data:any;
  constructor(private router: Router,private tv: tvservice,private activatedRoute : ActivatedRoute,public dialogService: DialogService) { }

  ngOnInit(): void {
    this.name=this.activatedRoute.snapshot.queryParams['user']
    console.log(this.activatedRoute.snapshot.queryParams['id'])
    this.data = ['welcome: '+ this.name,'logout','addvideo','home']
  }
  handleNodeClick(event: XMenuNode) {
    if (event === 'logout') {
      this.router.navigate(['/login']); 
    }
    if (event === 'home') {
      this.router.navigate(['/home'],{ queryParams: { user: this.activatedRoute.snapshot.queryParams['user'] }});
    }
    if (event === 'addvideo') {
      this.addTv()
    }
  
       
  }
  addTv(){
    const open =  this.dialogService.open(AddTvComponent, {
      header: "addvideo",
      width: '20%',
    });
  }
}
