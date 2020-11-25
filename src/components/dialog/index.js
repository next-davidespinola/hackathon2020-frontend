import Vue from 'vue'

const promiseState = {
  promise: null,
  resolveCallback: null
}

export const state = Vue.observable({
  component: null,
  data: null,
  options: null
})

export async function openDialog(component, options, data) {
  state.component = component
  state.options = options
  state.data = data
  promiseState.promise = new Promise(resolve => (promiseState.resolveCallback = resolve))
  return promiseState.promise
}

export async function closeDialog(result) {
  state.component = null
  state.options = null
  state.data = null
  promiseState.resolveCallback(result)
}
