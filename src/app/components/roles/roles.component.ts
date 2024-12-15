import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {IRoles} from '../../Interfaces/Roles';
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  firstName:String = "Angular Tutorial";
  angularVersion = "Version 17";
  version:number =17;
  isActive:boolean = false;
  currerntDate:Date | undefined;
  inputType:string = "radio";
  roleList: IRoles []= [];
  http = inject(HttpClient);
  
  ngOnInit(): void {
    this.getAllRoles();
  }
  
  getCurrentDate(){
    this.currerntDate = new Date();
  }
  getAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
      this.roleList = res;
    })
  }
  
}
