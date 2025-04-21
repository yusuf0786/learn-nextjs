'use client';

export default function Menu({name, age, isMan}) {
    return <div>
        Name: {name} Age: {age} Gender: {isMan ? "Male" : "Female"}
    </div>
}