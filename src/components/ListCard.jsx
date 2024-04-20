export const ListCard = ({extraClass,img,data}) => {
    return (
        <div className={`list-card ${extraClass}`}>
            <div className="list-card-head">
            <img
              className="list-icon"
              src={`/img/icon/${img}.svg`}
              alt={`${img}`}
            />
            Trending Blogs
            </div>
            <div className="list-card-body">
                <ul className="list">

                    {data.map(((item, index) => {
                            return index < 5 ? <li key={item.id} className="list-item">{item.title}</li> : "";
                            
                    }))}
                </ul>
            </div>
            
        </div>
    );
};