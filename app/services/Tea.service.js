import { Tea } from '../utils/teaData';

export default class TeaService {
  constructor() {
  }

  getTea() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve(Tea), 500);
    })
  }
}
