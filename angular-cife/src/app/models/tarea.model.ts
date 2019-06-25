expect interface TareaIf {
    nombre: string;
    isCompleted: boolean;


}

export class Tarea implements TareaIf{
    constructor(
    public nombre: string = '',
    public isCompleted: boolean = false

    ) {
        //this.isCompleted = false; ya lo hemos 
            puesto arriba
    }

}