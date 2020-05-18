import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { Router } from '@angular/router';
import { RequestOptions } from 'src/app/core/http/http.types';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;


  constructor(
    private rest: ApiService,
    private fb: FormBuilder, 
    private router: Router,
    private toast: ToastrService    
  ) { }

  async GetDataUtils() {
 

  }

  ngOnInit() {
    this.GetDataUtils();
    this.myForm = this.fb.group({
      datosPersonales: this.fb.group({
        nombreCompleto: ['', Validators.required],
        numeroIdentidad: ['', Validators.required],
        celular: ['', Validators.required],
        correo: ['', Validators.required],
        validateCorreo: ['', Validators.required],
        password: ['', Validators.required],
        validatePassword: ['', Validators.required],
      }),
      datosResidencia: this.fb.group({
        departamento: ['', Validators.required],
        ciudad: ['', Validators.required],
        barrio: ['', Validators.required],
        direccionResidencia: ['', Validators.required]
      }),
      datosFinancieros: this.fb.group({
        salario: ['', Validators.required],
        otrosIngresos: ['', Validators.required],
        gastosMensuales: ['', Validators.required],
        gastosFinacieros: ['', Validators.required]
      }),
    });
  }

  Save() {
    console.log(this.myForm.value);
    if(!this.myForm.valid) {
      this.toast.info('Verificar información registrada','Por favor');
    } else if (this.myForm.value.datosPersonales.correo !== this.myForm.value.datosPersonales.validateCorreo) {
      this.toast.info('La validación del correo es incorrecta','Por favor');
    } else if (this.myForm.value.datosPersonales.password !== this.myForm.value.datosPersonales.validatePassword) {
      this.toast.info('La validación de la contraseña es incorrecta','Por favor');
    } else {
       const options: RequestOptions = {};
      const data = this.myForm.value;
      options.body = { ...data };
      this.rest.post('/registrar', options).then((res) => {
        console.log(res);
        this.router.navigate(['/admin']);
        this.toast.success('Usuario creado','Correcto');
      });
    } 
  }

}
