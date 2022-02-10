import Block from './block';

describe('Block', () => {
    let timestamp;
    let previousBlock;
    let data; 
    let hash;

    beforeEach(() => {
        timestamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = 'transaction0';
        hash = 'hash0'; 
    });

    it('Crear instancia con parametros', () => {
        const block = new Block(timestamp, previousBlock.hash, hash, data);

        expect(block.timestamp).toEqual(timestamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);

    });

    it('Usando static mine', () => {
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);
    });

    it('Usando static hash', () => {
        hash = Block.hash(timestamp, previousBlock.hash, data);
        const hasOutput = "14f7e1a169d1124cfe9c3fc458ea21725b2e71e21a81df22fca5d3f5dc2b85af";
        
        expect(hash).toEqual(hasOutput);
    });

    it('Usando toString', () => {
        const block = Block.mine(previousBlock, data);

        expect(typeof block.toString()).toEqual('string');
    });
});