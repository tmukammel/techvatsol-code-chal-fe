# Technovative Solutions coding challenge frontend
Technovative Solutions code challenge frontend project.

# Setup for development (MacOS)

## Prerequisites

[techvatsol-code-chal-be](https://github.com/tmukammel/techvatsol-code-chal-be.git) should be running in your local pc, before running this project.

## Setup

### (a) Clone the repo

```
git clone https://github.com/tmukammel/techvatsol-code-chal-fe.git
```

### (b) Setup env files

```bash
# After moving into the project folder
# Setp 01
npm run dotenv

# Step 02
#   You have to set the url to the backgend API server in
#   .env
#   e.g: `REACT_APP_API_BASE_URL=http://127.0.0.1:3007`
```

### (c) Install dependencies

```bash
npm install

# or
yarn
```


### (e) Run

```bash
# Watch mode
npm start

# Dev mode
npm build
```
