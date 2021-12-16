const Indicator = ({ text }) => {
    return (
        <div className="badge badge-secondary absolute top-0 right-0 z-20 opacity-90 text-xs">
            {text}
        </div>
    );
}

export default Indicator;