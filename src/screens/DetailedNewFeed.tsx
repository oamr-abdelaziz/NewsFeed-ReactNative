import React from 'react';
import { ItemProps } from '../components/NewsFeed/MultipleNews';
import NewsFeedItemDetails from '../components/NewsFeed/NewsFeedItemDetails';

type Props = {
  route: {
    params: {
      newsItem:  ItemProps['item'];
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
