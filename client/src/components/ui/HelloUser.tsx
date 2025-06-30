import React from "react";

type HelloUserProps = {  
    name: string,
    hometown: string,
    age: number,

};

function HelloUser({ name,hometown,age }: HelloUserProps) {
    return (
        <div className="text-2xl font-bold">
        Hello, {name}!
        <br />
        Hometown: {hometown}
          <br />
          Age: {age}
        </div>
    );
    }

export default HelloUser;