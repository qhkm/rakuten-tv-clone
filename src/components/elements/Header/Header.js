import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import HeroImage from '../HeroImage/HeroImage'
import SearchBar from '../SearchBar/SearchBar'
import FourColGrid from '../FourColGrid/FourColGrid'
import MovieThumb from '../MovieThumb/MovieThumb'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Spinner from '../Spinner/Spinner'

const Header = ({
    movies,
    heroImage,
    loading,
    currentPage,
    totalPages,
    searchTerm,
    searchMovies,
    loadMoreMovies,
}) => <div className="rmdb-header" />

export default Header
