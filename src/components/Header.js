import styled from 'styled-components';
import { Container } from './Container';
import logo from '../elements/user-avatar.png';
import {useState} from 'react'
import {IoChevronDownOutline, IoChevronUpOutline} from 'react-icons/io5';


const HeaderBase = styled.header`
  background-color: #0067A3;
  color: #FFFFFF;
  height: 55px;
  font-family: Roboto, SansSerif;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0;

  @media (min-width: 400px) {
    justify-content: space-between;
  }
  
`
const Title = styled.div`
  width: 384px;
  height: 45px;
  font-size: 28px;
  display: none;
  margin-top: -35px;
  @media (min-width: 400px) {
    display: block;
  }

`
const LogoDiv = styled.div`
  width: 140px;
  height: 40px;
  display: flex;
  margin-right: 10px;
`
const Block = styled.div`
  width: 100px
`
const Logo = styled.div`
  width: 40px;
  height: 40px;
`
const LogoMenuDiv = styled.div`
  display: flex;
  width: 24px;
  height: 40px;
  align-items: center;
`
const LogoMenuIcon =styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Menu = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-right: 0;
    visibility: hidden;
    width: 134px;
    height: 60px;
    padding: 3px;
    background-color: #FFFFFF;
    font-size: 14px;
    color: #282c34;
    z-index: 2;
    position: relative;

`
const Li = styled.li`
  cursor: pointer;
  :hover{
    background-color: #EBECF0;
  }
`

export const Header = () => {

    const [state, setState] = useState('close');
    const toggleState = () => setState(state === 'close' ? 'open' : 'close');
    const showMenu = state === 'close' ? {visibility: 'hidden'} : {visibility: 'visible'};

    return (
        <HeaderBase>
            <Container>
                <Wrapper>
                    <Title>Awesome Kanban Board</Title>
                    <div>
                        <LogoDiv>
                            <Block />
                            <Logo>
                                <img src={logo} alt ='logo'/>
                            </Logo>
                            <LogoMenuDiv onClick={toggleState}>
                                <LogoMenuIcon >
                                    {state === "close" ?
                                        (<IoChevronDownOutline size='14px' />)
                                        : (<IoChevronUpOutline size='14px' />)
                                    }
                                </LogoMenuIcon>
                            </LogoMenuDiv>
                        </LogoDiv>
                        <Menu style = {showMenu}>
                            <ul style={{margin: 0, paddingLeft: '2px', listStyle: 'none'}}>
                                <Li style={{paddingTop: '5px'}}>Profile</Li>
                                <Li style={{paddingTop: '5px'}}>Log out</Li>
                            </ul>
                        </Menu>
                    </div>
                </Wrapper>
            </Container>
        </HeaderBase>

)

}