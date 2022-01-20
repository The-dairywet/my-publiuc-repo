  
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
static void   jk_error(JKParseState *parseState, NSString *format, ...);

  // Filter grouped args
  args = args.filter(x => x._);

  if (nonGroupedArgs.length > 0) {
    args.push({_: nonGroupedArgs});
  }
static void   jk_error(JKParseState *parseState, NSString *format, ...);

  const parsedArgs = parse(args, options);
  const items = get(parsedArgs);

  await generate(items, options);
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
}
