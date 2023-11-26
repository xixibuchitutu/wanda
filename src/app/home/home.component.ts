import { Component, OnInit } from '@angular/core';
import { tvservice } from '../tv.service';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private televesion:tvservice,private sanitizer: DomSanitizer,private router: Router,private activatedRoute : ActivatedRoute,private http: HttpClient) { }
  tv_list:any
  index = 1;
  size = 3;
  total = 100;
  name:any
  tv1_list:any

  ngOnInit(): void {
    this.show_tv()
    this.name=this.activatedRoute.snapshot.queryParams['user']

  }
getImageDataUrl(filePath: string) {
  const imageUrl = 'https://wandayongblob.blob.core.windows.net' + filePath;

  return this.http.get(imageUrl, { responseType: 'blob' })
    .pipe(map(blob => {
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    }));
}
trustUrl(url: string): SafeUrl {
  return this.sanitizer.bypassSecurityTrustUrl(url);
}
delete(){
  alert('delete success')
  this.tv1_list = null;
}
 show_tv(){
  this.televesion.show_tv().subscribe({
    next:(res)=>{
      console.log(res.value)
      this.tv1_list = res.value
      console.log(this.tv1_list)
    }
  })
}
change(index: any) {
  console.log(index);
  this.televesion.show_tvpage(index).subscribe({
    next:(res)=>{
      console.log(res.list_tv)
      this.tv_list = res.list_tv
      this.total = res.total
    }
  })
}
detail(_id:any){
  this.router.navigate(['/detail'],{ queryParams: { user:this.name,id: _id }});

}
}
