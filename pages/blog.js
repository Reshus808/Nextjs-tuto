import React, {useEffect, useState} from 'react';
import styles from "../styles/Blog.module.css";
// import Image from "next/image";
import Link from "next/link";
import * as fs from 'fs';


// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
    console.log(props)
    const [blogs, setBlogs] = useState(props.allblogs);
    //not show content html page
    // const [blog, setBlog] = useState();
    // useEffect(()=>{
        // console.log("useEffect is running");
        // fetch('http://localhost:3001/api/blogs').then((data)=>{
        //     return data.json();})
        //     .then((parsed)=>{
        //         console.log(parsed)
        //         setBlogs(parsed)
        // })
    // }, [])
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.heading}>Blog Page</h1>
                {blogs.map((blogitems)=>{
                  return <div key={blogitems.title} className={styles.blogItem}>
                        <Link href={`/blogpost/${blogitems.slug}`}><h3 >{blogitems.title}</h3></Link>
                        <p>{blogitems.metadesc.substr(0, 150)}...</p>
                    </div>
                })}
               {/*</div>*/}
            </main>
        </div>
    );
};

export async function getStaticProps(context){
    // console.log(context)
    let data = await fs.promises.readdir('blogdata');
    let myfiles;
    let allblogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfiles = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
        allblogs.push(JSON.parse(myfiles))
    }
    return {
        props: {allblogs},
    }
}

//show content html and handle by server side
// export async function getServerSideProps(context){
//     // console.log(context)
//     let data = await fetch('http://localhost:3001/api/blogs')
//     let allblogs = await data.json()
//     return {
//         props: {allblogs},
//     }
// }

export default Blog;