import { LoremIpsum } from 'lorem-ipsum';
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

function loremGenerator(paragrafos: number): string {
    return lorem.generateParagraphs(paragrafos);
}

export default loremGenerator;
