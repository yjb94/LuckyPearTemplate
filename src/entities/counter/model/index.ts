import { store, useStore } from 'shared/model';

export type CounterStore = {
  count: number;
  test?: string;
};

export const counterStore = store<CounterStore>({ count: 0 });
export const useCounterStore = () => useStore(counterStore);
