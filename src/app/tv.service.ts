import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Header } from 'primeng/api';
const jsonHeader = {
    headers: new HttpHeaders({
      'Content-type': 'multipart/form-data',
    })
  }

  @Injectable({
    providedIn: 'root'
  })
  export class tvservice {

    constructor(private http: HttpClient) { }
  
    userlogin(data: any) {
      return this.http.post<any>('https://showwandayong.azurewebsites.net:443/api/login/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=GXM1L6xByR3XqKfVtEsjD8zZdHeUAy29Hw9fMfODkp4',data)
    }
    userRegister(data: any) {
      return this.http.post<any>('https://showwandayong.azurewebsites.net:443/api/register/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=sxn19Yshul5zaCM17EyUX7me5AVuNHK6SppGAzSwNJc',data)
    }
    addpicture(data:any) {
      return this.http.post<any>('https://showwandayong.azurewebsites.net:443/api/addpicture1/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=dMWKTt5peozkYzM1_m6G1re7qC4cLoDQ46biVNYXmZU',data)
    }
    show_tv(){
      return this.http.post<any>('https://showwandayong.azurewebsites.net:443/api/showdetail/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=1YBc6WfLEe0LntKMn8NOG22Bc9lPpMsBePKBbEbCwss',null)
    }
    show_tv_detail1(data:any){
      return this.http.post<any>('https://showwandayong.azurewebsites.net:443/api/showdetail/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=1YBc6WfLEe0LntKMn8NOG22Bc9lPpMsBePKBbEbCwss',data)
    }
    show_tv_detail(id:any){
      return this.http.get<any>('http://localhost:5000/tv_list/'+id)
    }
    show_review_detail1(data:any){
      return this.http.post<any>('https://showwandayong.azurewebsites.net:443/api/showreview/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=Qz09y463c35DdKEQ1ZyX9yV83NLeAUzaiE9sm0vxPoo',data)
    }
    show_tvpage(index:any){
      return this.http.get<any>('http://localhost:5000/tv_list?index='+index)
    }
    add_tv_review(data:any) {
      return this.http.post<any>('https://showwandayong.azurewebsites.net:443/api/addreview/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=37PaGSWByK61B7T4u469_2gma9Ij6ElgsdchQM2KNFQ',data)
    }
    show_review_list(id:any){
      return this.http.get<any>('http://localhost:5000/review_list/'+id)
    }
    delete_review(review_id:any,data:any){
      return this.http.put<any>('https://showwandayong.azurewebsites.net:443/api/deletereview/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=JvO25sHyfejwsj8r7mE06id0VSK788XcLnmd185IRa4',data)
    }
    add_tv(data: any) {
      const url =
        'https://showwandayong.azurewebsites.net:443/api/videoadd/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=71SJTrmNYlI4vSa3NeWXP3CIEYP-FnL6Ucm6REzMqBY';
  
      // 设置请求头
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',  // 设置你的 Content-Type
        // 其他头部信息
      });
  
      return this.http.post<any>(url, data, { headers });
    }
    delete_tv(id:any) {
      return this.http.delete<any>(' http://localhost:5000/delete_tv/'+id)
    }
    updateTvs(id:any,data:any){
      return this.http.put<any>('http://localhost:5000/update_tv/'+id,data)
    }
    add_Apply(data:any) {
      return this.http.post<any>(' http://localhost:5000/add_friendsApply',data)
    }
    translate(data:any) {
      return this.http.post<any>('https://showwandayong.azurewebsites.net:443/api/trans/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=6JR70WcropdzQVfRj574Hl8EYW-I_mOtBIsjBLDA9g0',data)
    }
    delete_apply(id:any) {
      return this.http.delete<any>(' http://localhost:5000/delete_apply/'+id)
    }
    agree_Apply(id:any,data:any){
      return this.http.put<any>('http://localhost:5000/agree_Apply/'+id,data)
    }
    friendApply_list(acceptName:any){
      return this.http.get<any>('http://localhost:5000/friendApply_list/'+acceptName)
    }
    delete_friend(id:any) {
      return this.http.delete<any>(' http://localhost:5000/delete_friend/'+id)
    }
    friend_list(acceptName:any){
      return this.http.get<any>('http://localhost:5000/friend_list/'+acceptName)
    }
}