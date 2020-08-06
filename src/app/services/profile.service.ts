import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = '8bd42f331e60d3d50900';
  private clientsecret = 'a66a7d529fab342481970b8ae2e072316464d7b2';

  constructor(private http: HttpClient) {
    this.username = 'ney11';
   }

  getProfile() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
  }

  getRepos() {
    // tslint:disable-next-line: max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);
  }

  searchName(username: string) {
    this.username = username;
  }

}
