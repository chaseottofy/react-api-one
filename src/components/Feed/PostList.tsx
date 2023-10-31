import PostItemContent from './PostItemContent';
import { TempFeedInterface } from '../../models/interfaces';

interface PostListProps {
  feed: TempFeedInterface[];
  setFeed: React.Dispatch<React.SetStateAction<TempFeedInterface[]>>;
}

const PostList = ({ feed, setFeed }: PostListProps) => {
  return (
    <ul className="post-list">
      {feed.map((post: any, index: number) => {
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
              feed={feed}
              setFeed={setFeed}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;