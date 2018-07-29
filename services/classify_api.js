import {fetch} from './fetch';
export const callWapDirection = () => {
  return fetch('wap/direction').then( res => res.data)
}