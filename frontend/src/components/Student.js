import React from 'react'
import "../App.css"

const Student = () => {

/*     const [contacts, setContacts] = useState();
 */ 


return (
    <div className='student'>
        <table>
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Age </th>
                    <th> Class </th>
                    <th> Section </th>
                    <th> Roll-No </th>
                    <th> Email </th>
                    <th> Mobile </th>
                    <th> Address </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sname1</td>
                    <td>18</td>
                    <td>6</td>
                    <td>A</td>
                    <td>15</td>
                    <td>1222</td>
                    <td>10000000</td>
                    <td>Address1</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Student