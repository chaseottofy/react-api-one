import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

const PostSkeleton = ({ feedLength }: { feedLength: number; }) => {
  return (
    Array.from({ length: feedLength }).fill(0).map((_, index) => {
      return (
        // Only needs to render once and is destroyed after the feed loads
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className='post'>
          <Skeleton
            height={28}
            width='100vw'
            count={1}
            baseColor='#202324'
            highlightColor='#303436'
          />
        </li>
      );
    })
  );
};

export default PostSkeleton;
