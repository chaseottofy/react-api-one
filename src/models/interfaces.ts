export interface TempFeedInterface {
  title: string;
  link: string;
  pubDate: string;
  comments: string;
  content: string;
  contentSnippet: string;
  isoDate: string;
}

export interface PostData {
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

export interface PostListProps {
  feed: TempFeedInterface[];
  setFeed: React.Dispatch<React.SetStateAction<TempFeedInterface[]>>;
}
