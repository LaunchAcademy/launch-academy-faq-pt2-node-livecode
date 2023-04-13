import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const LauncherList = props => {
  const [launchers, setLaunchers] = useState([])

  const getAllLaunchers = async () => {
    const response = await fetch("/api/v1/launchers")
    const parsedLauncherData = await response.json()
    setLaunchers(parsedLauncherData.launchers)
  }

  useEffect(() => {
    getAllLaunchers()
  }, [])

  const launcherList = launchers.map(launcher => {
    return (
      <li key={launcher.id}>
        <Link to={`/launchers/${launcher.id}`}> 
          {launcher.name} 
        </Link>
      </li>
    )
  })

  return (
    <div>

      <h1>I AM THE LAUNCHER LIST </h1>

      <ul>{launcherList}</ul>
    </div>
  )
}

export default LauncherList
