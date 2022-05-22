import React, {useEffect, useState} from 'react';
import { useRouter } from "next/router";
import styles from '../../styles/BlogPost.module.css'
import * as fs from 'fs';

// only one dynamic route use in one file



// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

const Slug = (props) => {
    function createMarkup(c) {
        return {__html: c};
    }
    const [blog, setBlog] = useState(props.myBlog);

    // const router = useRouter();
    //
    // useEffect(()=>{
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     fetch(`http://localhost:3001/api/getblog?slug=${slug}`).then((data)=>{
    //         return data.json();
    //     })
    //     .then((parsed)=>{
    //        setBlog(parsed)
    //     })
    // }, [router.isReady])
    return (
        <div className={styles.container}>
            {/*this is { slug }.*/}
            <main className={styles.main}>
                  <h1>{blog && blog.title}</h1>
                 <hr/>
                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.description)} /> }
                   {/*<div>*/}
                    {/*{blog && blog.description}*/}
                {/*</div>*/}
           </main>
        </div>
    );
};

//static side paths
export async function getStaticPaths(){
    return{
        paths: [
            { params: { slug: 'how-to-learn-js' } },
            { params: { slug: 'how-to-learn-react' } }
        ],
        fallback: true
    };
}

//static side props
export async function getStaticProps(context) {
    console.log(context)
    const {slug} = context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) },
    }
}

// server side props
// export async function getServerSideProps(context){
//     const { slug } = context.query;
//     let data = await fetch(`http://localhost:3001/api/getblog?slug=${slug}`)
//     let mydata = await data.json()
//     return{
//         props: {mydata}
//     }
// }
export default Slug;