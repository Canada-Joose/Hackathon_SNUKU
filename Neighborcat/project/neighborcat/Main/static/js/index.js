// ๐ index.js
import { openModal, closeModal } from "./modal.js";
import { setCookie, getCookie } from "./cookie.js";

// JS์์ DOM element ๊ฐ์ ธ์ฌ ๋ ๊ด์ฉ์ ์ผ๋ก $ํ์๋ฅผ ์ฌ์ฉํ๋ค.
// $ํ์๋ก DOM element returnํด์ ๋ฐ๋ณต ์ค์ด๋ ํจ์
const $ = (selector) => document.querySelector(selector);


$(".btn-open-modal").addEventListener("click", () => {
    openModal();
});

$(".modal-container").addEventListener("click", (event) => {
    if (event.target === $(".modal-container")) {
        closeModal();
    }
});

$(".modal-close").addEventListener("click", () => {
    closeModal();
});

// ์ค๋ ๋ณด์ง ์๊ธฐ ๋ฒํผ์ ๋๋ฅด๋ฉด ๋ง๋ฃ๊ธฐ๊ฐ์ด 1์ผ์ธ ์ฟ ํค๋ฅผ ์์ฑํ๊ณ  ๋ชจ๋ฌ์ ๋ซ๋๋ค.
$(".modal-stop-button").addEventListener("click", () => {
    // ํ๋ฃจ ๊ธฐํ์ ์ฟ ํค๋ฅผ ์์ฑํ๋ค. (์ฟ ํค ์์ฑ์ ์ด๋ฆ์ modal-closed, ๊ฐ์ true๋ก ์ค์ ํ๋ค.)
    // ๋ชจ๋ฌ์ ๋ซ๋๋ค.
    closeModal();
    setCookie("modalClose", "true", 1);
});

let checkCookie = getCookie("modalClose");

if (checkCookie == 'true') {
    closeModal();
} else {
    openModal();
}