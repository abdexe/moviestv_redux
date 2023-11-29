import { AppBar, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {CssBaseline} from '@mui/material'
import {Routes,Route } from 'react-router-dom'
import {Actors,MovieInformation,Profile,NavBar,Movies} from './index'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root} >
      <CssBaseline />
      <NavBar/>
      <main className={classes.content} >
        <div className={classes.toolbar} >
        <Routes>
          <Route path="/" element={<h1>Movies</h1>} />
          <Route path="/movie/:id" element={<h1>Movie Information</h1>} />
          <Route path="/actors:/id" element={<h1>Actor informations</h1>} />
          <Route path="/profile/:id" element={<h1>Profile</h1>} />
        </Routes>
        </div>
      </main>
      
    </div>
  )
}

export default App