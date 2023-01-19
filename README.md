# Scaloneta API  ⭐⭐⭐



![ScreenShot](https://raw.github.com/LeanMendez/futbol-players-API/main/public/scaloneta.jpg) 

## Start proyect
```bash
#you can use npm or pnpm package manager as you like, I highly recommend to use pnpm


    npm install

    npm run dev

    pnpm dev
```

*if you will use npm, delete pnpm-lock.yaml file and do npm install*

Also you can see it deployed [here](https://scaloneta-api.up.railway.app/)! 

## Swagger Documentation

You can access to swagger documentation [here](https://scaloneta-api.up.railway.app/api/v1/docs/)


## Avalaible Routes

|HTTP METHOD           |      GET           |
|----------------------|--------------------|
|api/v1/players        | gets all players   |
|api/v1/players/:id    | gets player by id  |




* Example of object: 

```json
{
  "count": 1,
  "data": {
    "id": "63c73d8e5e554f07e626e55e",
    "personal_info": {
      "full_name": "Paulo Exequiel Dybala",
      "nickname": "La Joya",
      "date_birth": "15 de noviembre de 1993",
      "nationality": "Argentinian",
      "ph_url": "https://scaloneta-api.up.railway.app/players/Dybala_Paulo.png"
    },
    "club_info": {
      "current_team": "A.S. Roma",
      "league": "Serie A",
      "club_position": "Forward",
      "club_number": "21"
    },
    "national_team": {
      "team": "Argentina",
      "nat_position": "Forward",
      "nat_number": "21"
    }
  }
}
```

These are the supported query string parameters on pagination:


|Parameters     | Description            |
|----------------|----------------|
|page        | The page of data to access. Defaults to 1. |
|limit    | The maximum amount of players to return. Defaults to 60 (max is also 60).|

## Simple usage:

```bash
# Get all players
curl "https://scaloneta-api.up.railway.app/api/v1/players"

# Get page 2 of data with a limit of 5 players per page
curl "https://scaloneta-api.up.railway.app/api/v1/players?page=2&limit=5"

```


## Here is a list of the avalaible resorces:


### Personal Information

**`_id`**: Player ID. <br>
**`full_name`**: Player's full name. <br>
**`nickname`**: Player's nickname.<br>
**`date_birth`**: Player's birthday (spanish large writting e.g. "15 de julio de 1996").<br>
**`nationality`**: Player's nationality.<br>
**`ph_url`**: Player's picture with current team's uniform.<br>

### Club Information

**`current_team`**: Name of player's current team.<br>
**`league`** : Name of the league who belong the player's current team.<br>
**`club_position`**: Player's position on his current team.<br>
**`club_number`**: Player's number/dorsal on his current team<br>

### National Team Information

**`team`**: Name of the National Team<br>
**`nat_position`** : layer's position on his National Team.<br>
**`nat_number`**: Player's number/dorsal on his National Team.<br>
