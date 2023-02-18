import {Header} from "./components/Header";
import {Main}  from './components/Main';
import {Footer} from "./components/Footer";
import {taskStatuses, initialState} from "./components/InitialState";
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {Details} from "./components/Details";
import {NotFoundPage} from "./pages/NotFoundPage";
import {useState, useEffect} from "react";
import MyContext from "./components/MyContext";
import {useLocalStorage} from "./hooks/useLocalStorage";




function App() {

    const [tasks, setTasks] = useLocalStorage(initialState, 'tasks')
    const [counterTasks, setCounterTasks] = useState(0);
    const [counterActive, setCounterActive] = useState((tasks.filter((task) => task.status === 'Backlog').length))
    const [counterFinished, setCounterFinished] = useState((tasks.filter((task) => task.status === 'Finished').length));


    const onCreateTask = (task) => {
        if (task === '') { return null }
        else {
            setCounterTasks(counterTasks + 1);
            setTasks([...tasks, {...task, id: counterTasks +1, status:'Backlog', description: ''}]);
        }
    }

    const onStatusChange = (title, newStatus) => {
        setTasks(tasks.map ((task)=> task.title === title ? {...task, status: newStatus} : task));
    }

    const handlerChangeDescription = (n, description) => {
        setTasks(
            tasks.map((task, index) => {
                if (index === n) {
                    return {
                        ...task,
                        description,
                    };
                }
                return task;
            })
        );
    };

    const valueContext = {
        taskStatuses,
        tasks,
        counterTasks,
        counterActive,
        counterFinished,
        onCreateTask,
        onStatusChange,
        handlerChangeDescription
    }

    useEffect(() => {
        setCounterActive(tasks.filter((task) => task.status === 'Backlog').length);
        setCounterFinished(tasks.filter((task) => task.status === 'Finished').length);
        setCounterTasks(tasks.length);
        }, [tasks]
    )

    return (

        <MyContext.Provider value={valueContext}>
            <>
                <Header />
                <Main>
                    <Routes>
                        <Route path = '/' element = {<HomePage />}/>
                        <Route path='/details/:id' element={<Details />}/>
                        <Route path='*' element={<NotFoundPage />}/>
                    </Routes>
                </Main>
                <Footer />
            </>
        </MyContext.Provider>

  );
}

export default App;
