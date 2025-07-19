import React from 'react'

const todoList = () => {
  return (
              <div className="todoList">
            <table>
              <thead>
                <tr>
                  <th>TASK</th>
                  <th className='border-4'>ACTION</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>watch tutorials</td>
                    <td>
                      <i className="fa-solid fa-pen-to-square"></i>
                      <i
                        className="fa-solid fa-delete-left"
                        onClick={() => deleteContact(todo.id)}
                      ></i>
                    </td>
                  </tr>
            
              </tbody>
            </table>
          </div>
  )
}

export default todoList