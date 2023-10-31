import { useState, useEffect } from 'react';
import './Feed.css';
import { TempFeedInterface } from '../../models/interfaces';
import FeedSkeleton from './FeedSkeleton';
import fakefeed from '../../data/fakefeed.json';
import Parser from 'rss-parser/dist/rss-parser.min.js';
import PostList from './PostList';

const Main = () => {
  const [feed, setFeed] = useState(null as unknown as TempFeedInterface[]);
  const [fakeFeed, setFakeFeed] = useState(null as unknown as TempFeedInterface[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getFeed() {
      try {
        const parser = new Parser();
        const data = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://news.ycombinator.com/rss');
        setFeed(data.items);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.warn(error);
        setError(true);
        setLoading(false);
        setFakeFeed(fakefeed.items);
      }
    }

    getFeed();
    // return () => { getFeed(); };
  }, []);

  return (
    <main className="main">
      <ul className="post-list">
        {
          loading ? <FeedSkeleton />
          : error ? <PostList feed={fakeFeed} setFeed={setFeed} />
          : <PostList feed={feed} setFeed={setFeed} />
        }
      </ul>
    </main>
  );
};

export default Main;
