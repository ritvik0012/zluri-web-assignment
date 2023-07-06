import React, {useState} from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import dropdownicon from "../images/dropdown-icon.png"


const Q3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
      };
  
    return (
        <StyledWrapper>
            <StyledContainer >
                <Title>
                    <h3>
                        <span>Task 3:</span> Build a dropdown
                    </h3>
                    <p>Your objective is to replicate the design and functionality of the given Figma design. Pay attention to details such as colors, fonts, and spacing to achieve a faithful representation of the design.</p>
                </Title>
                <QuestionsGrid>
                    <AnswerDiv>
                        <a href="https://www.figma.com/file/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=16-26&mode=design&t=LMCvfVQBL3S5dApY-0" target="_blank" ><FigmaButton>Figma</FigmaButton></a>
                        <a href="https://www.figma.com/proto/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=36-670&t=56Qr3ehXorgFodbH-1&scaling=min-zoom&page-id=36%3A647&starting-point-node-id=36%3A670" target="_blank" ><PrototypeButton>Prototype</PrototypeButton></a>
                    </AnswerDiv>
                </QuestionsGrid>
                <Dropdown>
                    <button class = "dropdown-button" onClick={toggleDropdown}>{isOpen ? 'Dropdown' : (selectedItem ? selectedItem : 'Dropdown')}<span><img src = {dropdownicon} style={{ width: '8px', height: '5.01px' }}/></span></button>
                    {isOpen && (
                    <ul>
                        <li><button onClick={() => handleItemClick('Mountain')}>Mountain</button></li>
                        <li><button onClick={() => handleItemClick('Forest')}>Forest</button></li>
                        <li><button onClick={() => handleItemClick('Ocean')}>Ocean</button></li>
                        <li><button onClick={() => handleItemClick('Desert')}>Desert</button></li>
                    </ul>
                    )}
                </Dropdown>
            </StyledContainer>
        </StyledWrapper>
    )
}


export default Q3;

const StyledWrapper=styled(Wrapper)`
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
padding-top: 20px;
position: relative;

button.dropdown-button{
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
    height: auto;
    justify-content: space-between;
    line-height: 1.375rem;
    min-width: 16.5rem;
    padding: 0.5rem 0.5rem 0.5rem 0.75rem;
    width: 236px;
}
button.dropdown-button:hover{
    border: 1px solid #5287E8;
}
ul{
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

li{
    list-style: none;
    width: 100%;


}
li button{
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
  