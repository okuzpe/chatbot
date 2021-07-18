import { recurrent,NeuralNetwork } from 'brain.js';
import fs from 'fs'
import { data } from './data';
import { dataSet } from './data-set';

// const configNetwrok = {
//     // activation: 'sigmoid', // activation function
//     hiddenLayers: [], 
//     // learningRate: 0.3,
//     iterations: 20000, 
//     errorThresh:  0.00005,
// }
const configNetwrok = {
    activation: 'sigmoid',
    hiddenLayers: [], 
    errorThresh: 0.005,  
    iterations: 20000,  
    learningRate: 0.3
}


// export const network = new recurrent.LSTM();
export const network = new NeuralNetwork();
//training the LSTM

export const loadTrain =async()=>{
    console.log('starting load Train');
    try {
        const jsonTrained = fs.readFileSync('./src/json/brainTrained.json',"utf8")
        network.fromJSON(JSON.parse(jsonTrained));
    } catch (error) {
        console.log('load Fail', error)
    }
    console.log('load Train')
}

export const train = async () => {
    console.log('starting Train');
    
    try {
        const dataConversion= await dataSet(data);
        console.log(dataConversion);
          network.train(dataConversion,configNetwrok);
        //  network.train(dataConversion,configNetwrok);
        const jsonTrained = JSON.stringify(network.toJSON());
        fs.writeFileSync('./src/json/brainTrained.json', jsonTrained)
    } catch (error) {
        console.log('trained Fail', error)
    }
    console.log('finished Train')
}
