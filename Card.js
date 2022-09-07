const Card= ({storeItems})=>{
    const storeItemMap= storeItems.map((item) =>(
       
<div className="row">
<div className="card col " style={{width: 18 + 'em'}}>
  <img className="card-img-top" src={item.cardImg} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{item.cardTitle}</h5>
    <p className="card-text">{item.cardText}</p>
    <a href="/" class="btn btn-primary">{item.url}</a>
  </div>
</div>
</div>

      ))
        
        
        return(
        <>
        {storeItemMap}
        </>
        );
        

}
export default Card;