import React from 'react'
import HeroImage from '../elements/HeroImage/HeroImage'
import { Link } from 'react-router-dom'
import SearchBar from '../elements/SearchBar/SearchBar'
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieThumbnail from '../elements/MovieThumb/MovieThumb'
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn'
import Spinner from '../elements/Spinner/Spinner'
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config'
import Carousel from 'react-multi-carousel'
import Slider from 'react-slick'
import './Home.scss'
import './slider.scss'
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import data from '../../data.json'
import data2 from '../../data2.json'

const movieList = data.data.contents.data
const movieList2 = data2.data.contents.data
console.log(movieList)

const movies = [
    {
        id: 1,
        original_title: 'test1 ',
        img_url: 'https://via.placeholder.com/400.png',
    },
    {
        id: 2,
        original_title: 'test1 ',
        img_url: 'https://via.placeholder.com/400.png',
    },
    ,
    {
        id: 3,
        original_title: 'test2 ',
        img_url: 'https://via.placeholder.com/400.png',
    },
    {
        id: 4,
        original_title: 'test3 ',
        img_url: 'https://via.placeholder.com/400.png',
    },
    {
        id: 5,
        original_title: 'test4 ',
        img_url: 'https://via.placeholder.com/400.png',
    },
    {
        id: 6,
        original_title: 'test5 ',
        img_url: 'https://via.placeholder.com/400.png',
    },
]

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <div>Logo</div>
                <ul className="nav__links">
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 2,
        paritialVisibilityGutter: 60,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        paritialVisibilityGutter: 50,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        paritialVisibilityGutter: 30,
    },
}

const images = [
    'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
]
const Section = ({ children }) => {
    return (
        <section
            style={{
                margin: '20px 0 20px 0',
            }}
        >
            {children}
        </section>
    )
}
// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.

const HorizontalList = ({ movies }) => {
    return (
        <div className="movie-col-container">
            {movies &&
                movies.map((elm, idx) => {
                    return (
                        <div key={idx} className="movie-column">
                            <div className="movie-item">
                                <img className="movie-img" src={elm.img_url} />
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

const CustomSlide = (props) => {
    return (
        <React.Fragment>
            <Link to={`/${props.id}`}>
                <div>
                    <img
                        className="artwork"
                        src={props.images && props.images.artwork}
                    />
                </div>
            </Link>
        </React.Fragment>
    )
}

const NextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: 'green',
                height: '80%',
                width: '40px',
            }}
            onClick={onClick}
        />
    )
}

const Home = ({
    // movies
    heroImage,
    loading,
    currentPage,
    totalPages,
    searchTerm,
    searchMovies,
    loadMoreMovies,
}) => {
    const settings = {
        nextArrow: <NextArrow />,
        dots: false,
        speed: 700,
        slidesToShow: 6.5,
        infinite: false,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    }
    return (
        <div className="rmdb-home">
            <Navbar />
            <div className="main-screen">testing</div>

            {/* <HorizontalList movies={movies} /> */}
            {/* <div>
            <Section>
                <Simple />
            </Section>
        </div> */}
            {/* <div> */}
            {/* <SearchBar callback={searchMovies} /> */}
            {/* <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title={heroImage.original_title}
                text={heroImage.overview}
            /> */}
            {/* </div> */}

            <div style={{ padding: '0 60px' }}>
                <Slider {...settings}>
                    {movieList.map((movie) => {
                        return <CustomSlide {...movie} />
                    })}
                </Slider>
            </div>

            <div style={{ padding: '0 60px' }}>
                <Slider {...settings}>
                    {movieList2.map((movie) => {
                        return <CustomSlide {...movie} />
                    })}
                </Slider>
            </div>

            <div>tests</div>

            {/* <div className="rmdb-home-grid">
            <FourColGrid
                header={searchTerm ? 'Search Result' : 'Latest'}
                loading={loading}
            >
                {movies &&
                    movies.length > 0 &&
                    movies.map((element, i) => (
                        <MovieThumbnail
                            key={i}
                            clickable={true}
                            image={
                                element.poster_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}`
                                    : './images/no_image.jpg'
                            }
                            movieId={element.id}
                            movieName={element.original_title}
                        />
                    ))}
            </FourColGrid>
            {loading ? <Spinner /> : null}
            {currentPage <= totalPages && !loading ? (
                <LoadMoreBtn text="Show More" onClick={loadMoreMovies} />
            ) : null}
        </div> */}
        </div>
    )
}

export default Home
