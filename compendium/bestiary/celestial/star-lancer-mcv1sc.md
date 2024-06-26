---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mcv1sc
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
aliases: ["Star Lancer"]
---
# [Star Lancer](3-Mechanics\CLI\bestiary\celestial/star-lancer-mcv1sc.md)
*Source: Monstrous Compendium Volume 1: Spelljammer Creatures p. 12*  

Drifting in the Astral Sea are the petrified husks of dead gods, their colossal bodies riddled with natural tunnels and caverns. While exploring the innards of one of these dead gods, githyanki xenomancers found a vast cavern containing scores of winged creatures they had never encountered before. The cavern's denizens used telepathy to question the githyanki interlopers, who promptly suggested an alliance. The winged creatures quickly developed a fondness for the githyanki.

The githyanki refer to the winged creatures as star lancers ("vah'k'rel" in the Gith tongue) and came to realize star lancers are reincarnations of the dead god's most ardent worshipers. When a star lancer dies, its soul instantly returns to the Great Cavern that forms the hollow heart of the dead god. There, the soul becomes housed in the body of a new, fully grown star lancer that rises magically from the cavern floor. As long as the dead god and its Great Cavern remain intact, the number of star lancers in the multiverse is finite and never-changing.

A star lancer resembles a shark, albeit one that has four wings and a long tail. Its head bears a sharp protuberance that the creature uses to impale enemies.

Githyanki are fond of using star lancers as mounts, riding them across the Astral Sea in small flocks. A star lancer has the innate ability to turn itself and its rider invisible, making it ideal for stealth missions and ambushes.

```statblock
"name": "Star Lancer (MCV1SC)"
"size": "Large"
"type": "celestial"
"alignment": "typically  Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "18"
- !!int "15"
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "8"
"speed": "0 ft., fly 50 ft."
"saves":
  "Dexterity": !!int "4"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "radiant"
"senses": "passive Perception 13"
"languages": "Celestial, telepathy 120 ft."
"cr": "2"
"traits":
- "desc": "The star lancer doesn't provoke opportunity attacks when it flies out of\
    \ an enemy's reach."
  "name": "Flyby"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage. If the star lancer moved at least 20 feet straight toward\
    \ the target immediately before the hit, the target takes an extra 10 (3d6)\
    \ piercing damage."
  "name": "Horn"
- "desc": "The star lancer and one creature riding it (chosen by the star lancer)\
    \ magically turn [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible).\
    \ This effect lasts until the star lancer or a creature riding it attacks or casts\
    \ a spell, or until the star lancer's [concentration](/3-Mechanics/CLI/rules/conditions.md#concentration)\
    \ ends (as if concentrating on a spell). Any equipment worn or carried by the\
    \ [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible) creatures is also\
    \ [invisible](/3-Mechanics/CLI/rules/conditions.md#invisible) for the duration\
    \ of the Invisibility Cloak."
  "name": "Invisibility Cloak (3/Day)"
"source":
- "MCV1SC"
"image": "/3-Mechanics/CLI/bestiary/celestial/token/star-lancer-mcv1sc.webp"
```
^statblock