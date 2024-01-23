class NagyKepMegjelenito {
  #szuloElem;
  #aktKep;

  constructor(szuloElem, aktKep) {
    this.#szuloElem = szuloElem;
    this.#aktKep = aktKep;
    this.balGomb = $("#left");
    this.jobbGomb = $("#right");
    this.#nagykepOsszeallit();
    this.nagyKepHelye = $("#NKH");
  
    $(this.balGomb).on("click", ()=>{
      this.#esemenyKezelo("VisszaMegy");
    })
    $(this.jobbGomb).on("click", ()=>{
      this.#esemenyKezelo("TovabbMegy");
    })

  }

  nagyKepCsere(kep){
    this.nagyKepHelye.attr('src', kep)
  }

  #nagykepOsszeallit() {
    let txt = "<div id='nagyPanel'>";
    txt += "<button id='left'> ◄ </button>";
    txt += `<img id="NKH" src=${this.#aktKep}>`;
    txt += "<button id='right'> ► </button>";
    txt += "</div>";

    this.#szuloElem.append(txt);

  }

  #esemenyKezelo(esemenyNev){
      const esemeny = new CustomEvent(esemenyNev);
      window.dispatchEvent(esemeny);
  }
}

export default NagyKepMegjelenito;
