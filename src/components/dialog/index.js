import Vue from 'vue'

const promiseState = {
  promise: null,
  resolveCallback: null
}

export const state = Vue.observable({
  component: null,
  data: null
})

export async function openDialog(component, data) {
  state.component = component
  state.data = data
  promiseState.promise = new Promise(resolve => (promiseState.resolveCallback = resolve))
  return promiseState.promise
}

export async function closeDialog(result) {
  state.component = null
  state.data = null
  promiseState.resolveCallback(result)
}
