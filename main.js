var image = ["https://images.unsplash.com/photo-1527876945846-fd46461135ff?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://images.unsplash.com/photo-1447173018759-9b1701d8fc21?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://images.unsplash.com/photo-1491838592561-ab572ec2d2cb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ", "https://images.unsplash.com/photo-1517670972079-a58c8d6c0af8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
];
var reasons = [
"Trees increase property values.",
"Trees clean the air.",
"Trees slow water runoff. ",
"Trees prevent soil erosion",
"Trees help buffer noise pollution"
];
var i = 0;

function next() {
    document.getElementById("ff").innerHTML = reasons[i];
    document.getElementById("album").src = image[i];
    document.getElementById("audio").play();
    i++;
}
