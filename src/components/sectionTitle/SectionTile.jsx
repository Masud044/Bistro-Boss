

const SectionTile = ({heading,subheading}) => {
    return (
        <div className="w-3/12 mx-auto text-center mb-4">
             <p className="text-yellow-500 mb-2">--- {subheading} ---</p>
             <h3 className="text-3xl uppercase border-y-2 py-4 text-black">{heading}</h3> 
        </div>
    );
};

export default SectionTile;
