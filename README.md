# G.I.M.P.S Create Packwiz

This repository publishes the Packwiz files used by the G.I.M.P.S Create
client pack.

## Client updates

Prism Launcher runs `packwiz-installer-bootstrap.jar` before Minecraft. The
bootstrap reads:

```text
https://cookscorner.github.io/GIMPS-Create-Packwiz/pack.toml
```

It downloads pack changes before the client launches.

## Server updates

The server uses AMP's normal Minecraft module with Minecraft 1.21.1,
NeoForge 21.1.219 and Java 21. Server updates are applied manually from the
prepared server package. There is no custom AMP Generic template and no
automatic Packwiz command on server restart.

This keeps AMP's normal Minecraft configuration pages, Java memory controls,
process management and dashboard behaviour.

## Pack endpoints

- Pack: <https://cookscorner.github.io/GIMPS-Create-Packwiz/pack.toml>
- Server icon: <https://cookscorner.github.io/GIMPS-Create-Packwiz/server-icon.png>
