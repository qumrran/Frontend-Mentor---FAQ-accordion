import './App.scss';
import Questions from "./assets/components/Questions/Questions.js";
import FAQs from "./assets/components/FAQs.js";
import images from './assets/components/variables/images.js';

function App() {
  return (
    <div className="App">
      <main className='App__FaqContainer'>
        <header className='App__FaqContainer__header'>
        <img src={images.Star} alt='star icon' className='App__FaqContainer__header__faqStarImage' /> <h1 className='App__FaqContainer__header__faq'>FAQs </h1> 
        </header>
        <Questions className='App__FaqContainer_questions' FAQs={FAQs} />
      </main>
    </div>
  );
}

export default App;
