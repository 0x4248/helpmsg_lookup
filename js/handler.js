async function add_command(command, description, example) {
    let item = document.createElement("div");
    item.setAttribute("id", command);
    item.setAttribute("class", "item card");
    item.innerHTML = `
    <h2 id="${command}">${command}</h2>
    <p>${description}</p> 
    <div class="code_block">  
        <code>
            ${example}
        </code>
    </div>
    <hr>
    `;
    document.getElementById("main").appendChild(item);
    let contents = document.getElementById("contents");
    let link = document.createElement("a");
    link.setAttribute("href", `#${command}`);
    link.innerHTML = "<li>" +command + "<br>";
    contents.appendChild(link);
}