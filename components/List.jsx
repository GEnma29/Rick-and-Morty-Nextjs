import React from 'react'

const List = ({ data }) => {
    return (
        <div className={Style.List}>
            <div className="HeaderList">
                location results: {data.info.count}
            </div>
            <div className="name">
                {data.results.name}
            </div>
            <div className="type">
                {data.results.type}
            </div>
            <div className="dimension">
                {data.results.type}
            </div>
            
        </div>
    )
}

export default List
