import axios from 'axios'

const QUESTS_BASE_URL = 'http://rest-missions-bbva-kids.apps.cluster-a70f.a70f.example.opentlc.com/api/missions'

export default {
  getQuests,
  deleteQuest,
  getRewards
}

async function getQuests() {
  const { data: quests } = await axios.get(`${QUESTS_BASE_URL}`)
  return quests.filter(quest => !quest.claimed)
}

async function deleteQuest(id) {
  await axios.delete(`${QUESTS_BASE_URL}/${id}`)
}

async function getRewards(id) {
  await axios.post(`${QUESTS_BASE_URL}/claim`, { id })
}
