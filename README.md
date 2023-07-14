# Initial Setup

1. Clone the repository.
2. Using NVM, get the latest version specified in `.nvmrc` by running `nvm use`
3. Run `yarn && yarn dev`

## Database

* All database changes should be made on `prisma/schema.prisma`
* Upon changing, always run `npx prisma db push`
* To view a GUI of the current database, run `npx prisma studio`

> WARNING! Always run `npx prisma format` to prettify the schema code
