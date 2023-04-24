import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, url, image, author, date, source } = this.props
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                        <span className="badge rounded-pill bg-danger">
                            {source ? source : ''}
                        </span>
                    </div>
                    <img src={image ? image : ''} className="card-img-top" style={{ height: "250px", objectFit: "cover" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title : ""}
                        </h5>
                        <p className="card-text">{description ? description : ''}</p>
                        <p className="card-text"><small className="text-muted">By <span className='text-danger'>{author ? author : ''}</span> on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" target='_blank' href={url ? url : ''} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
