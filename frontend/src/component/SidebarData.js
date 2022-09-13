import React, { useEffect, useRef, useState } from 'react';
const API_URL = 'http://localhost:3001/api/v1/room';

function SidebarData() {
    const [room, setRoom] = useState([{}])
    const getApiData = async () => {
        const response = await fetch(
            "/api/v1/task/"
        ).then((response) => response.json());
        setRoom(response);
    };;

    useEffect(() => {
        getApiData();
    }, []);
    return room;
}







