import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XResultModule } from '@ng-nest/ui/result';
import { XMessageBoxModule } from '@ng-nest/ui/message-box';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XButtonModule } from '@ng-nest/ui/button';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { XAlertModule } from '@ng-nest/ui/alert';
import { XNotificationModule } from '@ng-nest/ui/notification';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MessageService, ConfirmationService } from 'primeng/api';

import { XContainerModule } from '@ng-nest/ui/container';
import { XLayoutModule } from '@ng-nest/ui/layout';
import { XMenuModule } from '@ng-nest/ui/menu';
import { NavigateComponent } from './navigate/navigate.component';
import { XAnchorModule } from '@ng-nest/ui/anchor';
import { XPaginationModule } from '@ng-nest/ui/pagination';

import { XTypographyModule } from '@ng-nest/ui/typography';

import { XColorModule } from '@ng-nest/ui/color';
import { DetailComponent } from './detail/detail.component';

import { XDialogModule } from '@ng-nest/ui/dialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { XRateModule } from '@ng-nest/ui/rate';
import {ButtonModule} from 'primeng/button';


import {TableModule} from 'primeng/table';
import { AddTvComponent } from './add-tv/add-tv.component';

import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import {DialogService} from "primeng/dynamicdialog";
import { UpdateTvComponent } from './update-tv/update-tv.component';
import { FriendApplyComponent } from './friend-apply/friend-apply.component';
import { XInputModule } from '@ng-nest/ui/input';
import { FriendListComponent } from './friend-list/friend-list.component';
import { Validators } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';

import { DomSanitizer } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    HomeComponent,
    UserRegisterComponent,
    NavigateComponent,
    DetailComponent,
    AddTvComponent,
    UpdateTvComponent,
    FriendApplyComponent,
    FriendListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    XButtonModule,
    XResultModule,
    XMessageBoxModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    XAlertModule,
    XNotificationModule,
    XContainerModule,
    XLayoutModule,
    XMenuModule,
    XAnchorModule,
    XPaginationModule,
    XTypographyModule,
    XColorModule,
    XDialogModule,
    BrowserAnimationsModule,
    XRateModule,
    ButtonModule,
    TableModule,
    DynamicDialogModule,
    DialogModule,
    XInputModule,
    FileUploadModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
