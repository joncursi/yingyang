/**
 * @flow
 * @prettier
 */

export type ContextFlowType = {
  asPath: string,
  err?: Object,
  jsonPageRes: Object,
  pathname: string,
  query: Object,
  req: {
    headers: Object,
    url: string,
  },
  res: Object,
};

export type IconFlowType = {
  color?: string,
  name?: string,
  size?: number,
  type?:
    | 'ENTYPO'
    | 'EVIL'
    | 'FEATHER'
    | 'FONT_AWESOME'
    | 'FONT_AWESOME_5'
    | 'FOUNDATION'
    | 'IONIC'
    | 'MATERIAL'
    | 'MATERIAL_COMMUNITY'
    | 'OCTICON'
    | 'SIMPLE_LINE'
    | 'ZOCIAL',
};

export type UrlFlowType = {
  asPath: string,
  back: Function,
  pathname: string,
  push: Function,
  pushTo: Function,
  query: Object,
  replace: Function,
  replaceTo: Function,
};
