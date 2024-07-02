import React, { useEffect, useState } from "react";
import Card from "./Card";
import { CgChevronDown } from "react-icons/cg";
import './style.css';
import AOS from "aos";
import "aos/dist/aos.css"; 
function Section_1() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);
  const items = [
    { name: "Chocolate", value: "chocolate" },
    { name: "Strawberry", value: "strawberry" },
    { name: "Vanilla", value: "vanilla" },
  ];

  const cardDetail = [
    {
      name: "Card 1",
      location: "Location 1",
      amount: "$10",
      branch: "Branch 1"
    },
    {
      name: "Card 2",
      location: "Location 2",
      amount: "$20",
      branch: "Branch 2"
    },
    {
      name: "Card 2",
      location: "Location 2",
      amount: "$20",
      branch: "Branch 2"
    },
    {
      name: "Card 2",
      location: "Location 2",
      amount: "$20",
      branch: "Branch 2"
    },
    // Add more card details as needed
  ];

  const [userInput, setUserInput] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isOpen, setIsOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState(1);

  useEffect(() => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [userInput]);

  const handleRangeChange = event => {
    setRangeValue(event.target.value);
  };

  const handleInputChange = event => {
    setUserInput(event.target.value);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="mainSection">
        <div data-aos="zoom-in" className="sectionFilter py-5">
          <div className="sectionInnerFilter">
            <div className="filter_header_distance">
            <div className="filterHeader">
              <h1 className="filter_text text-xl font-semibold text-white">Filter</h1>
              <button className="filterButton">Remove all</button>
            </div>
            <div className="filterDistance">
              <p className="distance_text text-white">Distance</p>
              <input type="text" placeholder="Zip code or place" />
            </div>
            </div>
           <div className="range_context">
           <div className="rangeBox">
              <input
                id="rangeInput"
                className="range"
                type="range"
                min={1}
                max={30}
                value={rangeValue}
                onChange={handleRangeChange}
              />
              <p>{rangeValue}km</p>
            </div>
            <div className="filterContext">
              <h4>Max 30 Kilometres</h4>
              <p>Specialisms</p>
              <p>Training direction</p>
              <p>Project Management</p>
              <p>Education</p>
            </div>
           </div>
          </div>
        </div>
        <div className="sectionCard">
          <div>
            <div
              style={{
                display: "flex",
                alignItems:'center',
                justifyContent: "space-between",
                margin: "20px",
                marginTop: "5px",
                fontSize: "20px",
              }}
            >
              <div className="results text-[#B8A147]" style={{ fontWeight: "bolder" }}>22 Results</div>
              <div>
                <div className="sort-menu bg-[#B8A147] text-white">
                  Sort by :
                  <input
                  className="section_1_input bg-[#212121]"
                    type="text"
                    placeholder="Select..."
                    value={userInput}
                    onChange={handleInputChange}
                    onClick={handleDropdownToggle}
                  />
                  {isOpen && (
                    <ul className="dropdown z-10 section_input_li">
                      {filteredItems.length > 0 ? (
                        filteredItems.map(item => (
                          <li 
                            key={item.value}
                            onClick={() => {
                              setUserInput(item.name);
                              setIsOpen(false);
                            }}
                          >
                            {item.name}
                          </li>
                        ))
                      ) : (
                        <li>No results found</li>
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
           <div style={{padding:'0px 10px'}}>
           {cardDetail.map(item => (
              <Card
                key={item.name}
                name={item.name}
                location={item.location}
                amount={item.amount}
                branch={item.branch}
              />
            ))}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_1;
