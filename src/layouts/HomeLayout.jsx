import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header/Header';
import LatestNews from '../component/LatestNews/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto mt-2'>
                <LatestNews></LatestNews>
            </section>
            <main>
                <aside></aside>
                <section>
                    <Outlet></Outlet>
                </section>
                <aside></aside>
            </main>
            
        </div>
    );
};

export default HomeLayout;