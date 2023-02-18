import styled from 'styled-components';
import { Container } from './Container';
import {useContext} from "react";
import MyContext from "./MyContext";


const FooterBase = styled.header`
  background-color: #0067A3;
  color: #FFFFFF;
  height: 55px;
  font-family: Roboto, SansSerif;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`
const CountsDiv = styled.div`
    max-width: 355px;
    height: 36px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    visibility: hidden;
  @media (min-width: 400px) {
    visibility: visible;
  }
`
const CountActiveDiv = styled.div`
    height: 21px;
`
const CountFinishedDiv = styled.div`
    margin-left: 25px;
    height: 21px;
`
const ProjectInfoDiv = styled.div`
    height: 21px;
    margin-left: 10px;
    visibility: hidden;
  @media (min-width: 400px) {
    visibility: visible;
  }
`

export const Footer = () => {

    const value = useContext(MyContext)

    return (
       <FooterBase>
           <Container>
               <Wrapper>
                   <CountsDiv>
                    <CountActiveDiv>
                        Active Tasks :<span style={{marginLeft: '5px'}}>{value.counterActive}</span>
                    </CountActiveDiv>
                    <CountFinishedDiv>
                        Finished Tasks :<span style={{marginLeft: '5px'}}>{value.counterFinished}</span>
                    </CountFinishedDiv>
                   </CountsDiv>
                   <ProjectInfoDiv>
                       Kanban board by Stolbov S. 2023
                   </ProjectInfoDiv>
               </Wrapper>
           </Container>
       </FooterBase>
    )
}