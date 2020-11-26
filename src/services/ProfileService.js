import axios from 'axios'

const PROFILE_BASE_URL = 'http://rest-profile-bbva-kids.apps.cluster-a70f.a70f.example.opentlc.com/api/profiles'
let playerId = null

export default {
  getPlayer,
  updateUsedItems
}

async function getPlayer(id) {
  playerId = id || 1
  const [profile, inventory] = await Promise.all([getProfile(), getInventory()])
  return {
    ...profile,
    inventory
  }
}

async function getInventory() {
  const { data } = await axios.get(`${PROFILE_BASE_URL}/${playerId}/inventory`)
  return data
}

async function updateUsedItems(oldItem1, newItem1, oldItem2, newItem2) {
  let somethingChanged = false
  const changeOldPromises = []
  const changeNewPromises = []

  if (oldItem1 !== newItem1) {
    if (oldItem1) changeOldPromises.push(updateUsedItem(oldItem1, false))
    changeNewPromises.push(updateUsedItem(newItem1, true))
    somethingChanged = true
  }
  if (oldItem2 !== newItem2) {
    if (oldItem2) changeNewPromises.push(updateUsedItem(oldItem2, false))
    changeNewPromises.push(updateUsedItem(newItem2, true))
    somethingChanged = true
  }

  await Promise.all(changeOldPromises)
  await Promise.all(changeNewPromises)
  return somethingChanged
}

async function getProfile() {
  const { data } = await axios.get(`${PROFILE_BASE_URL}/${playerId}`)
  return data
}

async function updateUsedItem(itemId, used) {
  const { data } = await axios.patch(`${PROFILE_BASE_URL}/${playerId}/inventory/${itemId}`, { used })
  return data
}
