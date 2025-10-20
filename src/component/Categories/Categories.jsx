import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json")
.then((res)=> res.json())

const Categories = () => {

    const categories = use(categoryPromise)


    return (
        <div>
           <h2 className='font-semibold'>All Categories</h2>

           <div className='grid grid-cols-1 gap-1'>
            {
            categories.map(category=> <NavLink key={category.id} className='btn bg-base-100 border-0 hover:bg-base-200' to={`/category/${category.id}`}>{category.name}</NavLink>)
            }
           </div>
        </div>
    );
};

export default Categories;