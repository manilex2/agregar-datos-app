module.exports = class Usuario {
    constructor(
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
        ) {
        this.userId = userId;
        this.email = email;
        this.usuarioId = usuarioId;
        this.fullName = fullName;
        this.nombre = nombre;
        this.affiliateCode = affiliateCode;
        this.planId = planId;
        this.foto = foto;
        this.perfilInv = perfilInv;
        this.usuarioDiscord = usuarioDiscord;
        this.whatsapp = whatsapp;
        this.usuarioActivo = usuarioActivo;
    }
    push(usuarios) {
        usuarios.push({
            userId: this.userId,
            email: this.email,
            usuarioId: this.usuarioId,
            fullName: this.fullName,
            nombre: this.nombre,
            affiliate_code: this.affiliateCode,
            planId: this.planId,
            foto: this.foto,
            perfil_inv: this.perfilInv,
            usuario_discord: this.usuarioDiscord,
            whatsapp: this.whatsapp,
            usuario_activo: this.usuarioActivo
        })
    }
}