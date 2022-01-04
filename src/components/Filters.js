import '../styles/layout/Filters.scss';

const Filters = (props) => {

    const handleChange = (ev) => {
        console.log(ev.target.value);
        props.handleSearch(ev.target.value);
    }
    return (
        <form className="projects_filter">
            <label htmlFor="html">
                <input onChange={handleChange} type="checkbox" name="tags" id="html" value="html" />
                HTML
            </label>
            <label htmlFor="css">
                <input onChange={handleChange} type="checkbox" name="tags" id="css" value="css" />
                CSS/SASS
            </label>

            <label htmlFor="javascript">
                <input onChange={handleChange} type="checkbox" name="tags" id="javascript" value="javascript" />
                Javascript
            </label>
            <label htmlFor="react">
                <input onChange={handleChange} type="checkbox" name="tags" id="react" value="react" />
                React
            </label>

            <label htmlFor="nodejs">
                <input onChange={handleChange} type="checkbox" name="tags" id="nodejs" value="nodejs" />
                Node.js
            </label>
            <label htmlFor="sqlite">
                <input onChange={handleChange} type="checkbox" name="tags" id="sqlite" value="sqlite" />
                SQLite
            </label>

        </form>
    )
}
export default Filters;