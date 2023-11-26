import { Component, OnInit } from '@angular/core';
import { tvservice } from '../tv.service';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import { XPlace } from '@ng-nest/ui/core';
import { XDialogAction } from '@ng-nest/ui/dialog';
import { XMessageBoxService, XMessageBoxAction } from '@ng-nest/ui/message-box';
@Component({
  selector: 'app-add-tv',
  templateUrl: './add-tv.component.html',
  styleUrls: ['./add-tv.component.css']
})
export class AddTvComponent implements OnInit {
  addTv:any={
    Picture_qualtiy:'',
    Product_Name:'',
    Speaker:'',
    channel:'',
    current_price:'',
    Frequency:'',
    Image_url:'',
    Operating_system:'',
  }
  addin:any
  constructor(private tv:tvservice,private router: Router,private activatedRoute : ActivatedRoute,private msgBox: XMessageBoxService) { }
  addform:any={
    username:'',
    name:'',
    detail:'',
    path:''
   }
   uploadedFiles: any[] = [];
   infomraitonnamefile:any
   fileinformation:any;
  ngOnInit(): void {
  }
  add(){
    var submitData = new FormData();
    console.log(this.addform)
    submitData.append('file', this.fileinformation)
    console.log(this.fileinformation)
    console.log(submitData)
    this.tv.addpicture(submitData).subscribe({
      next:(res)=>{
        console.log(res)
        console.log(res.Path)
        this.addform.path = res.Path
        this.tv.add_tv(this.addform).subscribe({
          next:(res)=>{
            console.log(res)
            alert('add success')
    
          }
        })
      },
      error: (err) => {

      }
    })
    /*console.log(submitData)
                window.location.reload()

    this.addform.file = this.fileinformation
    this.tv.add_tv(this.addform).subscribe({
      next:(res)=>{
        console.log(res)
        alert('add success')
        window.location.reload()

      }
    })
    */
    
  }
  onUpload(event:any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
        console.log(file)
        this.fileinformation.push(file);
    }
    alert('file upload success')
  }
  myUploader(event:any) {
    console.log(event.files[0])
    this.fileinformation = event.files[0]
  
   this.infomraitonnamefile =event.files[0].name.slice(-4,event.files[0].name.length)

}
}
