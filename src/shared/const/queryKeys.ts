export const imagesQuery = {
  all: ['images'],
  lists: () => [...imagesQuery.all, 'list'] as const,
  list: () => [...imagesQuery.lists()] as const,
  detail: (id: string) => [...imagesQuery.all, 'detail', id] as const,
};
