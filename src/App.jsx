import { useState } from 'react'
import { Item, Container, ToDoList, Input, Button, List } from './styles'

function App() {
    const [tasks, setTasks] = useState([])
    const [inputValue, setinputValue] = useState('')


    function inputChange(event) {
        setinputValue(event.target.value)
    }

    function buttonClick() {
        setTasks([...tasks, inputValue])
    }


    return (
        <Container>
            <ToDoList>
                <Input placeholder="O que tenho para fazer hoje?" onChange={inputChange} />
                <Button onClick={buttonClick}>Adicionar</Button>

                <List>
                    {
                        tasks.map(item => (
                            <Item>{item}</Item>
                        ))
                    }
                </List>
            </ToDoList>
        </Container>
    )
}

export default App
