window.onload = function () {
    books.run();
};

var books = {};
books.run = function() {
    document.getElementsByTagName("TABLE")[0].addEventListener("click", function (event) {
        if (event.target.nodeName === "A") {
            event.preventDefault();
            document.getElementById("popBox").classList.add("open");
            document.getElementById("bookDetail").classList.add("open");
            books.getData(event.target.href);
        }
    })
};

books.closeBox = function() {
    document.getElementById("popBox").classList.remove("open");
    document.getElementById("bookDetail").classList.remove("open");
};

books.bookList = function (data, url) {
    var html = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].url === url) {

            html += `
            <aside class="leftFM">
                <img src="${data[i].cover}">
            </aside>
            <aside class="rightCon">
                <p class="closeBtn"><i id="closeFM" onclick="books.closeBox();">X</i></p>
                <p class="pTitle" id="book_name">${data[i].name}</p>
                <p class="athor" id="book_author">作者 : `;
            for (let j = 0; j < data[i].author.length; j++) {
                if (j !== data[i].author.length - 1) {
                    html += `${data[i].author[j]}, `;
                } else {
                    html += `${data[i].author[j]}`;
                }
            }
            html += ` 著</p>
                <p class="athor" id="translator_name" style="">译者 : `;
            for (let j = 0; j < data[i].translator.length; j++) {
                if (j !== data[i].translator.length - 1) {
                    html += `${data[i].translator[j]}, `;
                } else {
                    html += `${data[i].translator[j]}`;
                }
            }
            html += ` 译</p>
                <p class="price" id="book_price">定价 : ${data[i].price} 元</p>
                <div class="otherP">
                    <p id="book_concern">出版社 : ${data[i].press}</p>
                    <p id="book_time">出版时间 : ${data[i].date}</p>
                    <p id="book_type">种类 : ${data[i].type}</p>
                    <p id="book_open">开本 : ${data[i].open}</p>
                    <p id="book_size">页数 : ${data[i].page} 页 </p>
                    <p id="book_number">ISBN : ${data[i].ISBN}</p>
                </div>
                <address>
                    <a target="_blank" id="detailURL" href="${data[i].url}">查看详情</a>
                    <a target="_blank" id="readNotes" href="${data[i].notes}">读书笔记</a>
                </address>
            </aside>`;
            document.getElementById("bookDetail").innerHTML = html;
            return;
        }
    }
};

books.getData = function (url) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "./Books.json", true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            books.bookList(JSON.parse(xhr.responseText), url);
        }
    };
};



