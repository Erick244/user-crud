import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import User from "../models/User.model";

@Injectable({
	providedIn: 'root'
})
export class UserService {
	baseUrl = "http://localhost:3001/users";
	totalData!: number;

	constructor(private http: HttpClient) {
		this.http = http;
	}

	get(): Observable<User[]> {
		return this.http.get<User[]>(this.baseUrl);
	}

	getById(id: any): Observable<User> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.get<User>(url);
	}

	create(user: User): Observable<User> {
		return this.http.post<User>(this.baseUrl, user);
	}

	update(user: User): Observable<User> {
		const url = `${this.baseUrl}/${user.id}`;
		return this.http.put<User>(url, user);
	}

	remove(id: any): Observable<User> {
		const url = `${this.baseUrl}/${id}`;
		return this.http.delete<User>(url);
	}
}
