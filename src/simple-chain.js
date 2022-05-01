const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value !== null ? value : 'null');
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position)
      || !(position > 0 && position < this.chain.length)
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let tmpChain = this.chain;
    this.chain = [];
    return `( ${tmpChain.join(' )~~( ')} )`;
  }
};

module.exports = {
  chainMaker
};