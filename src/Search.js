import React, { useState, useEffect } from "react";

function Search() {
  const simple = [
    {
      "id": 1,
      "name": "Faiarway Road and wilson street Road",
      "number": "0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada"
    },
    {
        "id": 2,
        "name": "Richarodson  ",
        "number": "0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada"
      },
      {
        "id": 3,
        "name": "gachibowli ",
        "number": "0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada"
      },
    {
      "id": 4,
      "name": "secenderabad ",
      "number":'0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada'
    },
    {
        "id": 7,
        "name": "tolichowki ",
        "number":'0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada'
      },
    {
      "id": 5,
      "name": "golconda",
      "number": '0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada'
    },
    {
      "id": 6,
      "name": "nampally",
      "number": '0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada'
    }
  ];

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    updateSearchResults("");
  }, []);

  const updateSearchResults = (inputValue) => {
    if (inputValue.trim() === "") {
      setSearchResults([
       
      ]);
    } else {
      const results = simple.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()));

      setSearchResults(results);
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    updateSearchResults(inputValue);
  };

  return (
    <>
      <div className="SearchDiv">
        <div className="imgAndInputDiv">
          <div className="SecondimgAndInputDiv">
            <center>
              <img src="https://rajdhanisweets.ca/wp-content/uploads/2021/03/logo.png" className="BackgroundImg" alt="Logo" />
            </center>
          </div>
          <p className="pTag1">Rajdhani Sweets & Restaurant</p>
          <input
            placeholder="search here"
            className="inputOne"
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="inputSecondDiv">
        {searchResults.length > 0 ? (
          searchResults.map(result => (
            <div key={result.id} className="searchOutputDiv">
              <p >{result.name}</p>
              <i class="fa-solid fa-location-dot" style={{color:"orangered",marginLeft:"1%",fontSize:"20px"}}></i><p className="praSeven"> {result.number}</p><br/>
              <i class="fa-solid fa-phone" style={{color:"orangered",marginTop:"-1%",marginLeft:"1%"}}></i> <span className="number"> +91 (905)777-888</span>
              <div className="IconAndBtnDiv" >
              <i class="fa-solid fa-person-biking" style={{marginLeft:"1%",color:"orangered" }}></i>
              <i class="fa-solid fa-bag-shopping" style={{marginLeft:"1%" ,color:"orangered" }}></i>
             <a href="https://tikme.co/" className="OrderNowBtn">  <button style={{background:"green"}} >Order Now</button></a> 
                </div>
            </div>
          ))
        ) : (
          <div className="mainDiv" >
              <div className="searchOutputDiv">
              <p>Faiarway Road and wilson street Road</p>
              <i class="fa-solid fa-location-dot" style={{color:"orangered",marginLeft:"1%",fontSize:"20px"}}></i><p className="praSeven">0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada</p><br/>
              <i class="fa-solid fa-phone" style={{color:"orangered",marginTop:"-1%",marginLeft:"1%"}}></i> <span className="number"> +91 (905)777-888</span>
              <div className="IconAndBtnDiv" >
              <i class="fa-solid fa-person-biking" style={{marginLeft:"1%",color:"orangered" }}></i>
              <i class="fa-solid fa-bag-shopping" style={{marginLeft:"1%" ,color:"orangered" }}></i>
              <a href="https://tikme.co/" className="OrderNowBtn">  <button style={{background:"green"}} >Order Now</button></a> 
                </div>
            </div>
            <div className="searchOutputDiv">
                <div className="openAndPraDiv">
                <p className="pra">Richarodson st and  </p>
                <button className="openDivbtn">open At 11pm </button>
                </div>

              <i class="fa-solid fa-location-dot" style={{color:"orangered",marginLeft:"1%",fontSize:"20px",marginTop:"0%"}}></i><p className="praSeven">0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada</p><br/>
              <i class="fa-solid fa-phone" style={{color:"orangered",marginTop:"-1%",marginLeft:"1%"}}></i> <span className="number"> +91 (905)777-888</span>
              <div className="IconAndBtnDiv" >
              <i class="fa-solid fa-person-biking" style={{marginLeft:"1%",color:"orangered" }}></i>
              <i class="fa-solid fa-bag-shopping" style={{marginLeft:"1%" ,color:"orangered" }}></i>
              <a href="https://tikme.co/" className="OrderNowBtn1">  <button style={{background:"rgba(33, 26, 172, 0.781)",color:"white"}} >pre order Now</button></a> 
                </div>
              </div>
              <div className="searchOutputDiv">
              <div className="openAndPraDiv">
                <p className="pra">Richarodson st and  </p>
                <button className="openDivbtn">open At 11pm </button>
                </div>

              <i class="fa-solid fa-location-dot" style={{color:"orangered",marginLeft:"1%",fontSize:"20px",marginTop:"0%"}}></i><p className="praSeven">0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada</p><br/>
              <i class="fa-solid fa-phone" style={{color:"orangered",marginTop:"-1%",marginLeft:"1%"}}></i> <span className="number"> +91 (905)777-888</span>
              <div className="IconAndBtnDiv" >
              <i class="fa-solid fa-person-biking" style={{marginLeft:"1%",color:"orangered" }}></i>
              <i class="fa-solid fa-bag-shopping" style={{marginLeft:"1%" ,color:"orangered" }}></i>
              <a href="https://tikme.co/" className="OrderNowBtn1">  <button style={{background:"rgba(33, 26, 172, 0.781)",color:"white"}} >pre order Now</button></a> 
                </div>
              </div>
              <div className="searchOutputDiv">
              <p>Faiarway Road and wilson street Road</p>
              <i class="fa-solid fa-location-dot" style={{color:"orangered",marginLeft:"1%",fontSize:"20px"}}></i><p className="praSeven">0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada</p><br/>
              <i class="fa-solid fa-phone" style={{color:"orangered",marginTop:"-1%",marginLeft:"1%"}}></i> <span className="number"> +91 (905)777-888</span>
              <div className="IconAndBtnDiv" >
              <i class="fa-solid fa-person-biking" style={{marginLeft:"1%",color:"orangered" }}></i>
              <i class="fa-solid fa-bag-shopping" style={{marginLeft:"1%" ,color:"orangered" }}></i>
              <a href="https://tikme.co/" className="OrderNowBtn">  <button style={{background:"green"}} >Order Now</button></a> 
                </div>
              </div>
              <div className="searchOutputDiv">
              <p>Faiarway Road and wilson street Road</p>
              <i class="fa-solid fa-location-dot" style={{color:"orangered",marginLeft:"1%",fontSize:"20px"}}></i><p className="praSeven">0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada</p><br/>
              <i class="fa-solid fa-phone" style={{color:"orangered",marginTop:"-1%",marginLeft:"1%"}}></i> <span className="number"> +91 (905)777-888</span>
              <div className="IconAndBtnDiv" >
              <i class="fa-solid fa-person-biking" style={{marginLeft:"1%",color:"orangered" }}></i>
              <i class="fa-solid fa-bag-shopping" style={{marginLeft:"1%" ,color:"orangered" }}></i>
              <a href="https://tikme.co/" className="OrderNowBtn">  <button style={{background:"green"}} >Order Now</button></a> 
                </div>
              </div>
              <div className="searchOutputDiv">
              <div className="openAndPraDiv">
                <p className="pra">Richarodson st and  </p>
                <button className="openDivbtn">open At 11pm </button>
                </div>

              <i class="fa-solid fa-location-dot" style={{color:"orangered",marginLeft:"1%",fontSize:"20px",marginTop:"0%"}}></i><p className="praSeven">0077 horontaario st & roy lowsan blvd,brompot ON l6Y 4MP3 canada</p><br/>
              <i class="fa-solid fa-phone" style={{color:"orangered",marginTop:"-1%",marginLeft:"1%"}}></i> <span className="number"> +91 (905)777-888</span>
              <div className="IconAndBtnDiv" >
              <i class="fa-solid fa-person-biking" style={{marginLeft:"1%",color:"orangered" }}></i>
              <i class="fa-solid fa-bag-shopping" style={{marginLeft:"1%" ,color:"orangered" }}></i>
              <a href="https://tikme.co/" className="OrderNowBtn1">  <button style={{background:"rgba(33, 26, 172, 0.781)",color:"white"}} >pre order Now</button></a> 
                </div>
              </div>
              <footer className="footer">
        <center>	<p className="Copyright "> &#169; Copyright TikMe lnc.|Privacy policy </p></center>
    </footer>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;




