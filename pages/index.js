import { info } from 'autoprefixer'
import {React, useState, useEffect} from 'react'
import ButtonFloat from '../components/ButtonFloat';
import Header from '../components/Header'
import styles from './index.module.css'
const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

export async function getServerSideProps(context) {
    const res = await fetch(defaultEndpoint)
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
const HomePage= ({ data }) => {
  const { info, results: defaultResults = [] } = data;

  const [page, updatePage] = useState({
    current: defaultEndpoint,
    next: info?.next
  });
  const { current, prev } = page;

  const [results, updateResults] = useState(defaultResults);

  useEffect(() => {
    if ( current === defaultEndpoint ) return;

    async function request() {
      const res = await fetch(current)
      const nextData = await res.json();
      const { info: nextInfo, results: nextResults = [] } = nextData;

      updatePage(prev => {
        return {
          ...prev,
          ...nextInfo
        }
      });

      if ( !nextInfo?.prev ) {
        updateResults(nextResults);
        return;
      }

      updateResults(prev => {
        return [
          ...prev,
          ...nextResults
        ]
      });
    }
    request();
  }, [current])

  function handleLoadMore() {
    updatePage(prev => {
      return {
        ...prev,
        current: page?.next
      }
    });
  }
    return (
        <div className={styles.Bodypage} >
            <Header />
            <div className={styles.container}>
                {results.map(result=>{
                    const {id, name, image, status,} = result;

                    return(
      
                          <li key ={id} className={styles.card}>
                            <img src={image} alt={`${name}`} />
                            <h4>{name}</h4>
                            </li>
                    )
                })}

            </div>
            <ButtonFloat>
              <button className={styles.btn} onClick={handleLoadMore} >Load More</button>
            </ButtonFloat>
        </div>
    )

}

export default HomePage
