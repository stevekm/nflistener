# nflistener

Web server app to listen for HTTP POST messages output by Nextflow ([qbicsoftware](https://github.com/qbicsoftware/nextflow.git) `nfbroadcast` branch)

# Install

```
git clone https://github.com/stevekm/nflistener.git
cd nflistener
make install
```

## Database

Make sure MySQL is installed. See [MySQL.md](MySQL.md) for installation notes.

```
make db
```

This will:

- create a MySQL database called `nflistener` if it does not already exist

- add a MySQL user with username `nflistener`, password `nflistener`, and give the account access to the `nflistener` database


# Software

- Java 8 and macOS/Linux with `bash` required for Nextflow

- Node.js and npm (`brew install node`)

- MySQL (`brew install mysql`)
