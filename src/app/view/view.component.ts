
import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ManageDataService } from '../manage-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  constructor(private activatedroute:ActivatedRoute, private router:Router, private service:ManageDataService){}
  id:any;
  viewform=new FormGroup({
  'title':new FormControl('',[Validators.required]),
  'author' : new FormControl('',[Validators.required]),
  'Desc':new FormControl('',[Validators.required,Validators.minLength(150)]),
  }
  );
  
  get title(){
    return this. viewform.get('title');
  }
  get Desc(){
  return this. viewform.get('Desc');
  }
  get author(){
    return this.viewform.get('author');
  }

ngOnInit():void
{
this.activatedroute.params.subscribe((params)=>{
this.id=params['id'];
});
if(this.id){
this.viewform.controls["title"].setValue(this.service.arr[this.id-1].title);
this.viewform.controls["author"].setValue(this.service.arr[this.id-1].author);
this.viewform.controls["Desc"].setValue(this.service.arr[this.id-1].Desc);
}
}
back(){
  this.activatedroute.params.subscribe((params)=>{
    this.router.navigate(['/manage'])
  })
  }
}