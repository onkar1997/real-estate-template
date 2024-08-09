const BrandLogo = () => {
  return (
    <section className="flex gap-12 h-[100px] items-center overflow-x-auto md:justify-center sm:px-5  md:h-[200px] md:py-5">
        <div className="h-20 min-w-[6rem] grid place-content-center">
            <img src="/brands/brand1.png" alt="brand1 logo" />
        </div>

        <div className="h-20 min-w-[6rem] grid place-content-center">
            <img src="/brands/brand2.png" alt="brand2 logo" />
        </div>

        <div className="h-20 min-w-[6rem] grid place-content-center">
            <img src="/brands/brand3.png" alt="brand3 logo" />
        </div>

        <div className="h-20 min-w-[6rem] grid place-content-center">
            <img src="/brands/brand4.png" alt="brand4 logo" />
        </div>

        <div className="h-20 min-w-[6rem] grid place-content-center">
            <img src="/brands/brand5.png" alt="brand5 logo" />
        </div>
    </section>
  )
}

export default BrandLogo