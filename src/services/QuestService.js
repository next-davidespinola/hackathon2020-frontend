import axios from 'axios'
import sortBy from 'lodash/sortBy'

const QUESTS_BASE_URL = 'http://rest-missions-bbva-kids.apps.cluster-a70f.a70f.example.opentlc.com/api/missions'

export default {
  getQuests,
  deleteQuest,
  getRewards
}

async function getQuests() {
  const { objectives } = await axios.get(`${QUESTS_BASE_URL}`)
  return sortBy(objectives, obj => -obj.id)[0]
}

async function deleteQuest(id) {
  await axios.delete(`${QUESTS_BASE_URL}/${id}`)
}

async function getRewards(id) {
  console.log(id)
}
