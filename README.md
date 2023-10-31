# rss-parser-demo

Simple clone of the front page of hacker news using RSS as the data source, built with React, Typescript, and rss-parser.

Loads the top 30 stories, minimal functionality but the title links work.
Just a demo - will not be building this out further.

Most, if not all RSS feeds require CORS headers to be set. I'm unfamiliar with techniques to get around this, but I have experimented with proxies and was able to get it working with heroku's `cors-anywhere`. This is not a good solution, but I'm just demoing the functionality of rss parser. To set the proxy, first visit (https://cors-anywhere.herokuapp.com/corsdemo) and click the button to request access, I believe it's a 24 hour access token. Then prepend whatever RSS url you're using with `https://cors-anywhere.herokuapp.com/`, so for example, the hacker news RSS feed is `https://cors-anywhere.herokuapp.com/https://news.ycombinator.com/rss`. From what I've read, this particular proxy is fairly inconsistent, but I've had no issues with it for demoing purposes. I've provided also provided a fallback feed to at least show what the feed looks like if the request fails.

![screen](screenshots/preview.png)
