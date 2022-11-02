function Categories({ allcategories, filterItem }) {
    return (
        <div className="btn-container">
            {allcategories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItem(category)}
                    >
                        {category}
                    </button>)
            })}
        </div>

    );
}

export default Categories;