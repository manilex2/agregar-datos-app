module.exports = class Plan {
    constructor(
        planId,
        name,
        categoria,
        titulo,
        detalle,
        descripcion
        ) {
        this.planId = planId;
        this.name = name;
        this.categoria = categoria;
        this.titulo = titulo;
        this.detalle = detalle;
        this.descripcion = descripcion;
    }
    push(planes) {
        planes.push({
            planId: this.planId,
            plan: this.name,
            categoria: this.categoria,
            titulo: this.titulo,
            detalle: this.detalle,
            descripcion: this.descripcion
        })
    }
};