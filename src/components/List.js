import Column from "./Column";
import styled from "styled-components";
import myContext from './MyContext';
import {useContext} from "react";


export function List () {
    const value = useContext(myContext)
    const taskStatuses = value.taskStatuses

    const List = styled.div`
      margin:0;
      width: 100%;
      
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
      
      padding: 1rem 0;
      justify-content: space-between;
      font-family: Roboto;
      font-size: 18px;

      @media (min-width: 400px) {
        display: flex;
      }
    `

    return (
    <List>
            {taskStatuses.map((status) =>
                (
                <Column
                    idx={taskStatuses.indexOf(status)}
                    key={status}
                    status={status}
                />
            ))}
    </List>
    )

}

