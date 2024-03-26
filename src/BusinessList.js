
import { Business } from "./Business";
import './BusinessList.css';
function BusinessList(){
    const listOfBusiness= Business.map((x,i)=>{
         return (
            <div id={"pizza"}>
                <div id='image'><img id="itemImage" src={x.img} alt="pizza image"></img></div>
                <div id="name">{x.name}</div>
                <div id="thirdcontext" >
                    <div id="place">
                      <div id="address">{x.address}</div>
                      <div id="city">{x.city}</div>
                      <div id="state">{x.state +" "+x.zipcode}</div>
                    </div>
                    <div id="ratingsColumn">
                      <div id="type">{x.category}</div>
                      <div id="ratings">{x.rating}</div>
                      <div id="reviewCount">{x.reviewCount}</div>
                    </div>
                </div>
                

                
            </div>
               );
    })
  return (
    <div id="itemList">
    <div id="item" >{listOfBusiness[0]}</div>
    <div id="item">{listOfBusiness[1]}</div>
    <div id="item">{listOfBusiness[2]}</div>
    <div id="item">{listOfBusiness[3]}</div>
    <div id="item">{listOfBusiness[4]}</div>
    <div id="item">{listOfBusiness[5]}</div>
    </div>
  )
}
export {BusinessList};