module.exports = class IdoIco {
    constructor(
        id,
        fecha,
        nombre,
        symbol,
        resumen,
        banner,
        icono,
        linkWhitePaper,
        proyectoRealizable,
        seguridadInformatica,
        whitepaperIntegro,
        calificacionInnovacion,
        calificacionTecnologia,
        calificacionProgramacion,
        calificacionPlanFuturo,
        calificacionEquipo,
        calificacionTotal,
        exchangeDisponible,
        precioVenta,
        idPrecio,
        dataPrice,
        precioActual,
        rentabilidadGenerada,
        bannerVenta,
        fechaMaximaKYC,
        inicioStaking,
        finStaking,
        fechaVenta,
        linkKYC,
        compraMonedaBase,
        creacionCuentaExchange,
        registroIDO,
        comentarioAdicional
        ) {
        this.id = id;
        this.fecha = fecha;
        this.nombre = nombre
        this.symbol = symbol;
        this.resumen = resumen;
        this.banner = banner;
        this.icono = icono;
        this.linkWhitePaper = linkWhitePaper;
        this.proyectoRealizable = proyectoRealizable;
        this.seguridadInformatica = seguridadInformatica;
        this.whitepaperIntegro = whitepaperIntegro;
        this.calificacionInnovacion = calificacionInnovacion;
        this.calificacionTecnologia = calificacionTecnologia;
        this.calificacionProgramacion = calificacionProgramacion;
        this.calificacionPlanFuturo = calificacionPlanFuturo;
        this.calificacionEquipo = calificacionEquipo;
        this.calificacionTotal = calificacionTotal;
        this.exchangeDisponible = exchangeDisponible;
        this.precioVenta = precioVenta;
        this.idPrecio = idPrecio;
        this.dataPrice = dataPrice;
        this.precioActual = precioActual;
        this.rentabilidadGenerada = rentabilidadGenerada;
        this.bannerVenta = bannerVenta;
        this.fechaMaximaKYC = fechaMaximaKYC;
        this.inicioStaking = inicioStaking;
        this.finStaking = finStaking;
        this.fechaVenta = fechaVenta;
        this.linkKYC = linkKYC;
        this.compraMonedaBase = compraMonedaBase;
        this.creacionCuentaExchange = creacionCuentaExchange;
        this.registroIDO = registroIDO;
        this.comentarioAdicional = comentarioAdicional;

    }
    push(idosIcos) {
        idosIcos.push({
            id: this.id,
            fecha: this.fecha,
            nombre: this.nombre,
            symbol: this.symbol,
            resumen: this.resumen,
            banner: this.banner,
            icono: this.icono,
            link_whitepaper: this.linkWhitePaper,
            proyecto_realizable: this.proyectoRealizable,
            seg_informatica: this.seguridadInformatica,
            whitepaper_integro: this.whitepaperIntegro,
            calificacion_innovacion: this.calificacionInnovacion,
            calificacion_tecnologia: this.calificacionTecnologia,
            calificacion_programacion: this.calificacionProgramacion,
            calificacion_plan_futuro: this.calificacionPlanFuturo,
            calificacion_equipo: this.calificacionEquipo,
            calificacion_total: this.calificacionTotal,
            exchange_disp: this.exchangeDisponible,
            precio_venta: this.precioVenta,
            id_precio: this.idPrecio,
            data_price: this.dataPrice,
            precio_actual: this.precioActual,
            rentabilidad_generada: this.rentabilidadGenerada,
            banner_venta: this.bannerVenta,
            fecha_max_kyc: this.fechaMaximaKYC,
            inicio_staking: this.inicioStaking,
            fin_staking: this.finStaking,
            fecha_venta: this.fechaVenta,
            link_kyc: this.linkKYC,
            compra_mon_base: this.compraMonedaBase,
            creacion_cuenta_exchange: this.creacionCuentaExchange,
            registro_ido: this.registroIDO,
            comentario_adic: this.comentarioAdicional
        })
    }
};