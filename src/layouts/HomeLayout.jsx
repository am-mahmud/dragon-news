import React from 'react';
import { Outlet } from 'react-router';
import Header from '../component/Header/Header';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
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