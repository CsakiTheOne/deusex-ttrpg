# Augmentations

The augs in this game are based on the ones found in `Deus Ex: Mankind Divided`.

[Wiki page](https://deusex.fandom.com/wiki/Augmentations_(DXMD))

## Basic info

Augmentations are cybernetic enhancements that the player can use to improve their character's abilities. Some of them just give passive bonuses, while others can be activated to give the player an advantage or do something special.

### Activation

Activation tells the user when can they use an augmentation.

- **Always-on**: Always active and can't be turned off.
- **Contextual**: The aug only works in certain situations and the user has to activate it in that situarion.
- **Automatic**: The aug turns on (and off) automatically.
- **Manual**: The aug only turns on when the user activates it by hand / by will.

### Praxis and activation cost

The human body needs time and experience to get used to the cybernetics. The unit of measurement for this time and experience is `praxis`. The users can use `praxis points` to unlock / activate their augmentations.

## Augmentations by level

- [Built-in level](#built-in-level): Everyone who is an aug, has all these cybernetics. Users can choose to not have some of these, but it greatly impacts their character's abilities.
- [Civilian level](#civilian-level): When someone creates a character and chooses to start as an aug, they automatically have access to civilian level cybernetics.
- [VIP / Medical level](#vip--medical-level)
- [Military level](#military-level)
- [Experimental level](#experimental-level): These are the most advanced and rare augmentations. These augs are not optimized for daily use, so the users have to disable some of their other augs to avoid overheating / overloading their systems.

### Built-in level

| Name                        | Activation | Power usage   | Required augs | Notes                                                       |
| --------------------------- | ---------- | ------------- | ------------- | ----------------------------------------------------------- |
| Retinal HUD                 | Manual     | -             |               | See different information in augmented reality.             |
| Infolink                    | Always-on  | -             | Retinal HUD   | Talk with other Infolink users over the internet.           |
| Cochlear Implant            | Automatic  | -             | Infolink      | Implanted earphones.                                        |
| Subvocalization             | Automatic  | -             | Infolink      | Talk silently with other Infolink users.                    |
| Sentinel RX Health System   | Always-on  | -             |               | Recharge health out of intense situations.                  |
| Cybernetic Arm Prosthesis   | Always-on  | -             |               | Better strength.                                            |
| Cybernetic Leg Prosthesis   | Always-on  | -             |               | Better speed.                                               |
| Rechargable Biocell Implant | Always-on  | Energy source |               | **Mandatory!** Recharges while resting for a longer period. |

### Civilian level

| Name                       | Cost | Activation | Power usage      | Required augs     | Notes                                                    |
| -------------------------- | ---- | ---------- | ---------------- | ----------------- | -------------------------------------------------------- |
| Sarif S.8 Energy Converter | 2    | Always-on  | Energy source    |                   | Recharge energy partially out of intense situations.     |
| Hacking Capture            | 2    | Contextual | -                | Infolink          | Attack computers and other electronic devices.           |
| Hacking Fortify            | 1    | Contextual | -                | Hacking Capture   | Defense against antivirus.                               |
| Hacking Stealth            | 1    | Automatic  | -                | Hacking Capture   | Make yourself less detectable for antivirus software.    |
| Camera Domination          | 2    | Contextual | -                | Hacking Capture   | Take control over security cameras.                      |
| Implanted Rebreather       | 2    | Always-on  | -                | Any heart implant | Run faster, have more stamina.                           |
| Social Enhancer            | 2    | Contextual | -                | Retinal HUD       | Analyze people's emotions and intentions.                |
| Smart Vision               | 2    | Manual     | 1                | Retinal HUD       | Have better perception.                                  |
| Stealth Avatar             | 2    | Automatic  | -                | Retinal HUD       | Know where your enemies think you are.                   |
| Wayfinder Radar System     | 2    | Always-on  | -                | Retinal HUD       | Minimap with enemies, cameras, robots and other info.    |
| Topographics               | 1    | Always-on  | -                | Wayfinder         | See buildings, walls, doors on the map.                  |
| Vision Feedback            | 1    | Always-on  | -                | Wayfinder         | See view cones of people, robots and cameras on the map. |
| Icarus Landing             | 2    | Automatic  | -                |                   | Fall from any height without taking damage.              |
| Punch Through Walls        | 2    | Contextual | 3                | Cybernetic Arm    | Yes.                                                     |
| Instant Takedown           | 1    | Contextual | 5                | Cybernetic Arm    | Knock out or kill enemies instantly with one hit.        |
| Optimized Musculature      | 1    | Always-on  | -                | Cybernetic Arm    | Lift, carry and throw heavy objects.                     |
| Carry Capacity             | 1    | Always-on  | -                | Cybernetic Arm    | Carry more items.                                        |
| Glass-shield Cloaking      | 2    | Manual     | Use:3 Move:2/m/r |                   | Become invisible.                                        |
| Rhino Dermal Armor         | 1    | Always-on  | -                |                   | Take less damage.                                        |
| Klipspringer Jump Mod      | 2    | Automatic  | -                | Cybernetic Leg    | Jump higher.                                             |
| Leg Silencers              | 1    | Manual     | Move:1/m         | Cybernetic Leg    | Move silently.                                           |

### VIP / Medical level

| Name                    | Cost | Activation | Power usage | Required augs        | Notes                                                                          |
| ----------------------- | ---- | ---------- | ----------- | -------------------- | ------------------------------------------------------------------------------ |
| Dialect Enhancer        | 1    | Contextual | 1           | Social Enhancer      | Dominate conversation through chemical manipulation and strategic speechcraft. |
| Turret Domination       | 1    | Contextual | -           | Camera Domination    | Take control over turrets.                                                     |
| LiDAR Mark-Tracker      | 1    | Manual     | 1           | Smart Vision         | Mark enemies and track them.                                                   |
| Wall-penetrating Imager | 1    | Automatic  | -           | Smart Vision         | See through walls.                                                             |
| Magpie                  | 1    | Automatic  | -           | Smart Vision         | Better perception. See smaller objects with smart vision.                      |
| Chemical Resistance     | 2    | Contextual | 1/m         | Implanted Rebreather | Poison resistance and gas immunity.                                            |

### Military level

| Name                       | Cost | Activation | Power usage | Required augs                  | Notes                                    |
| -------------------------- | ---- | ---------- | ----------- | ------------------------------ | ---------------------------------------- |
| Robot Domination           | 1    | Contextual | -           | Turret Domination              | Take control over robots.                |
| Flash Suppressant          | 1    | Automatic  | -           | Retinal HUD                    | Protect your eyes from flashes.          |
| Quicksilver Reflex Booster | 2    | Manual     | 1           | Any heart implant              | Enhance your speed and reflexes.         |
| Typhoon Explosive System   | 2    | Manual     | 5 1ammo     | Cybernetic Arm                 | Kill everything around you.              |
| Cloaked Takedown Support   | 1    | Contextual | 1           | Instant Takedown, Glass-shield | Take down enemies while staying cloaked. |

### Experimental level

| Name           | Cost | Activation | Power usage | Active augs                       | Notes                                                      |
| -------------- | ---- | ---------- | ----------- | --------------------------------- | ---------------------------------------------------------- |
| Remote Hacking | 2    | Contextual | -           | Hacking Capture                   | Hack computers from a distance.                            |
| Icarus Dash    | 2    | Manual     | 2           | Icarus Landing                    | Dash in any direction instantly. Can be used as an attack. |
| Titan Shield   | 2    | Manual     | 3/r         | Glass-shield, Rhino Dermal Shield | Become invulnerable for a short period.                    |
| Tesla          | 2    | Manual     | 2 3ammo     |                                   | Electrocute multiple enemies.                              |
| P.E.P.S.       | 2    | Manual     | 2 1ammo     |                                   | Knock back and stun multiple enemies.                      |

### Unsorted augs

- Alarm Timer
- Chaff
- Range Boost
- Noise Feedback?
- Cybernetic Weapon Handling?
- Nanoblade?
- Electromagnetic Pulse Shielding
