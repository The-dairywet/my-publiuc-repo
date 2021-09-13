import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../repository/repository.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  constructor(private repositoryService: RepositoryService, public router: Router) { }

  ngOnInit() {
    this.navigateAuthenticatedUser();
  }

  navigateAuthenticatedUser() {
    this.repositoryService.getRepositoryCount().subscribe(countResult => {
      let repositoryCount = parseInt(countResult.count);
      if (repositoryCount > 0) { // if repositories are not present then ask user to link repositories
        this.router.navigateByUrl(`/repositories`);
      }
    });
  }
}
