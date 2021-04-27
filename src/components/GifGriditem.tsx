
interface IGifMapped {
    image: {
        id: string,
        title: string,
        url: string
    }
}

export const GifGriditem = ( props: IGifMapped ) => {

    const { title, url } = props.image;

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p> { title } </p>
        </div>
    )
}
