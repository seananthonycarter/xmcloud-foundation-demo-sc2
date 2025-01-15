interface Data {
    name: string;
  }
  
  const MyDataComponent = async () => {
    const res = await fetch("/api/testroute");
    const data: Data = await res.json();
  
    return <div>{data.name}</div>;
  };
  
  export default MyDataComponent;