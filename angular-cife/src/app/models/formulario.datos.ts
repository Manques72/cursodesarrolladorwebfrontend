import { Curso, Turno, Sede } from './formulario.model';

export const CURSOS = [
     new Curso('HTML', 'HTML', 'HTML...'),//TIENE ID, NOMBRE Y DESCRIPCION
     new Curso('CSS', 'CSS', 'CSS...'),
     new Curso('JS', 'JavaSript', 'JavaScript...'),
     new Curso('JV', 'Java', 'Java...'),
     new Curso('Node', 'NodeJS', 'NodeJS...'),
                ];


export const TURNOS = [
    new Turno('M', 'Mañana', 'Mañana 9:00...'),
    new Turno('T', 'Tarde', 'Tarde 15:00...'),
    new Turno('N', 'Noche', 'Noche 20:00...')
]
export const SEDES = [
    new Sede('MD', 'Madrid', 'Madrid'),
    new Sede('BN', 'Barcelona', 'Barcelona'),
    new Sede('CD', 'Cadiz', 'Cadiz')
]
