const getingSwapi = async () => {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();
    console.log(data);
    navigator.clipboard.writeText("ja sam peder");
}

getingSwapi();
