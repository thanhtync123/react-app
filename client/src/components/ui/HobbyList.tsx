import React from "react";

type HobbyListProps = {
    hobbies: string[];
    };

function HobbyList({ hobbies }: HobbyListProps) {
  return (
    <div className="text-2xl font-bold">
      Danh sách sở thích:
      <ul className="list-disc pl-5"> 
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default HobbyList;