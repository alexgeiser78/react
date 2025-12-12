export function MoodBoardItem({color, image, description}){
  return(
    <div className="mood-board-item"
    style={{ backgroundColor: color }}>
    <img className="mood-board-image"  src={image}/>
    <h3 className="mood-board-text">{description}</h3>
    </div>
  )
}

export function MoodBoard(){
 return( <div>
 <h1 className="mood-board-heading">Destination Mood Board</h1>
 <div className="mood-board">
  <MoodBoardItem
  color="red" image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="waouh"/>
   <MoodBoardItem 
   color="green" image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="super"/>
    <MoodBoardItem color="blue" image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg" description="yeah"/>

 </div>
 </div>)
}

function App() {
  return <MoodBoard />;
}
