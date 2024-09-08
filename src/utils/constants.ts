import type { LinkItemType } from "./types";

// units
export enum Units {
  Metric = 'metric',
  Imperial = 'imperial',
}

export enum Colors {
  MainBlue = '#1D61A1'
}


export const links: LinkItemType[] = [
  {
    text: 'Dashboard',
    link: '/dashboard'
  },
  {
    text: 'Discover',
    link: '/discover'
  },
  {
    text: 'Library',
    link: '/library'
  },
  {
    text: 'Analytic',
    link: '/analytic'
  },
  {
    text: 'Settings',
    link: '/settings'
  }
]