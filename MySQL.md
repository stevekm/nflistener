# MySQL

Make sure MySQL is installed. On macOS using homebrew:

```
brew install mysql
brew services start mysql
```

Make sure a `root` user is set

```
mysqladmin -u root password 'somepasswordhere'
```

Use this root user to set up the database with `made db`
