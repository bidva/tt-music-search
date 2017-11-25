import _ from 'lodash'

export function set(coll, key, value) {
  return {
    ...coll,
    [key]: value
  }
}

export function mergeIn(coll, path, value) {
  if (path.length === 0) {
    return Object.assign({}, coll, value)
  }

  let key = path.shift()

  // map with key when in object mode
  if (typeof key === 'object') {
    return _.map(coll, obj => {
      if (_.isMatch(obj, key)) {
        return mergeIn(obj, path, value)
      } else {
        return obj
      }
    })
  } else {
    return {
      ...coll,
      [key]: mergeIn(coll[key], path, value)
    }
  }
}

export function setIn(coll, path, value) {
  return updateIn(coll, path, (target) => value)
}

export function pushIn(coll, path, value) {
  return updateIn(coll, path, (target) => [...target, value])
}

export function unshiftIn(coll, path, value) {
  return updateIn(coll, path, (target) => [value, ...target])
}

export function rejectIn(coll, path, value) {
  return updateIn(coll, path, (target) => _.reject(target, value))
}

export function updateIn(coll, path, fn) {
  if (path.length === 0) {
    return fn(coll)
  }

  let key = path.shift()

  // map with key when in object mode
  if (typeof key === 'object') {
    return _.map(coll, obj => {
      if (_.isMatch(obj, key)) {
        return updateIn(obj, path, fn)
      } else {
        return obj
      }
    })
  } else {
    return {
      ...coll,
      [key]: updateIn(coll[key], path, fn)
    }
  }
}

export function deepMapKeys(obj, fn) {
  if (_.isArray(obj)) {
    return _.map(obj, (v) => deepMapKeys(v, fn))
  }

  if (_.isPlainObject(obj)) {
    let newObj = {}

    _.forOwn(obj, (v, k) => {
      newObj[fn(k)] = deepMapKeys(v, fn)
    })

    return newObj
  }

  return obj
}
