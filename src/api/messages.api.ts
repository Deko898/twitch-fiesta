// import axios from 'axios';
import { fetch } from '../common/utils';

export const fetchMessages = (): Promise<any> => fetch('https://jsonplaceholder.typicode.com/todos');
