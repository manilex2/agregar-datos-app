require('dotenv').config()
const mysql = require('mysql2');
const Usuario = require("./usuario");
const Plan = require("./plan");
const OportCripto = require("./oportCripto");
const IdoIco = require("./idosIcos");
const ChartProyeccion = require("./chartProy");
const Ranking = require("./ranking");
const { database } = require('./keys');
const { google } = require('googleapis');
const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
});
module.exports.handler = async function (event) {
    const promise = new Promise(async function() {
        const conexion = mysql.createConnection({
            host: database.host,
            user: database.user,
            password: database.password,
            port: database.port,
            database: database.database
        });
        const spreadsheetId = process.env.SPREADSHEET_ID;
        const client = await auth.getClient();
        const googleSheet = google.sheets({ version: 'v4', auth: client });
        try {
            const usuarios = [];
            const planes = [];
            const oportsCripto = [];
            const idosIcos = [];
            const chartsProy = [];
            const rankings = [];
            var requestUsuarios = (await googleSheet.spreadsheets.values.get({
                auth,
                spreadsheetId,
                range: `${process.env.USUARIOS_HOJA}`
            })).data;
            var requestPlanes = (await googleSheet.spreadsheets.values.get({
                auth,
                spreadsheetId,
                range: `${process.env.PLANES_HOJA}`
            })).data;
            var requestOportsCripto = (await googleSheet.spreadsheets.values.get({
                auth,
                spreadsheetId,
                range: `${process.env.OPORTS_CRIPTO_HOJA}`
            })).data;
            var requestIdosIcos = (await googleSheet.spreadsheets.values.get({
                auth,
                spreadsheetId,
                range: `${process.env.IDOS_ICOS_HOJA}`
            })).data;
            var requestChartsProy = (await googleSheet.spreadsheets.values.get({
                auth,
                spreadsheetId,
                range: `${process.env.CHARTS_PROY_HOJA}`
            })).data;
            var requestRankings = (await googleSheet.spreadsheets.values.get({
                auth,
                spreadsheetId,
                range: `${process.env.RANKINGS_HOJA}`
            })).data;
            var recogerPlanes = requestPlanes.values;
            var recogerUsuarios = requestUsuarios.values;
            var recogerOportsCripto = requestOportsCripto.values;
            var recogerIdosIcos = requestIdosIcos.values;
            var recogerChartsProy = requestChartsProy.values;
            var recogerRankings = requestRankings.values;
            for (let i = 0; i < recogerPlanes.length; i++) {
                let planId = parseInt(recogerPlanes[i][0]);;
                let plan  = recogerPlanes[i][1].toString();
                let categoria = recogerPlanes[i][2].toString();
                let titulo = recogerPlanes[i][3]? recogerPlanes[i][3].toString() : "";
                let detalle = recogerPlanes[i][4]? recogerPlanes[i][4].toString() : "";
                let descripcion = recogerPlanes[i][5]? recogerPlanes[i][5].toString() : "";
                let planName = new Plan(
                    planId,
                    plan,
                    categoria,
                    titulo,
                    detalle,
                    descripcion
                );
                planName.push(planes);
            }
            for (let i = 0; i < recogerUsuarios.length; i++) {
                let userId = [i+1];
                let email = recogerUsuarios[i][0]? recogerUsuarios[i][0].toString(): "";
                let usuarioId = recogerUsuarios[i][1]? parseInt(recogerUsuarios[i][1]): 0;
                let fullName = recogerUsuarios[i][2]? recogerUsuarios[i][2].toString(): "";
                let nombre = recogerUsuarios[i][3]? recogerUsuarios[i][3].toString(): "";
                let affiliateCode = recogerUsuarios[i][4]? recogerUsuarios[i][4].toString(): "";
                switch (recogerUsuarios[i][5]) {
                    case "Free":
                        var planId = 1;
                        break;
                    case "Legacy Users":
                        var planId = 2;
                        break;
                    case "Advance":
                        var planId = 2;
                        break;
                    case "Pro":
                        var planId = 3;
                        break;
                    case "Crypto":
                        var planId = 4;
                        break;
                    case "Crypto+Pro":
                        var planId = 5;
                        break;
                    default:
                        var planId = 1;
                        break;
                }
                let foto = recogerUsuarios[i][8]? recogerUsuarios[i][8].toString(): "";
                let perfilInv = recogerUsuarios[i][9]? recogerUsuarios[i][9].toString(): "";
                let usuarioDiscord = recogerUsuarios[i][10]? recogerUsuarios[i][10].toString(): "";
                let whatsapp = isNaN(recogerUsuarios[i][11])? 0: parseInt(recogerUsuarios[i][11]);
                if (recogerUsuarios[i][12]) {
                    recogerUsuarios[i][12] = recogerUsuarios[i][12].toLowerCase();
                    var usuarioActivo = recogerUsuarios[i][12] === "si"? true: false;
                } else {
                    var usuarioActivo = true;
                }
                if (email) {
                    let usuario = new Usuario(
                        userId,
                        email,
                        usuarioId,
                        fullName,
                        nombre,
                        affiliateCode,
                        planId,
                        foto,
                        perfilInv,
                        usuarioDiscord,
                        whatsapp,
                        usuarioActivo
                    );
                    usuario.push(usuarios);
                }
            }
            for (let i = 0; i < recogerOportsCripto.length; i++) {
                let id = [i+1];
                let cuentaActual = recogerOportsCripto[i][0]? recogerOportsCripto[i][0].toString(): "";
                let cuentaHistorico = recogerOportsCripto[i][1]? recogerOportsCripto[i][1].toString(): "";
                let cuentaUnificada = recogerOportsCripto[i][2]? recogerOportsCripto[i][2].toString(): "";
                let tipo = recogerOportsCripto[i][3]? recogerOportsCripto[i][3].toString(): "";
                let fechaPublicacion = recogerOportsCripto[i][4]? recogerOportsCripto[i][4].toString(): "";
                let symbol = recogerOportsCripto[i][5]? recogerOportsCripto[i][5].toString(): "";
                let nombre = recogerOportsCripto[i][6]? recogerOportsCripto[i][6].toString(): "";
                let precioEntrada1 = recogerOportsCripto[i][7]? recogerOportsCripto[i][7].toString(): "";
                let precioEntrada2 = recogerOportsCripto[i][8]? recogerOportsCripto[i][8].toString(): "";
                let precioEntrada3 = recogerOportsCripto[i][9]? recogerOportsCripto[i][9].toString(): "";
                let precioEntrada4 = recogerOportsCripto[i][10]? recogerOportsCripto[i][10].toString(): "";
                let precioMeta1 = recogerOportsCripto[i][11]? recogerOportsCripto[i][11].toString(): "";
                let precioMeta2 = recogerOportsCripto[i][12]? recogerOportsCripto[i][12].toString(): "";
                let stopLoss = recogerOportsCripto[i][13]? parseFloat(recogerOportsCripto[i][13]): 0;
                let tradeHold = recogerOportsCripto[i][14]? recogerOportsCripto[i][14].toString(): "";
                let nivelRiesgo = recogerOportsCripto[i][15]? recogerOportsCripto[i][15].toString(): "";
                let exchange = recogerOportsCripto[i][16]? recogerOportsCripto[i][16].toString(): "";
                let logo = recogerOportsCripto[i][17]? recogerOportsCripto[i][17].toString(): "";
                let idPrecio = recogerOportsCripto[i][18]? recogerOportsCripto[i][18].toString(): "";
                let dataPrice = recogerOportsCripto[i][19]? recogerOportsCripto[i][19].toString(): "";
                let precioActual = recogerOportsCripto[i][20]? parseFloat(recogerOportsCripto[i][20]): 0;
                let validoHasta = recogerOportsCripto[i][21]? recogerOportsCripto[i][21].toString(): "";
                let rentabilidadEstimada = recogerOportsCripto[i][22]? parseFloat(recogerOportsCripto[i][22]): 0;
                let recomendar = recogerOportsCripto[i][23]? recogerOportsCripto[i][23].toString(): "";
                let chart = recogerOportsCripto[i][24]? recogerOportsCripto[i][24].toString(): "";
                let rentabilidadGenerada = recogerOportsCripto[i][25]? recogerOportsCripto[i][25].toString(): "";
                let rentabilidadNumerica = recogerOportsCripto[i][26]? parseFloat(recogerOportsCripto[i][26]): 0;
                let recomendacionCaduca = recogerOportsCripto[i][27]? recogerOportsCripto[i][27].toString(): "";
                let mostrarHasta = recogerOportsCripto[i][28]? recogerOportsCripto[i][28].toString(): "";
                let riesgoEstrella = recogerOportsCripto[i][29]? parseInt(recogerOportsCripto[i][29]): 0;
                let chartSeguimiento = recogerOportsCripto[i][30]? recogerOportsCripto[i][30].toString(): "";
                let widgetSymbol = recogerOportsCripto[i][31]? recogerOportsCripto[i][31].toString(): "";
                let analisisGrafico = recogerOportsCripto[i][32]? recogerOportsCripto[i][32].toString(): "";
                let criptoOport = new OportCripto(
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
                );
                criptoOport.push(oportsCripto);
            }
            for (let i = 0; i < recogerIdosIcos.length; i++) {
                let id = [i+1];
                let fecha = recogerIdosIcos[i][0]? recogerIdosIcos[i][0].toString(): "";
                let nombre = recogerIdosIcos[i][1]? recogerIdosIcos[i][1].toString(): "";
                let symbol = recogerIdosIcos[i][2]? recogerIdosIcos[i][2].toString(): "";
                let resumen = recogerIdosIcos[i][3]? recogerIdosIcos[i][3].toString(): "";
                let banner = recogerIdosIcos[i][4]? recogerIdosIcos[i][4].toString(): "";
                let icono = recogerIdosIcos[i][5]? recogerIdosIcos[i][5].toString(): "";
                let linkWhitepaper = recogerIdosIcos[i][6]? recogerIdosIcos[i][6].toString(): "";
                let proyectoRealizable = recogerIdosIcos[i][7]? recogerIdosIcos[i][7].toString(): "";
                let seguridadInformatica = recogerIdosIcos[i][8]? recogerIdosIcos[i][8].toString(): "";
                let whitepaperIntegro = recogerIdosIcos[i][9]? recogerIdosIcos[i][9].toString(): "";
                let calificacionInnovacion = recogerIdosIcos[i][10]? parseInt(recogerIdosIcos[i][10]): 0;
                let calificacionTecnologia = recogerIdosIcos[i][11]? parseInt(recogerIdosIcos[i][11]): 0;
                let calificacionProgramacion = recogerIdosIcos[i][12]? parseInt(recogerIdosIcos[i][12]): 0;
                let calificacionPlanFuturo = recogerIdosIcos[i][13]? parseInt(recogerIdosIcos[i][13]): 0;
                let calificacionEquipo = recogerIdosIcos[i][14]? parseInt(recogerIdosIcos[i][14]): 0;
                let calificacionTotal = recogerIdosIcos[i][15]? parseInt(recogerIdosIcos[i][15]): 0;
                let exchangeDisponible = recogerIdosIcos[i][16]? recogerIdosIcos[i][16].toString(): "";
                let precioVenta = recogerIdosIcos[i][17]? parseFloat(recogerIdosIcos[i][17]): 0;
                let idPrecio = recogerIdosIcos[i][18]? recogerIdosIcos[i][18].toString(): "";
                let dataPrice = recogerIdosIcos[i][19]? recogerIdosIcos[i][19].toString(): "";
                let precioActual = recogerIdosIcos[i][20]? parseFloat(recogerIdosIcos[i][20]): 0;
                let rentabilidadGenerada = recogerIdosIcos[i][21]? parseFloat(recogerIdosIcos[i][21]): 0;
                let bannerVenta = recogerIdosIcos[i][22]? recogerIdosIcos[i][22].toString(): "";
                let fechaMaximaKYC = recogerIdosIcos[i][23]? recogerIdosIcos[i][23].toString(): "";
                let inicioStaking = recogerIdosIcos[i][24]? recogerIdosIcos[i][24].toString(): "";
                let finStaking = recogerIdosIcos[i][25]? recogerIdosIcos[i][25].toString(): "";
                let fechaVenta = recogerIdosIcos[i][26]? recogerIdosIcos[i][26].toString(): "";
                let linkKYC = recogerIdosIcos[i][27]? recogerIdosIcos[i][27].toString(): "";
                let compraMonedaBase = recogerIdosIcos[i][28]? recogerIdosIcos[i][28].toString(): "";
                let creacionCuentaExchange = recogerIdosIcos[i][29]? recogerIdosIcos[i][29].toString(): "";
                let registroIDO = recogerIdosIcos[i][30]? recogerIdosIcos[i][30].toString(): "";
                let comentarioAdicional = recogerIdosIcos[i][31]? recogerIdosIcos[i][31].toString(): "";
                let icosIdos = new IdoIco(
                    id,
                    fecha,
                    nombre,
                    symbol,
                    resumen,
                    banner,
                    icono,
                    linkWhitepaper,
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
                );
                icosIdos.push(idosIcos);
            }
            for (let i = 0; i < recogerChartsProy.length; i++) {
                let id = [i+1];
                let nombre = recogerChartsProy[i][0]? recogerChartsProy[i][0].toString(): "";
                let fecha = recogerChartsProy[i][1]? recogerChartsProy[i][1].toString(): "";
                let precio = recogerChartsProy[i][2]? parseFloat(recogerChartsProy[i][2]): 0;
                let proyLP = recogerChartsProy[i][3]? recogerChartsProy[i][3].toString(): "";
                let smartBandsLP = recogerChartsProy[i][4]? recogerChartsProy[i][4].toString(): "";
                let rentLP = recogerChartsProy[i][5]? recogerChartsProy[i][5].toString(): "";
                let proyCP = recogerChartsProy[i][6]? recogerChartsProy[i][6].toString(): "";
                let smartBandsCP = recogerChartsProy[i][7]? recogerChartsProy[i][7].toString(): "";
                let rentCP = recogerChartsProy[i][8]? recogerChartsProy[i][8].toString(): "";
                let chartData = new ChartProyeccion(
                    id,
                    nombre,
                    fecha,
                    precio,
                    proyLP,
                    smartBandsLP,
                    rentLP,
                    proyCP,
                    smartBandsCP,
                    rentCP
                );
                chartData.push(chartsProy);
            }
            for (let i = 0; i < recogerRankings.length; i++) {
                let id = recogerRankings[i][1];
                let idRango = recogerRankings[i][0];
                let coinId = recogerRankings[i][2];
                let tendenciaEMALP = recogerRankings[i][3]? recogerRankings[i][3]: "";
                let tendenciaMACDLP = recogerRankings[i][4]? recogerRankings[i][4]: "";
                let tendenciaAlligatorLP = recogerRankings[i][5]? recogerRankings[i][5]: "";
                let fuerzaTendenciaADXLP = recogerRankings[i][6]? recogerRankings[i][6]: "";
                let continuidadCambioADXLP = recogerRankings[i][7]? recogerRankings[i][7]: "";
                let senalEMALP = recogerRankings[i][8]? recogerRankings[i][8]: "";
                let senalMACDLP = recogerRankings[i][9]? recogerRankings[i][9]: "";
                let senalRSILP = recogerRankings[i][10]? recogerRankings[i][10]: "";
                let senalAlligatorLP = recogerRankings[i][11]? recogerRankings[i][11]: "";
                let fechaUltimaSenalEMALP = recogerRankings[i][12]? recogerRankings[i][12]: "";
                let ultimaSenalEMALP = recogerRankings[i][13]? recogerRankings[i][13]: "";
                let fechaUltimaSenalMACDLP = recogerRankings[i][14]? recogerRankings[i][14]: "";
                let ultimaSenalMACDLP = recogerRankings[i][15]? recogerRankings[i][15]: "";
                let fechaUltimaSenalAlligatorLP = recogerRankings[i][16]? recogerRankings[i][16]: "";
                let ultimaSenalAlligatorLP = recogerRankings[i][17]? recogerRankings[i][17]: "";
                let tendenciaEMALPNum = recogerRankings[i][18]? recogerRankings[i][18]: 0;
                let tendenciaMACDLPNum = recogerRankings[i][19]? recogerRankings[i][19]: 0;
                let tendenciaAlligatorLPNum = recogerRankings[i][20]? recogerRankings[i][20]: 0;
                let fuerzaLP = recogerRankings[i][21]? recogerRankings[i][21]: 0;
                let continuidadLP = recogerRankings[i][22]? recogerRankings[i][22]: 0;
                let calificacionTendenciaLP = recogerRankings[i][23]? recogerRankings[i][23]: 0;
                let senalEMALPNum = recogerRankings[i][24]? recogerRankings[i][24]: 0;
                let senalMACDLPNum = recogerRankings[i][25]? recogerRankings[i][25]: 0;
                let senalRSILPNum = recogerRankings[i][26]? recogerRankings[i][26]: 0;
                let senalAlligatorLPNum = recogerRankings[i][27]? recogerRankings[i][27]: 0;
                let calificacionIndicadoresTecnicosLP = recogerRankings[i][28]? recogerRankings[i][28]: 0;
                let calificacionTotalLP = recogerRankings[i][29]? recogerRankings[i][29]: 0;
                let tendenciaEMAMP = recogerRankings[i][30]? recogerRankings[i][30]: "";
                let tendenciaMACDMP = recogerRankings[i][31]? recogerRankings[i][31]: "";
                let tendenciaAlligatorMP = recogerRankings[i][32]? recogerRankings[i][32]: "";
                let fuerzaTendenciaADXMP = recogerRankings[i][33]? recogerRankings[i][33]: "";
                let continuidadCambioADXMP = recogerRankings[i][34]? recogerRankings[i][34]: "";
                let senalEMAMP = recogerRankings[i][35]? recogerRankings[i][35]: "";
                let senalMACDMP = recogerRankings[i][36]? recogerRankings[i][36]: "";
                let senalRSIMP = recogerRankings[i][37]? recogerRankings[i][37]: "";
                let senalAlligatorMP = recogerRankings[i][38]? recogerRankings[i][38]: "";
                let fechaUltimaSenalEMAMP = recogerRankings[i][39]? recogerRankings[i][39]: "";
                let ultimaSenalEMAMP = recogerRankings[i][40]? recogerRankings[i][40]: "";
                let fechaUltimaSenalMACDMP = recogerRankings[i][41]? recogerRankings[i][41]: "";
                let ultimaSenalMACDMP = recogerRankings[i][42]? recogerRankings[i][42]: "";
                let fechaUltimaSenalAlligatorMP = recogerRankings[i][43]? recogerRankings[i][43]: "";
                let ultimaSenalAlligatorMP = recogerRankings[i][44]? recogerRankings[i][44]: "";
                let tendenciaEMAMPNum = recogerRankings[i][45]? recogerRankings[i][45] : 0;
                let tendenciaMACDMPNum = recogerRankings[i][46]? recogerRankings[i][46]: 0;
                let tendenciaAlligatorMPNum = recogerRankings[i][47]? recogerRankings[i][47]: 0;
                let fuerzaMP = recogerRankings[i][48]? recogerRankings[i][48]: 0;
                let continuidadMP = recogerRankings[i][49]? recogerRankings[i][49]: 0;
                let calificacionTendenciaMP = recogerRankings[i][50]? recogerRankings[i][50]: 0;
                let senalEMAMPNum = recogerRankings[i][51]? recogerRankings[i][51]: 0;
                let senalMACDMPNum = recogerRankings[i][52]? recogerRankings[i][52]: 0;
                let senalRSIMPNum = recogerRankings[i][53]? recogerRankings[i][53]: 0;
                let senalAlligatorMPNum = recogerRankings[i][54]? recogerRankings[i][54]: 0;
                let calificacionIndicadoresTecnicosMP = recogerRankings[i][55]? recogerRankings[i][55]: 0;
                let calificacionGlobalTendencia = recogerRankings[i][56]? recogerRankings[i][56]: 0;
                let calificacionGlobalIndicadoresTecnicos = recogerRankings[i][57]? recogerRankings[i][57]: 0;
                let calificacionTotalMP = recogerRankings[i][58]? recogerRankings[i][58]: 0;
                let realProyLP = recogerRankings[i][59]? recogerRankings[i][59]: 0;
                let forecastProyLP = recogerRankings[i][60]? recogerRankings[i][60]: 0;
                let pesimistaProyLP = recogerRankings[i][61]? recogerRankings[i][61]: 0;
                let optimistaProyLP = recogerRankings[i][62]? recogerRankings[i][62]: 0;
                let realProySBLP = recogerRankings[i][63]? recogerRankings[i][63]: 0;
                let forecastProySBLP = recogerRankings[i][64]? recogerRankings[i][64]: 0;
                let pesimistaProySBLP = recogerRankings[i][65]? recogerRankings[i][65]: 0;
                let optimistaProySBLP = recogerRankings[i][66]? recogerRankings[i][66]: 0;
                let realProyMP = recogerRankings[i][67]? recogerRankings[i][67]: 0;
                let forecastProyMP = recogerRankings[i][68]? recogerRankings[i][68]: 0;
                let pesimistaProyMP = recogerRankings[i][69]? recogerRankings[i][69]: 0;
                let optimistaProyMP = recogerRankings[i][70]? recogerRankings[i][70]: 0;
                let realProySBMP = recogerRankings[i][71]? recogerRankings[i][71]: 0;
                let forecastProySBMP = recogerRankings[i][72]? recogerRankings[i][72]: 0;
                let pesimistaProySBMP = recogerRankings[i][73]? recogerRankings[i][73]: 0;
                let optimistaProySBMP = recogerRankings[i][74]? recogerRankings[i][74]: 0;
                let calificacionProyLP = recogerRankings[i][75]? recogerRankings[i][75]: 0;
                let calificacionProyMP = recogerRankings[i][76]? recogerRankings[i][76]: 0;
                let calificacionSmartBandsLP = recogerRankings[i][77]? recogerRankings[i][77]: 0;
                let calificacionSmartBandsMP = recogerRankings[i][78]? recogerRankings[i][78]: 0;
                let calificacionGlobalLPFinal = recogerRankings[i][79]? recogerRankings[i][79]: 0;
                let calificacionGlobalMPFinal = recogerRankings[i][80]? recogerRankings[i][80]: 0;
                let calificacionGlobalProyeccion = recogerRankings[i][81]? recogerRankings[i][81]: 0;
                let calificacionGlobalGeneral = recogerRankings[i][82]? recogerRankings[i][82]: 0;
                let fecha = recogerRankings[i][83]? recogerRankings[i][83]: 0;
                let rankingName = new Ranking(
                    id,
                    idRango,
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
                    calificacionTotalLP,
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
                    calificacionTotalMP,
                    realProyLP,
                    forecastProyLP,
                    pesimistaProyLP,
                    optimistaProyLP,
                    realProySBLP,
                    forecastProySBLP,
                    pesimistaProySBLP,
                    optimistaProySBLP,
                    realProyMP,
                    forecastProyMP,
                    pesimistaProyMP,
                    optimistaProyMP,
                    realProySBMP,
                    forecastProySBMP,
                    pesimistaProySBMP,
                    optimistaProySBMP,
                    calificacionProyLP,
                    calificacionProyMP,
                    calificacionSmartBandsLP,
                    calificacionSmartBandsMP,
                    calificacionGlobalLPFinal,
                    calificacionGlobalMPFinal,
                    calificacionGlobalProyeccion,
                    calificacionGlobalGeneral,
                    fecha
                );
                rankingName.push(rankings);
            }
            await agregarDatos(chartsProy, process.env.CHARTS_PROY_TABLE);
            await agregarDatos(idosIcos, process.env.IDOS_ICOS_TABLE);
            await agregarDatos(oportsCripto, process.env.OPORTS_CRIPTO_TABLE);
            await agregarPlanes(planes, process.env.PLANS_TABLE);
            await agregarRanking(rankings, process.env.RANKINGS_TABLE);
            await agregarUsuarios(usuarios, process.env.USERS_TABLE);
            await finalizarEjecucion();   
        } catch (err) {
            console.error(err);
        }
    
        async function agregarPlanes(datos, table) {
            if (!datos[0].plan) {
                console.log("No se encontraron planes.");
                return;
            } else {
                let sql = `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`;
                for (let n = 0; n < datos.length; n++) {
                    conexion.query(sql, [datos[n], datos[n]], function (err, result) {
                        if (err) throw err;
                    });    
                }
            }
        };
        async function agregarUsuarios(datos, table) {
            if (!datos[0].email) {
                console.log("No se encontraron usuarios.");
                return;
            } else {
                let sql = `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`;
                for (let n = 0; n < datos.length; n++) {
                    conexion.query(sql, [datos[n], datos[n]], function (err, result) {
                        if (err) throw err;
                    });    
                }
            }
        };
        async function agregarDatos(datos, table) {
            if (!datos[0].nombre) {
                console.log("No se encontraron datos.");
                return;
            } else {
                let sql = `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`;
                for (let n = 0; n < datos.length; n++) {
                    conexion.query(sql, [datos[n], datos[n]], function (err, result) {
                        if (err) throw err;
                    });    
                }
            }
        };
        async function agregarRanking(datos, table) {
            if (!datos[0].coin_id) {
                console.log("No se encontraron rankings.");
                return;
            } else {
                let sql = `INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`;
                for (let n = 0; n < datos.length; n++) {
                    conexion.query(sql, [datos[n], datos[n]], function (err, result) {
                        if (err) throw err;
                    });    
                }
            }
        };
        async function finalizarEjecucion() {
            conexion.end();
        };
    });
    return promise
}