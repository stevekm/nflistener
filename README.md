This repo is deprecated and the project has moved to: https://github.com/stevekm/nf-dashboard

# nflistener

Web server app to listen for HTTP POST messages output by Nextflow ([qbicsoftware](https://github.com/qbicsoftware/nextflow.git) `nfbroadcast` branch)

# Install

```
git clone https://github.com/stevekm/nflistener.git
cd nflistener
make install
```

(Re)initialize the PostgresSQL database for the app:

```
make setup-db
```

Populate the database with test data:

```
make listen
```

- You can run this repeatedly to generate data for several workflows

# Run

You can start the web app with the following command:

```
make server
```

The app will be viewable in your web browser at http://localhost:8080

# Software

- [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and macOS/Linux with `bash` required for Nextflow

- Node.js and npm (`brew install node`)

- PostgresSQL (`brew install postgres`)

Tested on macOS 10.10 - 10.12
