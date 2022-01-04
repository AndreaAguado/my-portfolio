import '../styles/layout/Filters.scss';

const Filters = (props) => {

    const handleChange = (ev) => {
        props.handleSearch(ev.target.id, ev.target.value);
    }
    return (
        <form className="projects_filter">
            <label htmlFor="css">
                <input onChange={handleChange} type="radio" name="tags" id="css" value="css" />
                CSS
            </label>
            <label htmlFor="scss">
                <input onChange={handleChange} type="radio" name="tags" id="scss" value="scss" />
                SCSS
            </label>

            <label htmlFor="javascript">
                <input onChange={handleChange} type="radio" name="tags" id="javascript" value="javascript" />
                Javascript
            </label>
            <label htmlFor="react">
                <input onChange={handleChange} type="radio" name="tags" id="react" value="react" />
                React
            </label>

            <label htmlFor="nodejs">
                <input onChange={handleChange} type="radio" name="tags" id="nodejs" value="nodejs" />
                Node.js
            </label>
            <label htmlFor="sqlite">
                <input onChange={handleChange} type="radio" name="tags" id="sqlite" value="sqlite" />
                SQLite
            </label>

        </form>
    )
}
export default Filters;