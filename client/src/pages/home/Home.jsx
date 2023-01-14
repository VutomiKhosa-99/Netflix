import React from 'react'
import { useState, useEffect } from 'react'
import Featured from '../../Components/featured/Featured'
import List from '../../Components/list/List'
import Navbar from '../../Components/navbar/Navbar'
import './home.scss'

function Home({type}) {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}&${genre ?  "&genre" + genre : ""}`, {
            header: {
              token: "Bearer "
            }
          }
          )
          setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomLists()
  }, [type, genre])
  return (
    <div className="home">
        <Navbar />
        <Featured type={type} />
        {lists.map((list) => (
          <List  list={list}/>
        ))}
    </div>
  )
}

export default Home