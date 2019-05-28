class Tag {
  modalType = {};

  constructor(elemet, options = {}) {
    this.elemet = elemet;
    this.options = options;

    this.initialize()
  }

  initialize() {
    this.add();
    let tag = document.getElementsByClassName('tag');
    let tagArr = Array.prototype.slice.call(tag);
    tagArr.forEach((item, index) => {
      if (window.addEventListener){
        item.addEventListener("click", this.handler,false);
      }
      else if (window.attachEvent){
        item.attachEvent("onclick", this.handler);
      }
    })
  };

  /* 
  增加标签
   */
  add(event) {
    if (event) {
      let textBtn = event.id;
      let text = document.querySelector(`input.${textBtn}`);
      let value = text.value;
      this.teml(event,value);
    }
  };

  /* 
  增加标签的模板
   */
  teml(event, value) {
    let textBtn = event.id;
    let content = document.querySelector(`.tag-content.${textBtn}`);
    let type = content.dataset.tag;
    let teml;
    switch(type) {
      case 'init' : teml = this.modalType.init(value); break;
    }
    let tempArr = [];
    tempArr.push(teml);
    tempArr.forEach(item => {
      content.innerHTML += item;
    });
  }

 modalType = {
    init(label) {
      return `<span class="tag">${label}<span>`;
    }
  }

  handler = (event) => {
    let e = event || window.event;
    let target = e.target || e.srcElement;
    if (!target.matches('[data-tag]')) {
      return
    }

    switch(target.dataset.tag) {
      case 'addBtn': this.add(target);
    }
  }

  // 失焦
  blur(el) {
    let element = document.querySelector(`input.${el.id}`);
    element.onblur = () => {
      element.value = '';
    }
  }
}

export default Tag;
