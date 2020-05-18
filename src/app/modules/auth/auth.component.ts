import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { ApiService } from 'src/app/core/http/api.service';
import { RequestOptions } from 'src/app/core/http/http.types';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  myForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private rest: ApiService,
    private router: Router,
    private toast: ToastrService
    ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      correo: ['', [ Validators.required, Validators.email]
      ],
      password: ['', [Validators.required]]
    })
  }

  Iniciar() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      const options: RequestOptions = {};
      const data = this.myForm.value;
      options.body = { ...data };
      this.rest.post('/iniciar', options).then((res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin']);
      });
    } else {
      this.toast.info('Verificar información registrada','Por favor');
    }
  }



 

  matcher = new MyErrorStateMatcher();

}
