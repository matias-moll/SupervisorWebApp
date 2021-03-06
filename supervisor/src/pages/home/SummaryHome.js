import React from 'react'
import SummaryPanel from "../../layout/SummaryPanel";

export default function SummaryHome({summary}) {
  if(summary == null) return <p>Loading Summary...</p>;

  const {servicios, moviles, operadores, estadoGeneral} = summary;
  return (
    <div id="summary-container">
        <SummaryPanel
          category={{ title: "Servicios", icon: "fas fa-user-md fa-3x" }}
          items={[
            { key: "En Curso", value: servicios.enCurso },
            { key: "Cerrados", value: servicios.cerrados },
            { key: "Cancelados", value: servicios.cancelados },
          ]}
        />
        <SummaryPanel
          category={{ title: "Recursos", icon: "fas fa-ambulance fa-3x" }}
          items={[
            { key: "Activos", value: moviles.activos },
            { key: "Inactivos", value: moviles.fueraServicio },
          ]}
        />
        <SummaryPanel
          category={{ title: "Operadores", icon: "fas fa-users fa-3x" }}
          items={[
            { key: "Receptores", value: operadores.receptores },
            { key: "Despachadores", value: operadores.despachadores },
          ]}
        />
        <SummaryPanel
          category={{ title: "Estado Gral.", icon: "fas fa-info-circle fa-3x" }}
          items={[
            { key: "GPS", value: estadoGeneral.gps },
            { key: "Interfaces", value: estadoGeneral.interfaces },
            { key: "Grabadora", value: estadoGeneral.grabadora },
          ]}
        />
    </div>
  )
  
}
