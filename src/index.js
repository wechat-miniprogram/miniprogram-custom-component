Component({
  properties: {
    prop: {
      type: String,
      value: 'index.properties'
    },
  },
  data: {
    flag: false,
  },
  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: res => {
          this.setData({
            flag: true,
          })
        }
      })
    }
  }
})
