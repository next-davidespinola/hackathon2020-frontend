const imagesMap = {
  1: urls('assets/images/shop/bee.svg'),
  2: urls('assets/images/shop/space.png'),
  3: urls('assets/images/shop/cat.svg'),
  4: urls('assets/images/shop/fish.svg'),
  5: urls('assets/images/shop/sky.png'),
  6: urls('assets/images/shop/tiger.svg')
}

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
