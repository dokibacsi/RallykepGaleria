import Model from "../model/Model.js";
import KisKepMegjelenito from "../View/kisKepMegjelenito.js";
import NagyKepMegjelenito from "../View/NagyKepMegjelenito.js";

class Controller{
    constructor(){
        const KEP = new Model();
        const KEPLISTA = KEP.getList()
        new KisKepMegjelenito($("#kiskep"), KEPLISTA);
        new NagyKepMegjelenito($("#nagykep"), KEP.getAktKep())
    }
}

export default Controller