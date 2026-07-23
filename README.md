# G.I.M.P.S Create Packwiz

This repository publishes the client/server Packwiz pack and an AMP Generic
template for Linux. The Generic template runs Packwiz before every server
Start and Restart, then starts Minecraft 1.21.1 with NeoForge 21.1.219.

## Add the automatic-update template to AMP

The normal AMP Minecraft module cannot run a host command before Minecraft
starts. Do not put the Packwiz command in **Additional Java options** or
**Additional server arguments**.

1. Return to the main AMP ADS/controller page.
2. Open **Configuration → Instance Deployment**.
3. Under **Configuration Repositories**, click **Add**.
4. Enter `cookscorner/GIMPS-Create-Packwiz:main`.
5. Save it, click **Fetch**, wait for completion, then refresh the browser.
6. Create a new instance and select **G.I.M.P.S Create (Packwiz)** from the
   GIMPS repository.
7. Open the new instance and click **Update** once. AMP downloads Java 21,
   Packwiz, the server pack, and NeoForge.
8. Open **Configuration → G.I.M.P.S Create**, set the memory values, read the
   [Minecraft EULA](https://aka.ms/MinecraftEULA), and enable
   **Accept Minecraft EULA** only if you accept it.
9. Start the server.

### Refresh an existing G.I.M.P.S Create Generic instance

When this template is updated:

1. Open **Configuration → Instance Deployment** on the ADS/controller.
2. Click **Fetch Latest** for `cookscorner/GIMPS-Create-Packwiz:main`.
3. Return to the instance list.
4. Stop the G.I.M.P.S Create instance.
5. Right-click its tile and choose **Refresh Configuration**.
6. Manage the instance and reopen **Configuration → G.I.M.P.S Create**.

The template includes the normal Minecraft controls for Java/memory, server
startup, network, performance, world generation, gameplay/difficulty and
security. Minecraft 1.21.1, NeoForge 21.1.219 and Java 21 remain fixed because
they are part of the modpack's compatibility requirements.

### AMP memory dashboard

**Java Heap Limit** controls NeoForge's `-Xmx` value. AMP's **Memory Usage**
dashboard is a different measurement: its total is the host's installed RAM,
or the container limit when the instance runs in a limited container.

For a 16384 MB Java heap, stop the instance, return to the ADS instance list,
click the instance's pencil/edit icon, and set its container memory policy to
**Restrict** with a limit of at least **18432 MB**. This leaves approximately
2 GB for Java native memory and AMP. A 20 GB container limit gives more
headroom. Do not set the container limit lower than or equal to `-Xmx`.

If the instance is not containerised, the dashboard will continue to show the
host total. The Java heap is still limited by `-Xmx16384M`; verify it under
**Support and Updates → Last Arguments** after starting the server.

On every Start and Restart, AMP's pre-start stage runs:

```text
java -jar packwiz-installer-bootstrap.jar -g -s server https://cookscorner.github.io/GIMPS-Create-Packwiz/pack.toml
```

AMP waits for Packwiz. NeoForge starts only after the update succeeds.

The new Generic instance stores its server files in the `gimps-create` folder.
To migrate an existing server, stop both instances and copy the world plus
operator/whitelist/ban files into that folder. Do not copy the old `mods`
folder; Packwiz owns it.

## Pack endpoints

- Pack: <https://cookscorner.github.io/GIMPS-Create-Packwiz/pack.toml>
- Server icon: <https://cookscorner.github.io/GIMPS-Create-Packwiz/server-icon.png>
