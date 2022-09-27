function preload()
{}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
video.hide();

  
}

function draw()
{
    image(video, 100, 100, 440, 280);
    fill(255, 0, 0);
    rect(30, 20, 570, 35);
    rect(30, 20, 35, 415);
    rect(30, 430, 570, 35);
    rect(580, 30, 35, 415);
    fill(0, 128, 0);
    circle(40, 447, 45);
    circle(600, 447, 45);
    circle(45, 35, 45);
    circle(600, 35, 45);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}