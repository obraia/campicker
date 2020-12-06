import { IUser } from '../interfaces';
import api from './api';

export const authenticate = async (data: IUser) => {
    const res = await api.post('/auth', data);
    console.log(res);
    return res.status == 200;
}

export default { authenticate };