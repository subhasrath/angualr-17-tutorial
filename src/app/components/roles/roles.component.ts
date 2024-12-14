import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName:String = "Angular Tutorial";
  angularVersion = "Version 17";
  version:number =17;
  isActive:boolean = false;
  currerntDate:Date | undefined;
  inputType:string = "radio";
  getCurrentDate(){
    this.currerntDate = new Date();
  }
}
