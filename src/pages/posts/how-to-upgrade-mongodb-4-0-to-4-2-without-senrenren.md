---
layout: ../../layouts/BlogPost.astro
title: How to upgrade Mongodb 4.0 to 4.2 without senrenren
publishDate: 21 August 2020 # 2020-08-21 16:05:52
name: Emmanuel Segun-Lean
description: I needed to update my MongdoDB from 4.0 to 4.2
---



I needed to update my MongdoDB from 4.0 to 4.2 I was not sure how to go about it and thought I lost my data at a point and was soo sad. So I am writing this so you don't have to be sad, friend ( ͡ᵔ ͜ʖ ͡ᵔ ).

1. Download the new Mongo version from their website. I use windows so I got the msi installer. Don't install it yet if you want.
2. Create a backup of your current database:
   Open cmd and go to where your current Mongo is then run mongodump. This will create a backup of all your databases into a folder called 'dump'. Make a copy of that folder somewhere else...

3. Uninstall your current MongoDB; delete the '4.0' folder. No fear you have a backup
4. Now install that new MongoDB version you got. And make sure to update your system path variables if necessary
5. Restore the backup you created earlier:
   Run mongorestore in the bin folder of your new installation. Open mongo shell and run _show dbs_ to confirm the databases are back

6. Start the Mongo service if it's not running already

That's it. No senrenren

---

sources:

[Stackoverflow question](https://stackoverflow.com/questions/57710084/can-not-access-mongodb-data-after-upgrade-from-4-0-to-4-2)

[Create backups with mongodump and mongorestore](https://www.tutorialspoint.com/mongodb/mongodb_create_backup.)
