function randomBackground() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    let bgcolorBody = "rgb(" + red + ", " + green + ", " + blue + ")";
    console.log(bgcolorBody);
    document.body.style.background = bgcolorBody;
}
