import "./Title.css"
function title ({subtitle, maintitle}) {
    return(
        <div className="Title">
            <p className="title__subtitle">{subtitle}</p>
            <h3 className="title__main-title">{maintitle}</h3>
        </div>

    )
}
export default title;