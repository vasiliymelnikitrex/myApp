export const getFishListSelector = state => state.fishes.fishes;
export const isFishListFetchingSelector = state => state.fishes.isFetching;

export const getFishDescriptionSelector = state => state.fishDescription;
export const isFishDescriptionFetchingSelector = state => state.fishDescription.isFetching;

export const getNewsSelector = state => state.news.news;
export const isNewsFetchingSelector = state => state.news.isFetching;
