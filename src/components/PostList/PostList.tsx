import { PostListProps, TempFeedInterface } from '../../models/interfaces';

import PostListItem from './PostListItem';

const PostList = ({ feed, setFeed }: PostListProps) => {
  return (
    <ul className='post-list'>
      {feed.map((post: TempFeedInterface, index: number) => {
        return (
          <li key={post.isoDate} className='post'>
            <PostListItem
              title={post.title}
              index={index + 1}
              link={post.link}
              score={Math.floor(Math.random() * 100)}
              user={`user${index}`}
              time='5 hours'
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
