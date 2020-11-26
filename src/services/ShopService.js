import axios from 'axios'
import ProfileService from './ProfileService'
import sortBy from 'lodash/sortBy'

const SHOP_BASE_URL = 'http://rest-shop-bbva-kids.apps.cluster-a70f.a70f.example.opentlc.com/api/shop'

export default {
  getShopItems,
  purchaseItem
}

async function getShopItems() {
  const [items, inventory] = await Promise.all([getAllItems(), ProfileService.getInventory()])
  const alreadyBought = inventory.map(item => item.id)
  return sortBy(
    items.filter(item => !alreadyBought.includes(item.id)),
    ['requiredLevel', 'id']
  )
}

async function getAllItems() {
  const { data } = await axios.get(`${SHOP_BASE_URL}`)
  return data
}

async function purchaseItem(id) {
  await axios.post(`${SHOP_BASE_URL}/purchase`, { id })
}
