
addEventListener("keydown", function(event) {
    if (event.code == 'ArrowRight') vxr = 5;
    if (event.code == 'ArrowLeft') vxl = -5;
    if (event.code == 'ArrowUp') vyu = -5;
    if (event.code == 'ArrowDown') vyd = 5;
    if (event.code == 'Space') attack = 1;
})

addEventListener("keyup", function(event) {
    if (event.code == 'ArrowRight') vxr = 0;
    if (event.code == 'ArrowLeft') vxl = 0;
    if (event.code == 'ArrowUp') vyu = 0;
    if (event.code == 'ArrowDown') vyd = 0;
})

