const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayIframe = overlay.querySelector(".iframe");
const overlayClose = overlay.querySelector(".close");

function generateHTML(s) {
  const n = randomNumber(12);
  return `
        <div class="item s${s}" id=${n}>
          <img src=${images[n]}>
          <div class="item__overlay">
            <button>View →</button>
          </div>
        </div>
      `;
}

function generateIframe(id) {
  return `
        <iframe src="https://open.spotify.com/embed/album/${
          albums[id]
        }" width="230" height="270" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      `;
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

function handleClick(e) {
  overlayIframe.innerHTML = generateIframe(e.currentTarget.id);
  overlay.classList.add("open");
}

function close() {
  overlay.classList.remove("open");
}
const digits = Array.from({ length: 50 }, () => randomNumber(4)).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1]
]);

const images = [
  "https://i.scdn.co/image/215742dc3f7ec9ca88445d5549975a6998e8376c",
  "https://i.scdn.co/image/c43bdd308858824e5161141c982f493ecb007212",
  "https://i.scdn.co/image/caf7bfb0e38cc21f2cfb0894464c8b92cf3dcfa8",
  "https://i.scdn.co/image/7302b5d078763a9622ee25375d1643faf4737e64",
  "https://i.scdn.co/image/100f7cc6ac8521ac70329e29bc8ccd8503e2bc8b",
  "https://i.scdn.co/image/7d08dd869485a4d7f9b31050202fd5dab497c2be",
  "https://i.scdn.co/image/af77b3742860d1d00509c22441bd65a470f74ada",
  "https://i.scdn.co/image/b905c75ac912b6c83c251dcc40b29162c005093c",
  "https://i.scdn.co/image/5285883c36ac02d3437a5af91924843629b489c3",
  "https://i.scdn.co/image/5f45544c2bc9ffaf6710dbbf6be8df9630c4ba31",
  "https://i.scdn.co/image/71e588f98fe82cd10ee71a6909f03bc0761ba1d9",
  "https://i.scdn.co/image/a70b5fec5600e974f58259c5639f6b20f517dd5f",
  "https://i.scdn.co/image/920142fb308970e28aade4a288041a4d1b8f9519",
  "https://i.scdn.co/image/257f4212dc03d2dc8907027b8f851fd8393f6ecd",
  "https://i.scdn.co/image/f8f5aca53b7b2dd79655b5e3ed25d93d45a4d657",
  "https://i.scdn.co/image/e95106a376a6160de871e8d32bf31232eaebfbfa",
  "https://i.scdn.co/image/b1d22b1dda4db51e9569aa0a08a67aed3a56966d",
  "https://i.scdn.co/image/92bc0e54446df89d73899ec3a88cc65e95f7b95c",
  "https://i.scdn.co/image/c8e438a7b5cfbceef51af4753881ab9ed1ed895c"
];

const albums = [
  "3KzAvEXcqJKBF97HrXwlgf",
  "1aYdiJk6XKeHWGO3FzHHTr",
  "6wCttLq0ADzkPgtRnUihLV",
  "1vANZV20H5B4Fk6yf7Ot9a",
  "0PT5m6hwPRrpBwIHVnvbFX",
  "50o7kf2wLwVmOTVYJOTplm",
  "3PRoXYsngSwjEQWR5PsHWR",
  "1ntNLgaYCFCkeW4flGYlY2",
  "2BtE7qm1qzM80p9vLSiXkj",
  "1klALx0u4AavZNEvC4LrTL",
  "1gKZ5A1ndFqbcrWtW85cCy",
  "0ETFjACtuP2ADo6LFhL6HN",
  "0ETFjACtuP2ADo6LFhL6HN",
  "0jTGHV5xqHPvEcwL8f6YU5",
  "2EowTulHWqSY6QZfTDf5vW",
  "7vEJAtP3KgKSpOHVgwm3Eh",
  "4On0Hf7VJC1jz5gXY2cU8p",
  "0XRZpF083HqgygM0v1hQyE",
  "4KYcffwC5HgjJLdpQU9SjC",
  "0n9SWDBEftKwq09B01Pwzw",
  "1WMVvswNzB9i2UMh9svso5"
];

const html = digits.map(generateHTML).join("");
gallery.innerHTML = html;
overlayIframe.innerHTML = generateIframe(0);
const items = document.querySelectorAll(".item");
items.forEach(item => item.addEventListener("click", handleClick));
overlayClose.addEventListener("click", close);
