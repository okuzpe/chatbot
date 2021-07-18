import { convertWeigth } from './data-set';
import {  network, train ,loadTrain} from './train';

// train();

loadTrain();


const text ='como te llamas'
const textFormmat=convertWeigth(text,true)
// const response =network.run(textFormmat);
const response =network.run(textFormmat,);

// console.log(convertWeigth(text,true));
// response.find(e=>e)

console.log(response);

