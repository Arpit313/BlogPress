
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageDataService } from '../manage-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private activatedroute: ActivatedRoute, private router: Router, private service: ManageDataService) { }
  id: any;
  editform = new FormGroup({
    'title': new FormControl('', [Validators.required]),
    'author': new FormControl('', [Validators.required]),
    'Desc': new FormControl('', [Validators.required, Validators.minLength(150)]),
  }
  );
  get title() {
    return this.editform.get('title');
  }
  get Desc() {
    return this.editform.get('Desc');
  }
  get author() {
    return this.editform.get('author');
  }


  edit() {
    this.service.arr[this.id - 1] = this.editform.value;
    alert("Blog Edited Successfully.");
    this.router.navigate(['/manage'])
  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (this.id) {
      this.editform.controls["title"].setValue(this.service.arr[this.id - 1].title);
      this.editform.controls["author"].setValue(this.service.arr[this.id - 1].author);
      this.editform.controls["Desc"].setValue(this.service.arr[this.id - 1].Desc);

    }
  }
  goback() {
    this.activatedroute.params.subscribe((params) => {
      this.router.navigate(['/manage'])
    })
  }

}
