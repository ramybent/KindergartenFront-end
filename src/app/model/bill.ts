import {Parent} from './Parent';
export interface Bill {
  id_bill: number;
  date_bill: string;
  discount: number;
  Nbrs_month: number;
  total_costs: number;
  tax: number;
  Payment: string;
  Parent: number;
  Kindergarten: any;
}
