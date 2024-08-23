import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'
import Hero from '../components/hero'
import Features from '../components/features'
import FAQuestions from '../components/faq'
import Faq from '../data/faq.json'
import '../styles/index.css'

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Features />
      <FAQuestions Faq={Faq}/>
    </div>
  )
}