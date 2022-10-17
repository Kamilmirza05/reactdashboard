import "./UserList.css"
import { DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from '../../dummeydata'
import {Link} from 'react-router-dom'
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows)
    const handleDelete = (id)=>{
      setData(data.filter(item=>item.id !== id))
    }

    const columns= [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width:200, renderCell:(param)=>{
            return(
                <div className="userListUser">
                    <img src={param.row.avatar} alt="" className="userListImg" />
                    {param.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 160
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            _renderCell: (params) => {
                return (
                    <>
                    <Link to={"/user/"+params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                        <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
                    </>
                );
            },
            get renderCell() {
                return this._renderCell;
            },
            set renderCell(value) {
                this._renderCell = value;
            },
        }
      ];
      
  return (
    <div className='userList'>
      <DataGrid
       rows={data}
      disableSelectionOnClick 
      columns={columns} 
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection/>
    </div>
  )
}
