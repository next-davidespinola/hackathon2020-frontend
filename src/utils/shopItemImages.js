const imagesMap = {
  1: urls('assets/images/shop/bee.svg'),
  2: urls('assets/images/shop/fish.svg'),
  3: urls('assets/images/shop/frog.svg'),
  4: urls('assets/images/shop/rabbit.svg'),
  5: urls('assets/images/shop/dog.svg'),
  6: urls('assets/images/shop/cat.svg'),
  7: urls('assets/images/shop/water.png', 'assets/videos/water.mp4'),
  8: urls('assets/images/shop/sky.png', 'assets/videos/sky.mp4'),
  9: urls('assets/images/shop/space.png', 'assets/videos/space.mp4')
};

export function getShopItemImage(id) {
  return (imagesMap[id] && imagesMap[id].shop) || ''
}

export function getUsingItemResource(id) {
  return (imagesMap[id] && imagesMap[id].using) || ''
}

function urls(shopUrl, usingUrl) {
  return {
    shop: shopUrl,
    using: usingUrl || shopUrl
  }
}
