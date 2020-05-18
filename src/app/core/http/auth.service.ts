import { Injectable } from '@angular/core';
import { tokenKey } from '@angular/core/src/view';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(
        private router: Router,
        private toast: ToastrService
    ) {

    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/auth']);
        this.toast.info('Has cerrado la sesión','Sesion');
    }
}