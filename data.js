var APP_DATA = {
  "scenes": [
    {
      "id": "0-bathroom",
      "name": "bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0174306157393005,
          "pitch": 0.018847933700101294,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.4468076733887365,
        "pitch": 0.09452629889204545,
        "fov": 1.3268945324871384
      },
      "linkHotspots": [
        {
          "yaw": 0.810015289878617,
          "pitch": 0.06199816314591189,
          "rotation": 0,
          "target": "0-bathroom"
        },
        {
          "yaw": 0.9473313929796063,
          "pitch": 0.04982317679660042,
          "rotation": 0,
          "target": "2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom",
      "name": "bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9411083353526752,
          "pitch": 0.08848810399919671,
          "rotation": 0,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Apartment",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
