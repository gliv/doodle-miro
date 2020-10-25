# doodle-miro - Find a time to meet

![Alt text](images/findatimetomeet.png?raw=true "Find a time to meet")

## Intro

This is a sample app biult on Miro web SDK. It shows how to create and position on the board multiple widgets of different types and render create custom interfaces in the library. It creates a simple 
grid to vote on availability similar to Doodle.com.


## Preparation

###### Step 1. Clone the repo and install the dependencies

```bash
git clone <this repo>
cd doodle-miro
```

###### Step 2. Start a server locally using `serve`

```bash
npx serve -p 8080
```

###### Step 3. Expose a local web server to the internet

```bash
npx ngrok http 8080
```

###### Step 4. Create App in Miro

- This [guide](https://developers.miro.com/docs/getting-started) shows you how to do it.

- Install the application


## Todo

[ ] make interactive (currently need to use colors to indicate availability - would be nice to just click)

[ ] actually also create a Doodle poll via API

[ ] get user information from miro to populate participants in Doodle API (can we get the email?)

[ ] connect calendar and send out invitations to a meeting (add a button below each time column to book it)
