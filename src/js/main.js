class Tag {
  constructor(elemet, options = {}) {
    this.elemet = elemet;
    this.options = options;

    this.initialize()
  }

  initialize() {
    console.log('aa')
  }
}

export default Tag;
