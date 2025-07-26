const Banner = ({showBookDetails}) => {
    const {image} = showBookDetails
    return(
      <div className="self-center justify-items-center">
        <img src={image} className="h-140"/>
      </div>
    )
}

export default Banner