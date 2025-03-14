type SectionTitleProps = {
    heading: string;
    subHeading: string;
}

const SectionTitle = ({
    heading,
    subHeading
  
  }: SectionTitleProps) => {
    return (
      <div className="py-5 ">
        {heading ? (
          <h3 className="text-3xl font-semibold">{heading}</h3>
        ) : (
          ""
        )}
        {subHeading ? (
          <h1 className="text-secondaryColor ">
            {subHeading}
          </h1>
        ) : (
          ""
        )}
      </div>
    );
  };
  
  export default SectionTitle;