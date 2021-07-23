function Categories(props) {
    if (props.categories) {
        var categorieList = props.categories.map(item => (
            <a href={"/search?categoryId=" + item.id} key={item.id - 1} className="category-box">
                <b className="category-label">{item.categoryName}</b> 
            </a>
        ))
    }

    return (
        <div className="categories">
            <div className="content">
                <div className="categories-box">
                    {categorieList}
                </div>
            </div>
        </div>
    )
}

export default Categories;