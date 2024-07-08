import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  myTareas: Tarea[]=[
    {
      id:1,
      titulo:"Revisión de informe mensual",
      fecha: new Date(2024,6,25),
      descripcion:"Revisar y aprobar el informe mensual de ventas.",
      prioridad:3,
      realizada:false,
    },
    {
      id:2,
      titulo: "Llamada con cliente importante",
      fecha: new Date(2024, 5, 24),
      descripcion: "Realizar llamada de seguimiento con el cliente VIP.",
      prioridad: 3,
      realizada: true
    },
    {
      id: 3,
      titulo: "Preparación para la reunión de equipo",
      fecha: new Date(2024, 5, 27),
      descripcion: "Preparar agenda y documentos para la reunión semanal del equipo.",
      prioridad: 2,
      realizada: false
    },
    {
      id: 4,
      titulo: "Actualización del sitio web",
      fecha: new Date(2024, 5, 26),
      descripcion: "Implementar nuevas características en el sitio web de la empresa.",
      prioridad: 2,
      realizada: true
    },
    {
      id: 5,
      titulo: "Envío de propuesta de proyecto",
      fecha: new Date(2024, 5, 28),
      descripcion: "Preparar y enviar la propuesta para el nuevo proyecto de desarrollo.",
      prioridad: 3,
      realizada: false
    },
    {
      id: 6,
      titulo: "Revisión de presupuesto trimestral",
      fecha: new Date(2024, 5, 29),
      descripcion: "Revisar y ajustar el presupuesto para el próximo trimestre.",
      prioridad: 2,
      realizada: false
    },
  {
      id: 7,
      titulo: "Capacitación en nuevas herramientas de gestión",
      fecha: new Date(2024, 5, 30),
      descripcion: "Participar en la capacitación sobre las nuevas herramientas de gestión interna.",
      prioridad: 1,
      realizada: false
    },
    {
      id: 8,
      titulo: "Revisión de contratos pendientes",
      fecha: new Date(2024, 6, 1),
      descripcion: "Revisar y negociar los contratos pendientes con proveedores.",
      prioridad: 3,
      realizada: false
    },
    {
      id: 9,
      titulo: "Evaluación de desempeño del equipo",
      fecha: new Date(2024, 6, 2),
      descripcion: "Realizar las evaluaciones de desempeño trimestrales con el equipo.",
      prioridad: 3,
      realizada: false
    },
    {
      id: 10,
      titulo: "Planificación de eventos corporativos",
      fecha: new Date(2024, 5, 30),
      descripcion: "Planificar los próximos eventos corporativos para el segundo semestre.",
      prioridad: 2,
      realizada: false
    },
    {
      id: 11,
      titulo: "Actualización de políticas de recursos humanos",
      fecha: new Date(2024, 6, 1),
      descripcion: "Revisar y actualizar las políticas de recursos humanos de la empresa.",
      prioridad: 2,
      realizada: false
    },
    {
      id: 12,
      titulo: "Revisión de contratos de proveedores",
      fecha: new Date(2024, 6, 2),
      descripcion: "Revisar y renegociar contratos con proveedores estratégicos.",
      prioridad: 3,
      realizada: false
    },
    {
      id: 13,
      titulo: "Desarrollo de campaña de marketing",
      fecha: new Date(2024, 6, 3),
      descripcion: "Planificar y desarrollar la nueva campaña de marketing para el tercer trimestre.",
      prioridad: 1,
      realizada: false
    },
    {
      id: 14,
      titulo: "Análisis de datos de ventas",
      fecha: new Date(2024, 6, 4),
      descripcion: "Analizar los datos de ventas del último trimestre y preparar un informe.",
      prioridad: 3,
      realizada: false
    },
    {
      id: 15,
      titulo: "Capacitación en seguridad informática",
      fecha: new Date(2024, 6, 5),
      descripcion: "Participar en la capacitación sobre las mejores prácticas de seguridad informática.",
      prioridad: 2,
      realizada: false
    },
    {
      id: 16,
      titulo: "Planificación de evento corporativo",
      fecha: new Date(2024, 6, 6),
      descripcion: "Organizar y coordinar el evento corporativo anual.",
      prioridad: 2,
      realizada: false
    }

  ];

  constructor (){}
    public getTareas():Tarea[]{
      return this.myTareas
    }
    
    public getTareasByDateRange(startDate: Date, endDate: Date): Tarea[] {
      return this.myTareas.filter(tarea =>
        tarea.fecha >= startDate && tarea.fecha <= endDate
      );
    }
    createProject(tarea:Tarea){
       tarea.id=this.myTareas.length;
      this.myTareas.push(tarea);
  }
  
    getTareaById(tareaId: number ):Tarea {
      return this.myTareas.find(item=>item.id===tareaId)!;
    }
    
  
  
}
