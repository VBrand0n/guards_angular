import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { ApiResponse } from '../pages/interfaces/api.response';
import { ILoginResponse } from '../pages/interfaces/auth.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http:HttpClient) { }

    login(username:string, password:string): Observable<ApiResponse<ILoginResponse>> {
        const body = {username, password}
        return this.http.post<ApiResponse<ILoginResponse>>('https://iub.danydev.co/api/auth/login', {username, password})
         
    }



}
