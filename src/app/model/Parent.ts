import {Child} from './child';
import {Bill} from './Bill';
export interface Parent{
  id: number;
  password: string;
  role: string;
  dateInscription: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: number;
  image: any;
  gender: string;
  birthday: string;
  event: any;
  bill: Bill;
  child: Child;
}
