export class Grid {
    cols: number;
    rows: number;
    arreglo;
    arreglo3x3:number[][];
    constructor(cols, rows) {
       this.cols=cols;
       this.rows=rows;
       this.arreglo=new Array(this.cols);
       this.arreglo3x3=[
        [0,0,0,],
        [0,0,0,],
        [0,0,0,]
       ]
    }
    getCols(){
        return this.cols;
    }
    getRows(){
        return this.rows;
    }
    agregarAgrid(elem){
        if (this.comprobarExistencia(elem)) {
            console.log("el elemento existe en el arreglo");
            return true;
        }else{
            console.log("el elemento no existe en el arreglo");
            return false;
        }
    }
    generarModelo(){
        if(this.lanzaMoneda()){
            return "modeloA";
        }else{
            return "modeloB";
        }
    }
     lanzaMoneda() {
        return (Math.floor(Math.random() * 2) == 0);
    }
    comprobarExistencia(elementoAcomprobar){
        let existencia=false;
        this.arreglo3x3.forEach(arreglo => {
            arreglo.forEach(elemento => {
               if (elemento==elementoAcomprobar) {
                existencia= true;
               }
           });
        });
        return existencia;
    }
    get3x3(){
        
        return this.arreglo3x3;
    }
    random_rgba() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    estiloAleatorio(){
        let color=this.random_rgba();
        let styles = {
            'color': 'black',
            'background-color': this.random_rgba(),
            'font-weight':  'bold' ,
            'font-size': '15px'
          };
          return styles;
    }

}
