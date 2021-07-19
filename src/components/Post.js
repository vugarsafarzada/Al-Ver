function Post(props){
    return (
        <div className="post" title={props.product_name}>
            <div className="post-img">
                <button className="btn post-fav-btn">
                    <i className={props.favorite ? "fas fa-heart text-danger" : "far fa-heart"} />
                </button>
            </div>
            <br />
            <b className="post-price">{props.product_price} ₼</b>
            <br />
            <span className="post-name">{props.product_name}</span>
            <br />
            <span className="post-date">Paylaşıldı: dd-mm-yyyy</span>
        </div>
    )
}

export default Post;