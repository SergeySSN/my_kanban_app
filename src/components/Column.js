import './Column.css'
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import MyContext from "./MyContext";


export default function Column (props) {

    const value = useContext(MyContext);
    const tasks = value.tasks;
    const statuses = value.taskStatuses;
    const onSubmit = value.onCreateTask;
    const onNewStatus = value.onStatusChange;

    const [title, setTitle] = useState('');
    const hidden = {display: 'none'};
    const shown = {display: 'block'};
    const [style, setStyle] = useState({styleInput: hidden, styleBtn: shown});

    function handleClickOpen() {
        setStyle({styleInput: shown, styleBtn: hidden})
    }
    function handleClickSubmit() {
        if (title) {
            onSubmit({title})
            setTitle('');
            setStyle({styleInput: hidden, styleBtn: shown})
        }
    }
    function preventStatus(array, index) {
        const idx = index - 1;
        if (index > 0) {
            return array[idx];
        } else return null
    }
    const prevState = preventStatus(statuses, props.idx)


    if (prevState === null) {
        return (
            <div className='listColumn' key={props.status}>
                <p>{props.status}</p>
                {tasks
                    .filter((task) => task.status === props.status)
                    .map((task) => (
                            <div className='cardTitle' key={task.title} >
                                <Link to={`/details/${task.id}`}><p>{task.title}</p></Link>
                            </div>
                    ))}
                <div className='form-createTask' style={style.styleInput}>
                    <input type='text'
                           className='input-title'
                           value={title}
                           required='required'
                           onChange={e => setTitle(e.target.value)}
                    />
                    <button type='button'
                            className='btn btn-submit'
                            onClick={() => handleClickSubmit()}>Submit
                    </button>
                </div>
                <button className='btn'
                        style={style.styleBtn}
                        onClick={() => handleClickOpen()}>+Add card
                </button>
            </div>
        )
    } else {
        return (
            <div className='listColumn' key={props.status}>
                <p>{props.status}</p>
                {tasks
                    .filter((task) => task.status === props.status)
                    .map((task) => (
                        <div className='cardTitle' key={task.id} >
                            <Link to={`/details/${task.id}`}><p>{task.title}</p></Link>
                        </div>
                    ))}
                <select className='btn select-backlog' aria-label='Default select' defaultValue={props.status}
                        onChange={(e) => onNewStatus (e.target.value, props.status)}>
                    <option value='Add card'>+Add card</option>
                    {tasks
                        .filter((task) => task.status === prevState)
                        .map((task) => (
                            <option key={task.id} value={task.title}>{task.title}</option>
                        ))}
                </select>
            </div>
        )
    }
}