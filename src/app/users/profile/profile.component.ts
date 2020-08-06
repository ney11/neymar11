import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../services/profile.service';

@Component({
  selector: 'gg-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData: any;
  repos: any;
  username: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  findName() {
    this.profileService.searchName(this.username);
    this.profileService.getProfile().subscribe(profileData => {
      console.log(profileData);
      this.profileData = profileData;
    });
    this.profileService.getRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

}
