
export default function Audio (props) {
    if(props.url === null)

    return (
        <>
            <audio ref={audioPlayer} src={podCast.url} preload="metadata"></audio>
        </>
    )
}