import React, { useState } from "react";


interface Data{
    id:number;
    name:string;
    age:number
}
type DataWithoutId = Omit<Data, 'id'>;

const initialData:Data[] = [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Jane", age: 25 },
        { id: 3, name: "Doe", age: 35 },
        { id: 4, name: "Alice", age: 28 },
        { id: 5, name: "Bob", age: 22 },
        { id: 6, name: "Charlie", age: 40 },
        { id: 7, name: "Dave", age: 45 },
        { id: 8, name: "Eva", age: 29 },
        { id: 9, name: "Frank", age: 33 },
        { id: 10, name: "Grace", age: 31 },
        { id: 11, name: "Hannah", age: 38 },
        { id: 12, name: "Irene", age: 34 },
        { id: 13, name: "Jack", age: 27 },
        { id: 14, name: "Kate", age: 32 },
        { id: 15, name: "Liam", age: 26 },
        { id: 16, name: "Mia", age: 24 },
        { id: 17, name: "Nina", age: 36 },
        { id: 18, name: "Oscar", age: 28 },
        { id: 19, name: "Paul", age: 37 },
        { id: 20, name: "Quincy", age: 41 },
        { id: 21, name: "Rita", age: 30 },
        { id: 22, name: "Sam", age: 32 },
        { id: 23, name: "Tom", age: 33 },
        { id: 24, name: "Uma", age: 29 },
        { id: 25, name: "Victor", age: 43 },
        { id: 26, name: "Wendy", age: 31 },
        { id: 27, name: "Xander", age: 25 },
        { id: 28, name: "Yara", age: 34 },
        { id: 29, name: "Zane", age: 42 },
        { id: 30, name: "Abby", age: 26 },
        { id: 31, name: "Brent", age: 40 },
        { id: 32, name: "Cleo", age: 33 },
        { id: 33, name: "Dylan", age: 27 },
        { id: 34, name: "Ella", age: 30 },
        { id: 35, name: "Felix", age: 39 },
        { id: 36, name: "Grace", age: 24 },
        { id: 37, name: "Harry", age: 28 },
        { id: 38, name: "Ivy", age: 31 },
        { id: 39, name: "James", age: 29 },
        { id: 40, name: "Kelly", age: 32 }
      ];
      


  

  const DataTable:React.FC=()=>{
    const  [data,setData]=useState<Data[]>(initialData)
const [editId,setEditId]=useState<number|null>(null)

  const [formData, setFormData] = useState<DataWithoutId>({ name: "", age: 0 });




const handleEditClick=(id:number)=>{
    const row=data.find((item)=>item.id===id)


    if(row){
    setEditId(id)
    setFormData({name:row.name,age:row.age});
}            
        
    
}


const handleSave=()=>{
    setData(
        data.map((row)=>
            row.id===editId?{...row,...formData}:row
        )
    )
        setEditId(null)
    
}

const handleDelete=(id:number)=>{
setData(data.filter((item)=>item.id!==id));
}


const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
}


const handleSort=(column:keyof typeof initialData[0])=>{
 
    
    const sortedData=[...data].sort((a,b)=>{
        if(a[column]<b[column]) return -1;
        if(a[column]>b[column]) return 1;
        return 0;
    })

setData(sortedData)
}





return (
    <div>

        
        <table>
            <thead>
                <tr>
                    <th onClick={()=>handleSort("name")}>Name</th>
                    <th onClick={()=>handleSort("age")}>Age</th>
                <th>action</th>
                </tr>

            </thead>


            <tbody>
                {data.map((row)=>(
                    <tr
                    className=""
                    
                    key={row.id}
                    
                    
                    
                    >

                        <td
                        
                        onClick={()=>handleEditClick(row.id)}

                        >
                            {editId===row.id ?(
                                <input type="text"
                                name="name"

                                value={formData.name}
                                onChange={handleInputChange}
                                />
                            ):(row.name)}

                        </td>

<td

onClick={()=>handleEditClick(row.id)}

>
    {editId===row.id?(
        <input type="number" name="age" 

        value={formData.age}
        onChange={handleInputChange}
        />
    ):(row.age)}
</td>

<td>{
    editId===row.id?(
        <>
        <button onClick={handleSave}
        
      className="save"
        
        >save</button>
        <button
        
        className="cancel"
        onClick={()=>setEditId(null)}>cancel</button>
    
    </>
    ):(
        <>
        <button
        
        className="edit"
        onClick={()=>handleEditClick(row.id)}>edit</button>
        <button
        
        className="delete"
        onClick={()=>handleDelete(row.id)}>delete</button>
        </>
    )
    }</td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)


}
export default DataTable