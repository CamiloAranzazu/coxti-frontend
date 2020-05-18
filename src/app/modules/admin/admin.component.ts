import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestOptions } from 'src/app/core/http/http.types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    private rest: ApiService,
    private router: Router,
    private toast: ToastrService
  ) { }
  users:any;
  ngOnInit() {
    const options: RequestOptions = {};
    this.rest.get('/users-private', options).then((res) => {
      console.log("Respuesta", res);
      this.users = res;
      console.log("this.users", this.users);
    });
  }
  panelOpenState = false;

}
