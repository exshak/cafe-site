import React from "react"

export const Sidenav = () => {
  return (
    <div
      style={{
        height: `100%`,
        width: `160px`,
        position: `fixed`,
        zIndex: 1,
        top: 200,
        left: 0,
        overflowX: `hidden`,
        paddingTop: `20px`,
      }}
    >
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
    </div>
  )
}
