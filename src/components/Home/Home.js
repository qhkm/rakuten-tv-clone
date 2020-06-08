import React from 'react'
import HeroImage from '../elements/HeroImage/HeroImage'
import SearchBar from '../elements/SearchBar/SearchBar'
import FourColGrid from '../elements/FourColGrid/FourColGrid'
import MovieThumbnail from '../elements/MovieThumb/MovieThumb'
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn'
import Spinner from '../elements/Spinner/Spinner'
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config'
import './Home.scss'

const movies = [
    {
        id: 1,
        original_title: 'test1 ',
    },
    { id: 2, original_title: 'test1 ' },
    ,
    { id: 3, original_title: 'test2 ' },
    { id: 4, original_title: 'test3 ' },
    { id: 5, original_title: 'test4 ' },
    { id: 6, original_title: 'test5 ' },
]

const Navbar = () => {
    return (
        <div>
            <nav>
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
            Navbar
        </div>
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
}) => (
    <div className="rmdb-home">
        <Navbar />
        <div>
            <SearchBar callback={searchMovies} />
            {/* <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title={heroImage.original_title}
                text={heroImage.overview}
            /> */}
        </div>

        <div className="rmdb-home-grid">
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
        </div>
    </div>
)

export default Home
