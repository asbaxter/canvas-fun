
addEventListener("keydown", function(event) {
    if (event.code == 'KeyD') vxr = 7;
    if (event.code == 'KeyA') vxl = -7;
    if (event.code == 'KeyW') vyu = -7;
    if (event.code == 'KeyS') vyd = 7;
    if (event.code == 'Space') attack = 1;
})

addEventListener("keyup", function(event) {
    if (event.code == 'KeyD') vxr = 0;
    if (event.code == 'KeyA') vxl = 0;
    if (event.code == 'KeyW') vyu = 0;
    if (event.code == 'KeyS') vyd = 0;
    if (event.code == 'Space') attack = 0;
})

