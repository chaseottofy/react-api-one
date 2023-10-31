import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FeedSkeleton = () => {
  return (
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
  );
};

export default FeedSkeleton;
