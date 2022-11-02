function MenuItems({ items }) {
    return (
        <div className='section-center'>
            {items.map((item) => {
                const { img, title, price, desc } = item;
                return (
                    <article className="menu-item" key={title}>
                        <img src={img} alt={title} className="photo" />
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className="price">${price}</h4>
                            </header>
                            <p>{desc}</p>
                        </div>
                    </article>)

            })}

        </div>
    );
}

export default MenuItems;