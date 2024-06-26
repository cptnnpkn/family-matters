---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/toa
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Yellow Musk Creeper"]
---
# [Yellow Musk Creeper](3-Mechanics\CLI\bestiary\plant/yellow-musk-creeper-toa.md)
*Source: Tomb of Annihilation p. 237*  

A yellow musk creeper is an unholy vine whose flowers resemble an orchid's. Bright yellow with splashes of purple, these flowers expel a musk that attracts prey. A yellow musk creeper clings to walls, pillars, gravestones, door frames, or statuary in shadowy locations, remaining motionless until it strikes.

## Humanoid Hosts

A yellow musk creeper destroys the minds of humanoids, then implants bulbs in those it kills. Twenty-four hours after being implanted, a bulb sprouts a creeper vine that magically animates the host corpse, turning it into a yellow musk zombie under the young vine's control. In addition to protecting the defenseless plant, the zombie acts as fertilizer for the young creeper vine, which grows to full size in seven days. Once it is fully grown, the new yellow musk creeper becomes mobile and bursts from its zombie host, whereupon the zombie collapses into a mound of dead offal. If the zombie is destroyed before the creeper emerges, the creeper withers and dies.

## Small Yellow Musk Zombies

A Medium humanoid transformed into a yellow musk zombie uses the stat block presented in this section. A Small humanoid transformed into a yellow musk zombie becomes a Small undead with 27 (`6d6 + 6`) hit points, but otherwise has the same statistics.

```statblock
"name": "Yellow Musk Creeper (ToA)"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "6"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "5 ft., climb 5 ft."
"condition_immunities": "[blinded](/3-Mechanics/CLI/rules/conditions.md#blinded),\
  \ [deafened](/3-Mechanics/CLI/rules/conditions.md#deafened), [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion),\
  \ [prone](/3-Mechanics/CLI/rules/conditions.md#prone)"
"senses": "blindsight 30 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "While the creeper remains motionless, it is indistinguishable from an ordinary\
    \ flowering vine."
  "name": "False Appearance"
- "desc": "The creeper regains 10 hit points at the start of its turn. If the creeper\
    \ takes fire, necrotic, or radiant damage, this trait doesn't function at the\
    \ start of its next turn. The creeper dies only if it starts its turn with 0 hit\
    \ points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 13\
    \ (3d8) psychic damage. If the target is a humanoid that drops to 0 hit points\
    \ as a result of this damage, it dies and is implanted with a yellow musk creeper\
    \ bulb. Unless the bulb is destroyed, the corpse animates as a yellow musk zombie\
    \ after being dead for 24 hours. The bulb is destroyed if the creature is raised\
    \ from the dead before it can transform into a yellow musk zombie, or if the corpse\
    \ is targeted by a [remove curse](/3-Mechanics/CLI/spells/remove-curse.md) spell\
    \ or similar magic before it animates."
  "name": "Touch"
- "desc": "The creeper's flowers release a strong musk that targets all humanoids\
    \ within 30 feet of it. Each target must succeed on a DC 11 Wisdom saving throw\
    \ or be [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) by the creeper\
    \ for 1 minute. A creature [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed)\
    \ in this way does nothing on its turn except move as close as it can to the creeper.\
    \ A creature [charmed](/3-Mechanics/CLI/rules/conditions.md#charmed) by the creeper\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Yellow Musk (3/Day)"
"source":
- "ToA"
"image": "/3-Mechanics/CLI/bestiary/plant/token/yellow-musk-creeper-toa.webp"
```
^statblock