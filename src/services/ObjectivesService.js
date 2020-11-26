import axios from 'axios'
import sortBy from 'lodash/sortBy'

const OBJECTIVES_BASE_URL = 'http://rest-objective-bbva-kids.apps.cluster-a70f.a70f.example.opentlc.com/api/objectives'

export default {
  getObjective,
  editObjective,
  createObjective
}

async function getObjective() {
  const { data } = await axios.get(`${OBJECTIVES_BASE_URL}`)
  return sortBy(data, obj => -obj.id)[0]
}

async function editObjective(name, requiredMoney, id) {
  await createObjective(name, requiredMoney)
  if (id) await axios.delete(`${OBJECTIVES_BASE_URL}/${id}`)
}

async function createObjective(name, requiredMoney) {
  return await axios.post(`${OBJECTIVES_BASE_URL}`, { name, requiredMoney })
}
