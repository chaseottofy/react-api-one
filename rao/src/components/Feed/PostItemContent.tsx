import arrowSVG from '../../images/arrow.svg';
import trimUrl from '../../utils/trimUrl';
import { TempFeedInterface } from '../../models/interfaces';

interface PostData {
  title: string,
  index: number,
  link: string,
  score: number,
  user: string,
  time: string,
  comments: number;
  setFeed: React.Dispatch<React.SetStateAction<TempFeedInterface[]>>;
  feed: TempFeedInterface[];
}

const PostItemContent = (props: PostData) => {
  const {
    title,
    index,
    link,
    score,
    user,
    time,
    comments,
    setFeed,
    feed,
  } = props;

  const trimmedLink: string = trimUrl(link);

  return (
    <>
      <div className="post-side">
        <span className="post-index">{index}</span>
        <button className="post-vote" title="upvote">
          <img src={arrowSVG} alt="" />
        </button>
      </div>

      <div className="post-content">
        <div className="post-top">
          <a
            href="#"
            className="post-title"
            title={trimmedLink}
          >
            {title + ' '}
            <small>{'(' + trimmedLink + ')'}</small>
          </a>
        </div>

        <div className="post-sub">
          <span className="post-sub--score">{score} points by </span>
          <a href="#" className='post-sub--userlink'>{user}&nbsp;</a>
          <a href="#" className='post-sub--time'>{time} ago</a>
          <span className='post-divide'>|</span>
          <button
            className="post-sub--hidepost"
            onClick={() => {
              setFeed(feed.filter((item: TempFeedInterface) => item !== feed[index - 1]));
            }}
          >hide</button>
          <span className='post-divide'>|</span>
          <a href="#" className="post-sub--comments">{comments} comments</a>
        </div>
      </div>
    </>
  );
};

export default PostItemContent;
