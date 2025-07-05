import './App.css'
import Category from './components/category/Category.jsx'
import Email from './components/email/Email.jsx'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header'
import Hero from './components/hero/Hero.jsx'
import Posts from './components/posts/Posts.jsx'
import Recent from './components/recent/Recent.jsx'

function App() {
  return (
  <>
    <Header/>
    <Hero/>
    <Category/>
    <Posts/>
    <Recent/>
    <div className='ftr'>
      <Email/>
      <Footer/>
    </div>
  </>
  )
}

export default App
