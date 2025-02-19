import { useState } from "react";
const  FileNode = ({ node=fileStructure }) => {
    const [expanded, setExpanded] = useState(false);
  
    return (
      <div style={{ marginLeft: "20px" }}>
        <div onClick={() => setExpanded(!expanded)} style={{ cursor: "pointer" }}>
          {node.type === "folder" ? (expanded ? "📂" : "📁") : "📄"} {node.name}
        </div>
        {expanded && node.children?.length > 0 && (
          <div>
            {node.children.map((child, index) => (
              <FileNode key={index} node={child} />
            ))}
          </div>
        )}
      </div>
    );
  };
  export default FileNode
  const fileStructure = {
    type: "folder",
    name: "Root",
    children: [
      { type: "file", name: "file1.txt" },
      {
        type: "folder",
        name: "Subfolder",
        children: [{ type: "file", name: "file2.txt" }]
      },

      {type:"folder",
        name:"naruto",
        
        
        children: [{ type: "file", name: "file3.txt" },

            {type:"folder",
                name:"naruto",
                
                
                children: [{ type: "file", name: "file3.txt" },

                    {type:"folder",
                        name:"naruto",
                        
                        
                        children: [{ type: "file", name: "file3.txt" }]
                   }

                ]
           },


        ]
   } ]
  };
  