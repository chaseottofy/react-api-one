import { useEffect, useState } from 'react';
// This is a workaround, there is an issue with rss-parser and
// importing it directly was the only workaround I could find
// eslint-disable-next-line import/extensions
import Parser from 'rss-parser/dist/rss-parser.min.js';

import fakefeed from '../../data/fakefeed.json';
import { TempFeedInterface } from '../../models/interfaces';
import PostList from '../PostList/PostList';
import PostSkeleton from '../PostList/PostSkeleton';

import './Feed.css';

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
      } catch (requestError) {
        // eslint-disable-next-line no-console
        console.warn(requestError);
        setFakeFeed(fakefeed.items);
        setLoading(false);
        setError(true);
      }
    }

    getFeed();
  }, []);

  return (
    <main className='main'>
      <ul className='post-list'>
        {
          loading ? <PostSkeleton feedLength={30} />
            : (error ? <PostList feed={fakeFeed} setFeed={setFeed} />
              : <PostList feed={feed} setFeed={setFeed} />)
        }
      </ul>
    </main>
  );
};

export default Main;
