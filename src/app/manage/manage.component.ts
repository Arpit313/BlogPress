

import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ManageDataService } from '../manage-data.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  constructor(private activatedroute:ActivatedRoute,private router:Router, private service:ManageDataService){}

  arr=this.service.arr;

  edit(i:number){
this.activatedroute.params.subscribe((params)=>{
this.router.navigate(['/edit',i+1])
});
  }

view(i:number){
  this.activatedroute.params.subscribe((params)=>{
  this.router.navigate(['/view',i+1])
  });
  }

 remove(del:any){
  if(window.confirm("Do you want to delete this blog?"))
  {
    this.service.arr.splice(del,1)
  }
}

}