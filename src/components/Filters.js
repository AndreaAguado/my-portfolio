import styles from '../styles/layout/Filters.module.scss';
import { useState } from 'react';

const Filters = (props) => {

    const [hidden, setHidden] = useState(true);
    const handleChange = (ev) => {
        props.handleSearch(ev.target.id, ev.target.value);
    }
    const handleFilter = () => {
        if (hidden) {
            setHidden(false)
        }
        else {
            setHidden(true);
        }
    }

    return (
        <>
            <form className={styles.projects_filter}>
                <i onClick={handleFilter} className="fas fa-search projects_filter_icon"></i>
                <div className={hidden ? `${styles.hidden}` :
                    `${styles.slide_animation} ${styles.filter_tags_container}`}>
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
                    <label htmlFor="all">
                        <input onChange={handleChange} type="radio" name="tags" id="all" value="all" />
                        Todos
                    </label>
                </div>
            </form>
        </>

    )
}
export default Filters;