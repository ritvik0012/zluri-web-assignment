import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const S1 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Answer below this.</p>
                </Title>
                <QuestionsDiv>
                    <FlexColumn>
                        <FlexRow>
                            <FlexItem>
                                1st
                            </FlexItem>
                            <FlexItem>
                                2nd
                            </FlexItem>

                            <FlexItem>
                                3rd
                            </FlexItem>
                            <FlexItem>
                                4th
                            </FlexItem>
                        </FlexRow>
                    </FlexColumn>
                </QuestionsDiv>
            </Container>
        </StyledWrapper>
    )
}

export default S1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
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
const QuestionsDiv = styled.div`
ul{
    display:grid;
    
    
}
li{
    font-size:20px;
}
`
const FlexColumn = styled.div`
display:grid;
grid-gap: 20px;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));


`
const FlexRow = styled.div`
display:grid;
gap:20px;
grid-auto-rows: 150px;
@media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);

  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);

  }
  
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
 
  }

`
const FlexItem = styled.div`
padding:80px;
background:#FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
text-align: center;

`