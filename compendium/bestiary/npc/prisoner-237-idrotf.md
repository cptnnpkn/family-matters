---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/idrotf
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Prisoner 237"]
---
# [Prisoner 237](3-Mechanics\CLI\bestiary\npc/prisoner-237-idrotf.md)
*Source: Icewind Dale: Rime of the Frostmaiden p. 160*  

Vaelish Gant, Prisoner 237 within the walls of Revel's End, is a member of the Arcane Brotherhood who first engaged in criminal activity by insinuating himself into the trade network of Ten-Towns. He hoped that his work would help the Arcane Brotherhood gain control of the region. A few years ago, shortly after his arrival in Ten-Towns, Gant established a protection racket in Bryn Shander and tried to turn the town against its speaker, Duvessa Shane, with the goal of supplanting her. He also tried to destabilize the economy of Ten-Towns. A party of adventurers thwarted his criminal ventures by capturing him.

Rather than put Gant to death for his crimes in Icewind Dale, the Council of Speakers in Ten-Towns made a deal with representatives of the Lords' Alliance to have Gant serve a life sentence in Revel's End, so as not to incur the Arcane Brotherhood's wrath. The Council of Speakers did this not realizing that Gant's scheme wasn't sanctioned by the Arcane Brotherhood but rather hatched by Gant himself, who intended to impress his superiors by pulling it off.

For a long time, Gant held out hope that the Arcane Brotherhood would apply pressure to secure his release, and that the Lords' Alliance would acquiesce to the brotherhood's demands rather than risk an all-out attack on Revel's End. But by now, Gant has been incarcerated long enough to reasonably conclude that no such rescue is forthcoming. His failed scheme was an embarrassment to the Arcane Brotherhood, which has clearly forsaken him.

Vaelish Gant is a mage who specializes in the arcane tradition of abjuration. Pompous and conniving, he never doubts that he's the smartest person in the room, and he makes sure everyone around him knows how he feels.

Gant has neither a spellbook nor material components for spellcasting, and he can't avail himself of his magic while locked in his cell due to the [antimagic field](/3-Mechanics/CLI/spells/antimagic-field.md) that encompasses it.

```statblock
"name": "Prisoner 237 (IDRotF)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "11"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "9"
- !!int "13"
- !!int "14"
- !!int "17"
- !!int "10"
- !!int "15"
"speed": "30 ft. (10 ft. while shackled)"
"skillsaves":
  "Deception": !!int "4"
  "Arcana": !!int "5"
  "Persuasion": !!int "4"
"senses": "passive Perception 10"
"languages": "Common, Draconic, Infernal, Orc"
"cr": "1"
"traits":
- "desc": "Prisoner 237 is a 5th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 13; +5 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [light](/3-Mechanics/CLI/spells/light.md),\
    \ [message](/3-Mechanics/CLI/spells/message.md), [prestidigitation](/3-Mechanics/CLI/spells/prestidigitation.md),\
    \ [shocking grasp](/3-Mechanics/CLI/spells/shocking-grasp.md) (see \"Actions\"\
    \ below)\n\n1st level (4 slots): [mage armor](/3-Mechanics/CLI/spells/mage-armor.md),\
    \ [shield](/3-Mechanics/CLI/spells/shield.md), [sleep](/3-Mechanics/CLI/spells/sleep.md)\n\
    \n2nd level (3 slots): [arcane lock](/3-Mechanics/CLI/spells/arcane-lock.md),\
    \ [detect thoughts](/3-Mechanics/CLI/spells/detect-thoughts.md), [suggestion](/3-Mechanics/CLI/spells/suggestion.md)\n\
    \n3rd level (2 slots): [counterspell](/3-Mechanics/CLI/spells/counterspell.md),\
    \ [lightning bolt](/3-Mechanics/CLI/spells/lightning-bolt.md)\n\nPrisoner 237\
    \ needs material components to cast these spells."
  "name": "Spellcasting"
"actions":
- "desc": "Melee Spell Attack: +5 to hit (with advantage on the attack if the\
    \ target is wearing armor made of metal), reach 5 ft., one creature. Hit: 9\
    \ (2d8) lightning damage, and the target can't take reactions until the start\
    \ of its next turn."
  "name": "Shocking Grasp (Cantrip)"
"source":
- "IDRotF"
"image": "/3-Mechanics/CLI/bestiary/npc/token/prisoner-237-idrotf.webp"
```
^statblock