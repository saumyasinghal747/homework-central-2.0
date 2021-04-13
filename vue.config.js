module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "Homework Central",
        "dmg": {
          "contents": [
            {
              "x": 410,
              "y": 150,
              "type": "link",
              "path": "/Applications"
            },
            {
              "x": 130,
              "y": 150,
              "type": "file"
            }
          ]
        },
        "mac": {
          "icon": "build/icons/icon.icns",
          "category": "public.app-category.productivity"
        },
        "protocols": {
          "name": "homework-central-protocol",
          "schemes": [
            "hwc"
          ]
        },
        "win": {
          "icon": "build/icons/icon.ico"
        },
        "linux": {
          "icon": "build/icons"
        }
      },
    },
  },

  pwa: {
    themeColor: '#2196F3',
    theme_color: '#2196F3',
    name: 'Homework Central',
    msTileColor: '#2196F3',
    manifestOptions: {
      background_color: '#2196F3'
    }
  }
}
