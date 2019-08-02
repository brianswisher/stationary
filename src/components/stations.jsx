import React from "react"

const Stations = () => {
  const { data } = require('./stationsPayload')

  console.log('=>', data)

  return (
    <div>
      Stations
    </div>
  )
}

export default Stations
