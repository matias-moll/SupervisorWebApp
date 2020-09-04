export function getStateFromAPI(){
  return {
    resumen: {
      servicios: {
        enCurso: 3,
        cerrados: 20,
        cancelados: 12,
      },
      moviles: {
        activos: 20,
        fueraServicio: 35,
      },
      operadores: {
        receptores: 24,
        despachadores: 7,
      },
      estadoGeneral: {
        gps: false,
        interfaces: true,
        grabadora: true,
      },
    },
    totalesPorEstadoServicio: {
      activos: 35,
      demorados: 22,
      apoyos: 15,
      atencionesMultiples: 32,
    },
    estadosPorTipoDeMovil: [
      {
        type: "UTIM",
        activos: 20,
        inactivos: 5,
      }, {
        type: "Auto",
        activos: 11,
        inactivos: 2,
      }, {
        type: "interface",
        activos: 2,
        inactivos: 15,
      }
    ],
    serviciosPorEstadoYColor:[
      {
        descripcion:"Activos",
        serviciosPorColor: [
          {color: "Rojos", cantidad: 25},
          {color: "Amarillos", cantidad: 45},
          {color: "Verdes", cantidad: 80},
          {color: "Traslados", cantidad: 12},
          {color: "Eventos", cantidad: 25},
          {color: "Otros", cantidad: 45},
        ]
      },
      {
        descripcion:"Demorados",
        serviciosPorColor: [
          {color: "Rojos", cantidad: 10},
          {color: "Amarillos", cantidad: 5},
          {color: "Verdes", cantidad: 120},
          {color: "Traslados", cantidad: 0},
          {color: "Eventos", cantidad: 2},
          {color: "Otros", cantidad: 10},
        ]
      },
      {
        descripcion:"Apoyos",
        serviciosPorColor: [
          {color: "Rojos", cantidad: 2},
          {color: "Amarillos", cantidad: 15},
          {color: "Verdes", cantidad: 0},
          {color: "Traslados", cantidad: 0},
          {color: "Eventos", cantidad: 12},
          {color: "Otros", cantidad: 4},
        ]
      },
      {
        descripcion:"At. Multiples",
        serviciosPorColor: [
          {color: "Rojos", cantidad: 100},
          {color: "Amarillos", cantidad: 5},
          {color: "Verdes", cantidad: 10},
          {color: "Traslados", cantidad: 40},
          {color: "Eventos", cantidad: 2},
          {color: "Otros", cantidad: 10},
        ]
      },
      {
        descripcion:"Totales",
        serviciosPorColor: [
          {color: "Rojos", cantidad: 300},
          {color: "Amarillos", cantidad: 150},
          {color: "Verdes", cantidad: 100},
          {color: "Traslados", cantidad: 140},
          {color: "Eventos", cantidad: 80},
          {color: "Otros", cantidad: 90},
        ]
      },
    ],
    serviciosRecibidosDespachados: [
      {
        type: "Receptor",
        tomados: 20,
        cancelados: 5,
      }, {
        type: "Despachador",
        tomados: 11,
        cancelados: 2,
      },
    ],
    promediosServiciosRecibidosDespachados: {
      recepPromedioColoring: 35,
      recepPromedioAsignacion: 22,
      despRedespachos: 15,
      despPromedioAsignacion: 32,
    },
  };
}

export function getStateClientesFromAPI(){
  return {
    resumen: {
      grupos: {
        enTiempo: 20,
        fueraTiempo: 12,
      },
      areas: {
        enTiempo: 10,
        fueraTiempo: 5,
      },
      convenios: {
        enTiempo: 8,
        fueraTiempo: 0,
      },
      estadoGeneral: {
        gps: false,
        interfaces: true,
        grabadora: true,
      },
    },
    gruposFamiliares: {
      activos: 35,
      demorados: 22,
      cerrados: 15,
      cancelados: 32,
    },
    areasProtegidas: {
      activos: 5,
      demorados: 12,
      cerrados: 23,
      cancelados: 3,
    },
    convenios: {
      activos: 40,
      demorados: 4,
      cerrados: 120,
      cancelados: 30,
    },
    serviciosPorConvenio : [
      {
        type: "Pami",
        activos: 20,
        demorados: 5,
      }, {
        type: "Swiss",
        activos: 7,
        demorados: 2,
      }, {
        type: "Omint",
        activos: 2,
        demorados: 5,
      }
    ]
  };
}


export function getStateServiciosFromAPI(){
  return {
    serviciosCerrados: {
      horas: [
        7,8,9,10,11,12, 13
      ],
      serviciosPorEstado: [
        {color: "En Tiempo", cantidadPorHora: [14,  32,   56,   43,     0,    12,   9,    26,   70] },
        {color: "Demorados", cantidadPorHora: [23,  34,   12,   56,   234,    5,   65,   20,    10]},
        {color: "Cancelados", cantidadPorHora: [7,  8,    9,    10,    11,   12,   3,    41,    12]},
      ]
    },
    cerradosPorColor: {
      horas: [
        7,8,9,10,11,12,
      ],
      serviciosPorColor: [
        {color: "Rojos", cantidadPorHora: [14, 32, 56, 43, 0, 12, 9,] },
        {color: "Amarillos", cantidadPorHora: [23, 34, 12, 56, 234,]},
        {color: "Celestes", cantidadPorHora: [7,8,9,10,11,12,]},
        {color: "Verdes", cantidadPorHora: [7,8,9,10,11,12,]},
        {color: "Traslados", cantidadPorHora: [23, 34, 12, 56, 234,]},
        {color: "Eventos", cantidadPorHora: [7,8,9,10,11,12,]},
        {color: "Laboral", cantidadPorHora: [7,8,9,10,11,12,]},
        {color: "Enfermeria", cantidadPorHora: [23, 34, 12, 56, 234,]},
      ]
    },
    demoradosPorHora: {
      horas: [
        7,8,9,10,11,12,
      ],
      serviciosPorEstandar: [
        {color: "Asignacion", cantidadPorHora: [14, 32, 56, 43, 0, 12, 9,] },
        {color: "Viaje", cantidadPorHora: [23, 34, 12, 56, 234,]},
        {color: "TRTA", cantidadPorHora: [7,8,9,10,11,12,]},
      ]
    },
    tiempoRtaPorColor: {
      horas: [
        7,8,9,10,11,12,
      ],
      serviciosPorColor: [
        {color: "Rojos", cantidadPorHora: [14, 32, 56, 43, 0, 12, 9,] },
        {color: "Amarillos", cantidadPorHora: [23, 34, 12, 56, 234,]},
        {color: "Celestes", cantidadPorHora: [7,8,9,10,11,12,]},
        {color: "Verdes", cantidadPorHora: [7,8,9,10,11,12,]},
        {color: "Traslados", cantidadPorHora: [23, 34, 12, 56, 234,]},
        {color: "Eventos", cantidadPorHora: [7,8,9,10,11,12,]},
        {color: "Laboral", cantidadPorHora: [7,8,9,10,11,12,]},
        {color: "Enfermeria", cantidadPorHora: [23, 34, 12, 56, 234,]},
      ]
    },
  }
}