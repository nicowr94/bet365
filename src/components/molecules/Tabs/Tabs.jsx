import React from 'react'
import "./Tabs.css";

export default function Tabs({children}) {
  return (
    <div className="Tabs_element">
        <div className="Tabs_content">
            <div className="Tabs_content_options active">Destacado</div>
            <div className="Tabs_content_options">Eventos principales</div>
        </div>

        {children}
    </div>
  )
}
