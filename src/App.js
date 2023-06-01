import logo from './logo.svg';
import './App.css';
import blanket from './blanket.jpg';
import walk from './walk.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Hobbies</h1>
        <p>I have a lot of hobbies which I enjoy. 
          They keep my mind active, provide entertainment, 
          exercise and relaxation. Read on for more details 
          about my favourite ones.</p>
        <ul className="list">
          <li><a href="#crochet">Crochet</a></li>
          <li><a href="#reading">Reading</a></li>
          <li><a href="#yoga">Yoga and Pilates</a></li>
          <li><a href="#walking">Walking</a></li>
        </ul>
      
      </header>
      <div className='crochet'>
        <h2 id="crochet">Crochet</h2>
        <p>Crochet is a craft in which yarn is worked with a crochet 
          hook in order to create items. Different stitches are 
          worked by wrapping the yarn around the hook and creating 
          loops and stitches. I have made several blankets using 
          crochet and enjoy selecting interesting colour 
          combinations.</p>
        <p id="blanketExample">This is a blanket I made</p>
        <img src={blanket} alt="This is a blanket" className='blanketimg'/>
      </div>

      <div className='Reading'>
        <h2 id="reading">Reading</h2>
        <p>I have enjoyed reading from a young age. 
          I find it relaxing during stressful times to escape 
          into the other worlds created by authors. I particularly 
          enjoy books set in different times or countries. 
          Some of my favourite authors are <em>Santa Montefiore </em> 
          and <em>Lucina Riley</em>.</p>
            <a href="https://santamontefiore.co.uk/">
            <img className="book" src="https://santamontefiore.co.uk/wpress/wp-content/uploads/2018/01/daughters-of-castle-deverill-uk.jpg"/>
            </a>
            <a href="https://lucindariley.co.uk/">
            <img className="book" src="https://lucindariley.co.uk/wp-content/uploads/2017/04/UK-The-Seven-Sisters-new-edition-1.jpg"/>
            </a>
            <p id="bookLink">Click on a book to find out more about the author</p>
        
      </div>

      <div className='YogaPilates'>
        <h2 id='yoga'>Yoga and Pilates</h2>
        <p>I have practised yoga and pilates for several years. 
          As I have a busy family life I find it difficult to get 
          out to classes but there are many great instructors 
          on YouTube, including   
          <a href="https://www.youtube.com/channel/UCX32D3gKXENrhOXdZjWWtMA"
          target="_blank">
            <span className="Link"> Yoga with Kassandra
            </span>
          </a> and  
          <a href="https://www.youtube.com/c/MoveWithNicole" 
          target="_blank">
            <span className="Link"> Move with Nicole
            </span>
          </a>. I try to practise most days and find it has increased my strength and flexibility.</p>
      </div>

      <div className='Walking'>
        <h2 id='walking'>Walking</h2>
        <p>I find walking a great hobby for both my physical 
          and mental wellbeing. I try to walk serveral times a 
          week and am lucky to live in the countryside. If I am 
          on my own I enjoy listening to podcasts while I walk. 
          We also enjoy walking as a family and it is great to 
          get the kids outside to burn off energy whilst 
          enjoying conversations with them.</p>
          <img src={walk} alt="Enjoying a walk" className='walking'/>
          <p id="walkExample">Here are my family enjoying a walk on holiday in Cornwall</p>
      </div>


    </div>
  );
}

export default App;
