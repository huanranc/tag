class Tag {
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

  add(event) {
    if (event) {
      let textBtn = event.id;
      let text = document.querySelector(`input.${textBtn}`);
      let value = text.value;
      this.teml(event,value);
    }
  };

  teml(event, value) {
    let textBtn = event.id;
    let content = document.querySelector(`.tag-content.${textBtn}`);
    console.log(1,value, content.dataset.tag);
    this.modal(content.dataset.tag);
  }

  modal(type) {
    switch(type) {
      case 'init': `<span class="tag" style="margin: 8px;"><span>`;
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
}

export default Tag;
