import React from 'react'
import Header from '../components/Header'
import styles from './location.module.css'
export async function getServerSideProps(context) {
    const res = await fetch(`https://rickandmortyapi.com/api/location`)
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
        data
      }, // will be passed to the page component as props
    }
  }
const location = ( { data }) => {
  //const {results = []} = data;
  console.log('data',data)
    return (
        <div className={styles.Bodypage}>
            <Header />
            <div className={styles.container}>
            <div className={styles.List}>
              </div>
            </div>
            </div>
 
    )

}

export default location
