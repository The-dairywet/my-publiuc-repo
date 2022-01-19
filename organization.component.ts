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
  
  async function init(args, options) {
  if (args.length === 0) {
    cli.showHelp(1);
  }

  const nonGroupedArgs = args.filter(x => !x._);

  // Filter grouped args
  args = args.filter(x => x._);

  if (nonGroupedArgs.length > 0) {
    args.push({_: nonGroupedArgs});
  }

  const parsedArgs = parse(args, options);
  const items = get(parsedArgs);

  await generate(items, options);
}
}
