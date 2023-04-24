import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey - Get your daily dose of news for free`
    }
    async updateNews() {
        this.props.setProgress(0)
        this.setState({ loading: true })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.props.setProgress(30)
        let data = await fetch(url)
        this.props.setProgress(60)
        let parseData = await data.json()
        this.props.setProgress(80)
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100)

    }
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        // let data = await fetch(url)
        // let parseData = await data.json()
        // console.log(parseData)
        // this.setState({
        //     articles: parseData.articles,
        //     totalResults: parseData.totalResults,
        //     loading: false
        // })
        this.updateNews();
    }
    // handlePrevData = async () => {
    //     // this.setState({
    //     //     loading: true
    //     // })
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //     // let data = await fetch(url)
    //     // let parseData = await data.json()
    //     // console.log(parseData)
    //     // this.setState({
    //     //     articles: parseData.articles,
    //     //     page: this.state.page - 1,
    //     //     loading: false
    //     // })
    //     this.setState({ page: this.state.page - 1 })
    //     this.updateNews();
    // }

    // handelNextData = async () => {
    //     // this.setState({
    //     //     loading: true
    //     // })
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //     // let data = await fetch(url)
    //     // let parseData = await data.json()
    //     // console.log(parseData)
    //     // this.setState({
    //     //     articles: parseData.articles,
    //     //     page: this.state.page + 1,
    //     //     loading: false
    //     // })
    //     this.setState({ page: this.state.page + 1 })
    //     this.updateNews();
    // }

    fetchData = async () => {
        this.setState({ page: this.state.page + 1 })
        console.log(this.state.page)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loader: false
        })
    }
    render() {
        return (
            <div className='container my-5'>
                <h2 className='text-center mb-4'>NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">

                        <div className='row'>
                            {this.state.articles.map((e, index) => {
                                return (
                                    <div key={index} className='col-md-4'>
                                        <NewsItem title={e?.title}
                                            description={e?.description}
                                            url={e?.url}
                                            image={e?.urlToImage}
                                            author={e?.author} date={e?.publishedAt}
                                            source={e?.source?.name}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* } */}
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevData}>&larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handelNextData}>Next&rarr;</button>
                </div> */}
            </div>
        )
    }
}
