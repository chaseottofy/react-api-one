import arrowSVG from '../../images/arrow.svg';
import { PostData, TempFeedInterface } from '../../models/interfaces';
import trimUrl from '../../utils/trimUrl';

const PostListItem = (props: PostData) => {
  const {
    title, index, link, score, user, time, comments, setFeed, feed,
  } = props;

  const trimmedLink: string = trimUrl(link);

  return (
    <>
      <div className='post-side'>
        <span className='post-index'>{index}</span>
        <button className='post-vote' title='upvote' type='button'>
          <img src={arrowSVG} alt='' />
        </button>
      </div>

      <div className='post-content'>
        <div className='post-top'>
          <a
            href={link}
            className='post-title'
            title={trimmedLink}
            target='_blank'
            rel='noreferrer'
          >
            {`${title} `}
            <small>{`(${trimmedLink})`}</small>
          </a>
        </div>

        <div className='post-sub'>
          <span className='post-sub--score'>
            {score}
            {' '}
            points by
            {' '}
          </span>
          <a href='#root' className='post-sub--userlink'>
            {user}
&nbsp;
          </a>
          <a href='#root' className='post-sub--time'>
            {time}
            {' '}
            ago
          </a>
          <span className='post-divide'>|</span>
          <button
            type='button'
            className='post-sub--hidepost'
            onClick={() => {
              setFeed(feed.filter((item: TempFeedInterface) => item !== feed[index - 1]));
            }}
          >
            hide
          </button>
          <span className='post-divide'>|</span>
          <a href='#root' className='post-sub--comments'>
            {comments}
            {' '}
            comments
          </a>
        </div>
      </div>
    </>
  );
};

export default PostListItem;
