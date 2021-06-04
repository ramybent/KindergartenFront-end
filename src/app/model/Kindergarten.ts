import {Child} from './child';
import {Bill} from './bill';

export interface Kindergarten{
  id: number;
  name: string,
  email: string,
  description: string,
  address: string,
  nombreemploye: number,
  price_month: number,
  discount: number,
  image: string,
  event: any,
  child: Child[],
  bill: Bill
}
