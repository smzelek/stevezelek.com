import { instance } from 'ts-mockito';

export const resolvableInstance = <T extends Record<string, unknown>>(mock: T): T => new Proxy<T>(instance(mock), {
  get(target, name: PropertyKey) {
    if (['Symbol(Symbol.toPrimitive)', 'then', 'catch'].includes(name.toString())) {
      return undefined;
    }

    return (target as any)[name];
  },
});