## Building the Android Project

---

First install [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap)

```bash
npm i -g @bubblewrap/cli
```

To build you'll need the `android.keystore`, and your own signing key and then run the build command

```bash
bubblewrap build
```

The build step will output two files called `app-release-signed.apk` and `app-release-bundle.aab`. This file can be installed on a development device for testing or uploaded to the Play Store for release.

Bubblewrap provides a command to install and test the application on a local device. With the development device connected to the computer run:

```bash
bubblewrap install
```

Alternatively, the [adb](https://developer.android.com/tools/adb#move) tool can be used.

```bash
adb install app-release-signed.apk
```

---
