const Project = () => {
  return (
    <section className="p-5 flex flex-col gap-5 max-w-[1200px] mx-auto">
        <h2>Our collection <br />
            best project
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-[320px] md:max-w-[1200px]">
          <picture>
            <source
              media="(min-width: 799px)"
              srcSet="/projects/bigProject1.png"
            />
            <source 
              media="(max-width: 800px)"
              srcSet="/projects/project1.png"
            />
            <img src="/projects/project1.png" alt="project image1" />
          </picture>

          <picture>
            <source
              media="(min-width: 799px)"
              srcSet="/projects/bigProject2.png"
            />
            <source 
              media="(max-width: 800px)"
              srcSet="/projects/project2.png"
            />
            <img src="/projects/project2.png" alt="project image2" />
          </picture>

          <picture>
            <source
              media="(min-width: 799px)"
              srcSet="/projects/bigProject3.png"
            />
            <source 
              media="(max-width: 800px)"
              srcSet="/projects/project3.png"
            />
            <img src="/projects/project3.png" alt="project image3" />
          </picture>

          <picture>
            <source
              media="(min-width: 799px)"
              srcSet="/projects/bigProject4.png"
            />
            <source 
              media="(max-width: 800px)"
              srcSet="/projects/project4.png"
            />
            <img src="/projects/project4.png" alt="project image4" />
          </picture>
        </div>
    </section>
  )
}

export default Project