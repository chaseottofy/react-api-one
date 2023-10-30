import { useState, useEffect } from 'react';
import './Feed.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Parser from 'rss-parser/dist/rss-parser.min.js';
import PostItemContent from './PostItemContent';
import { TempFeedInterface } from '../../models/interfaces';

const Main = () => {
  const [feed, setFeed] = useState(null as unknown as TempFeedInterface[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getFeed() {
      try {
        const parser = new Parser();
        const data = await parser.parseURL('https://cors-anywhere.herokuapp.com/https://news.ycombinator.com/rss');
        setFeed(data.items);
        setLoading(false);
      } catch (error) {
        console.warn(error);
        setError(true);
        setLoading(false);
      }
    }
    getFeed();
  }, []);

  if (loading) {
    return (
      <main className="main">
        <ul className="post-list">
          {
            Array(30).fill(0).map((_, index) => {
              return (
                <li key={index} className='post'>
                  <Skeleton
                    height={28}
                    width={'100vw'}
                    count={1}
                    baseColor='#202324'
                    highlightColor='#303436'
                  />
                </li>
              );
            })
          }
        </ul>
      </main>
    );
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <main className="main">
      <ul className="post-list">
        {
          feed && feed.map((post: any, index: number) => {
            return (
              <li key={index} className='post'>
                <PostItemContent
                  title={post.title}
                  index={index + 1}
                  link={post.link}
                  score={Math.floor(Math.random() * 100)}
                  user={'user' + index}
                  time={'5 hours'}
                  comments={Math.floor(Math.random() * 5)}
                  setFeed={setFeed}
                  feed={feed}
                />
              </li>
            );
          })
        }
      </ul>
    </main>
  );
};

export default Main;
