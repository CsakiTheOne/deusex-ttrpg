# Hacking

Hackable devices:

- keypads
- security terminals
- computers

Hacking has 3 important stats: Hacking Capture, Hacking Fortify and Hacking Stealth.

To start hacking a device, you have to be next to the device. You can only hack a device if your Hacking Capture level is higher than the device's security level. If this is true, you have to roll a hacking check `1d20+{hacking}`.

| Security / Capture Level | Successful Roll | Min/Max/Lvl5Max Roll | Odds on Matching Level    |
| ------------------------ | --------------- | -------------------- | ------------------------- |
| 1                        | 10              | 2 / 21 / 25          | 8 fail 12 success 60%     |
| 2                        | 12              | 3 / 22 / 26          | 9 fail 11 success 55%     |
| 3                        | 14              | 4 / 23 / 27          | 11 fail 10 success ~47.6% |
| 4                        | 16              | 5 / 24 / 28          | 12 fail 9 success ~42.9%  |
| 5                        | 18              | 6 / 25               | 13 fail 8 success ~38.1%  |

If you fail the roll, you can try again. This doesn't trigger any alarms.

After the first roll you have to roll `security level` amount of times to take control of the device. So 1 capture roll + 2 rolls for a security level 2 device. But in this case you have to focus on Hacking Stealth. You have to roll `1d20+{hackingStealth}`. Be aware that `{hackingStealth}` can be 0.

| Security Level | Successful Roll |
| -------------- | --------------- |
| 1              | 3               |
| 2              | 6               |
| 3              | 9               |
| 4              | 12              |
| 5              | 15              |

If you fail a roll, you trigger the antivirus on the device. In this case the device has to roll `1d20+{securityLevel}`. If it's higher than your `{hackingFortify}*2+10` you get detected and the device will be locked down. If the device's roll is lower, you can continue hacking.

If you succeed all the rolls, you have control over the device. You can do the following actions:

- keypads: control the device connected to the keypad
- security terminals
  - open / close basic devices connected to the terminal: doors, windows, etc.
  - with Camera Domination: view and control cameras
  - with Turret Domination: view, turn on/off and control turrets
  - with Robot Domination: view, turn on/off and control robots
- computers: access the computer's data, like emails, files, etc.

## Remote Hacking

Remote hackable devices:

- any basic device with no security: speakers, lights, televisions, etc.
- basic devices connected to security keypads: doors, windows, etc.
- with Camera Domination (only to turn them off until turned on by someone)
- with Turret Domination (only to turn them off until turned on by someone)
- with Robot Domination (only to turn them off until turned on by someone)

To start remote hacking a device, you only have to roll once. All devices have a security level of the security level of the device controlling it. So if you want to hack a door connected to a security level 2 keypad, then the door itself has a security level of 2. Any basic device with no security has a security level of 1. The rules here are the same as the Capture roll in normal hacking.

## Enemy detection and domination

When you hack a device either normally or remotely, enemies can detect you in some cases. If you hack a device connected to a security terminal, an enemy looking at the terminal will reverse your hack in the enemy's next turn and enter an alert state. If you hack a speaker, light, television, door or anything which can be heard, nearby enemies will enter an alert state. Other hacks are not noticed by enemies.

If you have turret and / or robot domination, you can turn them against enemies. Enemies don't notice the hack until the turret / robot attacks them. In this case the enemies will attack back until they destroy the turret / robot.
