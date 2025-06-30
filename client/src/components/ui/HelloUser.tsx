import React from "react";

type HelloUserProps = {  name: string;
};

function HelloUser({ name }: HelloUserProps) {
    return (
        <div className="text-2xl font-bold">
        Hello, {name}!
        </div>
    );
    }

export default HelloUser;