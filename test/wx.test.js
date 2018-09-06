const _ = require('./utils')

test('wx.getSystemInfo', async () => {
  wx.getSystemInfo({
    success(res) {
      expect(res.errMsg).toBe('getSystemInfo:ok')
    },
    complete(res) {
      expect(res.errMsg).toBe('getSystemInfo:ok')
    },
  })
})

test('wx.getSystemInfoSync', async () => {
  const info = wx.getSystemInfoSync()
  expect(info.SDKVersion).toBe('2.3.0')
})
