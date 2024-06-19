import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostfFeedPage from './pages/PostfFeedPage'
import PostDetailsPage from './pages/PostDetailsPage'
import CreatePostPage from './pages/CreatePostPage'
import UserProfilePage from './pages/UserProfilePage'
import NotFoundPage from './pages/NotFoundPage'
import ResponsiveAppBar from './components/ResponsiveAppBar'

function App() {
  return (
    <>
  <ResponsiveAppBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Posts' element={<PostfFeedPage />} >
        <Route path=':id' element={<PostDetailsPage />} />
      </Route>
        <Route path='Create' element={<CreatePostPage />} />
      <Route path='/Profile' element={<UserProfilePage />} />
      <Route path='/*' element={<NotFoundPage />}/>
    </Routes>
    </>
  )
}

export default App