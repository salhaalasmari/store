import './App.css';
import Card from './Card';


function App() {
  const storeItems=[
    {
      cardTitle:"salha",
      cardText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardImg:'https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg',
    url:"/"
    },
    {
      cardTitle:"feyais",
      cardText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardImg:'https://www.rd.com/wp-content/uploads/2020/04/GettyImages-1093840488-5-scaled.jpg',
    url:"/"
      }, 
      {
        cardTitle:"noura",
      cardText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      cardImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaY4Ty6EAFV_snmJMqj2N0lROVm1dsFmbJMw&usqp=CAU',
    url:"/"
        }
];



  return (
    <Card storeItems={storeItems} />
 
  );
}

export default App;

