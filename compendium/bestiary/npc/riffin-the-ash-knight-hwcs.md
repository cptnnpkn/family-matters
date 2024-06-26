---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/strig
statblock: inline
aliases: ["Riffin, the Ash-Knight"]
---
# [Riffin, the Ash-Knight](3-Mechanics\CLI\bestiary\npc/riffin-the-ash-knight-hwcs.md)
*Source: Humblewood Campaign Setting p. 204*  

Riffin is a small stout strig, standing a few inches over three feet, whose plumage and proportions resemble a little owl. A traveling knight of the realm, Riffin lived in Ashbarrow before its destruction, and was carried to Alderheart by his friend Odwald, who saved him from the fire. Being one of the only knights to hail from Ashbarrow, folk began calling him the "Ash-Knight," a title which he now uses to keep the memory of his home alive. Riffin is a simple strig with a charming way of viewing the world. He is also a steadfast warrior who strongly believes in doing what is right, helping those in need, and honoring his debts. Riffin uses the [strig knight](/3-Mechanics/CLI/bestiary/humanoid/strig-knight-hwcs.md) stat block. His alignment is lawful good.

```statblock
"name": "Riffin, the Ash-Knight (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "strig"
"alignment": "Lawful Good"
"ac": !!int "18"
"ac_class": "[half plate armor](/3-Mechanics/CLI/items/half-plate-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "16"
- !!int "10"
- !!int "16"
- !!int "8"
- !!int "13"
- !!int "12"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "5"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Birdfolk, can also understand Auran but can't speak it"
"cr": "3"
"traits":
- "desc": "When falling at least 10 feet, Riffin can spend a reaction to fly up to\
    \ his speed in one direction as he descends. He lands in an unoccupied space at\
    \ the end of his movement, and takes no falling damage. He cannot glide while\
    \ carrying heavy objects, heavy weapons, or shields (though he can drop any held\
    \ items as part of his reaction)."
  "name": "Glide"
- "desc": "Riffin rolls advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface his talons could reasonably grip."
  "name": "Talons"
- "desc": "When Riffin hits with an attack, he can choose to maneuver the enemy out\
    \ of position, granting an ally within 5 feet of the target the opportunity to\
    \ use their reaction to move away from this enemy at half their movement speed\
    \ without provoking an [attack of opportunity](/3-Mechanics/CLI/rules/actions.md#opportunity%20attack)."
  "name": "Maneuver (2/Day)"
"actions":
- "desc": "Riffin makes two short sword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Short Sword"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage. The knight can choose to grapple a target hit by this\
    \ attack as a bonus action."
  "name": "Talons"
- "desc": "Riffin casts the [gust of wind](/3-Mechanics/CLI/spells/gust-of-wind.md)\
    \ spell (save DC 15)."
  "name": "Wing Crest Shield (1/Day)"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/riffin-the-ash-knight-hwcs.webp"
```
^statblock