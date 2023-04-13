import React, { useState, useEffect } from "react"

const LauncherShow = (props) => {

    const [launcher, setLauncher] = useState({})

    const launcherId = props.match.params.id 

    const getSpecificLauncher = async () => {
        const response = await fetch(`/api/v1/launchers/${launcherId}`)
        const parsedLauncherData = await response.json()
        setLauncher(parsedLauncherData.launcher)
    }

    useEffect(() => {
        getSpecificLauncher()
    }, [])

    return(
        <div>
            {launcher.name}
            <br></br>
            {launcher.bio}
        </div>
    )
}

export default LauncherShow