import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
function User() {
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch("https://dummy.restapiexample.com/api/v1/employees").then((data)=>{
        data.json().then(result=>{
            console.warn("result",result)
            setUser(result.data)
        })
        
        })
    },[])
    return (
        <>
            <h1>Listing in user</h1>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
            <Button variant="link">Link</Button>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>salary</th>
                        <th>age</th>
                    </tr>
                    {
                        user.map((item,index)=>
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_salary}</td>
                            <td>{item.employee_age}</td>
                        </tr>
                        )
                    }
                </thead>
                <tbody>
                   
                   
                </tbody>
            </Table>

        </>
    )
}

export default User;