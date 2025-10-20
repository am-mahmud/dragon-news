import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header/Header';
import LatestNews from '../component/LatestNews/LatestNews';
import Navbar from '../component/Navbar/Navbar';
import LeftAside from '../component/HomeLayout/LeftAside';
import RightAside from '../component/HomeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <section className='w-11/12 mx-auto mt-2'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto mt-2'>
                <Navbar></Navbar>
            </nav>
            <main>
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section>
                    <Outlet></Outlet>
                </section>
                <aside>
                    <RightAside></RightAside>
                </aside>
            </main>
            
        </div>
    );
};

export default HomeLayout;