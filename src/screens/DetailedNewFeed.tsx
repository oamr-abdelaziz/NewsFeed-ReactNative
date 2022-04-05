import React from 'react';
import NewsFeedItemDetails from '../components/NewsFeedItemDetails';

type Props = {
  route: {
    params: {
      newsItem: object;
    };
  };
};

const DetailedNewFeed: React.FC<Props> = ({route}) => {
  return (
    <>
      <NewsFeedItemDetails newsItem={route.params.newsItem} />
    </>
  );
};

export default DetailedNewFeed;
