import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Post() {
    return (
        <div>
            < to={"/create-post"} title={"Create Post "} className={"btn btn-primary"} >
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test Title</td>
                        <td>Text Description</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
