/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const isString = (arg: any): arg is string => typeof arg === 'string'
export const isObject = (arg: any): arg is Record<string, unknown> =>
  !isNil(arg) && typeof arg === 'object'
export const isNil = (obj: any): obj is null | undefined =>
  isUndefined(obj) || obj === null
export const isUndefined = (obj: any): obj is undefined =>
  typeof obj === 'undefined'
