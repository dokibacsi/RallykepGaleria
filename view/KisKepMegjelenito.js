class KisKepMegjelenito {
  constructor(szuloElem, list) {
    this.szuloElem = szuloElem;
    this.list = list;
    this.#kepKilistaz();
  }

  #kepKilistaz() {
    let text = "";
    this.list.forEach((elem, index) => {
      text += "<div class='kiskepek'>"
      text += `<img src=${this.list[index]}>`
      text += "</div>";
    });
    this.szuloElem.append(text);
  }
}

export default KisKepMegjelenito;
