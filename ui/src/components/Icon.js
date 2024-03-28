const PlayerPlayIcon = ({ size }) => {
    return(
<svg role="img" height="20" width="20" viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" fill="black"></path>
</svg>
    )
}
const PlayerPauseIcon = ({ size }) => {
    return(
<svg role="img" height="20" width="20" viewBox="0 0 24 24"><path d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z" fill="black"></path>
</svg>
    )
}

export const Icon = ({name, size = 24}) => {
    const icons = {
        pplay: PlayerPlayIcon,
        ppause: PlayerPauseIcon
    }
    
    const Component = icons[name]
    return <Component size={size} />
}