const AddRemoveBtn = () => {

    const handleClick = () => {
        console.log('click');
    }

    return (
        <button onClick={handleClick} className="btn absolute top-0 left-0 z-20 p-2 rounded-none  opacity-80 text-lg">+</button>
    );
}

export default AddRemoveBtn;