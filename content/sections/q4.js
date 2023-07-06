import React, {useState} from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import dropdownicon from "../images/dropdown-icon.png"
import Mountain from "../images/Mountain.png"
import ocean from "../images/ocean.png"
import desert from "../images/desert.png"
import forest from "../images/forest.png"



const Q3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [hoveredOption, setHoveredOption] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };
      const handleMouseEnter = (option) => {
        setHoveredOption(option);
      };
    
      const handleMouseLeave = () => {
        setHoveredOption('');
      };
    
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        <span>Task 4:</span> Build a component
                    </h3>
                    <p>In this section, you are required to build a new component based on a Figma design and prototype. The component's function should be to change the image displayed based on the item selected in the dropdown. Implement this functionality using HTML, CSS, and JavaScript.</p>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                    <a href="https://www.figma.com/file/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=16-26&mode=design&t=LMCvfVQBL3S5dApY-0" target="_blank" ><FigmaButton>Figma</FigmaButton></a>
                        <a href="https://www.figma.com/proto/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=36-559&t=YPqmYSs8rLq2ahId-1&scaling=min-zoom&page-id=30%3A35&starting-point-node-id=36%3A230" target="_blank" ><PrototypeButton>Prototype</PrototypeButton></a>
                    </AnswerDiv>
                </QuestionsGrid>
                <Dropdown>
                    <button class = "dropdown-button" onClick={toggleDropdown}>{isOpen ? 'Dropdown' : (selectedItem ? selectedItem : 'Dropdown')}<span><img src = {dropdownicon} style={{ width: '8px', height: '5.01px' }}/></span></button>
                    {isOpen && (
                    <ul>
                        <li><button onClick={() => handleItemClick('Mountain')}
                        onMouseEnter={() => handleMouseEnter('Mountain')}
                        onMouseLeave={handleMouseLeave}
                        >
                            Mountain</button></li>
                        <li><button onClick={() => handleItemClick('Forest')}
                        onMouseEnter={() => handleMouseEnter('Forest')}
                        onMouseLeave={handleMouseLeave}
                        >
                            Forest</button></li>
                        <li><button onClick={() => handleItemClick('Ocean')}
                        onMouseEnter={() => handleMouseEnter('Ocean')}
                        onMouseLeave={handleMouseLeave}
                        >
                            Ocean</button></li>
                        <li><button onClick={() => handleItemClick('Desert')}
                        onMouseEnter={() => handleMouseEnter('Desert')}
                        onMouseLeave={handleMouseLeave}
                        >
                            Desert</button></li>
                    </ul>
                    )}
                        {hoveredOption && (
      <div className="image-container">
        {hoveredOption === 'Mountain' && <img src={Mountain} alt="Mountain Image" className="dropdown-image" />}
        {hoveredOption === 'Forest' && <img src={forest} alt="Forest Image" className="dropdown-image" />}
        {hoveredOption === 'Ocean' && <img src={ocean} alt="Ocean Image" className="dropdown-image" />}
        {hoveredOption === 'Desert' && <img src={desert} alt="Desert 1 Image" className="dropdown-image" />}
      </div>
    )}
                </Dropdown>
            </StyledContainer>
        </StyledWrapper>
    )
}

export default Q3

const StyledWrapper=styled(Wrapper)`
background:#F6F7F9;
`
const Title = styled.div`
h3{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsGrid = styled.div`
`
const StyledContainer = styled(Container)`
margin-top:0;
`
const ImageDiv = styled.div`
img{
    width:300px;
}
`
const AnswerDiv = styled.div`
align-self:center;
display: flex;
flex-direction:row;
button{
    margin:0 10px;
}
`
const FigmaButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #2684FE;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const PrototypeButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #FFFFFF;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #2684FE;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const Dropdown = styled.div`
  display: flex;
  padding-top: 20px;
  position: relative;
  
  .image-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
  }
  
  .dropdown-image {
    max-width: 500px;
    max-height: 340px;
  }
  
  button.dropdown-button {
    align-items: center;
    background: white;
    border: 2px solid #DDDDDD;
    border-radius: 8px;
    box-shadow: none;
    color: #484848;
    display: flex;
    font-family: Lexend SemiBold;
    font-size: .875rem;
    font-weight: 400;
    height: 40px;
    justify-content: space-between;
    line-height: 1.375rem;
    min-width: 16.5rem;
    padding: 0.5rem 0.5rem 0.5rem 0.75rem;
    width: 236px;
  }
  
  button.dropdown-button:hover {
    border: 1px solid #5287E8;
  }
  
  ul {
    background: white;
    border: 1px solid #FFFFFF;
    border-radius: 0.5rem;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.16);
    padding-left: 0;
    left: 0;
    max-height: 12.75rem;
    overflow-y: auto;
    position: absolute;
    right: 0;
    top: 3.5rem;
    z-index: 1;
    width: 260px;
    font-family: Lexend SemiBold;
  }
  
  li {
    list-style: none;
    width: 100%;
  }
  
  li button {
    background: white;
    border: 0;
    gap: 2px;
    padding: 8px;
    border-radius: 8px;
    box-shadow: none;
    color: black;
    cursor: pointer;
    font-family: ;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.375rem;
    outline: transparent;
    overflow-x: hidden;
    padding: 0.5rem;
    text-align: left;
    text-overflow: ellipsis;
    width: 100%;
  }
  
  li button:hover {
    background-color: #E1E8F8;
  }
`