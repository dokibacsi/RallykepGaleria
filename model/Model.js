import { RALLYAUTOK } from "./Rallyautok.js";

class Model {
  #list = [];
  #id;
  constructor() {
    this.#list = RALLYAUTOK;
    this.#id = 0;
    this.listaHossz = this.#list.length
  }

  getList() {
    return this.#list;
  }

  getAktKep() {
    return this.#list[this.#id];
  }

  jobbra(){
    this.#id++;
    if (this.#id >= this.listaHossz) {
        this.#id = 0
    }
  }

  balra(){
    this.#id--;
    if (this.#id < 0){
        this.#id = this.listaHossz - 1;
    }
  }

}

export default Model
