# PayPaladin

- [PayPaladin](#paypaladin)
  - [Overview](#overview)
    - [Core Features](#core-features)
    - [Goals](#goals)
    - [Team](#team)
    - [Permissions](#permissions)
  - [MVP](#mvp)
    - [Client (Front End)](#client-front-end)
      - [Wireframes](#wireframes)
      - [Component Hierarchy](#component-hierarchy)
      - [Component Breakdown](#component-breakdown)
      - [Component Estimates](#component-estimates)
    - [Server (Back End)](#server-back-end)
      - [ERD Model](#erd-model)
      - [Data Heirarchy](#data-heirarchy)
      - [Data Heirarchy](#data-heirarchy-1)
    - [Dependencies](#dependencies)
  - [Post-MVP](#post-mvp)
  - [Code Showcase](#code-showcase)
  - [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**PayPaladin** is a virtual currency tracking and transfer system designed for Dungeons & Dragons.  Player Characters, organized into Campaigns, can transfer fake D&D currency to one another._

### Core Features

_The overall design goal is a locked down platform where players see only the campaigns that they can access.  Players feel secure transferring in these quiet bubbles of privacy_

- _Many Player Characters per User_
- _Many Campaigns per User._
- _Instant coin transfers_
- _No death by an irate dragon._

### Goals

- _A clean, easy to understand interface_
- _Reliable coin transfers that prevent the user from making bad or impossible decisions._
- _A tool that my friends and I can use reliably._

### Team

Created, designed, and developed by [Scott Griffith](https://github.com/Scott-PG) for the General Assembly Software Engineering Immersive (May '20 Cohort) Unit 4 Project.

### Permissions

Digital assets stored locally and on [Imgur]().

<br>

## MVP

_**PayPaladin** MVP is a per user group of characters who can join various user's campaigns and transfer fake virtual money to one another.  All of this is controlled by a permissions set in a relationships table._

### Client (Front End)

#### Wireframes

![Desktop](./Images/PayPaladin%20Desktop.png)
- Desktop Campaigns

<br>

![Tablet](./Images/PayPaladin%20Tablet.png)
- Tablet Campaigns

<br>

![Mobile](./Images/PayPaladin%20Phone.png)
- Mobile Campaigns

<br>

![Character Screen](./Images/PayPaladin%20Character%20Screen.png)
- Desktop Character Screen

#### Component Hierarchy

``` File Structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Layout.jsx
      |__ Main.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ CampainsList.jsx
      |__ CampaignShow.jsx
      |__ CampaignDeleteWarning.jsx
      |__ CampaignCreate.jsx
      |__ CampaignEdit.jsx
      |__ About.jsx
      |__ CharactersList.jsx
      |__ CharacterDeleteWarning.jsx
      |__ CharacterShow.jsx
      |__ CharacterCreate.jsx
      |__ CharacterEdit.jsx
|__ services/
      |__ apiHelper.js

```

- React Component Structure
![React Component Map](./Images/React%20Component%20Map.png)


#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|       Component        |    Type    | state | props | Description                                                         |
| :--------------------: | :--------: | :---: | :---: | :------------------------------------------------------------------ |
|          App           | functional |   n   |   n   | _The App contains everything and wraps in neatly._                  |
|         Layout         |   class    |   y   |   y   | _The Layout contains the physical layout of everything._            |
|         Header         |   class    |   y   |   y   | _The header will contain the navigation and logo._                  |
|         Footer         | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._    |
|          Main          |   class    |   n   |   n   | _The Main component provides the Router logic to components._       |
|         Login          |   class    |   y   |   y   | _The Login component allows the user to login._                     |
|        Register        |   class    |   y   |   y   | _The Register component allows users to register._                  |
|     CampaignsList      |   class    |   y   |   y   | _The CampaignsList component displays all of the campaigns._        |
|      CampaignShow      |   class    |   y   |   y   | _The CampaignShow component displays a single campaign._            |
| CampaignDeleteWarning  | functional |   n   |   n   | _This component gives a popup warning within CampaignShow._         |
|     CampaignCreate     |   class    |   y   |   y   | _The CampaignCreate component allows users to create a campaign._   |
|      CampaignEdit      |   class    |   y   |   y   | _The CampaignEdit component allows users to edit a campaign._       |
|         About          |   class    |   n   |   n   | _The About component is a vanity page._                             |
|     CharactersList     |   class    |   y   |   y   | _The CharactersList component displays all of the characters._      |
|     CharacterShow      |   class    |   y   |   y   | _The CharacterShow component displays a single character._          |
| CharacterDeleteWarning | functional |   n   |   n   | _This component gives a popup warning within CharacterShow._        |
|    CharacterCreate     |   class    |   y   |   y   | _The CharacterCreate component allows users to create a character._ |
|     CharacterEdit      |   class    |   y   |   y   | _The CharacterEdit component allows users to edit a character._     |

#### Component Estimates

| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| Build Database       |    H     |     4 hrs      |       -       |     TBD     |
| Create CRUD Backend  |    H     |     8 hrs      |       -       |     TBD     |
| Create CRUD Frontend |    H     |     3 hrs      |       -       |     TBD     |
| Build React Frontend |    H     |     12 hrs     |       -       |     TBD     |
| Style React Frontend |    H     |     12 hrs     |       -       |     TBD     |
| Post-MVP Build-out   |    H     |     12 hrs     |       -       |     TBD     |
| TOTAL                |          |     51hrs      |       -       |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![ERD Model](./Images/Database%20Map.png)

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.

``` controller/db structure

database_db
|__ users/
|__ authentication/
|__ relationships(POST-MVP)/
|__ campaigns/
|__ player_characters/

```

#### Data Heirarchy

get user

create user

index campaign_list

show campaign

create campaign

put campaign

destroy campaign

index player_character_list

show player_character

create player_character

join_campaign player_character

leave_campaign player_character

put player_character

put player_character's coins (The main interface for all of this)

destroy player_character

<br>

### Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|   Library    | Description                    |
| :----------: | :----------------------------- |
|    React     | _Main front-end._              |
| React Router | _Handle routing within React._ |

<br> 

## Post-MVP

* I want to filter by friends.  I've included the table in my database as relationships.  I have a pretty good idea of how to do this and I really want this functionality so that you can only see your friends' campaigns and characters.

* Password Resets

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.