import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageDataService } from '../manage-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {

  constructor(private _service: ManageDataService, private route: ActivatedRoute, private router: Router) { }

  blog = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    Desc: new FormControl('', [Validators.required, Validators.minLength(150)])
  });

  get title() {
    return this.blog.get('title');
  }
  get Desc() {
    return this.blog.get('Desc');
  }
  get author() {
    return this.blog.get('author');
  }

  id: any;
  getValues() {
    console.warn(this.blog.value);
    this._service.arr.push(this.blog.value);
    alert("Blog Posted Successfully.");
    this.blog.reset();
  }

  Reset() {
    this.blog.reset();
  }

  updatevalues() {
    this._service.arr[this.id - 1] = this.blog.value;
  }
}
