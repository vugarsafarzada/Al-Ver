import React from 'react';
import Content from './components/Content';

function categories(props) {
    return (
      <div>
        <Content
          filter={true}
          label="Kateqoriyalar"
          categories={props.categories}
        />
      </div>
    );
}

export const getStaticProps = async () =>{
    const res = await fetch(process.env.CATEGORIES_API);
    const categories = await res.json();

    return{
        props: {
            categories
        }
    }
}

export default categories
