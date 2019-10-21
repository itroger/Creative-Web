document.getElementsByTagName("TABLE")[0].addEventListener("click", function (event) {
    if (event.target.nodeName === "A") {
        event.preventDefault();
        document.getElementById("popBox").classList.add("open");
        document.getElementById("bookDetail").classList.add("open");
        document.getElementById("detailURL").setAttribute("href", event.target);
    }
});
document.getElementById("closeFM").onclick = function () {
    document.getElementById("popBox").classList.remove("open");
    document.getElementById("bookDetail").classList.remove("open");
};

var bookList = function () {
    var documentFragment = document.createDocumentFragment();

};

var xhr = new XMLHttpRequest();
xhr.open("get", "./books.json", true);
xhr.send(null);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};