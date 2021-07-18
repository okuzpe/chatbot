import { PorterStemmerEs, CaseTokenizer } from 'natural';

const tokenizer = new CaseTokenizer();

export const dataSet = async (data: Array<any>) => {
    const conversion = data.map(text => {
        const result = {
            input: convertWeigth(text.input, true),
            output: { [text.output]: 1}
        }
        return result
    })

    return conversion;
}

export const convertWeigth = (text: string, activateStem: boolean) => {
    const textLowrCase = text.toLocaleLowerCase();
    const tokenized = tokenizer.tokenize(textLowrCase);
    const stemed = activateStem ? tokenized.map(t => PorterStemmerEs.stem(t)) : tokenized;

    const result = stemed.reduce((acc: any, next: string) => {
        acc[next] = 1;
        return acc;
    }, {})

    return result;
}