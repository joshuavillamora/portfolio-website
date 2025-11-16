const descriptions = {
    cpp: "Comfortable with the basics of C++ programming, including variables, loops, functions, classes, and pointers. Able to write small console applications and solve algorithmic problems using fundamental concepts.",
    js: "Experienced in creating interactive web applications with DOM manipulation, event handling, and basic game logic. Familiar with integrating simple functionalities and building small browser-based projects.",
    godot: "Familiar with GDScript and core Godot functions. Able to create 2D scenes, handle basic player movement, and implement simple game mechanics. Currently building experience through small projects."
};

const cpp = document.getElementById("cpp");
const js = document.getElementById("js");
const godot = document.getElementById("godot");
const tool = document.getElementById("tool");
const description = document.getElementById("description");



cpp.addEventListener('click', () => {
    tool.innerHTML = "C++";
    description.innerHTML = descriptions.cpp;
});

js.addEventListener('click', () => {
    tool.innerHTML = "JavaScript";
    description.innerHTML = descriptions.js;
});

godot.addEventListener('click', () => {
    tool.innerHTML = "Godot";
    description.innerHTML = descriptions.godot;
});