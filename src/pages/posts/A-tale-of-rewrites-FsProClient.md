---
layout: ../../layouts/BlogPost.astro
title: "A Tale of Rewrites: FsProClient"
publishDate: 21 August 2019 # 2019-08-21T21:28:28.056Z 
name: Emmanuel Segun-Lean
value: 128
description: How I've been rewriting FsPro
---
#### _What is Fs-Pro sef?_

FS-Pro stands for Football Simulator Pro. Pro doesn't have a particular meaning yet. At first it was 'professional' but that sounded too serious. And it implied that there was an 'unprofessional' version of the game??? So No.

<!-- TODO:
    - Add image of initial site
    - Add link to football-simulator repo ? Maybe not.
 -->

FsPro is a football manager simulation game kini. I and my brother have this football game we play with our created teams and players, but it's only a simulation. We use dice to produce results and record them with pen and paper, with league tables and all. One Friday February 22nd, 2:17pm I decided to automate it. What started out as a simple js file to randomize match results has turned into this _really-awesome-coding-exprience!_. For those few weeks when it was called 'Football-Simulator' I never wrote so much javascript in my life (I haven't been writing js for that long anyways: <br a year), I stretched my knowledge of CSS, HTML and Javascript, I loved EVERYTHING. It was rough and gritty but it worked.

<small><u>Early days when everything was on one page</u></small>
![Football Simulator first working version](/assets/images/football-simulator-1.png "Football Simulator early days")

I created an Express server to serve the `index.html` page with one javascript file and connected it to a MongoDB database, we played our three leagues and everything was fine.

<small><u>Early fixtures page</u></small>
![Old fixtures page](/assets/images/fixtures-old.png "Old fixtures page")

<small><u>Newer fixtures page</u></small>
![Newer fixtures page](/assets/images/fixtures-newer.png "New fixtures page")

<small><u>The glorious match page (so proud of this ᕦ( ᴼ ڡ ᴼ )ᕤ)</u></small>
![Match center](/assets/images/match-view.png "Match center")

<!-- ![football simulator first](/assets/images/football-simulator-1.png "Football Simulator early days") -->
Until we wanted to add more functionality.

We wanted to make it realer. This meant:

- Increasing the number of players from 7 to 11
- Adding functionality to buy, sell and trade players i.e create a Transfer Hub
- Add web sockets for real time communication between managers (us)

<!-- TODO:
    - Add image of file structure under
 -->

Each part of our app was a separate html file so it meant I would have to register sockets for each page? tough.
Then there was the Transfer Hub. Where you can buy and sell players. As I began working on it I noticed more and more parts of the app needed to be dynamic and I was repeating A LOT of things. I was stuck tbh. I started making the transfer hub April 20th. Didn't do anything till May 23rd. Then on May 25th, I couldn't continue.

<small><u>File structure of the Express app</u></small><br />
![Football Simulator file structure](/assets/images/file-structure-1.png)

<br />
<small><u>Transfer Hub right about when I got stuck =(</u></small>

![Transfer hub before I got stuck](/assets/images/transfer-hub-1.png)

<!-- TODO:
    - Add links to Vue website
 -->

#### I decided to rewrite it in [Vue](https://vuejs.org).

(╯°□°）╯︵ ┻━┻

Here it became 'FsPro'

> #### _So Vue innit?_

I chose Vue because I liked it. Using a framework meant I wouldn't have to repeat code and it's easier to make some things dynamic but I missed writing my _vanilla_ JavaScript.

Other pros were:

- Better routing
- Faster development
- Babel. Meaning I could run it on the old iPad I used for testing

My setup was Vue + [TypeScript](https://www.typescriptlang.org/) (because I wanted share code ,like classes and interfaces, with the server).

Things were going alright until I was adding more views. I didn't know how to structure my codebase in the form of 'modules' so I could separate concerns and all. That bothered me for a while. So...

#### I decided to rewrite it in [Angular](https://angular.io) _hohohoho_

<!-- TODO:
    - Add links to Angular website
 -->

┻━┻ ︵╰(°□°)╯︵ ┻━┻

I knowwww.

> #### _Beht why tho?_

The first framework I used was Angular. I started learning Vue after I got frustrated with Angular and its complexity. But for a few months now I have been working on a team whose main frontend stack is Angular. So obviously I had to use it then. During that time, I began to appreciate the framework even more. We were building a large scale enterprise app so I got to see Angular being used in that capacity. It was during that time that I decided to move it to Angular.

The pros of choosing Angular:

<!-- TODO:
    - Add emoji here
 -->

- It's modular architecture is perfect for FsPro. It's easier for me to understand
- Supports TypeScript out of the box. Awesome!
- It feels more 'solid' :3

While _searching_ for a UI framework for [FsProClient](https://github.com/LeanKhan/fs-pro-client) I 'discovered' this Angular Admin UI framework called [Nebular](https://akveo.github.io/nebular/) based on Bootstrap 4. A Godsend really, I was giving up on writing frontend code :#, but thank God. It's easy to use and flexible like Bootsrap Vue or something similar and has cool Angular components like [Angular Material](https://material.angular.io) (but not enough, Material is a whole 'nother beast)

So that's the setup now. Angular 8 + Nebular UI system. I made the repo public from the beginning because I need epp.

Find it [here](https://github.com/LeanKhan/fs-pro-client).

I am so proud of what FsPro is turning out to be, it has great potential. I don't even know what it really is yet.

From February 22nd when I made the first commit in Football Simulator to August 14th when I initialized FsProClient, I think we have tried.

Hopefully no more rewrites :)))

> #### _wawu, so if this is FsProClient what about the server?_

<small>I would write a post about it soon ─=≡Σ((( つ◕ل͜◕)つ</small>

<!-- TODO:
    - Beg Joshua to review it.
    - Rename the screenshots appropriately and add them where necessarry.
    - Add emojis where appropriate? nah.
 -->

Thank you Jesus! <3
