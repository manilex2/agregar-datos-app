module.exports = class ChartProyeccion {
    constructor(
        id,
        coin,
        fecha,
        precio,
        proyLP,
        smartBandsLP,
        rentLP,
        proyCP,
        smartBandsCP,
        rentCP
        ) {
        this.id = id;
        this.coin = coin;
        this.fecha = fecha;
        this.precio = precio;
        this.proyLP = proyLP;
        this.smartBandsLP = smartBandsLP;
        this.rentLP = rentLP;
        this.proyCP = proyCP;
        this.smartBandsCP = smartBandsCP;
        this.rentCP = rentCP;
    }
    push(chartsProy) {
        chartsProy.push({
            id: this.id,
            coin: this.coin,
            fecha: this.fecha,
            precio: this.precio,
            proy_lp: this.proyLP,
            smartbands_lp: this.smartBandsLP,
            rent_lp: this.rentLP,
            proy_cp: this.proyCP,
            smartbands_cp: this.smartBandsCP,
            rent_cp: this.rentCP
        })
    }
};