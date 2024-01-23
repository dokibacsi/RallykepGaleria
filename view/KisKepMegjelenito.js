class KisKepMegjelenito {
  constructor(szuloElem, list) {
    this.szuloElem = szuloElem;
    this.list = list;
    this.#kepKilistaz();

    this.kisKep = $(".kiskepek");
    $(this.kisKep).on("click", () => {
      this.eleresiUt = $(event.currentTarget).children("img").attr("src");
      console.log(this.eleresiUt);
      this.#esemenyKezelo("kicsiNagyraCsere")
    });
  }

  #kepKilistaz() {
    let text = "";
    this.list.forEach((elem, index) => {
      text += "<div class='kiskepek'>";
      text += `<img src=${this.list[index]}>`;
      text += "</div>";
    });
    this.szuloElem.append(text);
  }

  #esemenyKezelo(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: { eleresiUt: this.eleresiUt } });
    window.dispatchEvent(esemeny);
  }
}

export default KisKepMegjelenito;
