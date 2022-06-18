module.exports = class Ranking {
    constructor(
        idRango,
        secuencia,
        coinId,
        tendenciaEMALP,
        tendenciaMACDLP,
        tendenciaAlligatorLP,
        fuerzaTendenciaADXLP,
        continuidadCambioADXLP,
        senalEMALP,
        senalMACDLP,
        senalRSILP,
        senalAlligatorLP,
        fechaUltimaSenalEMALP,
        ultimaSenalEMALP,
        fechaUltimaSenalMACDLP,
        ultimaSenalMACDLP,
        fechaUltimaSenalAlligatorLP,
        ultimaSenalAlligatorLP,
        tendenciaEMALPNum,
        tendenciaMACDLPNum,
        tendenciaAlligatorLPNum,
        fuerzaLP,
        continuidadLP,
        calificacionTendenciaLP,
        senalEMALPNum,
        senalMACDLPNum,
        senalRSILPNum,
        senalAlligatorLPNum,
        calificacionIndicadoresTecnicosLP,
        tendenciaEMAMP,
        tendenciaMACDMP,
        tendenciaAlligatorMP,
        fuerzaTendenciaADXMP,
        continuidadCambioADXMP,
        senalEMAMP,
        senalMACDMP,
        senalRSIMP,
        senalAlligatorMP,
        fechaUltimaSenalEMAMP,
        ultimaSenalEMAMP,
        fechaUltimaSenalMACDMP,
        ultimaSenalMACDMP,
        fechaUltimaSenalAlligatorMP,
        ultimaSenalAlligatorMP,
        tendenciaEMAMPNum,
        tendenciaMACDMPNum,
        tendenciaAlligatorMPNum,
        fuerzaMP,
        continuidadMP,
        calificacionTendenciaMP,
        senalEMAMPNum,
        senalMACDMPNum,
        senalRSIMPNum,
        senalAlligatorMPNum,
        calificacionIndicadoresTecnicosMP,
        calificacionGlobalTendencia,
        calificacionGlobalIndicadoresTecnicos,
        calificacionProyeccionLP,
        calificacionProyeccionMP,
        calificacionSmartbandsLP,
        calificacionSmartbandsMP,
        calificacionGlobalProyecciones,
        calificacionGlobalGeneral
    ) {
        this.idRango = idRango;
        this.secuencia = secuencia;
        this.coinId = coinId;
        this.tendenciaEMALP = tendenciaEMALP;
        this.tendenciaMACDLP = tendenciaMACDLP;
        this.tendenciaAlligatorLP = tendenciaAlligatorLP;
        this.fuerzaTendenciaADXLP = fuerzaTendenciaADXLP;
        this.continuidadCambioADXLP = continuidadCambioADXLP;
        this.senalEMALP = senalEMALP;
        this.senalMACDLP = senalMACDLP;
        this.senalRSILP = senalRSILP;
        this.senalAlligatorLP = senalAlligatorLP;
        this.fechaUltimaSenalEMALP = fechaUltimaSenalEMALP;
        this.ultimaSenalEMALP = ultimaSenalEMALP;
        this.fechaUltimaSenalMACDLP = fechaUltimaSenalMACDLP;
        this.ultimaSenalMACDLP = ultimaSenalMACDLP;
        this.fechaUltimaSenalAlligatorLP = fechaUltimaSenalAlligatorLP;
        this.ultimaSenalAlligatorLP = ultimaSenalAlligatorLP;
        this.tendenciaEMALPNum = tendenciaEMALPNum;
        this.tendenciaMACDLPNum = tendenciaMACDLPNum;
        this.tendenciaAlligatorLPNum = tendenciaAlligatorLPNum;
        this.fuerzaLP = fuerzaLP;
        this.continuidadLP = continuidadLP;
        this.calificacionTendenciaLP = calificacionTendenciaLP;
        this.senalEMALPNum = senalEMALPNum;
        this.senalMACDLPNum = senalMACDLPNum;
        this.senalRSILPNum = senalRSILPNum;
        this.senalAlligatorLPNum = senalAlligatorLPNum;
        this.calificacionIndicadoresTecnicosLP = calificacionIndicadoresTecnicosLP;
        this.tendenciaEMAMP = tendenciaEMAMP;
        this.tendenciaMACDMP = tendenciaMACDMP;
        this.tendenciaAlligatorMP = tendenciaAlligatorMP;
        this.fuerzaTendenciaADXMP = fuerzaTendenciaADXMP;
        this.continuidadCambioADXMP = continuidadCambioADXMP;
        this.senalEMAMP = senalEMAMP;
        this.senalMACDMP = senalMACDMP;
        this.senalRSIMP = senalRSIMP;
        this.senalAlligatorMP = senalAlligatorMP;
        this.fechaUltimaSenalEMAMP = fechaUltimaSenalEMAMP;
        this.ultimaSenalEMAMP = ultimaSenalEMAMP;
        this.fechaUltimaSenalMACDMP = fechaUltimaSenalMACDMP;
        this.ultimaSenalMACDMP = ultimaSenalMACDMP;
        this.fechaUltimaSenalAlligatorMP = fechaUltimaSenalAlligatorMP;
        this.ultimaSenalAlligatorMP = ultimaSenalAlligatorMP;
        this.tendenciaEMAMPNum = tendenciaEMAMPNum;
        this.tendenciaMACDMPNum = tendenciaMACDMPNum;
        this.tendenciaAlligatorMPNum = tendenciaAlligatorMPNum;
        this.fuerzaMP = fuerzaMP;
        this.continuidadMP = continuidadMP;
        this.calificacionTendenciaMP = calificacionTendenciaMP;
        this.senalEMAMPNum = senalEMAMPNum;
        this.senalMACDMPNum = senalMACDMPNum;
        this.senalRSIMPNum = senalRSIMPNum;
        this.senalAlligatorMPNum = senalAlligatorMPNum;
        this.calificacionIndicadoresTecnicosMP = calificacionIndicadoresTecnicosMP;
        this.calificacionGlobalTendencia = calificacionGlobalTendencia;
        this.calificacionGlobalIndicadoresTecnicos = calificacionGlobalIndicadoresTecnicos;
        this.calificacionProyeccionLP = calificacionProyeccionLP;
        this.calificacionProyeccionMP = calificacionProyeccionMP;
        this.calificacionSmartbandsLP = calificacionSmartbandsLP;
        this.calificacionSmartbandsMP = calificacionSmartbandsMP;
        this.calificacionGlobalProyecciones = calificacionGlobalProyecciones;
        this.calificacionGlobalGeneral = calificacionGlobalGeneral;
    }
    push(rankings) {
        rankings.push({
            id_rango: this.idRango,
            secuencia: this.secuencia,
            coin_id: this.coinId,
            tendencia_ema_lp: this.tendenciaEMALP,
            tendencia_macd_lp: this.tendenciaMACDLP,
            tendencia_alligator_lp: this.tendenciaAlligatorLP,
            fuerza_tendencia_adx_lp: this.fuerzaTendenciaADXLP,
            continuidad_cambio_adx_lp: this.continuidadCambioADXLP,
            senal_ema_lp: this.senalEMALP,
            senal_macd_lp: this.senalMACDLP,
            senal_rsi_lp: this.senalRSILP,
            senal_alligator_lp: this.senalAlligatorLP,
            fecha_ultima_senal_ema_lp: this.fechaUltimaSenalEMALP,
            ultima_Senal_ema_lp: this.ultimaSenalEMALP,
            fecha_ultima_senal_macd_lp: this.fechaUltimaSenalMACDLP,
            ultima_Senal_macd_lp: this.ultimaSenalMACDLP,
            fecha_ultima_senal_alligator_lp: this.fechaUltimaSenalAlligatorLP,
            ultima_Senal_alligator_lp: this.ultimaSenalAlligatorLP,
            tendencia_ema_lp_num: this.tendenciaEMALPNum,
            tendencia_macd_lp_num: this.tendenciaMACDLPNum,
            tendencia_alligator_lp_num: this.tendenciaAlligatorLPNum,
            fuerza_lp: this.fuerzaLP,
            continuidad_lp: this.continuidadLP,
            calificacion_tendencia_lp: this.calificacionTendenciaLP,
            senal_ema_lp_num: this.senalEMALPNum,
            senal_macd_lp_num: this.senalMACDLPNum,
            senal_rsi_lp_num: this.senalRSILPNum,
            senal_alligator_lp_num: this.senalAlligatorLPNum,
            calificacion_indicadores_tecnicos_lp: this.calificacionIndicadoresTecnicosLP,
            tendencia_ema_mp: this.tendenciaEMAMP,
            tendencia_macd_mp: this.tendenciaMACDMP,
            tendencia_alligator_mp: this.tendenciaAlligatorMP,
            fuerza_tendencia_adx_mp: this.fuerzaTendenciaADXMP,
            continuidad_cambio_adx_mp: this.continuidadCambioADXMP,
            senal_ema_mp: this.senalEMAMP,
            senal_macd_mp: this.senalMACDMP,
            senal_rsi_mp: this.senalRSIMP,
            senal_alligator_mp: this.senalAlligatorMP,
            fecha_ultima_senal_ema_mp: this.fechaUltimaSenalEMAMP,
            ultima_senal_ema_mp: this.ultimaSenalEMAMP,
            fecha_ultima_senal_macd_mp: this.fechaUltimaSenalMACDMP,
            ultima_senal_macd_mp: this.ultimaSenalMACDMP,
            fecha_ultima_senal_alligator_mp: this.fechaUltimaSenalAlligatorMP,
            ultima_senal_alligator_mp: this.ultimaSenalAlligatorMP,
            tendencia_ema_mp_num: this.tendenciaEMAMPNum,
            tendencia_macd_mp_num: this.tendenciaMACDMPNum,
            tendencia_alligator_mp_num: this.tendenciaAlligatorMPNum,
            fuerza_mp: this.fuerzaMP,
            continuidad_mp: this.continuidadMP,
            calificacion_tendencia_mp: this.calificacionTendenciaMP,
            senal_ema_mp_num: this.senalEMAMPNum,
            senal_macd_mp_num: this.senalMACDMPNum,
            senal_RSI_mp_num: this.senalRSIMPNum,
            senal_alligator_mp_num: this.senalAlligatorMPNum,
            calificacion_indicadores_tecnicos_mp: this.calificacionIndicadoresTecnicosMP,
            calificacion_global_tendencia: this.calificacionGlobalTendencia,
            calificacion_global_indicadores_tecnicos: this.calificacionGlobalIndicadoresTecnicos,
            calificacion_proyeccion_lp: this.calificacionProyeccionLP,
            calificacion_proyeccion_mp: this.calificacionProyeccionMP,
            calificacion_smartbands_lp: this.calificacionSmartbandsLP,
            calificacion_smartbands_mp: this.calificacionSmartbandsMP,
            calificacion_global_proyecciones: this.calificacionGlobalProyecciones,
            calificacion_global_general: this.calificacionGlobalGeneral
        })
    }
};