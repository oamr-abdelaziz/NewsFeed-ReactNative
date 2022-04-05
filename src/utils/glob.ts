import { ItemProps } from "../components/MultipleNews";

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