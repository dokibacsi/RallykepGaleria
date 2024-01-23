class NagyKepMegjelenito {
  #szuloElem;
  #aktKep;

  constructor(szuloElem, aktKep) {
    this.#szuloElem = szuloElem;
    this.#aktKep = aktKep;
    this.balGomb = $("#left");
    this.jobbGomb = $("#right");
    this.#nagykepOsszeallit();
  }

  #nagykepOsszeallit() {
    let txt = "<div id='nagyPanel'>";
    txt += "<button id='left'> ◄ </button>";
    txt += `<img src=${this.#aktKep}>`;
    txt += "<button id='right'> ► </button>";
    txt += "</div>";

    this.#szuloElem.append(txt);
  }
}

export default NagyKepMegjelenito;
