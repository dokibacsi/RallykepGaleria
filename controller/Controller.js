import Model from "../model/Model.js";
import KisKepMegjelenito from "../View/kisKepMegjelenito.js";
import NagyKepMegjelenito from "../View/NagyKepMegjelenito.js";

class Controller{
    constructor(){
        const KEP = new Model();
        const KEPLISTA = KEP.getList()
        const KISKEP = new KisKepMegjelenito($("#kiskep"), KEPLISTA);
        const NAGYKEP = new NagyKepMegjelenito($("#nagykep"), KEP.getAktKep())


        $(window).on("kicsiNagyraCsere", (event) =>{
            const eleresiUt = event.detail.eleresiUt;
            NAGYKEP.nagyKepCsere(eleresiUt);
        })

        /* 
        $(window).on("VisszaMegy", (event) => {
            
        }) 
        
        */
    }
}

export default Controller