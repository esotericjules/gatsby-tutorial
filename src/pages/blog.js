import React from 'react'
import Layout from "../components/Layout";
import styles from "../components/blog.module.css";

const blog = () => {
    return   <Layout>
        <div className={styles.page}>
             <h1>This is our blog page</h1> 
            <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste autem voluptate sapiente mollitia minima voluptatem modi voluptatibus accusamus. Fugiat reprehenderit a, deleniti itaque quam vitae esse inventore recusandae exercitationem perferendis!</p>
        </div>
           
        </Layout>

}

export default blog


