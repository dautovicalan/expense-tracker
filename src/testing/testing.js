const hello = [
    {name: "alan"},
    {name: "alan"},
    {name: "alan"},
    {name: "alan"}
];

console.log(hello.map((element, index) => {
    element.id = index + 1;
}))
