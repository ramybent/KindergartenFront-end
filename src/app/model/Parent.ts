import {Child} from './child';
import {Bill} from './Bill';
export interface Parent{
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  password: string;
  role: string;
  dateInscription: string;
  email: string;
  phone: number;
  image: any;
  gender: string;
  birthday: string;
  event: any;
  bill: Bill;
  child: Child[];
}
