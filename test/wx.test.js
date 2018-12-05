const _ = require('./utils')

test('wx.getSystemInfo', done => {
  expect.assertions(2)
  wx.getSystemInfo({
    success(res) {
      expect(res.errMsg).toBe('getSystemInfo:ok')
      done()
    },
    complete(res) {
      expect(res.errMsg).toBe('getSystemInfo:ok')
      done()
    }
  })
})

test('wx.getSystemInfoSync', async () => {
  const info = wx.getSystemInfoSync()
  expect(info.SDKVersion).toBe('2.3.0')
})

test('wx.getSystemInfo Promisify', async () => {
  const wxpGetSystemInfo = () => new Promise(resolve => {
    wx.getSystemInfo({success: resolve, complete: resolve})
  })
  const info = await wxpGetSystemInfo()
  expect(info.SDKVersion).toBe('2.3.0')
})
