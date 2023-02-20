import styled from 'styled-components';
import {IoCloseOutline} from 'react-icons/io5';
import {Link} from 'react-router-dom'
import {Container} from "./Container";
import {useContext} from "react";
import MyContext from "./MyContext";
import {useParams} from "react-router-dom";


const DetailsContainer = styled.div`
  padding: 0.5rem;
  font-family: Roboto, SansSerif;
  background-color: #0079BF;
  height: 550px;
`
const DetailsContent = styled.div`
  width: 100%;
  height: 550px;
  background-color: #FFFFFF;
  padding: 0.5rem;
`
const DetailsTop =styled.div`
  width: 100%;
  height: 30px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const DetailsTitle = styled.div`
  font-size: 28px;
`
const ReturnArea = styled.div`
    max-width: 30px;
    max-height: 30px;
    justify-content: flex-end;
    align-items: self-start;
    cursor: pointer;
`
const DetailsDescription = styled.div`
    padding: 0.5rem;
    font-size: 18px;
    width: 100%;   
`
export function Details () {

    const params = useParams ()
    const currentId = params.id

    const value = useContext(MyContext)
    const tasks = value.tasks
    const task = tasks.reduce((res, obj) => obj.id == currentId ? obj : res, {});
    const onChangeDescription = value.handlerChangeDescription

    const index = currentId - 1;

    return (
        <DetailsContainer>
            <Container>
                <DetailsContent>
                    <DetailsTop>
                        <DetailsTitle>
                            {task.title}
                        </DetailsTitle>
                        <ReturnArea>
                            <Link to='/'><IoCloseOutline size = '28px' /></Link>
                        </ReturnArea>
                    </DetailsTop>
                    <DetailsDescription>
                        <h3>Description :</h3>
                        <textarea  placeholder={'Write here...'}
                                   style={{width:'100%', height:'400px', border: '', outline: 'none', resize: 'none'}}
                                   value={task.description}
                                   onChange={(e) =>onChangeDescription(index, e.target.value)}
                        />
                    </DetailsDescription>
                </DetailsContent>
            </Container>
        </DetailsContainer>
    )
}