interface MenuData{
id:number;
title:string;
content:string;
children?:MenuData[]
}

let menuData:MenuData[]=
[
    {
      id: 1,
      title: "Home",
      content: "Welcome to the Home Page!",
    },
    {
      id: 2,
      title: "Services",
      content: "We offer Web Development, Mobile Apps, and AI Solutions.",
      children: [
        {
          id: 3,
          title: "Web Development",
          content: "We build fast and scalable web applications.",
        },
        {
          id: 4,
          title: "Mobile Apps",
          content: "We develop native and cross-platform mobile apps.",
        },
      ],
    },
    {
      id: 5,
      title: "About Us",
      content: "We are a leading tech company.",
    },
  ]
  
  export default menuData