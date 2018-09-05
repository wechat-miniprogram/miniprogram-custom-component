Component({
  properties: {
    prop: {
      type: String,
      value: 'index.properties'
    },
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success(res) {
          // eslint-disable-next-line no-console
          console.log(res)
        }
      })
    }
  }
})
