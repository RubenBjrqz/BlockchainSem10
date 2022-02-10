import PKG from './package.json';
import Block from './src/blockchain/block'

const { name, version, description, author } = PKG;
const {genesis} = Block;

const block1 = Block.mine(genesis, 'transac1');
console.log(block1.toString());

const block2 = Block.mine(block1, 'transac2');
console.log(block2.toString());