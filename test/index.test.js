const _ = require('./utils')

let componentId
let component

beforeAll(async () => {
  componentId = await _.load('index', 'comp')
})

test('render', async () => {
  component = _.render(componentId, {prop: 'index.test.properties'})

  const parent = document.createElement('parent-wrapper')
  component.attach(parent)

  expect(_.match(component.dom, '<wx-view class="index">index.test.properties</wx-view>')).toBe(true)
})
