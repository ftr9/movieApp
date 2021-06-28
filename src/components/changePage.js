const ChangePage = (props) => {

    const { addPage, subPage, page } = props;

    return (
        <div className={"change__page"}>
            <i className="arrow alternate circle left outline icon" onClick={subPage}></i>
            {page}
            <i className="arrow alternate circle right outline icon" onClick={addPage}></i>
        </div>
    )
}

export default ChangePage
