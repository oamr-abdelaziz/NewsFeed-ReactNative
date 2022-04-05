import { ItemProps } from "../components/NewsFeed/MultipleNews";

declare global {
    namespace ReactNavigation {
      interface RootParamList {
        NewsFeed: undefined;
        DetailedNewFeed:{ newsItem: ItemProps['item'] };
        Settings: undefined;

      }
    }
  }


export {}