import React from 'react'
import Hero from '../components/Header/Hero';
import PostContainer from '../components/Posts/PostContainer';
import Newsletter from '../components/Newsletter/Newsletter';


const Welcome = () => {
    return (
        <div>
            <Hero/>
            <PostContainer/>
            <Newsletter/>
        </div>
    )
}

export default Welcome
