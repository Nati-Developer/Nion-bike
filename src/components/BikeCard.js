const BikeCard = ({ imgURL, changeBigBikeImage, bigBikeImage}) => {

  const handleClick = () => {
    if (bigBikeImage !== imgURL.bigBike) {
      changeBigBikeImage(imgURL.bigBike)
    }
  }
  return (
    <div className={`border-2 rounded-xl
    ${bigBikeImage === imgURL.bigBike
        ? 'border-coral-red'
        : 'border-transparent'
      } cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="bike collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default BikeCard