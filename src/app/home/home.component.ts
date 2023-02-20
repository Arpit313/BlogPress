import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageDataService } from '../manage-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private router:Router, private service:ManageDataService){}

  blogs = this.service.arr;

  ngOnInit(): void {
  }

  view(id:number){
    this.activatedroute.params.subscribe((params)=>{
    this.router.navigate(['/view',id+1])
  });
}
}
