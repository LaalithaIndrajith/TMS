import { Component, OnInit } from '@angular/core';
import { faSave, faEye, faSync } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-Add-User',
  templateUrl: './Add-User.component.html',
  styleUrls: ['./Add-User.component.css']
})
export class AddUserComponent implements OnInit {
  faSave = faSave;
  faEye = faEye;
  faSync = faSync;

  adduser_form = new FormGroup({
      firstname : new FormControl('',Validators.required),
      lastname : new FormControl('',Validators.required),
      selectGender : new FormControl('',Validators.required),
      inputPhone : new FormControl('',[Validators.required, Validators.minLength(10)]),
      inputEmail : new FormControl('',[Validators.required,Validators.email]),
      selectPackage : new FormControl('',Validators.required),
      inputUsername : new FormControl('',Validators.required),
      selectCustomer : new FormControl('',Validators.required),
      selectCompany : new FormControl('',Validators.required),
      selectBranch : new FormControl('',Validators.required),
      inputPassword : new FormControl('',[Validators.required, Validators.minLength(8)]),
      confirmPassword : new FormControl('',Validators.required),

  })

  get inputPassword(){
    return this.adduser_form.get('inputPassword')
  }

  get confirmPassword(){
    return this.adduser_form.get('confirmPassword')
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewLookUp(){
    this.router.navigate(['/LookupUser']);
  }
}
