export default function Home() {
    async function savePost(data) {
        'use server';
        const name = data.get('name');
        const age = data.get('age');

        const response = await fetch(`http://localhost:3000/api/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                age,
            }),
            cache: 'no-cache',
        })

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
    }
    /*
    The above function is a server action, it can be called from the client side, but it will run on the server side
    and it can be used to save data to the database or perform any other server side action
    */
  return (
    <div>
        <h1>Save Post</h1>
        <form action={savePost}>
            <input type="text" name="name" placeholder="Name" required />
            <br/>
            <input type="number" name="age" placeholder="Age" required />
            <br/>
            <br/>
            <button type="submit">Save</button>
        </form>
    </div>
  );
}