module.exports = class OportCripto {
    constructor(
        id,
        cuentaActual,
        cuentaHistorico,
        cuentaUnificada,
        tipo,
        fechaPublicacion,
        symbol,
        nombre,
        precioEntrada1,
        precioEntrada2,
        precioEntrada3,
        precioEntrada4,
        precioMeta1,
        precioMeta2,
        stopLoss,
        tradeHold,
        nivelRiesgo,
        exchange,
        logo,
        idPrecio,
        dataPrice,
        precioActual,
        validoHasta,
        rentabilidadEstimada,
        recomendar,
        chart,
        rentabilidadGenerada,
        rentabilidadNumerica,
        recomendacionCaduca,
        mostrarHasta,
        riesgoEstrella,
        chartSeguimiento,
        widgetSymbol,
        analisisGrafico
        ) {
        this.id = id;
        this.cuentaActual = cuentaActual;
        this.cuentaHistorico = cuentaHistorico;
        this.cuentaUnificada = cuentaUnificada;
        this.tipo = tipo;
        this.fechaPublicacion = fechaPublicacion;
        this.symbol = symbol;
        this.nombre = nombre;
        this.precioEntrada1 = precioEntrada1;
        this.precioEntrada2 = precioEntrada2;
        this.precioEntrada3 = precioEntrada3;
        this.precioEntrada4 = precioEntrada4;
        this.precioMeta1 = precioMeta1;
        this.precioMeta2 = precioMeta2;
        this.stopLoss = stopLoss;
        this.tradeHold = tradeHold;
        this.nivelRiesgo = nivelRiesgo;
        this.exchange = exchange;
        this.logo = logo;
        this.idPrecio = idPrecio;
        this.dataPrice = dataPrice;
        this.precioActual = precioActual;
        this.validoHasta = validoHasta;
        this.rentabilidadEstimada = rentabilidadEstimada;
        this.recomendar = recomendar;
        this.chart = chart;
        this.rentabilidadGenerada = rentabilidadGenerada;
        this.rentabilidadNumerica = rentabilidadNumerica;
        this.recomendacionCaduca = recomendacionCaduca;
        this.mostrarHasta = mostrarHasta;
        this.riesgoEstrella = riesgoEstrella;
        this.chartSeguimiento = chartSeguimiento;
        this.widgetSymbol = widgetSymbol;
        this.analisisGrafico = analisisGrafico;

    }
    push(oportsCripto) {
        oportsCripto.push({
            id: this.id,
            cuenta_actual: this.cuentaActual,
            cuenta_historico: this.cuentaHistorico,
            cuenta_unificada: this.cuentaUnificada,
            tipo: this.tipo,
            fecha_publicacion: this.fechaPublicacion,
            symbol: this.symbol,
            nombre: this.nombre,
            precio_entrada_1: this.precioEntrada1,
            precio_entrada_2: this.precioEntrada2,
            precio_entrada_3: this.precioEntrada3,
            precio_entrada_4: this.precioEntrada4,
            precio_meta_1: this.precioMeta1,
            precio_meta_2: this.precioMeta2,
            stop_loss: this.stopLoss,
            trade_hold: this.tradeHold,
            nivel_riesgo: this.nivelRiesgo,
            exchange: this.exchange,
            logo: this.logo,
            id_precio: this.idPrecio,
            data_price: this.dataPrice,
            precio_actual: this.precioActual,
            valido_hasta: this.validoHasta,
            rentabilidad_estimada: this.rentabilidadEstimada,
            recomendar: this.recomendar,
            chart: this.chart,
            rentabilidad_generada: this.rentabilidadGenerada,
            rentabilidad_numerica: this.rentabilidadNumerica,
            recomendacion_caduca: this.recomendacionCaduca,
            mostrar_hasta: this.mostrarHasta,
            riesgo_estrella: this.riesgoEstrella,
            chart_seguimiento: this.chartSeguimiento,
            widget_symbol: this.widgetSymbol,
            analisis_grafico: this.analisisGrafico
        })
    }
};