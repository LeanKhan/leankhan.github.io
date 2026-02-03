---
layout: ../../layouts/BlogPost.astro
title: Website redesign Feb 2022
publishDate: 12 Feb 2022
name: Emmanuel Segun-Lean
description: Why and how I redesigned e.segunlean.com
---

I made the first version of this website on Jun 5th 2019. I handmade it with html & css and bootstrap (it just works). I liked it, it was simple and cool to me. I then added a blog cause writing blogposts is just something you do as a developer. The blog was made with Hexo, the NodeJs stati-site builder. I used a theme called Cactus after I saw it on one blog like this. The blog and main site had a similar color scheme but everything else was different, they were in different repos sef.

### Issues with the blog
Working with Hexo was very simple but I didn't feel confident enough to edit things like background color or to add widgets. I didn't even have plans to add new functionality, it felt to restrictive for me. I like pre-built solutions but I also like freedom mehn.
And I think that mental blocker of not feeling free to customize things hindered my writing :)

### Why the redesign
* One of my New Year Resolutions/Goals is to write an essay a month. This will be the first post this year :-)

* If I am to be writing more, I need a place that's more customizable. I want my main site and blog to look the same really.

* I came across this article on how to have a good developer portfolio and I decided to redesign mine.

### Old look
![old site](/assets/images/old-leankhan-site-11-02-2022.jpeg)

Is it really a redesign? Most of the frontpage stays the same sha.

### Technologies
I decided to use a new technology to make the new site, so I chose Astro. It's a static-site builder  I've been seeing for sometime. Posts in Astro are written in Markdown and it uses files for routing. Then there are `.astro` files that can be used to render content too, they are powerful because you can use JavaScript in them, the syntax (I learned) is like Jsx. I'm this close to learning React lol

The Astro docs are easy to follow and they have a guide for many scenarios (like deploying your site on push to Github). I feel so powerful using it, though for now I copy-and-paste a lot because I broke up the layout. I used some parts of their [minimal template](https://github.com/withastro/astro/tree/main/examples/minimal) to get started but copied the styles and content from the old site. I'm still hosting it on Github pages.

Now the blog is in the same repo as the mainsite, yay :)

### Inspiration
I copied a lot from [Eina Onting's](https://www.eina.ca/) site. And I was inspired by my oga, [Paul Graham's](https://paulgraham.com/). Not the design tho, but the structure and content.

### Plans
* Comments
* A button below posts to view previous or next post
* More post types. For now all posts are blog posts, but I will add more types like Ideas, Talks etc.
* I'm still filling out my Projects page, so watch out for that
* Mehn, I have to have a CMS (Content Management System) so I can write posts without opening the code.