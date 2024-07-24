export const imagesQuery = {
  all: ['images'],
  lists: () => [...imagesQuery.all, 'list'] as const,
  // FIXME: change params
  list: (params: any) => [...imagesQuery.all, 'list', params] as const,
};
